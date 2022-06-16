import { LanguagesMenu, Menu } from '../../layout'
import { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'
import { getClassNames } from '../../../utils'

const Header = () => {
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
    } else isScrollAtTop ? setIsInverseHeader(false) : setIsInverseHeader(true)
  }, [isInverseHeader])

  // [COMPUTED PROPERTY]
  const classNames = getClassNames({
    header: true,
    'header-inverse': isInverseHeader
  })

  // [USE_EFFECTS]
  useEffect(() => {
    document?.addEventListener('scroll', documentScrollHandler)

    return () => document?.removeEventListener('scroll', documentScrollHandler)
  }, [documentScrollHandler])

  return (
    <header id="header" className={classNames}>
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
        <Menu />
        <LanguagesMenu />
      </div>
    </header>
  )
}

export default Header
