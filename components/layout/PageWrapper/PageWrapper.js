/* eslint-disable @next/next/no-img-element */
import 'aos/dist/aos.css'

import { AdvancedMenu, Footer, Header, PageMeta } from '../../layout'
import { useEffect, useState } from 'react'

import AOS from 'aos'
import Script from 'next/script'
import { SectionNavigationDots } from '../../elements'
import { addClassToLeadBooster } from '../../../helpers'
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

  console.log(process.env.NODE_ENV)
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
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hs-scripts.com/139582962.js"
          />
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
            onLoad={addClassToLeadBooster}
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
          <Script
            id="fb-pixel"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '444826330701945');
            fbq('track', 'PageView');
          `
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              alt="Senseteq"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=444826330701945&ev=PageView&noscript=1"
            />
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-THSKD5F"
              height="0"
              width="0"
              style="display:none;visibility:hidden"></iframe>
          </noscript>

          <Script
            id="GOOGLE_TAG_MANAGER"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'(https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f))https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)
})(window,document,'script','dataLayer','GTM-THSKD5F');`
            }}
          />
        </>
      )}
    </>
  )
}

export default PageWrapper
