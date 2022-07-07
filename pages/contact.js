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
        <Title>{t('contact.prime_section.title')}</Title>
      </Section>
      <Section id="contacts-section">
        <ContactList dataAos="fade-left" />
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
