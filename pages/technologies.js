import { PageWrapper, Section, Text, Title } from '../components'

import { TECHNOLOGIES } from '../domains/Technology/__constants__'
import { TechnologyList } from '../domains/Technology/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Technologies() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  // [COMPUTED_PROPS]
  const computedKeyWords = TECHNOLOGIES?.map(({ name }) => name)?.join(', ')

  return (
    <PageWrapper
      className="technologies-page"
      pageMetaProps={{
        title: t('head.technologies.title'),
        description: t('head.technologies.description'),
        keywords: computedKeyWords
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2">{t('technologies.prime_section.title')}</Title>
          </div>
          <div className="col-12">
            <Text description>{t('technologies.prime_section.subtitle')}</Text>
          </div>
        </div>
      </Section>
      <Section id="technologies-section">
        <div className="row">
          <div className="col-12">
            <TechnologyList data={TECHNOLOGIES} />
          </div>
        </div>
      </Section>
      <Section dark id="secret-weapon-section">
        <div className="row align-items-center">
          <div className="description-wrapper col-12 offset-md-1 col-md-7">
            <Text className="caption" caption dataAos="fade-down">
              {t('technologies.secret_weapon_section.subtitle')}
            </Text>
            <Title as="h3" dataAos="fade-down">
              {t('technologies.secret_weapon_section.title')}
            </Title>
            <Text dataAos="fade-left">
              {t('technologies.secret_weapon_section.description')}
            </Text>
          </div>
          <div className="col-12 col-md-4" data-aos="fade-left">
            <div className="qonsoll-logo-wrapper" aria-label="Qonsoll logo" />
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
