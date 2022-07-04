import 'aos/dist/aos.css'

import { AdvancedMenu, Footer, Header, PageMeta } from '../../layout'
import { useEffect, useState } from 'react'

import AOS from 'aos'
import { SectionNavigationDots } from '../../elements'
import { useRouter } from 'next/router'

const PageWrapper = (props) => {
  const { className, sectionsConfig, pageMetaProps, children } = props

  // [ADDITIONAL_HOOKS]
  const router = useRouter()

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
    const pathname = router.pathname

    // set current pathname like active menu items
    setActiveMenuItem(pathname)
  }, [router])

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
