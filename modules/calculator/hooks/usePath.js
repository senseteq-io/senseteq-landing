import { useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

const usePath = (routes, updateCalculatorFields) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

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
    t,
    updateCalculatorFields,
    routes?.baseRoute,
    routes?.baseRouteValue,
    routes?.nestedRoute,
    routes?.nestedRouteValue
  ])

  return state
}

export default usePath
