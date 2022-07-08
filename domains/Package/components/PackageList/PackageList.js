import { List } from '../../../../components'
import { PACKAGES } from '../../__constants__'
import { PackageView } from '../../components'

const PackageList = () => {
  return (
    <List
      data={PACKAGES}
      listItemComponent={PackageView}
      listItemWrapperClassName="col-12 col-lg-6 package-item-wrapper"
    />
  )
}

export default PackageList
