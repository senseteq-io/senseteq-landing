import Router from 'next/router'
import ls from '../../../utils/ls'
import { useNavigator } from '../../../hooks'
import { useTranslation } from 'next-i18next'

const useActions = () => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const { t } = useTranslation()

  const [prev, next, progress] = useNavigator(ls.get())

  /**
   * `onGetStarted` is a function that saves the value `true` to the `welcome` key in local storage,
   * and then redirects the user to the `/mvp-calculator/platforms` page
   */
  const onGetStarted = () => {
    /* It's saving the value `true` to the `welcome` key in local storage. */
    ls.save('welcome', true)

    /* It's redirecting the user to the `/mvp-calculator/platforms` page. */
    Router.push(next)
  }

  return { onGetStarted }
}

export default useActions
