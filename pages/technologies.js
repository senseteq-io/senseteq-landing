import { PageWrapper, Section } from '../components'

import Image from 'next/image'
import { TECHNOLOGIES_ITEMS } from '../constants'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Technologies() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  // [COMPUTED_PROPS]
  const computedKeyWords = TECHNOLOGIES_ITEMS?.map(({ name }) => name)?.join(
    ', '
  )

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
            <h2
              dangerouslySetInnerHTML={{
                __html: t('technologies.prime_section.title')
              }}
            />
          </div>
          <div className="col-12 col-lg-8">
            <p>{t('technologies.prime_section.subtitle')}</p>
          </div>
        </div>
      </Section>
      <Section id="technologies-section">
        <div className="row">
          {TECHNOLOGIES_ITEMS?.map(({ name, src }) => (
            <div
              data-aos="fade-left"
              key={name}
              className="technology-item-wrapper col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="technology-item">
                <div className="technology-image-wrapper">
                  <Image src={src} alt={name} layout="fill" />
                </div>
                <p className="caption">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section dark id="secret-weapon-section">
        <div className="row align-items-center">
          <div className="description-wrapper col-12 offset-md-1 col-md-7">
            <p className="subtitle" data-aos="fade-down">
              {t('technologies.secret_weapon_section.subtitle')}
            </p>
            <h3
              className="title"
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('technologies.secret_weapon_section.title')
              }}
            />

            <p className="body2 description" data-aos="fade-left">
              {t('technologies.secret_weapon_section.description')}
            </p>
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
