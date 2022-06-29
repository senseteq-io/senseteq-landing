import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * It returns an array of objects that contain the label, src, and value for each platform option
 * @returns An array of objects.
 */
const useRevenueOptions = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation();

  /* A hook that allows us to use the `t` function to translate strings. */
  const options = useMemo(() => {
    return [
      {
        label: t('calculator.revenue.options.subscription'),
        value: 'SUBSCRIPTION'
      },
      {
        label: t('calculator.revenue.options.in_app'),
        value: 'IN_APP'
      },
      {
        label: t('calculator.revenue.options.another'),
        value: 'ANOTHER'
      },
      {
        label: t('calculator.revenue.options.not_sure'),
        value: 'NOT_SURE'
      }
    ]
  }, [t])

  return options
}

export default useRevenueOptions