import { Title } from '../../../../components'
import { useTranslation } from 'next-i18next'

const GuaranteeView = (props) => {
  const { title } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="guarantee-item">
      <Title as="h4">{t(title)}</Title>
    </div>
  )
}

export default GuaranteeView
