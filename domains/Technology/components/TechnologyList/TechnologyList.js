import { List } from '../../../../components'
import { TechnologyView } from '../../components'

const TechnologyList = (props) => {
  const { data } = props

  return (
    <List
      data={data}
      listItemComponent={TechnologyView}
      listItemWrapperClassName="col-12 col-sm-6 col-md-4 col-lg-3 technology-item-wrapper"
    />
  )
}

export default TechnologyList
