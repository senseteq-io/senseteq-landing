import useWriteInitialSelectedOption from '../../../../hooks/useWriteInitialSelectedOption'
import { useActions, useWelcomeText } from '../../hooks'

import { Welcome } from '../../../../components'
import { useParams } from '../../../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * We're using the `useWelcomeText` hook to get the text for the welcome component, destructuring the
 * `text` object, destructuring the `onGetStarted` function from the `useActions` hook, and returning a
 * `Welcome` component with the text and `onGetStarted` function as props
 * @returns A Welcome component with the text and onClick function passed in as props.
 */

export default function AnalogueWelcome({ analogues }) {
  /* It's destructuring the `geo` and `g` values from the `useParams` hook. */
  const { geo, g, way } = useParams()

  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* Using the `useWelcomeText` hook to get the text for the welcome component. */
  const text = useWelcomeText({ analogues })

  /* Destructuring the `text` object. */
  const { title, descriptionLine1, descriptionLine2, buttonText } = text

  /* Destructuring the `onGetStarted` function from the `useActions` hook. */
  const { onGetStarted } = useActions()

  const writeInitialSelectedOption = useWriteInitialSelectedOption()

  const onGetStartedClick = () => {
    onGetStarted()
    writeInitialSelectedOption()
  }
  /* It's returning a `Welcome` component with the text and `onGetStarted` function passed in as props. */
  return (
    <Welcome
      isEmailShow={+way === 2}
      title={<span dangerouslySetInnerHTML={{ __html: title }} />}
      descriptionLine1={descriptionLine1}
      descriptionLine2={descriptionLine2}
      buttonText={buttonText}
      geo={geo ? t(`calculator.welcome.geo.${geo}`) : null}
      g={g === 'f' ? t('calculator.welcome.fff') : null}
      onClick={onGetStartedClick}
    />
  )
}
