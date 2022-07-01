import { CustomerSlider, PageWrapper } from '../components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Customers() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <PageWrapper
      className="customers-page"
      disableHeaderInversing
      pageMetaProps={{
        title: t('head.customers.title'),
        description: t('head.customers.description'),
        keywords: 'Menta Helse, Worktube, Buy2gether, Qonsoll, Fractal Academy'
      }}>
      <CustomerSlider />
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
