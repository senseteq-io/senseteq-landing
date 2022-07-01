import { PageWrapper, Section } from '../components'

import Image from 'next/image'
import { TECHNOLOGIES_ITEMS } from '../constants'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Technologies() {
  // [COMPUTED_PROPS]
  const computedKeyWords = TECHNOLOGIES_ITEMS?.map(({ name }) => name)?.join(
    ', '
  )

  return (
    <PageWrapper
      className="technologies-page"
      pageMetaProps={{
        title: 'Teknologier',
        description:
          'Vår erfaring med teknologier i toppklassen og vår evne til raskt å ta i bruk nye gjør oss i stand til å bygge applikasjoner av enhver størrelse og kompleksitet.',
        keywords: computedKeyWords
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <h2>
              Teknologier og innovasjoner
              <span className="c-primary">.</span>
            </h2>
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
      <Section dark id="secret-weapon-section">
        <div className="row align-items-center">
          <div className="description-wrapper col-12 offset-md-1 col-md-7">
            <p className="subtitle" data-aos="fade-down">
              Vårt hemmelige våpen
            </p>
            <h3 className="title" data-aos="fade-down">
              Qonsoll applikasjonsbygger
              <span className="c-primary">.</span>
            </h3>
            <p className="body2 description" data-aos="fade-left">
              I tillegg til vårt sammensveisede og voksende utviklerteam er vår
              egenutviklede applikasjonsbygger - Qonsoll - en av hovedgrunnene
              til at vi kan levere applikasjoner raskere og mer feilfrie enn
              andre. Qonsoll muliggjør også rask tilegning av kompetanse på nye
              teknologier samtidig som det gir våre utviklere mulighet til å
              jobbe kreativt og involvert i prosjekter uten å drukne i monotone
              og repetitive oppgaver.
            </p>
          </div>
          <div className="col-12 col-md-4" data-aos="fade-left">
            <div className="qonsoll-logo-wrapper" aria-label="Qonsoll logo" />
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
