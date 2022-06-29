import { QuestionContent } from '../../../Question/components'
import { useExternalServiceOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const ExternalServiceQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useExternalServiceOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.external_service.title')}
      subtitle={t('calculator.external_service.subtitle')}
      options={options}
      type="external_service"
    />
  )
}

export default ExternalServiceQuestion
