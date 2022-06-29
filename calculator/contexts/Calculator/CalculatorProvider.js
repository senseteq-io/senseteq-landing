import CalculatorContext from './CalculatorContext'
import Router from 'next/router'
import { useNavigator } from '../../hooks'

/* It's a React component that is wrapping the `<Calculator />` component. */
const CalculatorProvider = ({
  calculatorData,
  updateCalculatorField,
  children
}) => {
  /* 
    It's using the `useCalculatorNavigator` hook to get the 
    previous and next routes. 
  */
  const [prevRoute, nextRoute] = useNavigator(calculatorData)

  // ACTIONS
  const onNext = () => Router.push(nextRoute)
  const onPrev = () => Router.push(prevRoute)
  const onSelect = (type, value) => {
    updateCalculatorField(type, value)
    Router.push(nextRoute)
  }

  return (
    <CalculatorContext.Provider value={{
      onNext,
      onPrev,
      onSelect,
      calculatorData
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorProvider