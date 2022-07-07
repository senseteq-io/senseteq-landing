import { List } from '../../../../components'
import { TeamMemberView } from '../../components'

const TeamMemberList = (props) => {
  const { data } = props

  return (
    <List
      data={data}
      listItemComponent={TeamMemberView}
      listItemWrapperClassName="col-12 col-sm-6 col-lg-3 team-member-wrapper"
    />
  )
}

export default TeamMemberList
