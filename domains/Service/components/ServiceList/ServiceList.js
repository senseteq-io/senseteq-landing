import { SERVICES } from '../../__constants__'
import ServiceView from '../../components/ServiceView'
import cn from 'classnames'
import styles from '../../Service.module.css'

const ServiceList = () => {
  // [COMPUTED PROPERTIES]
  const className = cn({ [styles['service-item-wrapper']]: true })

  return (
    <div className="row">
      {SERVICES?.map(({ src, title }) => (
        <div
          data-aos="fade-left"
          key={title}
          className={`${className} col-12 col-md-6 col-lg-4`}>
          <ServiceView title={title} src={src} />
        </div>
      ))}
    </div>
  )
  return
}

export default ServiceList
