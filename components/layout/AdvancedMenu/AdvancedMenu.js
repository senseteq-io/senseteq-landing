import { LanguagesMenu } from '../../../components'
import Link from 'next/link'
import { MENU_ITEMS } from '../../../constants'

const AdvancedMenu = (props) => {
  const { activeMenuItem } = props

  return (
    <div id="advanced-menu">
      <div className="advanced-menu-content row">
        {Object.values(MENU_ITEMS)?.map(({ href, title }) => (
          <div key={href} className="menu-item-wrapper col-12">
            <Link href={href}>
              <a
                className={`menu-item ${
                  activeMenuItem === href ? 'menu-item-active' : ''
                }`}
                aria-label={`go to ${title} page`}>
                {title}
              </a>
            </Link>
          </div>
        ))}
        <div className="col-12">
          <LanguagesMenu />
        </div>
      </div>
    </div>
  )
}

export default AdvancedMenu
