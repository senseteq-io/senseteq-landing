import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

const PAGE_ORDER = [
  'welcome',
  'analogues',
  'industries',
  'platforms',
  'administration',
  'localization',
  'authentication',
  'external_services',
  'appearance',
  'brand',
  'revenue'
]

const useNavigator = (calculatorData) => {
  const { t } = useTranslation()

  const paths = useMemo(() => ({
    welcome: `/${t('calculator.paths.mvp_calculator')}`,
    analogues: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.analogues')}`,
    industries: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.industries')}`,
    platforms: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.platforms')}`,
    administration: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.administration')}`,
    localization: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.localization')}`,
    authentication: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.authentication')}`,
    external_services: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.external_services')}`,
    appearance: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.appearance')}`,
    brand: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.brand')}`,
    revenue: `/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.revenue')}`
  }), [t])

  const prev = useMemo(() => {
    return PAGE_ORDER[PAGE_ORDER.indexOf(calculatorData?.currentRoute) - 1]
  }, [calculatorData?.currentRoute])

  const next = useMemo(() => {
    return PAGE_ORDER[PAGE_ORDER.indexOf(calculatorData?.currentRoute) + 1]
  }, [calculatorData?.currentRoute])

  return [paths[prev], paths[next]]
}

export default useNavigator