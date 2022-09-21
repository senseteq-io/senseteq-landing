import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { EMAIL_REGEX } from '../../../../__constants__'
import { Input } from '../../../../components'
import Button from '../../../../components/elements/Button'
import Text from '../../../../components/elements/Typography/Text'
import { useCalculator } from '../../../../contexts/Calculator'

const InnerEmailForm = (props) => {
  const { buttonText, onClick, defaultValue, loading, inputVariant } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslation()
  const { updateCalculatorField } = useCalculator()

  // [COMPONENT_STATE_HOOKS]
  const [email, setEmail] = useState(defaultValue || '')
  const [error, setError] = useState(false)

  const onEmailSubmit = () => {
    if (!email) {
      return setError(t('calculator.result.email_form.error_messages.exists'))
    }
    if (new RegExp(EMAIL_REGEX).test(email)) {
      onClick?.(email)
      updateCalculatorField('userEmail', email)
    } else {
      setError(t('calculator.result.email_form.error_messages.valid'))
    }
  }
  const onInputChange = (e) => {
    if (error) {
      setEmail(e.target.value)

      if (new RegExp(EMAIL_REGEX).test(e.target.value)) {
        setError(false)
      } else if (e.target.value) {
        setError(false)
      }
    } else {
      setEmail(e.target.value)
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      setEmail(e.target.value)
      onEmailSubmit()
    }
  }

  return (
    <div className="row">
      <div className="col">
        <Input
          onKeyPress={handleKeyPress}
          variant={inputVariant}
          required
          contentEditable="true"
          aria-placeholder={t('calculator.result.email_form.placeholder')}
          autoFocus
          value={email}
          onChange={onInputChange}
          type="email"
          placeholder={t('calculator.result.email_form.placeholder')}
        />
        <Text style={{ opacity: !error && 0 }} variant="danger">
          {error || t('calculator.result.email_form.error_messages.valid')}
        </Text>
      </div>

      <div className="col-auto">
        <Button
          variant="lg"
          shape="rounded"
          role="button"
          loading={loading}
          onClick={onEmailSubmit}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default InnerEmailForm
