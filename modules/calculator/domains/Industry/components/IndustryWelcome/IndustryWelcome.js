import { useActions, useWelcomeText } from '../../hooks'

import { Welcome } from '../../../../components'
import { useParams } from '../../../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It returns the `Welcome` component with the props that are passed to it
 * @returns The `Welcome` component with the props that are passed to it.
 */
export default function IndustryWelcome({ industries }) {
  /* It's destructuring the `geo` and `g` values from the `useParams` hook. */
  const { geo, g } = useParams()

  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* Using the `useWelcomeText` hook to get the welcome text for the industry. */
  const text = useWelcomeText({ industries })

  /* Destructuring the `text` object. */
  const { title, descriptionLine1, descriptionLine2, buttonText } = text

  /* Destructuring the `onGetStarted` function from the `useActions` hook. */
  const { onGetStarted } = useActions()

  /* Returning the `Welcome` component with the props that are passed to it. */
  return (
    <Welcome
      title={<span dangerouslySetInnerHTML={{ __html: title }} />}
      descriptionLine1={descriptionLine1}
      descriptionLine2={descriptionLine2}
      buttonText={buttonText}
      geo={geo ? t(`calculator.welcome.geo.${geo}`) : null}
      g={g === 'f' ? t('calculator.welcome.fff') : null}
      onClick={onGetStarted}
    />
  )
}
