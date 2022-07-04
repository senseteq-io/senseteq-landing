import { PAGE_SECTIONS_CONFIG, TEAM } from '../constants'
import { PageWrapper, Section } from '../components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Team() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  // [COMPUTED_PROPERTIES]
  const { RISING_STARS, EXPERIENCED } = TEAM

  return (
    <PageWrapper
      className="team-page"
      pageMetaProps={{
        title: t('head.team.title'),
        description: t('head.team.description'),
        keywords: t('head.team.keywords')
      }}
      sectionsConfig={PAGE_SECTIONS_CONFIG?.TEAM_PAGE}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <h2
                dangerouslySetInnerHTML={{
                  __html: t('team.prime_section.title')
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper">
              {t('team.prime_section.subtitle')}
            </p>
          </div>
        </div>
        <div className="row">
          {EXPERIENCED?.map(({ name, role, src }) => (
            <div
              data-aos="fade-left"
              key="name"
              className="person-view-wrapper col-12 col-md-6 col-lg-3">
              <div className="person-view-item">
                <div
                  className="person-view-image"
                  style={{
                    background: `url(${src}) center center / cover no-repeat`
                  }}
                />
                <p className="name">{name}</p>
                <p className="role">{t(role)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="rising-stars-section">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('team.rising_stars_section.title')
              }}
            />
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper" data-aos="fade-left">
              {t('team.rising_stars_section.subtitle')}
            </p>
          </div>
        </div>
        <div className="row">
          {RISING_STARS?.map(({ name, role, src }) => (
            <div
              data-aos="fade-left"
              key="name"
              className="person-view-wrapper col-12 col-md-6 col-lg-3">
              <div className="person-view-item">
                <div
                  className="person-view-image"
                  style={{
                    background: `url(${src}) center center / cover no-repeat`
                  }}
                />
                <p className="name">{name}</p>
                <p className="role">{t(role)}</p>
              </div>
            </div>
          ))}
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
