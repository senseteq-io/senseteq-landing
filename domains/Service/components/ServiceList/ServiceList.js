import { List } from '../../../../components'
import { SERVICES } from '../../__constants__'
import ServiceView from '../../components/ServiceView'

const ServiceList = () => {
  return (
    <List
      data={SERVICES}
      listItemComponent={ServiceView}
      listItemWrapperClassName="col-12 col-md-6 col-lg-4 service-item-wrapper"
    />
  )
  return
}

export default ServiceList
