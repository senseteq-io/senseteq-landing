import { CustomerSlider, PageWrapper } from '../components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Customers() {
  return (
    <PageWrapper
      className="customers-page"
      disableHeaderInversing
      pageMetaProps={{
        title: 'Kunder',
        description:
          'Vi har laget prosjekter som er pålitelige, raske og enkle å bruke.',
        keywords: 'kunder'
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
