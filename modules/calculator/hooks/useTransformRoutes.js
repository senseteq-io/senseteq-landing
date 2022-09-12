import { useEffect, useMemo, useState } from 'react'

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
  const [loading, setLoading] = useState(true)

  /* It's a hook that allows us to use the `router` object. */
  const router = useRouter()

  useEffect(() => {
    /* It's checking if the current route is a calculator route. If it is, it's cleaning the route
    and splitting it into an array. Then, it's setting the state object with the values of the
    array. */
    const calculatorPrefix = `/s/${t('calculator.paths.mvp_calculator')}`
    if (router.asPath.includes(calculatorPrefix)) {
      /* It's removing the `calculatorPrefix` from the `router.asPath` string. */
      let cleanPath = router.asPath.replace(calculatorPrefix, '')

      cleanPath = cleanPath[0] === '/' ? cleanPath.substring(1) : cleanPath

      /* It's splitting the `cleanPath` string into an array. */
      const cleanPathArr = cleanPath.split('/')
      const isNotStartingWithQueryParam = cleanPathArr[0][0] !== '?'
      setState({
        baseRoute:
          cleanPathArr[0] && isNotStartingWithQueryParam
            ? t(`calculator.paths.mirror.${cleanPathArr[0].split('?')[0]}`)
            : null,
        baseRouteValue: cleanPathArr[1]
          ? t(`calculator.paths.mirror.${cleanPathArr[1].split('?')[0]}`)
          : null,
        nestedRoute: cleanPathArr[2]
          ? t(`calculator.paths.mirror.${cleanPathArr[2]}`)
          : null,
        nestedRouteValue: cleanPathArr[3]
          ? t(`calculator.paths.mirror.${cleanPathArr[3].split('?')[0]}`)
          : null,
        extraStepRoute: cleanPathArr[4]
          ? t(`calculator.paths.mirror.${cleanPathArr[4]}`)
          : null
      })
      setLoading(false)
    }
  }, [router.asPath])

  return useMemo(() => [state, loading], [state, loading])
}

export default useTransformRoutes
