import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subtitle-wrapper">
        <p className="subtitle">Kontakt</p>
      </div>
      <div className="title-wrapper">
        <h4 data-aos="zoom-in">
          Vi inviterer alle oppstartsselskaper til å ta kontakt
          <span className="c-primary">!</span>
        </h4>
      </div>
      <div className="contacts-wrapper">
        <div className="contact buttons-wrapper">
          <a
            className="button-icon"
            href="https://www.facebook.com/senseteq"
            target="_blank"
            rel="noreferrer">
            <Image src="/facebook.png" alt="Facebook" layout="fill" />
          </a>
          <a className="button-icon" href="tel:+4755181900" rel="noreferrer">
            <Image src="/whatsApp.png" alt="Facebook" layout="fill" />
          </a>
        </div>
        <p className="contact">hello@senseteq.io</p>

        <p className="contact">+47 55 18 19 00</p>
      </div>
    </footer>
  )
}

export default Footer
