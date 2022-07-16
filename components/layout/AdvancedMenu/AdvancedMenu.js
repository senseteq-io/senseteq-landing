import { LanguagesMenu } from '../../../components'
import Link from 'next/link'
import { MENU_ITEMS } from '../../../constants'
import { useTranslation } from 'next-i18next'

const AdvancedMenu = (props) => {
  const { activeMenuItem } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div id="advanced-menu">
      <div className="advanced-menu-content">
        <div className="container">
          <div className="row">
            {Object.values(MENU_ITEMS)?.map(({ href, name, ariaLabel }) => (
              <div key={href} className="menu-item-wrapper col-12">
                <Link href={href}>
                  <a
                    className={`menu-item ${
                      activeMenuItem === href ? 'menu-item-active' : ''
                    }`}
                    aria-label={t(ariaLabel)}>
                    {t(name)}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="col-12">
            <LanguagesMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedMenu
