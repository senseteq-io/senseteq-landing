import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * It returns an array of objects that contain the label, src, and value for each platform option
 * @returns An array of objects.
 */
const useExternalServiceOptions = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation();

  /* A hook that allows us to use the `t` function to translate strings. */
  const options = useMemo(() => {
    return [
      {
        label: t('calculator.external_service.options.yes'),
        src: '/assets/external_services.svg',
        value: 'YES'
      },
      {
        label: t('calculator.external_service.options.no'),
        src: '/assets/no.svg',
        value: 'NO'
      },
      {
        label: t('calculator.external_service.options.not_sure'),
        src: '/assets/not_sure.svg',
        value: 'NOT_SURE'
      }
    ]
  }, [t])

  return options
}

export default useExternalServiceOptions