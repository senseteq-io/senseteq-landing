import {
  BOOKING_MODULE_LINK,
  BOOKING_MODULE_LINK_DEV
} from '../../../../__constants__'
import { Modal, useModal } from '../../../../components'
import { useCalculator } from '../../../../contexts/Calculator'
import { useIsDev } from '../../../../hooks'
import { usePrice } from '../../../Price/hooks'
import { useFeatures, useSaveResults } from '../../hooks'

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
  const { t, i18n } = useTranslation()
  const features = useFeatures()
  const { price, weeks } = usePrice()
  const [isSaveModalVisible, openSaveModal, closeSaveModal] = useModal()
  const { query } = useRouter()
  const saveResults = useSaveResults()
  const { calculatorData } = useCalculator()
  const isDev = useIsDev()

  // [HELPER_FUNCTIONS]
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
      `${isDev ? BOOKING_MODULE_LINK_DEV : BOOKING_MODULE_LINK}/${
        i18n.language
      }?calculatorResultId=${calculatorResultId}`,
      '_blank'
    )
  }
  const onShareResults = async () => {
    if (calculatorData?.userEmail) {
      await saveResults(calculatorData?.userEmail)
    }
    openSaveModal()
  }

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-9">
          <ResultHeader />
          <ResultDetails features={features} />
          <ResultEstimations weeks={weeks} price={price} />
          <ResultActions
            onOpenSaveModal={onShareResults}
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
