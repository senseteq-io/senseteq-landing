import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const ResultEstimations = ({ weeks, price }) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  return (
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
  )
}

export default ResultEstimations
