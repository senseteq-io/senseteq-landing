import { useCallback } from 'react'
import DeviceDetector from 'device-detector-js'
import { DEV_URL, PROD_URL } from '../../../../../constants/backendUrls'
import {
  BOOKING_MODULE_LINK,
  BOOKING_MODULE_LINK_DEV
} from '../../../__constants__'
import { useCalculator } from '../../../contexts/Calculator'

const useSaveResults = () => {
  const { calculatorData } = useCalculator()

  return useCallback(
    async (email = null) => {
      const deviceDetector = new DeviceDetector()
      const device = deviceDetector.parse(window?.navigator?.userAgent)
      const isDev = JSON.parse(localStorage.getItem('isDev'))

      const fetchUrl = `${isDev ? DEV_URL : PROD_URL}/calculatorResults/create`

      const res = await fetch(fetchUrl, {
        method: 'POST',
        headers: { Origin: 'mvp-calculator' },
        body: JSON.stringify({
          email,
          adv: localStorage.getItem('s_adv') || 'EMPTY',
          geo: localStorage.getItem('s_geo') || 'EMPTY',
          gender: localStorage.getItem('s_g') || 'EMPTY',
          calculatorData: calculatorData || null,
          appLink: window?.location?.href,
          bookingModuleLink: isDev
            ? BOOKING_MODULE_LINK_DEV
            : BOOKING_MODULE_LINK,
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
