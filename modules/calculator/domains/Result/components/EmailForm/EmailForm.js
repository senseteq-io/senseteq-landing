import { Button, Input } from '../../../../components'

import { useTranslation } from 'next-i18next'

const EmailForm = () => {
  const { t } = useTranslation()
  return (
    <div className="row">
      <div className="col-12 col-md justify-content-center d-flex">
        <Input
          autoFocus
          type="email"
          placeholder={t('calculator.result.email_form.placeholder')}
        />
      </div>
      <div className="col-12 col-md-auto justify-content-center d-flex">
        <Button variant="lg" shape="rounded">
          {t('calculator.result.email_form.buttons.send')}
        </Button>
      </div>
    </div>
  )
}

export default EmailForm
