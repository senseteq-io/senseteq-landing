import { ANALOGUES } from '../../../__constants__'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * It returns an array of objects that contain the label and value of each analogue option
 * @returns An array of objects.
 */
const useAnalogueOptions = () => {
  /* A hook that allows us to use the `t` function to translate our strings. */
  const { t } = useTranslation();

  /* A hook that allows us to use the `t` function to translate our strings. */
  const options = useMemo(() => {
    return [
      {
        label: t('calculator.analogues.options.uber'),
        value: ANALOGUES.UBER
      },
      {
        label: t('calculator.analogues.options.uber_eats'),
        value: ANALOGUES.UBER_EATS
      },
      {
        label: t('calculator.analogues.options.airbnb'),
        value: ANALOGUES.AIRBNB
      },
      {
        label: t('calculator.analogues.options.tinder'),
        value: ANALOGUES.TINDER
      },
      {
        label: t('calculator.analogues.options.linkedin'),
        value: ANALOGUES.LINKEDIN
      },
      {
        label: t('calculator.analogues.options.facebook'),
        value: ANALOGUES.FACEBOOK
      },
      {
        label: t('calculator.analogues.options.instagram'),
        value: ANALOGUES.INSTAGRAM
      },
      {
        label: t('calculator.analogues.options.tiktok'),
        value: ANALOGUES.TIKTOK
      },
      {
        label: t('calculator.analogues.options.kickstarter'),
        value: ANALOGUES.KICKSTARTER
      },
      {
        label: t('calculator.analogues.options.amazon'),
        value: ANALOGUES.AMAZON
      },
      {
        label: t('calculator.analogues.options.whatsapp'),
        value: ANALOGUES.WHATSAPP
      },
      {
        label: t('calculator.analogues.options.youtube'),
        value: ANALOGUES.YOUTUBE
      },
      {
        label: t('calculator.analogues.options.netflix'),
        value: ANALOGUES.NETFLIX
      },
      {
        label: t('calculator.analogues.options.spotify'),
        value: ANALOGUES.SPOTIFY
      },
      {
        label: t('calculator.analogues.options.medium'),
        value: ANALOGUES.MEDIUM
      },
      {
        label: t('calculator.analogues.options.another'),
        value: ANALOGUES.ANOTHER
      }
    ]
  }, [t])

  return options
}

export default useAnalogueOptions