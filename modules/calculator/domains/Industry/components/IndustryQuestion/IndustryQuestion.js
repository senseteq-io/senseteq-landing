import { QuestionContent } from '../../../Question/components'
import { useIndustryOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const IndustryQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useIndustryOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.industries.title')}
      subtitle={t('calculator.industries.subtitle')}
      options={options}
      type="industries"
    />
  )
}

export default IndustryQuestion
