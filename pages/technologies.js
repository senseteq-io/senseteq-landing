import { PageWrapper, Section } from '../components'

import Image from 'next/image'
import { TECHNOLOGIES_ITEMS } from '../constants'

export default function Technologies() {
  return (
    <PageWrapper className="technologies-page">
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <h2>
                Teknologier og innovasjoner
                <span className="c-primary">.</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <p>
              Vår erfaring med teknologier i toppklassen og vår evne til raskt å
              ta i bruk nye gjør oss i stand til å bygge applikasjoner av enhver
              størrelse og kompleksitet.
            </p>
          </div>
        </div>
      </Section>
      <Section id="technologies-section">
        <div className="row">
          {TECHNOLOGIES_ITEMS?.map(({ name, src }) => (
            <div
              data-aos="fade-left"
              key={name}
              className="technology-item-wrapper col-12 col-md-4 col-lg-3">
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
    </PageWrapper>
  )
}
