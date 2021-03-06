import { List } from '../../../../components'
import { REASONS } from '../../__constants__'
import ReasonView from '../ReasonView'

const ReasonList = (props) => {
  return (
    <List
      data={REASONS}
      listItemComponent={ReasonView}
      listItemWrapperClassName="col-12 col-md-6 col-lg-4 reason-item-wrapper"
      {...props}
    />
  )
}

export default ReasonList
