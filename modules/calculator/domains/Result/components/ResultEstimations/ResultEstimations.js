import { Title } from '../../../../components'

import { useTranslation } from 'next-i18next'
import ResultPayment from '../ResultPayment'
import 'rc-segmented/assets/index.css'

const ResultEstimations = ({ weeks, price }) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  return (
    <div className="row  justify-content-center">
      <div className="col-12 mb-4">
        <Title as="h4" align="center">
          {t('calculator.result.second_title')}
        </Title>
      </div>
      <div className="col-12 col-md-9 mb-4">
        <ResultPayment weeks={weeks} price={price} />
      </div>
    </div>
  )
}

export default ResultEstimations
