import { useEffect, useRef } from 'react'
import moment from 'moment'
import { useCallback } from 'react'
import { CALCULATOR_FIELDS, STATISTIC_COLLECTIONS } from '../__constants__'
import { createDocument, getDocId, updateDocument } from '../services/firestore'
import ls from '../utils/ls'
import useIncreaseStatisticCounter from './useIncreaseStatisticCounter'

const getDifference = (obj1, obj2) => {
  const differentKeys = Object.keys(obj1).filter(
    (key) => obj1?.[key] !== obj2?.[key]
  )
  return Object.fromEntries(differentKeys.map((key) => [key, obj1[key]]))
}

/**
 * This function runs calculatorData state change and write statistic into RTDB and firestore.
 */
const useWriteSelectedOption = (calculatorData) => {
  // [COMPONENT_STATE_HOOKS]
  // this ref need to save previous calculator data to compare with current
  const cashedCalculatorData = useRef(null)
  const incrementTotalNumberOfStarting = useIncreaseStatisticCounter()
  const incrementOption = useIncreaseStatisticCounter()

  // [HELPER_FUNCTIONS]
  const writeStatisticData = useCallback(() => {
    const isWelcomeScreenPassed = ls.get('welcome')

    const preparedCalculatorData = {
      ...calculatorData,
      isWelcomeScreenPassed
    }
    if (isWelcomeScreenPassed && !cashedCalculatorData?.enteredEmail) {
      preparedCalculatorData.enteredEmail = calculatorData?.userEmail
        ? 'YES'
        : 'NO'
    }

    // Filter calculator data to use only valid calculator fields
    const filteredCalculatorDataEntries = Object.entries(
      preparedCalculatorData
    ).filter(
      ([key, value]) =>
        [
          'isWelcomeScreenPassed',
          'enteredEmail',
          ...CALCULATOR_FIELDS
        ].includes(key) && value
    )

    /* Get difference between previous and current calculator data
     * to write only changed fields into statistic. */
    const difference = getDifference(
      Object.fromEntries(filteredCalculatorDataEntries),
      cashedCalculatorData.current
    )
    const today = moment().utc().startOf('day').valueOf()

    if (Object.keys(difference)?.length > 0 && isWelcomeScreenPassed) {
      // get current statistic document id from localstorage.
      let statisticDocumentId = ls.get('statisticId')
      // if statistic document id is not exist, that mean this is first attempt.
      if (!statisticDocumentId) {
        statisticDocumentId = getDocId(STATISTIC_COLLECTIONS.SELECTION_SEQUENCE)

        ls.save('statisticId', statisticDocumentId)

        // write sequence statistic into firestore.
        createDocument({
          collection: STATISTIC_COLLECTIONS.SELECTION_SEQUENCE,
          id: statisticDocumentId,
          data: difference
        }).catch((error) => {
          console.error(
            'error in useWriteSelectedOption while setting sequence:',
            error
          )
        })

        // write total calculator passes statistic into RTDB.
        incrementTotalNumberOfStarting({
          field: 'totalNumberOfStarting',
          functionName: 'useWriteSelectedOption'
        })
      } else {
        // update sequence statistic document.
        updateDocument({
          collection: STATISTIC_COLLECTIONS.SELECTION_SEQUENCE,
          id: statisticDocumentId,
          data: difference
        }).catch((error) =>
          console.error(
            'error in useWriteSelectedOption while updating sequence:',
            error
          )
        )
      }
      // Increment total number of option selects for current day in RTDB.
      Object.entries(difference)
        .filter(([option]) => option !== 'isWelcomeScreenPassed')
        .forEach(([option, field]) => {
          const counterPath = `${STATISTIC_COLLECTIONS.OPTION_SELECT_COUNT}/${today}/${option}/${field}`

          incrementOption({
            path: counterPath,
            field,
            functionName: 'useWriteSelectedOption'
          })
        })

      cashedCalculatorData.current = preparedCalculatorData
    }
    if (!isWelcomeScreenPassed) {
      cashedCalculatorData.current = null
    }
  }, [calculatorData, incrementTotalNumberOfStarting, incrementOption])

  // This useEffect triggered on calculatorData state change
  useEffect(() => {
    writeStatisticData()
  }, [writeStatisticData])
}

export default useWriteSelectedOption
