import { PageWrapper, Section } from '../components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Apply() {
  return (
    <PageWrapper className="apply-page">
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <h2 data-aos="fade-down">
                Se om vi matcher
                <span className="c-primary">.</span>
              </h2>
            </div>
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
