import { PageWrapper, Section } from '../components'

import { CONTACTS_ITEMS } from '../constants'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Contact() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <PageWrapper
      className="contact-page"
      pageMetaProps={{
        title: t('head.contact.title')
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <h2
              dangerouslySetInnerHTML={{
                __html: t('contact.prime_section.title')
              }}
            />
          </div>
        </div>
      </Section>
      <Section id="contacts-section">
        <div className="row">
          {CONTACTS_ITEMS?.map(({ name, src, details }) => (
            <div
              data-aos="fade-left"
              key={name}
              className="contact-item-wrapper col-12 col-lg-4">
              <div className="contact-item">
                <div className="contact-image-wrapper">
                  <Image src={src} alt={name} layout="fill" />
                </div>
                <p className="caption">{t(name)}</p>
                {details?.map((detail) => (
                  <p key={detail} className="body2">
                    {detail}
                  </p>
                ))}
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
