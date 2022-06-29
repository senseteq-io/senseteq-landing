import { QuestionContent } from '../../../Question/components'
import { useRevenueOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const RevenueQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useRevenueOptions()

 /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.revenue.title')}
      subtitle={t('calculator.revenue.subtitle')}
      options={options}
      type="revenue"
    />
  )
}

export default RevenueQuestion