import { PageWrapper, Section } from '../components'

import Image from 'next/image'
import Link from 'next/link'

const HOW_WE_DO_IT_ITEMS = [
  {
    title: 'Det repetitive arbeidet er automatisert',
    description:
      'Vi klassifiserte alle typer av oppgaver som utføres i et prosjekt. Så identifiserte vi de mest ressurskrevende og automatiserte implementeringen av dem en etter en.'
  },
  {
    title: 'Automatisk idéoversetter',
    description:
      'Vi utviklet et eget verktøy som automatisk konverterer en idébeskrivelse av et prosjekt eller ny funksjonalitet om til en datastruktur. Dette hjelper oss til raskt å finne bedre løsninger og å forstå forretningskonsept og å hjelpe å forbedre det.'
  },
  {
    title: 'Verktøy for å bygge prosjekt-arkitektur',
    description:
      'Vi har utviklet et verktøy som genererer databasestrukturer, APIér samt de individuelle brukerflyt beskrivelser og skjema.'
  },

  {
    title: 'Kodegenerator',
    description:
      'Takket være vår måte å klassifisere og strukturere data på, i tillegg til verktøyene nevnt ovenfor, så genereres en stor del av applikasjonene helt automatisk. Og uten feil.'
  },
  {
    title: 'Oppgave-generator',
    description:
      'Vi har minimalisert arbeidet som må gjøres i prosessen med å opprette oppgaver for utviklere. Det genereres automatisk oppgaver som er avgrenset nok til at de fleste av dem vil ha en estimert gjennomføringstid med en presisjon ned mot 10 minutter.'
  },
  {
    title: 'Modulbasert utvikling',
    description:
      'Vi har et bibliotek av egenutviklede moduler som vi raskt kan integrere i nye prosjekter. Å endre dem til nye applikasjoners behov går fort og vi slipper å utvikle funksjonaliteten fra grunn.'
  }
]
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
      <Section id="how-we-do-it" className="second-section">
        <div className="row">
          <div className="col-12">
            <h2>
              <span className="regular">Hvordan er det</span> mulig
              <span className="c-primary">?</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {HOW_WE_DO_IT_ITEMS?.map(({ title, description }) => (
            <div
              key={title}
              className="how-we-do-it-item-wrapper col-12 col-lg-4">
              <div className="how-we-do-it-item">
                <h5 className="title">{title}</h5>
                <p className="description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}
