import {
  ADVANTAGES_UKRAINIAN_DEVELOPERS,
  COMPANIES_SUPPORT_ITEMS,
  GUARANTEES_ITEMS,
  HOW_WE_DO_IT_ITEMS,
  INDUSTRIES_ITEMS,
  PAGE_SECTIONS_CONFIG,
  REASONS_ITEMS,
  SERVICES_ITEMS
} from '../constants'
import { Button, PageWrapper, Section } from '../components'

import Image from 'next/image'
import Link from 'next/link'
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
            <div className="title-wrapper">
              <h1
                dangerouslySetInnerHTML={{
                  __html: t('home.prime_section.title')
                }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <p>{t('home.prime_section.subtitle')}</p>
          </div>
        </div>

        <div className="down-arrow-wrapper">
          <Link href="#how-we-do-it-section">
            <a className="down-arrow-icon">
              <Image
                aria-label={t('home.prime_section.arrow_aria')}
                src="/assets/down_arrow.svg"
                alt={t('home.prime_section.arrow_alt')}
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
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('home.how_we_do_it_section.title')
              }}
            />
          </div>
        </div>
        <div className="row">
          {HOW_WE_DO_IT_ITEMS?.map(({ title, description }) => (
            <div
              key={title}
              className="how-we-do-it-item-wrapper col-12 col-md-6 col-xxl-4"
              data-aos="fade-right">
              <div className="how-we-do-it-item">
                <h3 className="title">{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="services-section">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="fade-right"
              dangerouslySetInnerHTML={{
                __html: t('home.services_section.title')
              }}
            />
          </div>
        </div>
        <div className="row">
          {SERVICES_ITEMS?.map(({ icon, title }) => (
            <div
              data-aos="fade-left"
              key={title}
              className="service-item-wrapper col-12  col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service-icon-wrapper">
                  <Image src={icon} alt={t(title)} layout="fill" />
                </div>
                <p className="caption">{t(title)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="project-support-section">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('home.project_support_section.title')
              }}
            />
            <div className="col-12">
              <p data-aos="fade-right">
                {t('home.project_support_section.subtitle')}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {REASONS_ITEMS?.map(({ title, description }, index) => (
            <div
              key={title}
              className="reason-item-wrapper col-12 col-md-6 col-lg-4"
              data-aos="fade-left">
              <div className="number-wrapper">
                <p className="number">{index + 1}</p>
              </div>
              <div className="reason-item">
                <h4 className="title">{t(title)}</h4>
                <p className="body2">{t(description)}</p>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-12">
              <div className="project-count-wrapper" data-aos="zoom-out">
                <div className="uptitle">
                  {t('home.project_support_section.uptitle')}
                </div>
                <h3
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: t('home.project_support_section.subtitle2')
                  }}
                />
              </div>
            </div>
            <div className="apply-button col-12">
              <Button
                aria-label={t('home.project_support_section.buttonText')}
                className="btn-lg btn-dark"
                href="/apply"
                data-aos="zoom-out">
                {t('home.project_support_section.buttonText')}
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section dark id="guarantees-section">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('home.guarantees_section.title')
              }}
            />
          </div>
        </div>
        <div className="row">
          {GUARANTEES_ITEMS?.map((guarantee) => (
            <div
              data-aos="fade-right"
              key={guarantee}
              className="guarantee-item-wrapper col-12 col-lg-3">
              <div className="guarantee-item">{t(guarantee)}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="industries-section">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('home.industries_section.title')
              }}
            />
          </div>
        </div>
        <div className="row">
          {INDUSTRIES_ITEMS?.map(({ src, subtitle, description }) => (
            <div
              data-aos="fade-right"
              key={subtitle}
              className="industry-item-wrapper col-12 col-md-6 col-lg-4">
              <div
                className="industry-item"
                style={{
                  background: `url(${src}) center center / cover no-repeat`
                }}>
                <div className="industry-item-blackout">
                  <div className="industry-item-content">
                    <p className="subtitle-wrapper">{t(subtitle)}</p>
                    <p className="body2">{t(description)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
          <div className="col-12 col-md-8">
            <h2
              data-aos="fade-left"
              dangerouslySetInnerHTML={{
                __html: t('home.technologies_section.title')
              }}
            />
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper" data-aos="fade-left">
              {t('home.technologies_section.subtitle')}
            </p>
          </div>
          <div className="col-auto">
            <Button
              className="btn-dark"
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
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('home.how_it_works_section.title')
              }}
            />
          </div>
          <div className="col-12">
            <p className="subtitle-wrapper" data-aos="fade-left">
              {t('home.how_it_works_section.subtitle')}
            </p>
          </div>
          <div className="col-auto">
            <Button
              className="btn-dark"
              href="/process"
              aria-label={t('home.how_it_works_section.buttonAria')}
              data-aos="zoom-out">
              {t('home.how_it_works_section.buttonText')}
            </Button>
          </div>
        </div>
      </Section>
      <Section dark id="companies-support-section">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="fade-left"
              dangerouslySetInnerHTML={{
                __html: t('home.companies_support_section.title')
              }}
            />
          </div>
        </div>
        <div className="row">
          {COMPANIES_SUPPORT_ITEMS?.map(({ src, name }) => (
            <div
              key={name}
              className="company-support-wrapper col-12 col-lg-6"
              data-aos="fade-right">
              <div className="company-support-image">
                <Image src={src} alt={t(name)} layout="fill" />
              </div>
              <p className="subtitle-wrapper">{t(name)}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="ukranian-developers-section">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: t('home.ukranian_developers_section.title')
              }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="subtitle-wrapper" data-aos="fade-right">
              {t('home.ukranian_developers_section.description')}
            </p>
          </div>
        </div>
        <div className="row">
          {ADVANTAGES_UKRAINIAN_DEVELOPERS?.map(({ title, subtitle }) => (
            <div
              key={title}
              className="advantage-item-wrapper col-12 col-lg-3"
              data-aos="fade-right">
              <h2>{t(title)}</h2>
              <p className="body2">{t(subtitle)}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section dark id="about-senseteq-section">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="images-wrapper" data-aos="fade-down">
              <div className="fractal2-image-wrapper">
                <div className="fractal2-image">
                  <Image
                    src="/team/fractal2.webp"
                    alt="Fractal"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="fractal-image-wrapper">
                <div className="fractal-image">
                  <Image
                    src="/team/fractal.jpg"
                    alt="Fractal"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="fractal2-prom-image-wrapper">
                <div className="fractal2-prom-image">
                  <Image
                    src="/team/fractal2_prom.webp"
                    alt="Fractal prom"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h2
              data-aos="fade-left"
              dangerouslySetInnerHTML={{
                __html: t('home.about_senseteq_section.title')
              }}
            />
            <p className="subtitle-wrapper" data-aos="fade-left">
              {t('home.about_senseteq_section.descriptionLine1')}
            </p>
            <p className="subtitle-wrapper" data-aos="fade-left">
              {t('home.about_senseteq_section.descriptionLine2')}
            </p>
            <p data-aos="fade-left">
              {t('home.about_senseteq_section.descriptionLine3')}
            </p>
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
