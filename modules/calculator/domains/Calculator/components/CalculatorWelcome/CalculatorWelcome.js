import { Welcome } from '../../../../components'
import ls from '../../../../utils/ls'
import { useActions } from '../../hooks'
import { useEffect } from 'react'
import { useParams } from '../../../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * We're using the `useWelcomeText` hook to get the welcome text for the industry, destructuring the
 * `text` object, destructuring the `onGetStarted` function from the `useActions` hook, and returning a
 * `Welcome` component with the destructured values
 * @returns A component that displays a welcome message.
 */
export default function CalculatorWelcome() {
  /* It's destructuring the `geo` and `g` values from the `useParams` hook. */
  const { geo, g } = useParams()

  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* Destructuring the `onGetStarted` function from the `useActions` hook. */
  const { onGetStarted } = useActions()

  useEffect(() => {
    ls.clear()
  }, [])

  return (
    <Welcome
      title={
        <span
          dangerouslySetInnerHTML={{ __html: t('calculator.welcome.title') }}
        />
      }
      descriptionLine1={t('calculator.welcome.descriptionLine1')}
      descriptionLine2={t('calculator.welcome.descriptionLine2')}
      buttonText={t('calculator.welcome.buttonText')}
      geo={geo ? t(`calculator.welcome.geo.${geo}`) : null}
      g={g === 'f' ? t('calculator.welcome.fff') : null}
      onClick={onGetStarted}
    />
  )
}
