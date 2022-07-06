import { GUARANTEES } from '../../__constants__'
import { GuaranteeView } from '../../components'
import { List } from '../../../../components'

const GuaranteeList = (props) => {
  return (
    <List
      data={GUARANTEES}
      listItemComponent={GuaranteeView}
      listItemWrapperClassName="col-12 col-lg-3 guarantee-item-wrapper"
      {...props}
    />
  )
}

export default GuaranteeList
