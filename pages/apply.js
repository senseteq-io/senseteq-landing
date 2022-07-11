import { PageWrapper, Section, Title } from '../components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Apply() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <PageWrapper
      className="apply-page"
      pageMetaProps={{
        title: t('head.apply.title')
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2">{t('apply.prime_section.title')}</Title>
          </div>
        </div>
        <iframe
          src="https://ask.senseteq.io/fmfxxanrj"
          allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
          width="100%"
          height="600px"
          style={{ border: 'none', borderRadius: '24px' }}
          data-lf-yt-playback-inspected-xbp1oaebogq8edvj="true"
          data-lf-yt-playback-inspected-jmvz8g0a90z72pod="true"
        />
      </Section>
    </PageWrapper>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landing']))
    }
  }
}
