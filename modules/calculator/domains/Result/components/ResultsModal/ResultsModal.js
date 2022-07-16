import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const ResultsModal = ({ children }) => {
  const { t } = useTranslation()
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md-9 mb-5">
        <div className="row">
          <div className="col-12">
            <Title as="h3" align="center">
              {t('calculator.result.results_modal.title')}
            </Title>
            <Text variant="secondary" align="center" subtitle>
              {t('calculator.result.results_modal.subtitle')}
            </Text>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">{children}</div>
    </div>
  )
}

export default ResultsModal
