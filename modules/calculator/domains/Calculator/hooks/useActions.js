import Router from 'next/router'
import { useNavigator } from '../../../hooks'
import ls from '../../../utils/ls'

const useActions = () => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const next = useNavigator(ls.get())[1]

  /**
   * It saves a value to the local storage and then redirects the user to the next page
   */
  const onGetStarted = () => {
    /* It saves a value to the local storage and then redirects the user to the next page */
    ls.save('welcome', true)

    /* Redirecting the user to the next page. */
    Router.push(next)
  }

  return { onGetStarted }
}

export default useActions
