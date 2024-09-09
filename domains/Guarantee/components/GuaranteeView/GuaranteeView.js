import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const GuaranteeView = (props) => {
  const { title, subtitle } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="guarantee-item">
      <Title as="h5">{t(title)}</Title>
      <Text>{t(subtitle)}</Text>
    </div>
  )
}

export default GuaranteeView
