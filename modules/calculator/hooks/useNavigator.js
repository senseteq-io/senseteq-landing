import { useMemo } from 'react'
import usePageOrder from './usePageOrder'
import useProgress from './useProgress'
import { useTranslation } from 'next-i18next'

const useNavigator = (calculatorData) => {
  const { t } = useTranslation()

  /* Returning an array of the pages in the order they should be displayed. */
  const pageOrder = usePageOrder(calculatorData)

  /* Calculating the progress of the user in the calculator. */
  const progress = useProgress(calculatorData)

  /* Creating an object with the paths to the pages of the calculator. */
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

  /* Returning the previous page in the pageOrder array. */
  const prev = useMemo(() => {
    const pageIndex = pageOrder.indexOf(calculatorData?.currentRoute)
    return pageOrder[(pageIndex > 0 ? pageIndex : 0) - 1]
  }, [calculatorData?.currentRoute, pageOrder])

  /* Returning the next page in the pageOrder array. */
  const next = useMemo(() => {
    const pageIndex = pageOrder.indexOf(calculatorData?.currentRoute)
    return pageOrder[(pageIndex > 0 ? pageIndex : 0) + 1]
  }, [calculatorData?.currentRoute, pageOrder])

  return [paths[prev], paths[next], progress]
}

export default useNavigator
