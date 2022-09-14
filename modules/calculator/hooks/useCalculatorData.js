import { useEffect, useState } from 'react'

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
    platforms: null,
    analogues: null,
    industries: null,
    administration: null,
    localization: null,
    authentication: null,
    external_service: null,
    appearance: null,
    brand: null,
    revenue: null,
    currentRoute: null,
    paymentOption: null,
    userEmail: null,
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
      platforms: null,
      analogues: null,
      industries: null,
      administration: null,
      localization: null,
      authentication: null,
      external_service: null,
      appearance: null,
      brand: null,
      revenue: null,
      currentRoute: null,
      userEmail: null,
      ...initialData
    })
  }

  useEffect(() => {
    setCalculatorData((prev) => ({ ...prev, ...initialData }))
  }, [initialData])

  // FIXME
  useEffect(() => {
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
