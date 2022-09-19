import { useCallback } from 'react'
import { CALCULATOR_FIELDS } from '../__constants__'
import { useCalculator } from '../contexts/Calculator'
import writeOptionSelectStatistic from '../helpers/writeOptionSelectStatistic'

/**
 * This function runs on alternatives calculator initial data cases to have correct statistic.
 *
 * @returns {(function(): void)|*}
 */
const useWriteInitialSelectedOption = () => {
  // [ADDITIONAL_HOOKS]
  const { calculatorData } = useCalculator()

  return useCallback(() => {
    Object.entries(calculatorData)
      .filter(([key, value]) => CALCULATOR_FIELDS.includes(key) && value)
      .forEach(([type, value]) => {
        writeOptionSelectStatistic({ type, value }).catch((error) => {
          console.error('error in useWriteInitialSelectedOption:', error)
        })
      })
  }, [calculatorData])
}

export default useWriteInitialSelectedOption
