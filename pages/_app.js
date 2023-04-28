import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default appWithTranslation(MyApp)
