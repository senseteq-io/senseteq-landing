import { INDUSTRIES } from '../../__constants__'
import { IndustryView } from '../../components'
import { List } from '../../../../components'

const IndustryList = (props) => {
  return (
    <List
      data={INDUSTRIES}
      listItemComponent={IndustryView}
      listItemWrapperClassName="col-12 col-md-6 col-lg-4 industry-item-wrapper"
      {...props}
    />
  )
}

export default IndustryList
