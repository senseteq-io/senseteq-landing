import { CONTACTS } from '../../__constants__'
import { ContactView } from '../../components'
import { List } from '../../../../components'

const ContactList = (props) => {
  return (
    <List
      data={CONTACTS}
      listItemComponent={ContactView}
      listItemWrapperClassName="col-12 col-lg-4 contact-item-wrapper"
      {...props}
    />
  )
}
export default ContactList
