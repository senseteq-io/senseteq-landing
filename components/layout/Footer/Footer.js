import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <footer className="footer">
      <div className="subtitle-wrapper">
        <p className="subtitle">{t('footer.subtitle')}</p>
      </div>
      <div className="title-wrapper">
        <h4
          data-aos="zoom-in"
          dangerouslySetInnerHTML={{
            __html: t('footer.title')
          }}
        />
      </div>
      <div className="contacts-wrapper">
        <div className="contact buttons-wrapper">
          <a
            className="button-icon"
            href="https://www.facebook.com/senseteq"
            target="_blank"
            rel="noreferrer">
            <Image
              src="/assets/facebook.webp"
              alt="Facebook"
              layout="fill"
              aria-label={t('footer.facebookAria')}
            />
          </a>
          <a className="button-icon" href="tel:+4755181900" rel="noreferrer">
            <Image
              src="/assets/whatsApp.png"
              alt="WhatsApp"
              layout="fill"
              aria-label={t('footer.whatsAppAria')}
            />
          </a>
        </div>
        <p aria-label={t('footer.emailAria')} className="contact">
          hello@senseteq.io
        </p>

        <p aria-label={t('footer.phoneAria')} className="contact">
          +47 55 18 19 00
        </p>
      </div>
    </footer>
  )
}

export default Footer
