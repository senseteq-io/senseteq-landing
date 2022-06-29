import { useActions, useWelcomeText } from '../../hooks'

import { Welcome } from '../../../../components'

/**
 * We're using the `useWelcomeText` hook to get the welcome text for the industry, destructuring the
 * `text` object, destructuring the `onGetStarted` function from the `useActions` hook, and returning a
 * `Welcome` component with the destructured values
 * @returns A component that displays a welcome message.
 */
export default function PlatformWelcome({ platforms }) {
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
      onClick={onGetStarted}
    />
  )
}
