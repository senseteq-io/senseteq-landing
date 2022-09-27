import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'
import DeviceDetector from 'device-detector-js'
import { COLLECTIONS } from '../../../__constants__'
import { useCalculator } from '../../../contexts/Calculator'
import { createDocument, getDocId } from '../../../services/firestore'
import ls from '../../../utils/ls'

const useSaveResults = () => {
  // [ADDITIONAL_HOOKS]
  const { calculatorData } = useCalculator()
  const { i18n } = useTranslation()

  return useCallback(
    async (email = null) => {
      const deviceDetector = new DeviceDetector()
      const device = deviceDetector.parse(window?.navigator?.userAgent)

      const calculatorResultId =
        ls.get('calculatorResultId') || getDocId(COLLECTIONS.CALCULATOR_RESULTS)

      const { userEmail, ...restCalculatorData } = calculatorData
      const customerEmail = email || userEmail || null

      await createDocument({
        collection: COLLECTIONS.CALCULATOR_RESULTS,
        id: calculatorResultId,
        data: {
          email: customerEmail,
          adv: localStorage.getItem('s_adv') || 'EMPTY',
          geo: localStorage.getItem('s_geo') || 'EMPTY',
          gender: localStorage.getItem('s_g') || 'EMPTY',
          calculatorData: restCalculatorData || null,
          appLink: `${window?.location?.href}?id=${calculatorResultId}`,
          bookingModuleLink: `${process.env.NEXT_PUBLIC_BOOKING_MODULE_LINK}/${i18n.language}?calculatorResultId=${calculatorResultId}`,
          device: device || null
        }
      })
      ls.save('calculatorResultId', calculatorResultId)
      return calculatorResultId
    },
    [calculatorData]
  )
}

export default useSaveResults
