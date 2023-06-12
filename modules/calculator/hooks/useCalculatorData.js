import { useEffect, useState, useLayoutEffect } from 'react'
import ls from '../utils/ls'

const initialState = {
  platforms: null,
  analogues: null,
  industries: null,
  administration: null,
  localization: null,
  ai: null,
  authentication: null,
  external_service: null,
  appearance: null,
  brand: null,
  revenue: null,
  currentRoute: null,
  paymentOption: null,
  userEmail: null
}
/**
 * It takes a routes object as an argument, and then returns an object that contains the calculatorData
 * state, and two functions that can be used to update the calculatorData state
 * @param routes - The routes object that is passed to the component.
 * @param initialData - The initial data that can be passed from url.
 * @returns An object with three properties: calculatorData, updateCalculatorField, and
 * updateCalculatorFields.
 */
const useCalculatorData = (routes, initialData) => {
  /* Setting the initial state of the data object. */
  const [calculatorData, setCalculatorData] = useState({
    ...initialState,
    ...initialData
  })

  /**
   * It takes a field and a value, and then updates the calculatorData object with the new value
   * @param field - The field to update.
   * @param value - The value of the field that was changed.
   */
  const updateCalculatorField = (field, value) => {
    setCalculatorData((prev) => ({ ...prev, [field]: value }))
  }

  /**
   * It takes an object as an argument, and then updates the calculatorData state with the object's
   * key/value pairs
   * @param obj - The object that contains the key/value pairs that you want to update.
   */
  const updateCalculatorFields = (obj) => {
    setCalculatorData((prev) => ({ ...prev, ...obj }))
  }

  const reset = () => {
    setCalculatorData({
      ...initialState,
      ...initialData
    })
  }

  useEffect(() => {
    setCalculatorData((prev) => ({ ...prev, ...initialData }))
  }, [initialData])

  /* useLayoutEffect is using here to clear LS before useWriteSelectedOption hook will be called and wrote statistic
   with previous data from LS. */
  useLayoutEffect(() => {
    if (!routes?.baseRoute) {
      ls.clear()
      reset()
    }
    updateCalculatorField('currentRoute', routes?.baseRoute)
  }, [routes?.baseRoute])

  return {
    calculatorData,
    updateCalculatorField,
    updateCalculatorFields,
    reset
  }
}

export default useCalculatorData
