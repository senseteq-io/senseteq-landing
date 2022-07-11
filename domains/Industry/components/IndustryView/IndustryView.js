import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const IndustryView = (props) => {
  const { src, description, subtitle } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div
      className="industry-item"
      style={{
        background: `url(${src}) center center / cover no-repeat`
      }}>
      <div className="industry-item-blackout">
        <div className="industry-item-content">
          <Title as="h5">{t(subtitle)}</Title>
          <Text>{t(description)}</Text>
        </div>
      </div>
    </div>
  )
}

export default IndustryView
