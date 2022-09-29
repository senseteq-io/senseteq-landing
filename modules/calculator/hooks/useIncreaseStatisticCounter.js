import moment from 'moment'
import { useCallback } from 'react'
import { STATISTIC_COLLECTIONS } from '../__constants__'
import increaseCounter from '../services/database/increaseCounter'

const useIncreaseStatisticCounter = () =>
  useCallback(({ field, functionName, path }) => {
    const today = moment().utc().startOf('day').valueOf()

    increaseCounter({
      path:
        path || `${STATISTIC_COLLECTIONS.OPTION_SELECT_COUNT}/${today}/${field}`
    })?.catch((error) =>
      console.error(
        `error in ${functionName} while ${field} incrementing transaction:`,
        error
      )
    )
  }, [])

export default useIncreaseStatisticCounter
