import { QuestionContent } from '../../../Question/components'
import { useAuthenticationOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const AuthenticationQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useAuthenticationOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.authentication.title')}
      subtitle={t('calculator.authentication.subtitle')}
      options={options}
      type="authentication"
    />
  )
}

export default AuthenticationQuestion
