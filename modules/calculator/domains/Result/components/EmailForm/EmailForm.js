import { Text } from '../../../../components'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useCalculator } from '../../../../contexts/Calculator'
import { useIncreaseStatisticCounter } from '../../../../hooks'
import { useSaveResults } from '../../hooks'
import InnerEmailForm from '../InnerEmailForm'

const EmailForm = ({ onSend }) => {
  const { t } = useTranslation()
  const { calculatorData } = useCalculator()
  const writeStatistic = useIncreaseStatisticCounter()

  const [isSaved, setIsSaved] = useState(!!calculatorData?.userEmail || false)
  const [loading, setLoading] = useState(false)
  const saveResults = useSaveResults()

  const send = async (email) => {
    if (email) {
      setLoading(true)
      await saveResults(email)
      writeStatistic({
        field: 'totalNumberOfSendingResultsToEmail',
        functionName: 'EmailForm'
      })
      setIsSaved(true)
      setLoading(false)

      setTimeout(() => {
        onSend()
      }, 30000)
    }
  }

  return isSaved ? (
    <div className="row">
      <div className="col-12 justify-content-center d-flex">
        <Text subtitle align="center">
          <span
            dangerouslySetInnerHTML={{
              __html: t('calculator.result.email_form.success')
            }}
          />
        </Text>
      </div>
    </div>
  ) : (
    <InnerEmailForm
      inputVariant="transparent"
      defaultValue={calculatorData?.userEmail}
      loading={loading}
      onClick={send}
      buttonText={t('calculator.result.email_form.buttons.send')}
    />
  )
}

export default EmailForm
