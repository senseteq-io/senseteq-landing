import { useCallback } from 'react'
import DeviceDetector from 'device-detector-js'
import { collection, doc, setDoc } from 'firebase/firestore'
import { firestore, devFirestore } from '../../../../../services'
import { BOOKING_MODULE_LINK, COLLECTIONS } from '../../../__constants__'
import { useCalculator } from '../../../contexts/Calculator'

const useSaveResults = () => {
  const { calculatorData } = useCalculator()

  return useCallback(
    async (email = null) => {
      const deviceDetector = new DeviceDetector()
      const device = deviceDetector.parse(window?.navigator?.userAgent)
      const isDev = JSON.parse(localStorage.getItem('isDev'))

      const firestoreInstance = isDev ? devFirestore : firestore

      const resultRef = doc(
        collection(firestoreInstance, COLLECTIONS.CALCULATOR_RESULTS)
      )
      await setDoc(resultRef, {
        id: resultRef.id,
        email,
        adv: localStorage.getItem('s_adv') || 'EMPTY',
        geo: localStorage.getItem('s_geo') || 'EMPTY',
        gender: localStorage.getItem('s_g') || 'EMPTY',
        calculatorData: calculatorData || null,
        appLink: window?.location?.href + `?id=${resultRef.id}`,
        bookingModuleLink: `${BOOKING_MODULE_LINK}?calculatorResultId=${resultRef.id}`,
        device: device || null,
        _createdAt: new Date().toISOString()
      })
      return resultRef.id
    },
    [calculatorData]
  )
}

export default useSaveResults
