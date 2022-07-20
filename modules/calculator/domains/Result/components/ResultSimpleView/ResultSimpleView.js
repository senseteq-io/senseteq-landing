import { Modal, useModal } from '../../../../components'
import { useFeatures, usePrice } from '../../hooks'

import EmailForm from '../EmailForm'
import ResultActions from '../ResultActions'
import ResultDetails from '../ResultDetails'
import ResultEstimations from '../ResultEstimations'
import ResultHeader from '../ResultHeader'
import ResultsModal from '../ResultsModal'
import Router from 'next/router'
import ls from '../../../../utils/ls'
import { useTranslation } from 'next-i18next'

const ResultSimpleView = () => {
  const { t } = useTranslation()
  const features = useFeatures()
  const { price, weeks } = usePrice()
  const [isSaveModalVisible, openSaveModal, closeSaveModal] = useModal()

  const restart = () => {
    ls.clear()
    Router.push(`/s/${t('calculator.paths.mvp_calculator')}`)
  }

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-9">
          <ResultHeader />
          <ResultDetails features={features} />
          <ResultEstimations weeks={weeks} price={price} />
          <ResultActions onOpenSaveModal={openSaveModal} restart={restart} />
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
