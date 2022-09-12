import { useEffect, useState } from 'react'

const usePath = (routes, updateCalculatorFields) => {
  const [state, setState] = useState({})

  useEffect(() => {
    /* Checking if the baseRoute and baseRouteValue exist. If they do, it will set the state to the
    baseRouteValue. */
    if (routes?.baseRoute && routes?.baseRouteValue) {
      setState((prev) => ({
        ...prev,
        [routes.baseRoute]: routes.baseRouteValue.toUpperCase()
      }))
    }

    /* Checking if the nestedRoute and nestedRouteValue exist. If they do, it will set the state to the
    nestedRouteValue. */
    if (routes?.nestedRoute && routes?.nestedRouteValue) {
      setState((prev) => ({
        ...prev,
        [routes.nestedRoute]: routes.nestedRouteValue.toUpperCase()
      }))
    }
  }, [
    updateCalculatorFields,
    routes?.baseRoute,
    routes?.baseRouteValue,
    routes?.nestedRoute,
    routes?.nestedRouteValue
  ])

  return state
}

export default usePath
