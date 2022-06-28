import 'aos/dist/aos.css'

import { AdvancedMenu, Footer, Header } from '../../layout'
import { useEffect, useState } from 'react'

import AOS from 'aos'
import { SectionNavigationDots } from '../../elements'

const PageWrapper = (props) => {
  const { className, sectionsConfig, children } = props

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
  useEffect(() => setActiveMenuItem(window?.location?.pathname), [])

  return (
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
  )
}

export default PageWrapper
