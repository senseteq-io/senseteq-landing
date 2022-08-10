import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Segmented from 'rc-segmented'
import { Text, Title } from '../../../../components'

const PaymentSection = ({ text, price }) => (
  <div className="d-flex mb-2 justify-content-between">
    <Text>{text}</Text>
    <Text>
      {price?.toLocaleString('no', { currency: 'NOK' })}
      ,- ex. VAT
    </Text>
  </div>
)

const ResultPayment = ({ weeks, price }) => {
  // [ADDITIONAL_HOOKS]
  const { t } = useTranslation()

  const OPTIONS = [
    t('calculator.result.payments.options.part_payment'),
    t('calculator.result.payments.options.cash')
  ]
  // [COMPONENT_STATE_HOOKS]
  const [paymentOptions, setPaymentOptions] = useState(OPTIONS[0])

  // [COMPUTED_PROPERTIES]
  const thirtyPercentagePrice = price * 0.3
  const tenPercentagePrice = price * 0.1
  const totalLeasePrice = price * 1.2

  const layouts = {
    [OPTIONS[0]]: (
      <div>
        <div className="d-flex mb-2 justify-content-between">
          <Text semibold>{t('calculator.result.approximate_estimation')}</Text>
          <Text semibold>
            {weeks} {t('calculator.result.weeks')}
          </Text>
        </div>
        <PaymentSection
          text={t('calculator.result.payments.sections.0')}
          price={tenPercentagePrice}
        />
        <PaymentSection
          text={t('calculator.result.payments.sections.1')}
          price={tenPercentagePrice}
        />
        <PaymentSection
          text={t('calculator.result.payments.sections.2')}
          price={tenPercentagePrice}
        />
        <div className="d-flex mb-2 justify-content-between">
          <Text>{t('calculator.result.payments.monthly_down')}</Text>
          <Text>9 {t('calculator.result.payments.months')}</Text>
        </div>

        <div className="col-12 mt-5">
          <div className="d-flex justify-content-between">
            <Title as="h5">
              {t('calculator.result.payments.monthly_down')}
            </Title>
            <Title as="h5" align="right">
              {tenPercentagePrice?.toLocaleString('no', { currency: 'NOK' })}
              ,- ex. VAT/mo
            </Title>
          </div>
          <div
            className="my-2"
            style={{
              borderTop: '1px solid var(--calc-module-gray-lighten2)'
            }}
          />
          <div className="d-flex mb-4 justify-content-between">
            <Text as="h5">{t('calculator.result.payments.total')}</Text>
            <Text as="h5" align="right">
              {totalLeasePrice?.toLocaleString('no', { currency: 'NOK' })}
              ,- ex. VAT
            </Text>
          </div>
          <div>
            <Text size="body2" variant="secondary">
              {t('calculator.result.payments.part_payment_info')}
            </Text>
          </div>
        </div>
      </div>
    ),
    [OPTIONS[1]]: (
      <>
        <div className="d-flex justify-content-between">
          <Text semibold>{t('calculator.result.approximate_estimation')}</Text>
          <Text semibold>
            {weeks} {t('calculator.result.weeks')}
          </Text>
        </div>
        <div
          className="my-2"
          style={{ borderTop: '1px solid var(--calc-module-gray-lighten2)' }}
        />
        <PaymentSection
          text={t('calculator.result.payments.sections.0')}
          price={thirtyPercentagePrice}
        />
        <PaymentSection
          text={t('calculator.result.payments.sections.1')}
          price={thirtyPercentagePrice}
        />
        <PaymentSection
          text={t('calculator.result.payments.sections.2')}
          price={thirtyPercentagePrice}
        />
        <PaymentSection
          text={t('calculator.result.payments.sections.3')}
          price={tenPercentagePrice}
        />

        <div
          className="my-2"
          style={{ borderTop: '1px solid var(--calc-module-gray-lighten2)' }}
        />
        <div className="d-flex  justify-content-between">
          <Title as="h5">{t('calculator.result.payments.total')}</Title>
          <Title as="h5">
            {price?.toLocaleString('no', { currency: 'NOK' })}
            ,- ex. VAT
          </Title>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="mb-3">
        <Segmented
          value={paymentOptions}
          onChange={setPaymentOptions}
          className="finance-segmented"
          options={OPTIONS}
        />
      </div>
      {layouts[paymentOptions]}
    </>
  )
}

ResultPayment.propTypes = {}

export default ResultPayment
