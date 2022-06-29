import { QuestionContent } from '../../../Question/components'
import { useAppearanceOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const AppearanceQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = useAppearanceOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.appearance.title')}
      subtitle={t('calculator.appearance.subtitle')}
      options={options}
      type="appearance"
    />
  )
}

export default AppearanceQuestion
