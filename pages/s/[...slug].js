import {
  Content,
  Footer,
  Head,
  Header
} from '../../modules/calculator/components'
import {
  useAdvDataLS,
  useCalculatorData,
  useLS,
  useMetaData,
  usePages,
  useParams,
  usePath,
  useRedirectCondition,
  useTransformRoutes
} from '../../modules/calculator/hooks'

import { CalculatorProvider } from '../../modules/calculator/contexts/Calculator'
import PricePreviewTrigger from '../../modules/calculator/domains/Price/components/PricePreviewTrigger'
import Script from 'next/script'
import { addClassToLeadBooster } from '../../helpers'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useFetchResult } from '../../modules/calculator/domains/Result/hooks'

export default function CalculatorAll() {
  /* Transforming the routes from the `routes.js` file into a format that is easier to work with. */
  const [routes, routesLoading] = useTransformRoutes()

  /* Using the `useMetaData` hook to get the meta data for the current page. */
  const metaData = useMetaData(routes)
  /* Destructuring the metaData object. */
  const { title, description, meta_description, keywords } = metaData

  /* Using the `usePages` hook to get the current page. */
  const { currentPage, isWelcomeSeen } = usePages(routes)

  const initialData = usePath(routes)

  /* Destructuring the `calculatorData`, `updateCalculatorField`, and `updateCalculatorFields` from the
  `useCalculatorData` hook. */
  const { calculatorData, updateCalculatorField, reset } = useCalculatorData(
    routes,
    initialData
  )

  /* Using the `useParams` hook to get the params from the URL. geo - country, g - gender */
  const { geo, g, id, adv } = useParams()

  /* Fetching the data from the database and setting it to the `DBData` variable. */
  const [DBData, loading] = useFetchResult(id)

  /* Using the `useLS` hook to save the `calculatorData` to local storage. */
  useLS(DBData || calculatorData)

  /* Saving the `geo`, `g`, and `adv` params to local storage. */
  useAdvDataLS({ geo, g, adv })

  /*
    Redirecting the user to the `/s/mvp-calculator` route if the user is on a deep route and the `id`
    param is not present in the URL.
  */
  useRedirectCondition({
    routesLoading,
    routerData: routes,
    platforms: calculatorData?.platforms,
    analogues: calculatorData?.analogues,
    industries: calculatorData?.industries
  })

  /* Returning the head, header, content, and footer components. */
  return (
    <>
      <style>{`
        body {
          height: 100vh;
          width: 100vw;
          font-family: var(--calc-module-body-font-family);
          font-size: var(--calc-module-root-font-size);
        }
        @media (min-width: 576px) {
          html body .leadbooster#LeadboosterContainer,
          html body .proactiveChat#LeadboosterContainer {
            bottom: 12px !important;
            right: 12px !important;
          }
        }
        @media (max-width: 576px) {
          html body .leadbooster#LeadboosterContainer,
          html body .proactiveChat#LeadboosterContainer {
            right: 0 !important;
          }
        }
      `}</style>
      <Head
        title={title}
        description={description}
        image="/assets/logo-senseteq-512.png"
        metaDescription={meta_description}
        keywords={keywords}
      />
      <Header />
      <Content>
        <CalculatorProvider
          geo={geo}
          g={g}
          adv={adv}
          loading={loading}
          savedResult={!!id}
          calculatorData={DBData || calculatorData}
          updateCalculatorField={updateCalculatorField}
          reset={reset}>
          {currentPage}
          {routes?.baseRoute !== 'result' && isWelcomeSeen && (
            <PricePreviewTrigger />
          )}
        </CalculatorProvider>
      </Content>
      <Footer />
      {process.env.NEXT_PUBLIC_ENVIRONMENT === 'PRODUCTION' && (
        <>
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
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hs-scripts.com/139582962.js"
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
          <Script src="https://www.videoask.com/embed/embed.js" async />

          <Script
            id="VIDEOASK_EMBED_CONFIG"
            dangerouslySetInnerHTML={{
              __html: `
  // this code is initializing video ask image and adding "videoask-widget" id to video ask button.
          
  window.addEventListener('load', () => {
    const config = {
      kind: 'widget',
      url: 'https://www.videoask.com/fxat2tdbz',
      options: {
        widgetType: 'VideoThumbnailSmall',
        text: '',
        backgroundColor: '#60DE74',
        position: 'bottom-left',
        dismissable: true,
        id: 'test'
      }
    }
    window.videoask
      .loadEmbed(config)
      .then((element) => element.setAttribute('id', 'videoask-widget'))
  })
    `
            }}
          />
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
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=444826330701945&ev=PageView&noscript=1"
            />
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-THSKD5F"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>

          <Script
            id="GOOGLE_TAG_MANAGER"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THSKD5F');`
            }}
          />
        </>
      )}
      {/* <Footer /> */}
    </>
  )
}

/**
 * It fetches the translations for the current locale and passes them to the page as props
 * @returns The props object is being returned.
 */
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

/**
 * It returns an object with a paths property that contains an array of objects with a params property
 * that contains an object with a slug property that contains an array of strings
 * @returns An object with a paths property and a fallback property.
 */
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: [
            'analogues',
            'industries',
            'platforms',
            'administration',
            'localization',
            'authentication',
            'external-services',
            'appearance',
            'brand',
            'revenue'
          ]
        }
      }
    ],
    fallback: true
  }
}
