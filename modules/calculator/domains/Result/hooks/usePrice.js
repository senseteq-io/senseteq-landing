import {
  ANALOG_MODELS,
  HOUR_RATE,
  MODEL_ESTIMATIONS,
  USD_TO_NOK
} from '../../../__constants__'

import { useCalculator } from '../../../contexts/Calculator'

const getApplicationAmount = (platforms, administration) => {
  let applicationAmount = platforms === 'WEB' || platforms === 'MOBILE' ? 1 : 2
  if (administration === 'YES') applicationAmount++
  return applicationAmount
}

const getPrice = ({
  applicationAmount,
  modelsAmount,
  appearance,
  authentication,
  brand,
  externalService,
  localization,
  revenue
}) => {
  let hours = applicationAmount * modelsAmount * MODEL_ESTIMATIONS

  if (appearance) hours += 80
  if (authentication) hours += 20
  if (brand) hours += 20
  if (externalService) hours += 160
  if (localization) hours += 40
  if (revenue) hours += 80

  return {
    price: hours * HOUR_RATE * USD_TO_NOK,
    weeks: Math.ceil(hours / 6 / 4 / 5)
  }
}

const usePrice = () => {
  /* It's a custom hook that returns the data from the calculator. */
  const { calculatorData } = useCalculator()
  const {
    platforms,
    administration,
    analogues,
    appearance,
    authentication,
    brand,
    external_service,
    localization,
    revenue
  } = calculatorData
  const applicationAmount = getApplicationAmount(platforms, administration)
  const modelsAmount = ANALOG_MODELS[analogues]
  const { price, weeks } = getPrice({
    applicationAmount,
    modelsAmount,
    appearance: appearance === 'FANTASTIC',
    authentication: authentication === 'YES',
    brand: brand === 'YES',
    externalService: external_service === 'YES',
    localization: localization === 'YES',
    revenue: revenue === 'SUBSCRIPTION' || revenue === 'IN_APP'
  })

  return { price, weeks }
}

export default usePrice
