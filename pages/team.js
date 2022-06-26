import { PageWrapper, Section } from '../components'

import { TEAM } from '../constants'

export default function Team() {
  const { RISING_STARS, MAIN } = TEAM

  return (
    <PageWrapper className="team-page">
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <h2>
                Hvem er vi
                <span className="c-primary">?</span>
              </h2>
            </div>
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper">
              Vi er et sammensveiset team som stortrives på jobb. Vi feirer
              hverandres fremgang og hjelper når det trengs. Vi har en flat
              struktur i selskapet, bygget på tillit og kompetanse. Alle våre
              utviklere er engasjerte og føler raskt eierskap til nye
              prosjekter.
            </p>
          </div>
        </div>
        <div className="row">
          {MAIN?.map(({ name, role, src }) => (
            <div
              data-aos="fade-left"
              key="name"
              className="person-view-wrapper col-12 col-md-6 col-lg-3">
              <div className="person-view-item">
                <div
                  className="person-view-image"
                  style={{
                    background: `url(${src}) center center / cover no-repeat`
                  }}
                />
                <p className="name">{name}</p>
                <p className="role">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="rising-stars-section">
        <div className="row">
          <div className="col-12">
            <h2 data-aos="fade-down">
              Våre kommende stjerner
              <span className="c-primary">.</span>
            </h2>
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper" data-aos="fade-left">
              Jeg må innrømme det, vi ser på dem som stjerner allerede. De er
              dedikerte, lidenskapelige og de elsker å utvikle produkter som
              betyr noe. Gled deg til å lytte til deres idéer og bli inspirert
              av deres innspill. Og selvfølgelig: De leverer fantastisk kode,
              som bygger fantastiske produkter.{' '}
            </p>
          </div>
        </div>
        <div className="row">
          {RISING_STARS?.map(({ name, role, src }) => (
            <div
              data-aos="fade-left"
              key="name"
              className="person-view-wrapper col-12 col-md-6 col-lg-3">
              <div className="person-view-item">
                <div
                  className="person-view-image"
                  style={{
                    background: `url(${src}) center center / cover no-repeat`
                  }}
                />
                <p className="name">{name}</p>
                <p className="role">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}
