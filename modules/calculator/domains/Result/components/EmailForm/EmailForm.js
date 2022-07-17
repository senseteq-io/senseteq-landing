import { Button, Input } from '../../../../components'
import { collection, doc, setDoc } from 'firebase/firestore'

import { firestore } from '../../../../../../services/firebase'
import { useCalculator } from '../../../../contexts/Calculator'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const EmailForm = ({ onSend }) => {
  const { t } = useTranslation()
  const { calculatorData } = useCalculator()
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)
  const send = async () => {
    if (email) {
      const resultRef = doc(collection(firestore, 'calculatorResults'))
      await setDoc(resultRef, {
        id: resultRef.id,
        email,
        calculatorData
      })
      onSend()
    }
  }

  return (
    <div className="row">
      <div className="col-12 col-md justify-content-center d-flex">
        <Input
          autoFocus
          type="email"
          value={email}
          onChange={onChange}
          placeholder={t('calculator.result.email_form.placeholder')}
        />
      </div>
      <div className="col-12 col-md-auto justify-content-center d-flex">
        <Button variant="lg" shape="rounded" onClick={send}>
          {t('calculator.result.email_form.buttons.send')}
        </Button>
      </div>
    </div>
  )
}

export default EmailForm
