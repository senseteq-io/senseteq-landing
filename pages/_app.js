import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="clarity"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "gvme9s7uss");
          `
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default appWithTranslation(MyApp)
