import Link from 'next/link'
import { MENU_ITEMS } from '../../../constants'
import { useTranslation } from 'next-i18next'

/**
 *  this component is user for Menu in Header
 */
const SimpleMenu = (props) => {
  const { activeMenuItem } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div id="simple-menu">
      {Object.values(MENU_ITEMS)?.map(({ href, name, ariaLabel }) => (
        <div
          key={href}
          className={`menu-item ${
            activeMenuItem === href ? 'menu-item-active' : ''
          }`}>
          <Link href={href}>
            <a aria-label={t(ariaLabel)}>{t(name)}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SimpleMenu
