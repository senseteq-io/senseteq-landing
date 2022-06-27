import { PageWrapper, Section } from '../components'

import { CONTACTS_ITEMS } from '../constants'
import Image from 'next/image'

export default function Contact() {
  return (
    <PageWrapper
      className="contact-page"
      pageMetaProps={{
        title: 'Kontact',
        keywords: 'kontact'
      }}>
      <Section dark id="prime-section">
        <div className="row">
          <div className="col-12">
            <h2>
              Snakk med oss
              <span className="c-primary">.</span>
            </h2>
          </div>
        </div>
      </Section>
      <Section id="contacts-section">
        <div className="row">
          {CONTACTS_ITEMS?.map(({ name, src, details }) => (
            <div
              data-aos="fade-left"
              key={name}
              className="contact-item-wrapper col-12 col-lg-4">
              <div className="contact-item">
                <div className="contact-image-wrapper">
                  <Image src={src} alt={name} layout="fill" />
                </div>
                <p className="caption">{name}</p>
                {details?.map((detail) => (
                  <p key={detail} className="body2">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}
