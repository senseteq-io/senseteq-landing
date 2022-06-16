import { useEffect, useState } from 'react'

const MENU_ITEMS = {
  '/': { title: 'Hjem', href: '/' },
  '/technologies': { title: 'Teknologi', href: '/technologies' },
  '/customers': { title: 'Kunder', href: '/customers' },
  '/pricing': { title: 'Priser', href: '/pricing' },
  '/team': { title: 'Team', href: '/team' },
  '/contact': { title: 'Kontakt', href: '/contact' }
}

const Menu = () => {
  // [COMPONENT_STATE_HOOKS]
  const [activeMenuItem, setActiveMenuItem] = useState()

  // [USE_EFFECTS]
  useEffect(() => setActiveMenuItem(window?.location?.pathname), [])

  return (
    <div className="menu-wrapper">
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

export default Menu
