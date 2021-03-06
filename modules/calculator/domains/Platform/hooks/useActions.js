import Router from 'next/router'
import ls from '../../../utils/ls'
import { useNavigator } from '../../../hooks'
import { useTranslation } from 'next-i18next'

const useActions = () => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const { t } = useTranslation()

  const [prev, next, progress] = useNavigator(ls.get())

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
