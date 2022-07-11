import Image from 'next/image'
import { Title } from '../../../../components'
import { useTranslation } from 'next-i18next'

const CompanyView = (props) => {
  const { name, src } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <>
      <div className="company-image">
        <Image src={src} alt={t(name)} layout="fill" />
      </div>
      <Title as="h6">{t(name)}</Title>
    </>
  )
}

export default CompanyView
