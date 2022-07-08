import { PROCESS_STEPS } from '../../__constants__'
import { Stepper } from '../../../../components'

/**
 * @returns ProcessStepper component by passing the constant PROCESS_STEPS to the Stepper component.
 */

const ProcessStepper = () => {
  return <Stepper stepperConfig={PROCESS_STEPS} />
}

export default ProcessStepper
