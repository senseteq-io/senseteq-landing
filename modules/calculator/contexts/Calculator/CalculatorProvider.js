import { Progress, Spinner } from '../../components'
import Router, { useRouter } from 'next/router'

import CalculatorContext from './CalculatorContext'
import { useNavigator } from '../../hooks'

/* It's a React component that is wrapping the `<Calculator />` component. */
const CalculatorProvider = ({
  calculatorData,
  updateCalculatorField,
  loading,
  savedResult,
  children,
  reset,
  geo,
  g,
  adv
}) => {
  /* 
    It's using the `useCalculatorNavigator` hook to get the 
    previous and next routes. 
  */
  const [prevRoute, nextRoute, progress] = useNavigator(calculatorData)
  const router = useRouter()

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
        savedResult,
        reset,
        geo,
        g,
        adv
      }}>
      {!router?.query?.id ? <Progress progress={progress} /> : null}
      {loading ? <Spinner /> : children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorProvider
