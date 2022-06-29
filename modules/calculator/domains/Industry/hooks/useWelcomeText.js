import { useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

/**
 * It's a hook that allows us to use the `t` function to translate our text
 * @returns The data object.
 */
const useWelcomeText = ({ industries }) => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const { t } = useTranslation()

  /* Setting the initial state of the data object. */
  const [data, setData] = useState({
    title: t('calculator.industries.welcome.title'),
    descriptionLine1: t('calculator.industries.welcome.descriptionLine1'),
    descriptionLine2: t('calculator.industries.welcome.descriptionLine2'),
    buttonText: t('calculator.industries.welcome.buttonText')
  })

  /* Checking if the industries prop is defined and if it is, it is setting the data object to the
 correct translation. */
  useEffect(() => {
    if (industries) {
      setData({
        title: t(`calculator.industries.welcome.options.${industries}.title`),
        descriptionLine1: t(
          `calculator.industries.welcome.options.${industries}.descriptionLine1`
        ),
        descriptionLine2: t(
          `calculator.industries.welcome.options.${industries}.descriptionLine2`
        ),
        buttonText: t(
          `calculator.industries.welcome.options.${industries}.buttonText`
        )
      })
    }
  }, [t, industries])

  return data
}

export default useWelcomeText
