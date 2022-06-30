import { useActions, useWelcomeText } from '../../hooks'

import { Welcome } from '../../../../components'
import { useParams } from '../../../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * We're using the `useWelcomeText` hook to get the welcome text for the industry, destructuring the
 * `text` object, destructuring the `onGetStarted` function from the `useActions` hook, and returning a
 * `Welcome` component with the destructured values
 * @returns A component that displays a welcome message.
 */
export default function PlatformWelcome({ platforms }) {
  /* It's destructuring the `geo` and `g` values from the `useParams` hook. */
  const { geo, g } = useParams()

  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* Using the `useWelcomeText` hook to get the welcome text for the industry. */
  const text = useWelcomeText({ platforms })

  /* Destructuring the `text` object. */
  const { title, descriptionLine1, descriptionLine2, buttonText } = text

  /* Destructuring the `onGetStarted` function from the `useActions` hook. */
  const { onGetStarted } = useActions()

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
