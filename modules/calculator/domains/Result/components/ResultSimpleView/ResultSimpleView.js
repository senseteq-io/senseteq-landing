import { BOOKING_MODULE_LINK } from '../../../../__constants__'
import { Modal, useModal } from '../../../../components'
import { useFeatures, usePrice, useSaveResults } from '../../hooks'

import EmailForm from '../EmailForm'
import ResultActions from '../ResultActions'
import ResultDetails from '../ResultDetails'
import ResultEstimations from '../ResultEstimations'
import ResultHeader from '../ResultHeader'
import ResultsModal from '../ResultsModal'
import Router, { useRouter } from 'next/router'
import ls from '../../../../utils/ls'
import { useTranslation } from 'next-i18next'

const ResultSimpleView = () => {
  const { t } = useTranslation()
  const features = useFeatures()
  const { price, weeks } = usePrice()
  const [isSaveModalVisible, openSaveModal, closeSaveModal] = useModal()
  const router = useRouter()
  const { query } = router
  const saveResults = useSaveResults()

  const restart = () => {
    ls.clear()
    Router.push(`/s/${t('calculator.paths.mvp_calculator')}`)
  }
  const onScheduleMeeting = async () => {
    let calculatorResultId = query.id
    // If results present just redirect to booking module
    if (!calculatorResultId) {
      calculatorResultId = await saveResults()
    }
    window.open(
      `${BOOKING_MODULE_LINK}?calculatorResultId=${calculatorResultId}`,
      '_blank'
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-9">
          <ResultHeader />
          <ResultDetails features={features} />
          <ResultEstimations weeks={weeks} price={price} />
          <ResultActions
            onOpenSaveModal={openSaveModal}
            restart={restart}
            onScheduleMeeting={onScheduleMeeting}
          />
          <Modal visible={isSaveModalVisible} onClose={closeSaveModal}>
            <ResultsModal>
              <EmailForm onSend={closeSaveModal} />
            </ResultsModal>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ResultSimpleView
