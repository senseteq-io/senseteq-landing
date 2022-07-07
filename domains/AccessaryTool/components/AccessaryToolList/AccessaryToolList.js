import { ACCESSARY_TOOLS } from '../../__constants__'
import { AccessaryToolView } from '../../components'
import { List } from '../../../../components'
/**
 * It takes an array of objects (Accessary tools),
 * and returns an list of accessary tool views
 */
const AccessaryToolList = (props) => {
  return (
    <List
      data={ACCESSARY_TOOLS}
      listClassName="accessary-tool-list"
      listItemComponent={AccessaryToolView}
      listItemWrapperClassName="col-12 col-md-6 col-xxl-4 accessary-tool-wrapper"
      {...props}
    />
  )
}

export default AccessaryToolList
