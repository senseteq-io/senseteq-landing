import { useEffect, useState } from 'react'

import { useCalculator } from '../../../contexts/Calculator'
import { useTranslation } from 'next-i18next'

/**
 * It's a React hook that returns an array of strings that are the features of the calculator
 * @returns It's returning the `features` variable.
 */
const useFeatures = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns the data from the calculator. */
  const { calculatorData } = useCalculator()

  /* It's a React hook that allows us to use state in a functional component. */
  const [features, setFeatures] = useState([])

  useEffect(() => {
    /* It's getting the keys of the object. */
    const keys = Object.keys(calculatorData)

    /* It's filtering the keys of the object and then it's mapping the keys to the translated string. */
    const featuresArr = keys
      .filter(
        (key) =>
          calculatorData[key] &&
          key !== 'currentRoute' &&
          calculatorData[key] !== 'NO'
      )
      .map((key) =>
        t(
          `calculator.result.options.${key}.${calculatorData[
            key
          ]?.toLowerCase()}`
        )
      )

    /* It's setting the state of the `features` variable. */
    setFeatures(featuresArr)
  }, [t, calculatorData])

  return features
}

export default useFeatures
