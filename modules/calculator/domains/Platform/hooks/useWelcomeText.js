import { useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

/**
 * It returns a data object that contains the translated text for the welcome screen
 * @returns The data object is being returned.
 */
const useWelcomeText = ({ platforms }) => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const { t } = useTranslation()

  /* Setting the initial state of the data object. */
  const [data, setData] = useState({
    title: t('calculator.platforms.welcome.title'),
    descriptionLine1: t('calculator.platforms.welcome.descriptionLine1'),
    descriptionLine2: t('calculator.platforms.welcome.descriptionLine2'),
    buttonText: t('calculator.platforms.welcome.buttonText')
  })

  /* A hook that is called when the component is mounted and when the `platforms` value changes. */
  useEffect(() => {
    if (platforms) {
      setData({
        title: t(`calculator.platforms.welcome.options.${platforms}.title`),
        descriptionLine1: t(
          `calculator.platforms.welcome.options.${platforms}.descriptionLine1`
        ),
        descriptionLine2: t(
          `calculator.platforms.welcome.options.${platforms}.descriptionLine2`
        ),
        buttonText: t(
          `calculator.platforms.welcome.options.${platforms}.buttonText`
        )
      })
    }
  }, [t, platforms])

  return data
}

export default useWelcomeText
