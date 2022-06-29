import { QuestionContent } from '../../../Question/components'
import { useBrandOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const BrandQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useBrandOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.brand.title')}
      subtitle={t('calculator.brand.subtitle')}
      options={options}
      type="brand"
    />
  )
}

export default BrandQuestion
