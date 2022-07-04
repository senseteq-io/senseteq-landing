import { Button, PageWrapper, Section } from '../components'
import { PAGE_SECTIONS_CONFIG, PRICES_AND_PACKAGES_ITEMS } from '../constants'

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
            <div className="title-wrapper">
              <h2
                data-aos="fade-down"
                dangerouslySetInnerHTML={{
                  __html: t('pricing.prime_section.title')
                }}
              />
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            <p>{t('pricing.prime_section.subtitleLine1')}</p>
            <p>{t('pricing.prime_section.subtitleLine2')}</p>
          </div>
        </div>
      </Section>
      <Section id="packages-section">
        <div className="row">
          {PRICES_AND_PACKAGES_ITEMS?.map(
            ({ name, description, examples, price }) => (
              <div
                data-aos="fade-left"
                key={name}
                className="package-item-wrapper col-12 col-lg-6">
                <div className="package-item">
                  <div className="package-item-content">
                    <h4 className="name">{t(name)}</h4>
                    <p
                      className="version-information body2"
                      dangerouslySetInnerHTML={{
                        __html: t(description)
                      }}
                    />
                    <p className="examples body2">
                      Eksempelapplikasjoner som ville hatt dette prisleiet:{' '}
                      <span className="bold">{examples}</span>
                    </p>
                    <div className="price-wrapper">
                      <h4 className="price">{price}</h4>
                    </div>
                    <div className="advantages-wrapper">
                      <p className="advantage-item body2">
                        {t(
                          'pricing.packages_section.package_advantages.descriptionLine1'
                        )}
                      </p>
                      <p className="advantage-item body2">
                        {t(
                          'pricing.packages_section.package_advantages.descriptionLine2'
                        )}
                      </p>
                      <p className="advantage-item body2">
                        {t(
                          'pricing.packages_section.package_advantages.descriptionLine3'
                        )}
                      </p>
                    </div>
                    <div className="search-now-button-wrapper">
                      <Button
                        className="btn-primary"
                        href="/apply"
                        aria-label={t('pricing.packages_section.buttonText')}>
                        {t('pricing.packages_section.buttonText')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
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
