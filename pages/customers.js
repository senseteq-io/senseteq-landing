import { CustomerSlider, PageWrapper } from '../components'

export default function Customers() {
  return (
    <PageWrapper className="customers-page" disableHeaderInversing>
      <CustomerSlider />
    </PageWrapper>
  )
}
