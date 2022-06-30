import 'aos/dist/aos.css'

import { AdvancedMenu, Footer, Header, PageMeta } from '../../layout'
import { useEffect, useState } from 'react'

import AOS from 'aos'
import { SectionNavigationDots } from '../../elements'

const PageWrapper = (props) => {
  const { className, sectionsConfig, pageMetaProps, children } = props

  // [COMPONENT_STATE_HOOKS]
  const [activeMenuItem, setActiveMenuItem] = useState()

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  // [USE_EFFECTS]
  useEffect(() => {
    // init library for animations
    AOS &&
      AOS.init({
        duration: 1200,
        once: true,
        anchorPlacement: 'top'
      })
  }, [])
  useEffect(() => {
    // get pathname without language indicator
    const pathname = window?.location?.pathname?.split('/')?.[2]

    // set '/' (Home menu item) active if there is no pathname
    setActiveMenuItem(pathname ? `/${pathname}` : '/')
  }, [])

  return (
    <>
      <PageMeta {...pageMetaProps} />
      <div id="page-wrapper" className={className}>
        <Header
          setIsMenuOpened={setIsMenuOpened}
          isMenuOpened={isMenuOpened}
          activeMenuItem={activeMenuItem}
        />
        {isMenuOpened && <AdvancedMenu activeMenuItem={activeMenuItem} />}
        {sectionsConfig && (
          <SectionNavigationDots sectionsConfig={sectionsConfig} />
        )}
        {children}
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper
