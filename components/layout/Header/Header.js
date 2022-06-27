import { LanguagesMenu, SimpleMenu } from '../../layout'
import { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { getClassNames } from '../../../utils'

const Header = (props) => {
  const { setIsMenuOpened, isMenuOpened, activeMenuItem } = props

  // [COMPONENT_STATE_HOOKS]
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
    } //else if (isScrollAtTop && isMenuOpened) setIsInverseHeader(false)
    else isScrollAtTop ? setIsInverseHeader(false) : setIsInverseHeader(true)
  }, [isInverseHeader])
  const handleClickMenu = () => setIsMenuOpened(!isMenuOpened)

  // [COMPUTED PROPERTY]
  const classNames = getClassNames({
    header: true,
    'header-inverse': isInverseHeader || isMenuOpened
  })

  // [USE_EFFECTS]
  useEffect(() => {
    documentScrollHandler?.()

    document?.addEventListener('scroll', documentScrollHandler)

    return () => document?.removeEventListener('scroll', documentScrollHandler)
  }, [documentScrollHandler])

  return (
    <header id="header" className={classNames}>
      <div className="header-content" aria-label="site іnavigation">
        {/** layout for xs/sm */}
        <Link href="/">
          <a>
            <p className="subtitle" aria-label="go to home page">
              Senseteq
            </p>
          </a>
        </Link>

        <div className="menu-icon-wrapper" onClick={handleClickMenu}>
          <div className="icon">
            <Image
              alt="Menu"
              src="/menu.svg"
              layout="fill"
              aria-label={isMenuOpened ? 'close menu' : 'open menu'}
            />
          </div>
        </div>
        {/** layout for > sm  */}
        <div className="logo-wrapper">
          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  aria-label="go to home page"
                  alt="Logo"
                  src={
                    isInverseHeader ? '/senseteq_inverse.svg' : '/senseteq.svg'
                  }
                  layout="fill"
                />
              </a>
            </Link>
          </div>
        </div>
        <SimpleMenu activeMenuItem={activeMenuItem} />
        <LanguagesMenu />
      </div>
    </header>
  )
}

export default Header
