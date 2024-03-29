import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import { Button, Modal, Text, Title } from '../../../../components'
import { useCalculator } from '../../../../contexts/Calculator'
import ResultPayment from '../../../Result/components/ResultPayment'
import useChangeWidgetPosition from '../../hooks/useChangeWidgetPosition'
import usePrice from '../../hooks/usePrice'
import styles from './PricePreviewTrigger.module.css'

const PricePreviewTrigger = () => {
  // [ADDITIONAL_HOOKS]
  const { t } = useTranslation()
  const { calculatorData } = useCalculator()
  const { price, weeks } = usePrice()
  useChangeWidgetPosition(price)

  const { paymentOption } = calculatorData

  // [COMPONENT_STATE_HOOKS]
  const [isModalVisible, setIsModalVisible] = useState(false)

  // [CALCULATED_PROPERTIES]
  const calculatedPrice = paymentOption === 'PART_PAYMENT' ? price * 0.1 : price

  // [HELPER_FUNCTIONS]
  const showModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)

  return price ? (
    <>
      <Modal visible={isModalVisible} onClose={closeModal}>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 ">
            <div className="row">
              <div className="col-12 mb-3">
                <Title as="h4">
                  {t('calculator.price_preview.price_preview_modal.title')}
                </Title>
              </div>
            </div>
          </div>
          <div className="col-12">
            <ResultPayment weeks={weeks} price={price} />
          </div>
        </div>
      </Modal>
      <div className={styles.wrapper}>
        <div className={styles['content-wrapper']}>
          <div className="row g-0 flex-fill">
            <div className="col-auto  d-flex justify-content-start">
              <Button
                variant="white"
                shape="circle"
                size="sm"
                onClick={showModal}
                id="modal-trigger">
                <AiOutlineUp />
              </Button>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <Text size="body2" semibold className={styles.text}>
                {calculatedPrice?.toLocaleString('no', { currency: 'NOK' })},-{' '}
                {t('calculator.result.payments.priceSuffix')}
                {paymentOption === 'PART_PAYMENT' &&
                  t('calculator.price_preview.payment.part_payment_suffix')}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null
}

PricePreviewTrigger.propTypes = {}

export default PricePreviewTrigger
