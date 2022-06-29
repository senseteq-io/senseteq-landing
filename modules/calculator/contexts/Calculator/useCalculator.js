import CalculatorContext from './CalculatorContext'
import { useContext } from 'react'

const useCalculator = () => useContext(CalculatorContext)

export default useCalculator
