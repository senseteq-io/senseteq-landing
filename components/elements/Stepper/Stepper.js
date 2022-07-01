import { useTranslation } from 'next-i18next'

const Stepper = (props) => {
  const { stepperConfig } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="stepper">
      {stepperConfig?.map(({ name, description }, index) => (
        <div key={name} className={'step-wrapper '}>
          <div className="step-content">
            <div className="step-tail" />
            <div className="step-number">{index + 1}</div>
            <p className="name">{t(name)}</p>
            <p className="body2 description">{t(description)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stepper
