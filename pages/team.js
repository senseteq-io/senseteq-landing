import { PageWrapper, Section, Text, Title } from '../components'

import { PAGE_SECTIONS_CONFIG } from '../constants'
import { TEAM_MEMBERS } from '../domains/TeamMember/__constants__'
import { TeamMemberList } from '../domains/TeamMember/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Team() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  // [COMPUTED_PROPERTIES]
  const { RISING_STARS, EXPERIENCED } = TEAM_MEMBERS

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
            <Title as="h2">{t('team.prime_section.title')}</Title>
          </div>
          <div className="col-12">
            <Text description>{t('team.prime_section.subtitle')}</Text>
          </div>
          <div className="col-12">
            <TeamMemberList data={EXPERIENCED} dataAos="fade-left" />
          </div>
        </div>
      </Section>
      <Section id="rising-stars-section">
        <div className="row">
          <div className="col-12">
            <Title dataAos="fade-down">
              {t('team.rising_stars_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <Text dataAos="fade-down" description>
              {t('team.rising_stars_section.subtitle')}
            </Text>
          </div>
          <div className="col-12">
            <TeamMemberList data={RISING_STARS} dataAos="fade-left" />
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
