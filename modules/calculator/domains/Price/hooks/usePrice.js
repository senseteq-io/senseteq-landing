import moment from 'moment'
import { useEffect } from 'react'
import {
  ANALOG_MODELS,
  HOUR_RATE,
  MODEL_ESTIMATIONS,
  STATISTIC_COLLECTIONS,
  USD_TO_NOK
} from '../../../__constants__'
import { useCalculator } from '../../../contexts/Calculator'
import { setValue } from '../../../services/database'
import ls from '../../../utils/ls'

const getApplicationAmount = (platforms, administration) => {
  let applicationAmount =
    platforms === 'WEB' || platforms === 'MOBILE' || !platforms ? 1 : 2
  if (administration === 'YES') applicationAmount++
  return applicationAmount
}

const getPrice = ({
  applicationAmount,
  modelsAmount,
  appearance,
  authentication,
  AI,
  brand,
  externalService,
  localization,
  revenue,
  maybeAppearance,
  maybeAuthentication,
  maybeAI,
  maybeBrand,
  maybeExternalService,
  maybeLocalization,
  maybeRevenue
}) => {
  let hours = (applicationAmount || 1) * modelsAmount * MODEL_ESTIMATIONS

  if (appearance) hours += 80
  if (AI) hours += 160
  if (maybeAI) hours += 80
  if (maybeAppearance) hours += 40
  if (authentication) hours += 20
  if (maybeAuthentication) hours += 10
  if (brand) hours += 20
  if (maybeBrand) hours += 10
  if (externalService) hours += 160
  if (maybeExternalService) hours += 80
  if (localization) hours += 40
  if (maybeLocalization) hours += 20
  if (revenue) hours += 80
  if (maybeRevenue) hours += 40

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
    revenue,
    ai
  } = calculatorData
  const applicationAmount = getApplicationAmount(platforms, administration)
  const modelsAmount = ANALOG_MODELS[analogues]
  const { price, weeks } = getPrice({
    applicationAmount,
    modelsAmount,
    appearance: appearance === 'FANTASTIC',
    maybeAppearance: appearance === 'NOT_SURE',
    authentication: authentication === 'YES',
    maybeAuthentication: authentication === 'NOT_SURE',
    AI: ai === 'YES',
    maybeAI: ai === 'NOT_SURE',
    brand: brand === 'YES',
    maybeBrand: brand === 'NOT_SURE',
    externalService: external_service === 'YES',
    maybeExternalService: external_service === 'NOT_SURE',
    localization: localization === 'YES',
    maybeLocalization: localization === 'NOT_SURE',
    revenue: revenue === 'SUBSCRIPTION' || revenue === 'IN_APP',
    maybeRevenue: revenue === 'NOT_SURE'
  })

  const { paymentOption } = calculatorData

  useEffect(() => {
    let statisticDocumentId = ls.get('statisticId')
    if (statisticDocumentId && !isNaN(price) && paymentOption) {
      const today = moment().utc().startOf('day').valueOf()

      setValue({
        path: `${STATISTIC_COLLECTIONS.PRICE_STATISTIC}/${today}/${statisticDocumentId}`,
        value: {
          price: paymentOption === 'PART_PAYMENT' ? price * 1.2 : price,
          paymentOption
        }
      }).catch((error) => {
        console.error('error in usePrice while setting price value:', error)
      })
    }
  }, [price, paymentOption])

  return { price, weeks }
}

export default usePrice
