import { QuestionContent } from '../../../Question/components'
import { usePlatformOptions } from '../../hooks'
import { useTranslation } from 'next-i18next'

/**
 * It's returning the QuestionContent component with the title, subtitle, options, and type props
 * @returns The QuestionContent component with the title, subtitle, options, and type props.
 */
const PlatformQuestion = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a custom hook that returns an array of objects. */
  const options = usePlatformOptions()

  /* It's returning the QuestionContent component with the title, subtitle, options, and type props. */
  return (
    <QuestionContent
      title={t('calculator.platforms.title')}
      subtitle={t('calculator.platforms.subtitle')}
      options={options}
      type="platforms"
    />
  )
}

export default PlatformQuestion
