import {
  ADVANTAGES_UKRAINIAN_DEVELOPERS,
  COMPANIES_SUPPORT_ITEMS,
  GUARANTEES_ITEMS,
  HOW_WE_DO_IT_ITEMS,
  INDUSTRIES_ITEMS,
  REASONS_ITEMS,
  SERVICES_ITEMS
} from '../constants'
import { Button, PageWrapper, Section } from '../components'

import Image from 'next/image'
import Link from 'next/link'

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
            <p>
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
                <p>{description}</p>
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
              <p>Du kan bli vår kunde dersom:</p>
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
                <p className="body2">{description}</p>
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
      <Section id="industries-section">
        <div className="row">
          <div className="col-12">
            <h2>
              <span className="regular">Vi </span> garanterer
              <span className="c-primary">.</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {INDUSTRIES_ITEMS?.map(({ src, subtitle, description }) => (
            <div
              key={subtitle}
              className="industry-item-wrapper col-12 col-lg-4">
              <div
                className="industry-item"
                style={{
                  background: `url(${src}) center center / cover no-repeat`
                }}>
                <div className="industry-item-blackout">
                  <div className="industry-item-content">
                    <p className="subtitle-wrapper">{subtitle}</p>
                    <p className="body2">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="technologies-section">
        <div className="row">
          <div className="col-12">
            <h2>
              Teknologier
              <span className="regular"> og innovasjoner</span>
              <span className="c-white">.</span>
            </h2>
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper">
              Vår erfaring med teknologier i toppklassen og vår evne til raskt å
              ta i bruk nye, gjør oss i stand til å bygge applikasjoner av
              enhver størrelse og kompleksitet.
            </p>
          </div>
          <div className="col-auto">
            <Button className="btn-dark" href="/technologies">
              Klikk for å lære mer
            </Button>
          </div>
        </div>
      </Section>
      <Section id="how-it-works-section">
        <div className="row">
          <div className="col-12">
            <h2>
              <span className="regular">Hvordan er det </span>
              mulig
              <span className="c-primary">?</span>
            </h2>
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper">
              Vår erfaring med teknologier i toppklassen og vår evne til raskt å
              ta i bruk nye, gjør oss i stand til å bygge applikasjoner av
              enhver størrelse og kompleksitet.
            </p>
          </div>
          <div className="col-12 col-md-auto">
            <Button className="btn-dark" href="/process">
              Klikk for å lære mer
            </Button>
          </div>
        </div>
      </Section>
      <Section id="companies-support-section">
        <div className="row">
          <div className="col-12">
            <h2>
              Støttet <span className="regular">av</span>
              <span className="c-primary">.</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {COMPANIES_SUPPORT_ITEMS?.map(({ src, name }) => (
            <div key={name} className="company-support-wrapper col-12 col-lg-6">
              <div className="company-support-image">
                <Image src={src} alt={name} layout="fill" />
              </div>
              <p className="subtitle-wrapper">{name}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="ukranian-developers-section">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2>
              <span className="regular"> Hvorfor </span>
              Ukrainske utviklere
              <span className="c-primary">?</span>
            </h2>
          </div>
          <div className="col-12 col-lg-8">
            <p className="subtitle-wrapper">
              Ukrainske utviklere rangeres som de dyktigste og mest erfarne
              utøvere innen tilpasset programvare, nett- og apputvikling. På
              TopCoder og Hackerrank er Ukraina rangert høytt på topplistene
              over de mest avanserte egenskapene for programvareutvikling.
            </p>
          </div>
        </div>
        <div className="row">
          {ADVANTAGES_UKRAINIAN_DEVELOPERS?.map(({ title, description }) => (
            <div key={title} className="advantage-item-wrapper col-12 col-lg-3">
              <h2>{title}</h2>
              <p className="body2">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about-senseteq-section">
        <div className="row">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6">
            <h2>
              <span className="regular">Om </span>
              Senseteq
              <span className="c-primary">.</span>
            </h2>
            <p className="subtitle-wrapper">
              Vi er et norsk-ukrainsk selskap som revolusjonerer måten
              webutvikling foregår. Vår misjon er å være med på å gjøre verden
              til et bedre sted for alle gjennom vårt bidrag. Vi er opptatt av
              mennesker. Vi vil gjøre en forskjell for våre kunder og for våre
              ansatte.
            </p>
            <p className="subtitle-wrapper">
              Vi krever det samme av våre kunder. De er dedikerte
              oppstartsbedrifter som vil gjøre en forskjell for mennesker, i
              alle deler av livet.
            </p>
            <p>Vi inviterer alle til å bli med. Come join us and make Sense!</p>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
