import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * It returns an array of objects that contain the label, src, and value for each platform option
 * @returns An array of objects.
 */
const useAppearanceOptions = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation();

  /* A hook that allows us to use the `t` function to translate strings. */
  const options = useMemo(() => {
    return [
      {
        label: t('calculator.appearance.options.basic'),
        src: '/assets/appearance_basic.svg',
        value: 'BASIC'
      },
      {
        label: t('calculator.appearance.options.fantastic'),
        src: '/assets/appearance_fantastic.svg',
        value: 'FANTASTIC'
      }
    ]
  }, [t])

  return options
}

export default useAppearanceOptions