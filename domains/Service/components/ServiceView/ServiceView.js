import Image from 'next/image'
import { Text } from '../../../../components'
import cn from 'classnames'
import styles from '../../Service.module.css'
import { useTranslation } from 'next-i18next'

const ServiceView = (props) => {
  const { src, title } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  // [COMPUTED PROPERTIES]
  const serviceItemClassName = cn({ [styles['service-item']]: true })
  const servicwItemIconClassName = cn({
    [styles['service-icon-wrapper']]: true
  })

  return (
    <div className={serviceItemClassName}>
      <div className={servicwItemIconClassName}>
        <Image src={src} alt={t(title)} layout="fill" />
      </div>
      <Text>{t(title)}</Text>
    </div>
  )
}

export default ServiceView
