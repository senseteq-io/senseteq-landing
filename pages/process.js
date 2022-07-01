import { PageWrapper, Section, Stepper } from '../components'

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
            <h2
              dangerouslySetInnerHTML={{
                __html: t('process.prime_section.title')
              }}
            />
          </div>
          <div className="col-12 col-lg-8">
            <p>{t('process.prime_section.subtitle')}</p>
          </div>
        </div>
      </Section>
      <Section id="steps-section">
        <div className="row">
          <div className="col-12">
            <Stepper
              stepperConfig={[
                {
                  name: 'process.steps_section.selections.title',
                  description: 'process.steps_section.selections.description'
                },
                {
                  name: 'process.steps_section.offer.title',
                  description: 'process.steps_section.offer.description'
                },
                {
                  name: 'process.steps_section.start-up.title',
                  description: 'process.steps_section.start-up.description'
                },
                {
                  name: 'process.steps_section.development.title',
                  description: 'process.steps_section.development.description'
                },
                {
                  name: 'process.steps_section.launch.title',
                  description: 'process.steps_section.launch.description'
                }
              ]}
            />
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
