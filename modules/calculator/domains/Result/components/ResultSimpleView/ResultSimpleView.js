import { Text, Title } from '../../../../components'
import { useFeatures, usePrice } from '../../hooks'

import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const ResultSimpleView = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()
  const features = useFeatures()
  const { price, weeks } = usePrice()

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-9">
          <div className="row mb-4">
            <div className="col-12">
              <Title as="h3" align="center">
                {t('calculator.result.title')}
              </Title>
            </div>
            <div className="col-12">
              <Text variant="secondary" align="center" subtitle>
                {t('calculator.result.description')}
              </Text>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4">
              <div>
                <Image
                  src="/assets/result.svg"
                  width="250px"
                  height="250px"
                  alt="MVP calculator result"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                {features.map((feature, index) => (
                  <div key={feature.replace(' ', '-')} className="col-12 mb-2">
                    <Text variant="secondary">✅ {feature}</Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <Title as="h4" align="center">
                {t('calculator.result.second_title')}
              </Title>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div>
                <Text variant="secondary" align="center">
                  {t('calculator.result.approximate_estimation')}
                </Text>
                <Title as="h3" align="center">
                  {weeks} {t('calculator.result.weeks')}
                </Title>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div>
                <Text variant="secondary" align="center">
                  {t('calculator.result.approximate_cost')}
                </Text>
                <Title as="h3" align="center">
                  {price} NOK
                </Title>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultSimpleView
