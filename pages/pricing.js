import { PAGE_SECTIONS_CONFIG, PRICES_AND_PACKAGES_ITEMS } from '../constants'
import { PageWrapper, Section, Text, Title } from '../components'

import { PackageList } from '../domains/Package/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Pricing() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <PageWrapper
      className="pricing-page"
      disableHeaderInversing
      pageMetaProps={{
        title: t('head.pricing.title'),
        description: t('head.pricing.description'),
        keywords: t('head.pricing.keywords')
      }}
      sectionsConfig={PAGE_SECTIONS_CONFIG?.PRICING_PAGE}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2" dataAos="fade-down">
              {t('pricing.prime_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <Text description className="description" dataAos="fade-right">
              {t('pricing.prime_section.subtitleLine1')}
            </Text>
          </div>
          <div className="col-12">
            <Text description className="description" dataAos="fade-right">
              {t('pricing.prime_section.subtitleLine2')}
            </Text>
          </div>
        </div>
      </Section>
      <Section id="packages-section">
        <div className="row">
          <div className="col-12">
            <PackageList />
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
