import 'aos/dist/aos.css'

import { Footer, Header } from '../../layout'

import AOS from 'aos'
import { useEffect } from 'react'

const PageWrapper = (props) => {
  const { className, children } = props

  // [USE_EFFECTS]
  useEffect(() => {
    // init labrary for animations
    AOS &&
      AOS.init({
        duration: 1200,
        once: true,
        anchorPlacement: 'top'
      })
  }, [])

  return (
    <div id="page-wrapper" className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageWrapper
