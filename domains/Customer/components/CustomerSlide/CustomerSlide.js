import { Button, Text } from '../../../../components'

import { useTranslation } from 'next-i18next'

/**
 * It is used for item in slider
 * @returns component with a background image, a text description, and a button
 */
const CustomerSlide = (props) => {
  const { name, description, buttonText, href, src } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div
      className="customer-slide-wrapper"
      style={{
        background: `url(${src}) center center / cover no-repeat`
      }}>
      <div
        className="content-wrapper"
        itemScope
        itemType="https://schema.org/Product">
        <meta itemProp="name" content={name} />
        <meta itemProp="image" content={src} />
        {href && <meta itemProp="url" content={href} />}
        <div className="content">
          <Text description className="description" itemProp="description">
            {t(description)}
          </Text>
          {buttonText && (
            <Button
              target="_blank"
              href={href}
              className="btn-white go-to-site"
              aria-label={t(buttonText)}>
              {t(buttonText)}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomerSlide
