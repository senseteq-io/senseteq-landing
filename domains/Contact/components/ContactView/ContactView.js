import { Text, Title } from '../../../../components'

import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const ContactView = (props) => {
  const { name, src, details } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="contact-item">
      <div className="contact-image-wrapper">
        <Image src={src} alt={t(name)} layout="fill" />
      </div>
      <Title as="h6">{t(name)}</Title>
      {details?.map((detail) => (
        <Text key={detail}>{detail}</Text>
      ))}
    </div>
  )
}
export default ContactView
