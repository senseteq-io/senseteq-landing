import { PageWrapper, Section, Title } from '../components'

import { ContactList } from '../domains/Contact/components'
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
            <Title>{t('contact.prime_section.title')}</Title>
          </div>
        </div>
      </Section>
      <Section id="contacts-section">
        <div className="row">
          <div className="col-12">
            <ContactList dataAos="fade-left" />
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
