import {
  ArrowDown,
  Button,
  Collage,
  PageWrapper,
  ProjectCount,
  Section,
  Text,
  Title
} from '../components'

import { AccessaryToolList } from '../domains/AccessaryTool/components'
import { AdvantageList } from '../domains/Advantage/components'
import { CompanyList } from '../domains/Company/components'
import { GuaranteeList } from '../domains/Guarantee/components'
import Image from 'next/image'
import { IndustryList } from '../domains/Industry/components'
import { PAGE_SECTIONS_CONFIG } from '../constants'
import { ReasonList } from '../domains/Reason/components'
import { ServiceList } from '../domains/Service/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <PageWrapper
      className="main-page"
      pageMetaProps={{
        title: t('head.home.title'),
        description: t('head.home.description'),
        keywords: t('head.home.keywords')
      }}
      sectionsConfig={PAGE_SECTIONS_CONFIG?.HOME_PAGE}>
      <Section
        id="prime-section"
        sectionBackground={[
          <video
            key="video-cover"
            autoPlay
            muted
            loop
            className="prime-section-video-bg">
            <source
              src="/backgrounds/prime-section-cover.mp4"
              type="video/mp4"
            />
          </video>,
          <div key="gradient-cover" className="prime-section-gradient-bg" />
        ]}>
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-10">
            <Title>{t('home.prime_section.title')}</Title>
          </div>
          <div className="col-12 col-lg-8">
            <Text className="description" description>
              {t('home.prime_section.subtitle')}
            </Text>
          </div>
        </div>
        <ArrowDown
          sectionId="how-we-do-it-section"
          ariaLabel={t('home.prime_section.arrow_aria')}
          alt={t('home.prime_section.arrow_alt')}
        />
      </Section>

      <Section id="how-we-do-it-section">
        <div className="row">
          <div className="col-12">
            <Title dataAos="fade-down" as="h2">
              {t('home.how_we_do_it_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <AccessaryToolList data-aos="fade-left" />
          </div>
        </div>
      </Section>
      <Section id="services-section">
        <div className="row">
          <div className="col-12">
            <Title dataAos="fade-down" as="h2">
              {t('home.services_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <ServiceList />
          </div>
        </div>
      </Section>
      <Section id="project-support-section">
        <div className="row">
          <div className="col-12">
            <Title dataAos="fade-down" as="h2">
              {t('home.project_support_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <Text description dataAos="fade-right">
              {t('home.project_support_section.subtitle')}
            </Text>
          </div>
          <div className="col-12">
            <ReasonList data-aos="fade-left" />
          </div>
          <div className="col-12">
            <ProjectCount
              title={t('home.project_support_section.subtitle2')}
              uptitle={t('home.project_support_section.uptitle')}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Button
              aria-label={t('home.project_support_section.buttonText')}
              className="btn-lg btn-primary"
              href="/apply"
              data-aos="zoom-out">
              {t('home.project_support_section.buttonText')}
            </Button>
          </div>
        </div>
      </Section>
      <Section dark id="guarantees-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2" dataAos="fade-down">
              {t('home.guarantees_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <GuaranteeList data-aos="fade-right" />
          </div>
        </div>
      </Section>
      <Section id="industries-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2" dataAos="fade-down">
              {t('home.industries_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <IndustryList data-aos="fade-left" />
          </div>
        </div>
      </Section>
      <Section
        id="technologies-section"
        sectionBackground={
          <video
            key="video-cover"
            autoPlay
            muted
            loop
            className="technologies-section-video-bg">
            <source
              src="/backgrounds/teknologier-section-cover.mp4"
              type="video/mp4"
            />
          </video>
        }>
        <div className="row">
          <div className="col-12">
            <Title as="h2" dataAos="fade-left">
              {t('home.technologies_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <Text description dataAos="fade-left">
              {t('home.technologies_section.subtitle')}
            </Text>
          </div>
          <div className="col-auto">
            <Button
              className="btn-primary"
              href="/technologies"
              aria-label={t('home.technologies_section.buttonAria')}
              data-aos="fade-left">
              {t('home.technologies_section.buttonText')}
            </Button>
          </div>
        </div>
      </Section>
      <Section id="how-it-works-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2" dataAos="fade-right">
              {t('home.how_it_works_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <Text description dataAos="fade-right">
              {t('home.how_it_works_section.subtitle')}
            </Text>
          </div>
          <div className="col-auto">
            <Button
              className="btn-primary"
              href="/process"
              aria-label={t('home.how_it_works_section.buttonAria')}
              data-aos="fade-right">
              {t('home.how_it_works_section.buttonText')}
            </Button>
          </div>
        </div>
      </Section>
      <Section dark id="companies-support-section">
        <div className="row">
          <div className="col-12">
            <Title as="h2" dataAos="fade-left">
              {t('home.companies_support_section.title')}
            </Title>
          </div>
          <div className="col-12">
            <CompanyList data-aos="fade-left" />
          </div>
        </div>
      </Section>
      <Section id="ukranian-developers-section">
        <div className="row justify-content-center">
          <div className="col-12">
            <Title as="h2" dataAos="fade-down" center>
              {t('home.ukranian_developers_section.title')}
            </Title>
          </div>
          <div className="col-12 col-lg-6">
            <Text description dataAos="fade-right" center>
              {t('home.ukranian_developers_section.description')}
            </Text>
          </div>
          <div className="col-12">
            <AdvantageList data-aos="fade-left" />
          </div>
        </div>
      </Section>
      <Section dark id="about-senseteq-section">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <Collage
              images={[
                { src: '/team/fractal2.webp', alt: 'Fractal' },
                { src: '/team/fractal.jpg', alt: 'Fractal' },
                { src: '/team/fractal2_prom.webp', alt: 'Fractal prom' }
              ]}
            />
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <Title as="h2">{t('home.about_senseteq_section.title')}</Title>
            <Text description>
              {t('home.about_senseteq_section.descriptionLine1')}
            </Text>
            <Text description>
              {t('home.about_senseteq_section.descriptionLine2')}
            </Text>
            <Text description>
              {t('home.about_senseteq_section.descriptionLine3')}
            </Text>
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
