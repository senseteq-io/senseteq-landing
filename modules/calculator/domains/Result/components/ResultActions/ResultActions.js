import { useState } from 'react'
import { Button } from '../../../../components'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useCalculator } from '../../../../contexts/Calculator'

const ResultActions = ({ onOpenSaveModal, restart, onScheduleMeeting }) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()
  const { query } = useRouter()
  const { calculatorData } = useCalculator()

  const [scheduleButtonLoading, setScheduleButtonLoading] = useState(false)
  const [openModalButtonLoading, setOpenModalButtonLoading] = useState(false)

  const handleOnScheduleMeeting = async () => {
    setScheduleButtonLoading(true)
    await onScheduleMeeting()
    setScheduleButtonLoading(false)
  }
  const handleOpenModal = async () => {
    if (calculatorData?.userEmail) {
      setOpenModalButtonLoading(true)
      await onOpenSaveModal()
      setOpenModalButtonLoading(false)
    } else {
      onOpenSaveModal()
    }
  }

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md-9 mb-4">
        <div className="row align-items-center justify-content-center">
          {!query?.id ? (
            <div className="d-flex col-12 mb-4 justify-content-center">
              <Button
                role="button"
                aria-haspopup="true"
                block
                variant="lg"
                shape="rounded"
                loading={openModalButtonLoading}
                onClick={handleOpenModal}>
                {t('calculator.result.buttons.save_and_share')}
              </Button>
            </div>
          ) : null}
          <div className="d-flex col-12 mb-4 justify-content-center">
            <Button
              role="button"
              block
              variant="lg"
              shape="rounded"
              loading={scheduleButtonLoading}
              onClick={handleOnScheduleMeeting}>
              {t('calculator.result.buttons.schedule_meeting')}
            </Button>
          </div>
          <div className="d-flex col-12 mb-4 justify-content-center">
            <Button
              role="button"
              block
              variant="lg"
              shape="rounded"
              onClick={restart}>
              {t('calculator.result.buttons.start_again')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultActions
