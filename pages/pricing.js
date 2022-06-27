import { Button, PageWrapper, Section } from '../components'

import { PRICES_AND_PACKAGES } from '../constants'

export default function Pricing() {
  return (
    <PageWrapper className="pricing-page" disableHeaderInversing>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <h2 data-aos="fade-down">
                Priser og pakker
                <span className="c-primary">.</span>
              </h2>
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            <p>
              Et av våre største fortrinn er utviklingshastighet, det vil si
              hvor mye våre utviklere får gjort pr. time. Vi ønsker derfor å gi
              en forhåndsavtalt og svært fordelaktig pris.
            </p>
            <p>
              Vi vet hvor viktig det er med høy fart og kontroll på kostnadene.
              Det er gunstig å bli kunde hos oss. Vi gir deg raskt en svært
              fordelaktig fastpris på prosjektet ditt. Prisene nedenfor kan gi
              deg en indikasjon, men du får en individuell vurdering.
            </p>
          </div>
        </div>
      </Section>
      <Section id="packages-section">
        <div className="row">
          {PRICES_AND_PACKAGES?.map(({ name, version, examples, price }) => (
            <div
              data-aos="fade-left"
              key={name}
              className="package-item-wrapper col-12 col-lg-6 col-xxl-3">
              <div className="package-item">
                <div className="package-item-content">
                  <h4 className="name">{name}</h4>
                  <p className="version-information body2">
                    Få bygget en <span className="bold">førsteversjon</span> av
                    en applikasjon med <span className="bold">{version}</span>{' '}
                    omfang og kompleksitet. Kan inkludere app for mobil (iOS og
                    Android).
                  </p>
                  <p className="examples body2">
                    Eksempelapplikasjoner som ville hatt dette prisleiet:{' '}
                    <span className="bold">{examples}</span>
                  </p>
                  <div className="price-wrapper">
                    <h4 className="price">{price}</h4>
                  </div>
                  <div className="advantages-wrapper">
                    <p className="advantage-item body2">Fullt skalerbar</p>
                    <p className="advantage-item body2">Høyeste ytelse</p>
                    <p className="advantage-item body2">
                      Enkel branding og profil
                    </p>
                  </div>
                  <div className="search-now-button-wrapper">
                    <Button
                      className="btn-primary"
                      href="/apply"
                      aria-label="søk nå">
                      Søk nå
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}
