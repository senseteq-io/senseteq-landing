import { MENU_ITEMS } from '../../../constants'

/**
 *  this component is user for Menu in Header
 */
const SimpleMenu = (props) => {
  const { activeMenuItem } = props

  return (
    <div id="simple-menu">
      {Object.values(MENU_ITEMS)?.map(({ href, title }) => (
        <div
          key={href}
          className={`menu-item ${
            activeMenuItem === href ? 'menu-item-active' : ''
          }`}>
          <a href={href}>{title}</a>
        </div>
      ))}
    </div>
  )
}

export default SimpleMenu
