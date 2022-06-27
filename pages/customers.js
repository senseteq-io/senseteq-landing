import { CustomerSlider, PageWrapper } from '../components'

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
