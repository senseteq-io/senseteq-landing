import { useActions, useWelcomeText } from '../../hooks'

import { Welcome } from '../../../../components'

/**
 * It returns the `Welcome` component with the props that are passed to it
 * @returns The `Welcome` component with the props that are passed to it.
 */
export default function IndustryWelcome({ industries }) {
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
      onClick={onGetStarted}
    />
  )
}
