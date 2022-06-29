import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/* It's a hook that allows us to use the `t` function to translate our routes. It's creating a
state object with the keys `baseRoute`, `baseRouteValue`, `nestedRoute`, `nestedRouteValue`,
and `extraStepRoute`. It's a hook that allows us to use the `router` object. It's checking if
the current route is a calculator route. If it is, it's cleaning the route and splitting it
into an array. Then, it's setting the state object with the values of the array. It's removing
the `calculatorPrefix` from the `router.asPath` string. It's splitting the `cleanPath` string
into an array. */
const useTransformRoutes = () => {
  /* A hook that allows us to use the `t` function to translate our routes. */
  const { t } = useTranslation()

  /* It's creating a state object with the keys `baseRoute`, `baseRouteValue`, `nestedRoute`,
  `nestedRouteValue`, and `extraStepRoute`. */
  const [state, setState] = useState({
    baseRoute: '',
    baseRouteValue: '',
    nestedRoute: '',
    nestedRouteValue: '',
    extraStepRoute: ''
  })

  /* It's a hook that allows us to use the `router` object. */
  const router = useRouter()

  useEffect(() => {
    /* It's checking if the current route is a calculator route. If it is, it's cleaning the route
    and splitting it into an array. Then, it's setting the state object with the values of the
    array. */
    const calculatorPrefix = `/${t('calculator.paths.mvp_calculator')}/`

    if (router.asPath.includes(calculatorPrefix)) {
      /* It's removing the `calculatorPrefix` from the `router.asPath` string. */
      const cleanPath = router.asPath.replace(calculatorPrefix, '')

      /* It's splitting the `cleanPath` string into an array. */
      const cleanPathArr = cleanPath.split('/')

      setState({
        baseRoute: cleanPathArr[0]
          ? t(`calculator.paths.mirror.${cleanPathArr[0]}`)
          : null,
        baseRouteValue: cleanPathArr[1]
          ? t(`calculator.paths.mirror.${cleanPathArr[1]}`)
          : null,
        nestedRoute: cleanPathArr[2]
          ? t(`calculator.paths.mirror.${cleanPathArr[2]}`)
          : null,
        nestedRouteValue: cleanPathArr[3]
          ? t(`calculator.paths.mirror.${cleanPathArr[3]}`)
          : null,
        extraStepRoute: cleanPathArr[4]
          ? t(`calculator.paths.mirror.${cleanPathArr[4]}`)
          : null
      })
    }
  }, [router, t])

  return state
}

export default useTransformRoutes
