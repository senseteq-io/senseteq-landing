import CalculatorContext from './CalculatorContext'
import { Progress } from '../../components'
import Router from 'next/router'
import { useNavigator } from '../../hooks'

/* It's a React component that is wrapping the `<Calculator />` component. */
const CalculatorProvider = ({
  calculatorData,
  updateCalculatorField,
  loading,
  savedResult,
  children
}) => {
  /* 
    It's using the `useCalculatorNavigator` hook to get the 
    previous and next routes. 
  */
  const [prevRoute, nextRoute, progress] = useNavigator(calculatorData)

  // ACTIONS
  const onNext = () => Router.push(nextRoute)
  const onPrev = () => Router.push(prevRoute)
  const onSelect = (type, value) => {
    updateCalculatorField(type, value)
    Router.push(nextRoute)
  }

  return (
    <CalculatorContext.Provider
      value={{
        onNext,
        onPrev,
        onSelect,
        calculatorData,
        savedResult
      }}>
      <Progress progress={progress} />
      {loading ? <>Please, wait. Loading...</> : children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorProvider
