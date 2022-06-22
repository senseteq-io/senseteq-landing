import { LanguagesMenu } from '../../../components'
import { MENU_ITEMS } from '../../../constants'

const AdvancedMenu = (props) => {
  const { activeMenuItem } = props

  return (
    <div id="advanced-menu">
      <div className="advanced-menu-content row">
        {Object.values(MENU_ITEMS)?.map(({ href, title }) => (
          <div key={href} className="menu-item-wrapper col-12">
            <a
              href={href}
              className={`menu-item ${
                activeMenuItem === href ? 'menu-item-active' : ''
              }`}>
              {title}
            </a>
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
