import { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

const MENU_ITEMS = {
  '/': { title: 'Hjem', href: '/' },
  '/technologies': { title: 'Teknologi', href: '/technologies' },
  '/customers': { title: 'Kunder', href: '/customers' },
  '/pricing': { title: 'Priser', href: '/pricing' },
  '/team': { title: 'Team', href: '/team' },
  '/contact': { title: 'Kontakt', href: '/contact' }
}
const LANGUAGES_ITEMS = [
  {
    title: 'NO'
  },
  {
    title: 'EN'
  }
]

const Header = () => {
  // [COMPONENT_STATE_HOOKS]
  const [activeMenuItem, setActiveMenuItem] = useState()
  const [isInverseHeader, setIsInverseHeader] = useState(false)

  // [HELPER_FUNCTIONS]
  const documentScrollHandler = useCallback(() => {
    // check where is position of scroll
    const isScrollAtTop = !window?.scrollY

    /* check previous position of scroll
       (help to prevent a lot of excessive rerenders),
       if previous position is > 0 and current position is 0 - 
        set UNinverse header layout,
       else (if previous position of scroll is 0)
        if current position is 0 - set UNinverse header layout,
        else (if current position is > 0 ) - set inverse header layout
    */
    if (isInverseHeader && isScrollAtTop) {
      setIsInverseHeader(false)
    } else isScrollAtTop ? setIsInverseHeader(false) : setIsInverseHeader(true)
  }, [isInverseHeader])

  // [USE_EFFECTS]
  useEffect(() => setActiveMenuItem(window?.location?.pathname), [])

  useEffect(() => {
    document?.addEventListener('scroll', documentScrollHandler)

    return () => document?.removeEventListener('scroll', documentScrollHandler)
  }, [documentScrollHandler])

  return (
    <header id="header" className={isInverseHeader ? 'header-inverse' : ''}>
      <div className="header-content">
        {/** layout for xs/sm */}
        <div className="subtitle">
          <p className="subtitle-wrapper">Senseteq</p>
        </div>

        <div className="menu-icon-wrapper">
          <div className="icon">
            <Image alt="Menu" src="/menu.svg" layout="fill" />
          </div>
        </div>
        {/** layout for > sm  */}
        <div className="logo-wrapper">
          <div className="logo">
            <Image
              alt="Menu"
              src={isInverseHeader ? '/senseteq_inverse.svg' : '/senseteq.svg'}
              layout="fill"
            />
          </div>
        </div>
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
        <div className="languages-wrapper">
          {LANGUAGES_ITEMS?.map(({ title }) => (
            <div className="language-item" key={title}>
              {title}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
