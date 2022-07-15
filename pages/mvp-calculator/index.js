import {
  Content,
  Head,
  Header,
  Welcome
} from '../../modules/calculator/components'
import { useMetaData, useParams } from '../../modules/calculator/hooks'

import Router from 'next/router'
import ls from '../../modules/calculator/utils/ls'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'

export default function Calculator() {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  /* It's a hook that fetches the meta data for the page. */
  const metaData = useMetaData()

  /**
   * It's saving the welcome screen to local storage and redirecting the user to the next page
   */
  const onGetStarted = () => {
    /* It's saving the welcome screen to local storage. */
    ls.save('welcome', true)

    /* It's redirecting the user to the next page. */
    Router.push(
      `/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.analogues'
      )}`
    )
  }

  /* Using the `useParams` hook to get the params from the URL. geo - country, g - gender */
  const { geo, g } = useParams()

  useEffect(() => {
    /* It's clearing the local storage. */
    ls.clear()
  }, [])

  return (
    <>
      <style global jsx>{`
        body {
          height: 100vh;
          width: 100vw;
          font-family: var(--calc-module-body-font-family);
          font-size: var(--calc-module-root-font-size);
        }
      `}</style>
      <Head
        title={metaData.title}
        description={metaData.description}
        metaDescription={metaData.meta_description}
        keywords={metaData.keywords}
      />
      <Header />
      <Content>
        <Welcome
          title={
            <span
              dangerouslySetInnerHTML={{
                __html: t('calculator.welcome.title')
              }}
            />
          }
          descriptionLine1={t('calculator.welcome.descriptionLine1')}
          descriptionLine2={t('calculator.welcome.descriptionLine2')}
          buttonText={t('calculator.welcome.buttonText')}
          geo={geo ? t(`calculator.welcome.geo.${geo}`) : null}
          g={g === 'f' ? t('calculator.welcome.fff') : null}
          onClick={onGetStarted}
        />
      </Content>
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
