import { Button, PageWrapper, Section } from '../components'

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

const SERVICES_ITEMS = [
  {
    title: 'Komplekse back-end applikasjoner',
    icon: '/complex_backend_app.svg'
  },
  {
    title: 'Front-end web applikasjoner',
    icon: '/front_end_web_apps.svg'
  },
  { title: 'Mobilapplikasjoner', icon: '/mobile_apps.svg' },
  {
    title: 'Invividuell teknologikonsultasjon',
    icon: '/custom_technology.svg'
  },
  { title: 'Utvikling av prototype', icon: '/prototyping.svg' },
  { title: 'UI/UX design', icon: '/ui_ux_design.svg' },
  { title: 'Prosjektstyring', icon: '/project_managment.svg' }
]

const REASONS_ITEMS = [
  {
    title: 'Du er gründer',
    description:
      'Du er en gründer i et oppstartsfirma, eller du leder et nytt prosjekt i et etablert firma.'
  },
  {
    title: 'Du vil gjøre en forskjell',
    description:
      'Din idé eller ditt prosjekt vil ha en positiv effekt på menneskers liv.'
  },
  {
    title: 'Du bryr deg',
    description:
      'Forretninger gjøres mellom mennesker, ikke mellom bedrifter. Vi er et selskap som bygger på høy tillit og vi jobber sammen med bedrifter som også tar vare på sine ansatte og har tillit til dem.'
  }
]

const GUARANTEES_ITEMS = [
  'Lynrask utvikling av en førsteversjon',
  'Raskt og enkelt å gjøre endringer i prosjektet',
  'Enkel oppskalering',
  'Applikasjoner med høy ytelse',
  'Fokus på brukeropplevelse',
  'Fokus på sikkerhet og verning av sensitive data',
  'Kvalitetssikring',
  'Beste utvalg av teknologier'
]
export default function Home() {
  return (
    <PageWrapper className="main-page">
      <Section id="prime-section">
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
            <p className="subtitle">
              Tenker du at det er umulig? Les videre for å se hvordan vi jobber.
            </p>
          </div>
        </div>

        <div className="down-arrow-wrapper">
          <Link href="/#how-we-do-it-section">
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
      <Section id="how-we-do-it-section">
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
              className="how-we-do-it-item-wrapper col-12 col-lg-6 col-xxl-4">
              <div className="how-we-do-it-item">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="services-section">
        <div className="row">
          <div className="col-12">
            <h2>
              <span className="regular">Våre</span> tjenester
              <span className="c-primary">.</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {SERVICES_ITEMS?.map(({ icon, title }) => (
            <div
              key={title}
              className="service-item-wrapper col-12 col-lg-4 col-xl-">
              <div className="service-item">
                <div className="service-icon-wrapper">
                  <Image src={icon} alt={title} layout="fill" />
                </div>
                <p className="caption">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="project-support-section">
        <div className="row">
          <div className="col-12">
            <h2>
              <span className="regular">
                Vi utvikler og supporterer maksimalt{' '}
              </span>{' '}
              12 prosjekter i året
              <span className="c-primary">.</span>
            </h2>
            <div className="col-12">
              <p className="subtitle">Du kan bli vår kunde dersom:</p>
            </div>
          </div>
        </div>
        <div className="row">
          {REASONS_ITEMS?.map(({ title, description }, index) => (
            <div
              key={title}
              className="reason-item-wrapper col-12 col-md-6 col-lg-4">
              <div className="number-wrapper">
                <p className="number">{index + 1}</p>
              </div>
              <div className="reason-item">
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-12">
              <div className="project-count-wrapper">
                <div className="uptitle">Ledig i 2022</div>
                <h3 className="title">
                  6 prosjekter<span className="c-primary">.</span>
                </h3>
              </div>
            </div>
            <div className="apply-button col-12">
              <Button className="btn-lg btn-dark" href="/apply">
                Søk nå
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section id="guarantees-section">
        <div className="row">
          <div className="col-12">
            <h2>
              <span className="regular">Vi </span> garanterer
              <span className="c-primary">.</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {GUARANTEES_ITEMS?.map((guarantee) => (
            <div
              key={guarantee}
              className="guarantee-item-wrapper col-12 col-lg-3">
              <div className="guarantee-item">{guarantee}</div>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}
