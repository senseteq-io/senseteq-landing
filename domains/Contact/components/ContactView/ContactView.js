import { Text, Title } from '../../../../components'

import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const ContactView = (props) => {
  const { name, src, address, phone, email } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div
      className="contact-item"
      itemScope
      itemType="https://schema.org/Organization">
      <div className="contact-image-wrapper">
        <Image src={src} alt={t(name)} layout="fill" />
      </div>
      <Title as="h4" itemProp="name">
        {t(name)}
      </Title>
      {phone && <Text itemProp="telephone">{phone}</Text>}
      {email && <Text itemProp="email">{email}</Text>}
      {address?.map((detail) => (
        <Text key={detail} itemProp="address">
          {detail}
        </Text>
      ))}
    </div>
  )
}
export default ContactView
