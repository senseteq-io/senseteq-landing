import { QuestionContent } from '../../../Question/components'
import { useAdministrationOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const AdministrationQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useAdministrationOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.administration.title')}
      subtitle={t('calculator.administration.subtitle')}
      options={options}
      type="administration"
    />
  )
}

export default AdministrationQuestion
