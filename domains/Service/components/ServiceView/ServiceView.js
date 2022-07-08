import Image from 'next/image'
import { Title } from '../../../../components'
import { useTranslation } from 'next-i18next'

const ServiceView = (props) => {
  const { src, title } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div
      className="service-item"
      itemProp="orderedItem"
      itemScope
      itemType="https://schema.org/Service">
      <div className="service-icon-wrapper">
        <Image src={src} alt={t(title)} layout="fill" />
      </div>
      <Title as="h4" itemprop="description">
        {t(title)}
      </Title>
    </div>
  )
}

export default ServiceView
