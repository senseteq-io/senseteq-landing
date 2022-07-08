import { CUSTOMERS_SLIDES } from '../../__constants__'
import { CustomerSlide } from '../../components'
import { Slider } from '../../../../components'

/**
 * It returns a Slider component that has a data prop set to the CUSTOMERS_SLIDES constant and a
 * sliderComponent prop set to the CustomerSlide component
 * @returns A Slider component with the data prop set to the CUSTOMERS_SLIDES array and the
 * sliderComponent prop set to the CustomerSlide component.
 */
const CustomerSlider = () => {
  return <Slider data={CUSTOMERS_SLIDES} sliderComponent={CustomerSlide} />
}

export default CustomerSlider
