import ls from '../utils/ls'
import { useEffect } from 'react'

const useLS = (calculatorData) => {
  useEffect(() => {
    ls.update(calculatorData)
  }, [calculatorData])
}

export default useLS