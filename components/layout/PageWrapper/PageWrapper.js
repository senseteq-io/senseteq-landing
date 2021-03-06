import 'aos/dist/aos.css'

import { AdvancedMenu, Footer, Header, PageMeta } from '../../layout'
import { useEffect, useState } from 'react'

import AOS from 'aos'
import Script from 'next/script'
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
      <Script
        id="pipedriveLeadboosterConfig"
        dangerouslySetInnerHTML={{
          __html: `window.pipedriveLeadboosterConfig = {
        base: 'leadbooster-chat.pipedrive.com',
        companyId: 10552104,playbookUuid: 'f467b8c0-118f-4e92-90de-213f5ac7c5e9',
        version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();`
        }}
      />
      <Script
        src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
        async
      />
      <Script
        id="function"
        dangerouslySetInnerHTML={{
          __html: `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('JMvZ8g0A90z72pOd'); `
        }}
      />
      <Script
        id="VIDEOASK_EMBED_CONFIG"
        dangerouslySetInnerHTML={{
          __html: `window.VIDEOASK_EMBED_CONFIG = {
      "kind": "widget",
      "url": "https://www.videoask.com/fxat2tdbz",
      "options": {
        "widgetType": "VideoThumbnailSmall",
        "text": "",
        "backgroundColor": "#60DE74",
        "position": "bottom-left",
        "dismissable": true
      }
    }`
        }}
      />
      <Script src="https://www.videoask.com/embed/embed.js" async />
    </>
  )
}

export default PageWrapper
