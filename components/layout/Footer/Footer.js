import { Text, Title } from "../../../components";

import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation("landing");

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 subtitle-wrapper">
            <Text caption className="subtitle">
              {t("footer.subtitle")}
            </Text>
          </div>
        </div>
        <div className="col-12 title-wrapper">
          <Title as="h4" dataAos="fade-down">
            {t("footer.title")}
          </Title>
        </div>
        <div className="col-12 contacts-wrapper">
          {/* <div className="contact buttons-wrapper">
            <IconButton
              href="https://www.facebook.com/senseteq"
              target="_blank"
              src="/assets/facebook.webp"
              alt="Facebook"
              ariaLabel={t("footer.facebookAria")}
            />
            <IconButton
              href="tel:+4755181900"
              src="/assets/whatsApp.png"
              alt="WhatsApp"
              ariaLabel={t("footer.whatsAppAria")}
            />
          </div> */}
          <Link
            href="mailto:hello@senseteq.io"
            ariaLabel={t("footer.emailAria")}
            className="contact"
          >
            hello@senseteq.io
          </Link>
          {/* Temporary hidden */}
          {/* <Text ariaLabel={t('footer.phoneAria')} className="contact">
            +47 55 18 19 00
          </Text> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
