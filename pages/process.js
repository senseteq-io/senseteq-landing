import { PageWrapper, Section, Stepper } from '../components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Process() {
  return (
    <PageWrapper
      className="process-page"
      pageMetaProps={{
        title: 'Process'
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <h2>
              Hvordan er prosessen
              <span className="c-primary">?</span>
            </h2>
          </div>
          <div className="col-12 col-lg-8">
            <p>Hva kan du forvente når du blir utvalgt som kunde hos oss?</p>
          </div>
        </div>
      </Section>
      <Section id="steps-section">
        <div className="row">
          <div className="col-12">
            <Stepper
              stepperConfig={[
                {
                  name: 'Utvelgelse',
                  description:
                    'Etter den første kontakten og å ha fått en beskrivelse av prosjektet, gjør vi en vurdering for å sikre at det er en god match for våre utviklerteam og at prosjektet har positiv innvirkning på menneskers liv.'
                },
                {
                  name: 'Tilbud og spesifikasjon',
                  description:
                    'Etter å ha blitt enige om de ulike personas og scenarioer for dem, spesifiserer vi et tilbud til fast pris for et godt definert scope.'
                },
                {
                  name: 'Oppstart',
                  description:
                    'Ved godkjenning av tilbud vil et dedikert utviklerteam bli tildelt. Det er valgfritt hvor mye dere som kunde ønsker å være delaktig underveis.'
                },
                {
                  name: 'Utvikling',
                  description:
                    'I denne fasen vil du som kunde se veldig rask fremdrift, og det vil oppleves spennende å følge med fra dag til dag, dersom du ønsker det.'
                },
                {
                  name: 'Lansering',
                  description:
                    'Vi anbefaler at applikasjonen lanseres og prøves på ekte kunder så raskt som mulig. Selv om det er planlagt både feilrettinger og enda bedre funksjonalitet. Den beste tilbakemeldingen får du hos brukerne. Alltid.'
                }
              ]}
            />
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
