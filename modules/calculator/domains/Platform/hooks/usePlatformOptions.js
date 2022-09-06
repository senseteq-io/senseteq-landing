import { PLATFORMS } from '../../../__constants__'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * It returns an array of objects that contain the label, src, and value for each platform option
 * @returns An array of objects.
 */
const usePlatformOptions = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* A hook that allows us to use the `t` function to translate strings. */
  const options = useMemo(() => {
    return [
      {
        label: t('calculator.platforms.options.both'),
        src: '/assets/platform_web_mobile.svg',
        value: PLATFORMS.WEB_MOBILE
      },
      {
        label: t('calculator.platforms.options.web'),
        src: '/assets/platform_web.svg',
        value: PLATFORMS.WEB
      },
      {
        label: t('calculator.platforms.options.mobile'),
        src: '/assets/platform_mobile.svg',
        value: PLATFORMS.MOBILE
      }
    ]
  }, [t])

  return options
}

export default usePlatformOptions
