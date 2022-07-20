import { useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

const T_PREFIX = 'calculator.paths'

/**
 * It's a hook that returns a string with the current route
 * @param routes - It's an object that contains the routes that we want to translate.
 * @returns It's returning the `path` state variable.
 */
const useBuildPath = (routes) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* Creating a state variable called `path` and a function called `setPath` that allows us to change
  the value of `path`. */
  const [path, setPath] = useState('')

  /* It's destructuring the `routes` object. */
  const {
    baseRoute,
    baseRouteValue,
    nestedRoute,
    nestedRouteValue,
    extraStepRoute
  } = routes

  /* It's a hook that allows us to use the `t` function to translate strings. */
  useEffect(() => {
    let path = `/s/${t(`${T_PREFIX}.mvp_calculator`)}`

    if (baseRoute) {
      path += `/s/${t(`${T_PREFIX}.${baseRoute}`)}`
    }
    if (baseRouteValue) {
      path += `/s/${t(`${T_PREFIX}.${baseRouteValue}`)}`
    }
    if (nestedRoute) {
      path += `/s/${t(`${T_PREFIX}.${nestedRoute}`)}`
    }
    if (nestedRouteValue) {
      path += `/s/${t(`${T_PREFIX}.${nestedRouteValue}`)}`
    }
    if (extraStepRoute) {
      path += `/s/${t(`${T_PREFIX}.${extraStepRoute}`)}`
    }

    setPath(path)
  }, [
    baseRoute,
    baseRouteValue,
    nestedRoute,
    nestedRouteValue,
    extraStepRoute,
    t
  ])

  return path
}

export default useBuildPath
