import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'
import DeviceDetector from 'device-detector-js'
import { DEV_URL, PROD_URL } from '../../../../../constants/backendUrls'
import {
  BOOKING_MODULE_LINK,
  BOOKING_MODULE_LINK_DEV
} from '../../../__constants__'
import { useCalculator } from '../../../contexts/Calculator'

const useSaveResults = () => {
  // [ADDITIONAL_HOOKS]
  const { calculatorData } = useCalculator()
  const { i18n } = useTranslation()

  return useCallback(
    async (email = null) => {
      const deviceDetector = new DeviceDetector()
      const device = deviceDetector.parse(window?.navigator?.userAgent)
      const isDev = JSON.parse(localStorage.getItem('isDev'))

      const fetchUrl = `${isDev ? DEV_URL : PROD_URL}/calculatorResults/create`

      const { userEmail, ...restCalculatorData } = calculatorData
      const customerEmail = email || userEmail || null

      const res = await fetch(fetchUrl, {
        method: 'POST',
        headers: { Origin: 'mvp-calculator' },
        body: JSON.stringify({
          email: customerEmail,
          adv: localStorage.getItem('s_adv') || 'EMPTY',
          geo: localStorage.getItem('s_geo') || 'EMPTY',
          gender: localStorage.getItem('s_g') || 'EMPTY',
          calculatorData: restCalculatorData || null,
          appLink: window?.location?.href,
          bookingModuleLink: `${
            isDev ? BOOKING_MODULE_LINK_DEV : BOOKING_MODULE_LINK
          }/${i18n.language}`,
          device: device || null,
          _createdAt: new Date().toISOString()
        })
      })
      const { calculatorResultId } = await res.json()

      return calculatorResultId
    },
    [calculatorData]
  )
}

export default useSaveResults
