import Router from 'next/router'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'

const useRedirectCondition = ({
  id,
  baseRoute,
  platforms,
  analogues,
  industries
}) => {
  /* A hook that allows us to use the `t` function to translate our routes. */
  const { t } = useTranslation()

  useEffect(() => {
    const deepRoutesArr = [
      'administration',
      'localization',
      'authentication',
      'external_services',
      'appearance',
      'brand',
      'revenue',
      'result'
    ]
    const isDeepPage = deepRoutesArr.includes(baseRoute)

    if (!id && isDeepPage && (!platforms || !analogues || !industries)) {
      Router.push(`/s/${t('calculator.paths.mvp_calculator')}`)
    }
  }, [t, id, baseRoute, platforms, analogues, industries])
}

export default useRedirectCondition
