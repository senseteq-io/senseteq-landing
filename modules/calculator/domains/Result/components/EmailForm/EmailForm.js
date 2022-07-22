import { Button, Input, Text } from '../../../../components'
import { collection, doc, setDoc } from 'firebase/firestore'

import { COLLECTIONS } from '../../../../__constants__'
import { firestore } from '../../../../../../services/firebase'
import ls from '../../../../utils/ls'
import { useCalculator } from '../../../../contexts/Calculator'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const EmailForm = ({ onSend }) => {
  const { t } = useTranslation()
  const { calculatorData } = useCalculator()
  const [email, setEmail] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const onChange = (e) => setEmail(e.target.value)
  const send = async () => {
    if (email) {
      const resultRef = doc(
        collection(firestore, COLLECTIONS.CALCULATOR_RESULTS)
      )
      await setDoc(resultRef, {
        id: resultRef.id,
        email,
        adv: localStorage.getItem('s_adv') || 'EMPTY',
        geo: localStorage.getItem('s_geo') || 'EMPTY',
        gender: localStorage.getItem('s_g') || 'EMPTY',
        calculatorData,
        appLink: window?.location?.href + `?id=${resultRef.id}`
      })
      setIsSaved(true)

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
            {t('calculator.result.email_form.success')}
          </Text>
        </div>
      ) : (
        <>
          <div className="col-12 col-md justify-content-center d-flex">
            <Input
              role="textbox"
              contenteditable="true"
              aria-placeholder={t('calculator.result.email_form.placeholder')}
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
        </>
      )}
    </div>
  )
}

export default EmailForm
