import { useMemo } from 'react'
import usePageOrder from './usePageOrder'
import useProgress from './useProgress'
import { useTranslation } from 'next-i18next'

const useNavigator = (calculatorData) => {
  const { t } = useTranslation()
  const pageOrder = usePageOrder(calculatorData)
  const progress = useProgress(calculatorData)

  const paths = useMemo(
    () => ({
      welcome: `/s/${t('calculator.paths.mvp_calculator')}`,
      analogues: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.analogues'
      )}`,
      industries: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.industries'
      )}`,
      platforms: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.platforms'
      )}`,
      administration: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.administration'
      )}`,
      localization: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.localization'
      )}`,
      authentication: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.authentication'
      )}`,
      external_services: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.external_services'
      )}`,
      appearance: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.appearance'
      )}`,
      brand: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.brand'
      )}`,
      revenue: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.revenue'
      )}`,
      result: `/s/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.result'
      )}`
    }),
    [t]
  )

  const prev = useMemo(() => {
    return pageOrder[pageOrder.indexOf(calculatorData?.currentRoute) - 1]
  }, [calculatorData?.currentRoute, pageOrder])

  const next = useMemo(() => {
    return pageOrder[pageOrder.indexOf(calculatorData?.currentRoute) + 1]
  }, [calculatorData?.currentRoute, pageOrder])

  return [paths[prev], paths[next], progress]
}

export default useNavigator
