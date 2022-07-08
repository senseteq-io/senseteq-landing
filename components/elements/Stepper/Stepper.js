import { Text, Title } from '../../elements'

import { useTranslation } from 'next-i18next'

/**
 * It takes in a list of steps and renders them
 * @returns Stepper component by passed stepper config
 */
const Stepper = (props) => {
  const { stepperConfig } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="stepper">
      {stepperConfig?.map(({ name, description }, index) => (
        <div key={name} className="step-wrapper">
          <div className="step-content">
            <div className="step-tail" />
            <div className="step-number">{index + 1}</div>
            <Title as="h3">{t(name)}</Title>
            <Text>{t(description)}</Text>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stepper
