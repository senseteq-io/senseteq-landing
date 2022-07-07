import { List } from '../../../../components'
import { TeamMemberView } from '../../components'

const TeamMemberList = (props) => {
  return (
    <List
      listItemComponent={TeamMemberView}
      listItemWrapperClassName="col-12 col-sm-6 col-lg-3 team-member-wrapper"
      {...props}
    />
  )
}

export default TeamMemberList
