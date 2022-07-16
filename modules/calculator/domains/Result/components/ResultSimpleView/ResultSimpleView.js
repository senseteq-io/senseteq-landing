import { Modal, useModal } from '../../../../components'
import { useFeatures, usePrice } from '../../hooks'

import EmailForm from '../EmailForm'
import ResultActions from '../ResultActions'
import ResultDetails from '../ResultDetails'
import ResultEstimations from '../ResultEstimations'
import ResultHeader from '../ResultHeader'
import ResultsModal from '../ResultsModal'

const ResultSimpleView = () => {
  const features = useFeatures()
  const { price, weeks } = usePrice()
  const [isSaveModalVisible, openSaveModal, closeSaveModal] = useModal()

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-9">
          <ResultHeader />
          <ResultDetails features={features} />
          <ResultEstimations weeks={weeks} price={price} />
          <ResultActions onOpenSaveModal={openSaveModal} />
          <Modal visible={isSaveModalVisible} onClose={closeSaveModal}>
            <ResultsModal>
              <EmailForm />
            </ResultsModal>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ResultSimpleView
