import { useActions, useWelcomeText } from '../../hooks'

import { Welcome } from '../../../../components'

/**
 * We're using the `useWelcomeText` hook to get the text for the welcome component, destructuring the
 * `text` object, destructuring the `onGetStarted` function from the `useActions` hook, and returning a
 * `Welcome` component with the text and `onGetStarted` function as props
 * @returns A Welcome component with the text and onClick function passed in as props.
 */

export default function AnalogueWelcome({ analogues }) {
  /* Using the `useWelcomeText` hook to get the text for the welcome component. */
  const text = useWelcomeText({ analogues })

  /* Destructuring the `text` object. */
  const { title, descriptionLine1, descriptionLine2, buttonText } = text

  /* Destructuring the `onGetStarted` function from the `useActions` hook. */
  const { onGetStarted } = useActions()

  /* It's returning a `Welcome` component with the text and `onGetStarted` function passed in as props. */
  return (
    <Welcome
      title={<span dangerouslySetInnerHTML={{ __html: title }} />}
      descriptionLine1={descriptionLine1}
      descriptionLine2={descriptionLine2}
      buttonText={buttonText}
      onClick={onGetStarted}
    />
  )
}
