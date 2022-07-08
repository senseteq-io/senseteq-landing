import { PageWrapper, Section, Text, Title } from '../components'

import { ProcessStepper } from '../domains/Process/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Process() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <PageWrapper
      className="process-page"
      pageMetaProps={{
        title: t('head.process.title')
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2">{t('process.prime_section.title')}</Title>
          </div>
          <div className="col-12">
            <Text description>{t('process.prime_section.subtitle')}</Text>
          </div>
        </div>
      </Section>
      <Section id="steps-section">
        <div className="row">
          <div className="col-12">
            <ProcessStepper />
          </div>
        </div>
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
