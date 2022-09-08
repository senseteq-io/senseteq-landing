import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import { Button, Modal, Text, Title } from '../../../../components'
import { useCalculator } from '../../../../contexts/Calculator'
import ResultPayment from '../../../Result/components/ResultPayment'
import usePrice from '../../hooks/usePrice'
import styles from './PricePreviewTrigger.module.css'
const PricePreviewTrigger = () => {
  // [ADDITIONAL_HOOKS]
  const { t } = useTranslation()
  const { calculatorData } = useCalculator()
  const { price, weeks } = usePrice()

  const { paymentOption } = calculatorData

  // [COMPONENT_STATE_HOOKS]
  const [isModalVisible, setIsModalVisible] = useState(false)
  // [CALCULATED_PROPERTIES]
  const calculatedPrice = paymentOption === 'PART_PAYMENT' ? price * 0.1 : price
  // [HELPER_FUNCTIONS]
  const showModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)

  // [USE_EFFECTS]
  useEffect(() => {
    const rightElement = document.getElementById('LeadboosterContainer')
    const videoaskButton = document.getElementById('videoask-widget')

    const isMobile = window.matchMedia('(max-width: 576px)').matches

    if (price && isMobile) {
      if (rightElement) {
        rightElement.style.setProperty('bottom', '64px', 'important')
        rightElement.style.setProperty('z-index', '1', 'important')
      }
      if (videoaskButton) {
        videoaskButton.style.setProperty(
          'bottom',
          'calc(64px + 20px)',
          'important'
        )
        videoaskButton.style.setProperty('z-index', '1', 'important')
      }
    }
    return () => {
      if (rightElement) {
        rightElement.style.setProperty('bottom', '0', 'important')
      }
      if (videoaskButton) {
        videoaskButton.style.setProperty('bottom', '20', 'important')
      }
    }
  }, [price])

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
                {calculatedPrice?.toLocaleString('no', { currency: 'NOK' })}
                ,-{t('calculator.result.payments.priceSuffix')}
                {paymentOption === 'PART_PAYMENT' &&
                  t('calculator.price_preview.payment.part_payment_suffix')}
                <span style={{ margin: '0 6px' }}>
                  {t('calculator.price_preview.payment.description')}
                </span>
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
