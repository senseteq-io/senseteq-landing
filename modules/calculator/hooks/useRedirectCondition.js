import Router from 'next/router'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ls from '../utils/ls'

const useRedirectCondition = ({
  routerData,
  routesLoading,
  platforms,
  analogues,
  industries
}) => {
  /* A hook that allows us to use the `t` function to translate our routes. */
  const { t } = useTranslation()

  const router = useRouter()

  useEffect(() => {
    const deepRoutesArr = [
      'ai',
      'administration',
      'localization',
      'authentication',
      'external_services',
      'appearance',
      'brand',
      'revenue',
      'result'
    ]

    const isDeepPage = deepRoutesArr.includes(routerData?.baseRoute)
    const isWelcomeScreenPassed = ls.get('welcome')
    // When we don't id with results and when routes state loaded check other conditions.
    if (router?.isReady && !router?.query?.id && !routesLoading) {
      /* In case when current route is deep, and we don't have initial data - redirect to welcome.
       * In case when we have base route when welcome screen not passed and don't have base route value - redirect to welcome.
       */
      if (
        (isDeepPage && (!platforms || !analogues || !industries)) ||
        (routerData?.baseRoute &&
          !routerData?.baseRouteValue &&
          !isWelcomeScreenPassed)
      ) {
        Router.push(`/s/${t('calculator.paths.mvp_calculator')}`)
      }
    }
  }, [routesLoading, routerData?.baseRoute, platforms, analogues, industries])
}

export default useRedirectCondition
