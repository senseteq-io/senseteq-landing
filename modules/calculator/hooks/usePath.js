import { useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

const usePath = (routes, updateCalculatorFields) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  const [state, setState] = useState({})

   useEffect(() => {
    if (routes?.baseRoute && routes?.baseRouteValue) {
      setState((prev) => ({
        ...prev,
        [routes.baseRoute]: routes.baseRouteValue.toUpperCase()
      }))
    }

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