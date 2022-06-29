import { QuestionContent } from '../../../Question/components'
import { useAnalogueOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options and type props
 * @returns The QuestionContent component with the title, subtitle, options and type props.
 */
const AnalogueQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a hook that returns an array of objects that are used to render the options in the question. */
  const options = useAnalogueOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options and type props. */
  return (
    <QuestionContent
      title={t('calculator.analogues.title')}
      subtitle={t('calculator.analogues.subtitle')}
      options={options}
      type="analogues"
    />
  )
}

export default AnalogueQuestion
