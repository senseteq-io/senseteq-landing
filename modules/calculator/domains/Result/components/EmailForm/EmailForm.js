import { Button, Input, Text } from '../../../../components'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useSaveResults } from '../../hooks'

const EmailForm = ({ onSend }) => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [isSaved, setIsSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const saveResults = useSaveResults()
  const onChange = (e) => setEmail(e.target.value)

  const send = async () => {
    if (email) {
      setLoading(true)
      await saveResults(email)

      setIsSaved(true)
      setLoading(false)

      setTimeout(() => {
        onSend()
      }, 30000)
    }
  }

  return (
    <div className="row">
      {isSaved ? (
        <div className="col-12 justify-content-center d-flex">
          <Text subtitle align="center">
            <span
              dangerouslySetInnerHTML={{
                __html: t('calculator.result.email_form.success')
              }}
            />
          </Text>
        </div>
      ) : (
        <>
          <div className="col-12 col-md justify-content-center d-flex">
            <Input
              role="textbox"
              contentEditable="true"
              aria-placeholder={t('calculator.result.email_form.placeholder')}
              autoFocus
              type="email"
              value={email}
              onChange={onChange}
              placeholder={t('calculator.result.email_form.placeholder')}
            />
          </div>
          <div className="col-12 col-md-auto justify-content-center d-flex">
            <Button
              variant="lg"
              shape="rounded"
              onClick={send}
              disabled={loading}>
              {t('calculator.result.email_form.buttons.send')}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default EmailForm
