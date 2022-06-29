import { useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

/**
 * It returns a data object with the title, descriptionLine1, descriptionLine2 and buttonText
 * properties
 * @returns The data object is being returned.
 */
const useWelcomeText = ({ analogues }) => {
  const { t } = useTranslation()

  /* Setting the initial state of the data object. */
  const [data, setData] = useState({
    title: t('calculator.analogues.welcome.title'),
    descriptionLine1: t('calculator.analogues.welcome.descriptionLine1'),
    descriptionLine2: t('calculator.analogues.welcome.descriptionLine2'),
    buttonText: t('calculator.analogues.welcome.buttonText')
  })

  /* A hook that is being called when the component is mounted and when the analogues prop is changed. */
  useEffect(() => {
    if (analogues) {
      setData({
        title: t(`calculator.analogues.welcome.options.${analogues}.title`),
        descriptionLine1: t(
          `calculator.analogues.welcome.options.${analogues}.descriptionLine1`
        ),
        descriptionLine2: t(
          `calculator.analogues.welcome.options.${analogues}.descriptionLine2`
        ),
        buttonText: t(
          `calculator.analogues.welcome.options.${analogues}.buttonText`
        )
      })
    }
  }, [t, analogues])

  return data
}

export default useWelcomeText
