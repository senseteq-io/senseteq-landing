import { PageWrapper, Section } from '../components'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWrapper className="main-page">
      <Section className="first-section">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-10">
            <div className="title-wrapper">
              <h1>
                <span className="regular"> Vi leverer en </span> førsteversjon{' '}
                <span className="regular">av din applikasjon</span> på 19 dager
                <span className="c-primary">.</span>
              </h1>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <p>
              Tenker du at det er umulig? Les videre for å se hvordan vi jobber.
            </p>
          </div>
        </div>

        <div className="down-arrow-wrapper">
          <Link href="/#how-we-do-it">
            <a className="down-arrow-icon">
              <Image
                src="/down_arrow.svg"
                alt="Arrow"
                layout="fill"
                className="down-arrow-icon"
              />
            </a>
          </Link>
        </div>
      </Section>
      <Section id="how-we-do-it" className="second-section"></Section>
    </PageWrapper>
  )
}
