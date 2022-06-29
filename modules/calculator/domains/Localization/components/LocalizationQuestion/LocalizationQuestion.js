import { QuestionContent } from '../../../Question/components'
import { useLocalizationOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const LocalizationQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useLocalizationOptions()

 /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.localization.title')}
      subtitle={t('calculator.localization.subtitle')}
      options={options}
      type="localization"
    />
  )
}

export default LocalizationQuestion