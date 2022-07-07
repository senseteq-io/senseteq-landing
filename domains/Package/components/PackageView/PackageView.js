import { Button, Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const PackageView = (props) => {
  const { name, description, examples, price } = props
  console.log(examples)
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="package-item">
      <div className="package-item-content">
        <Title as="h3" className="name">
          {t(name)}
        </Title>
        <Text className="version-information">{t(description)}</Text>
        <Text>{t(examples)}</Text>
        <div className="price-wrapper">
          <Title as="h3" className="price">
            {price}
          </Title>
        </div>
        <div className="advantages-wrapper">
          <Text size="body2" className="advantage-item">
            {t('pricing.packages_section.package_advantages.descriptionLine1')}
          </Text>
          <Text size="body2" className="advantage-item">
            {t('pricing.packages_section.package_advantages.descriptionLine2')}
          </Text>
          <Text size="body2" className="advantage-item">
            {t('pricing.packages_section.package_advantages.descriptionLine3')}
          </Text>
        </div>
        <div className="search-now-button-wrapper">
          <Button
            className="btn-primary"
            href="/apply"
            aria-label={t('pricing.packages_section.buttonText')}>
            {t('pricing.packages_section.buttonText')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PackageView
