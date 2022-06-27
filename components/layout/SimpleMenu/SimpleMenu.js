import Link from 'next/link'
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
          <Link href={href}>
            <a aria-label={`go to ${title} page`}>{title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SimpleMenu
