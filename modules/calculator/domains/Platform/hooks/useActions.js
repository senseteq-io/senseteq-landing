import Router from 'next/router'
import ls from '../../../utils/ls'
import { useTranslation } from 'next-i18next'

const useActions = () => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const { t } = useTranslation()

  /**
   * It saves a value to the local storage and then redirects the user to the next page
   */
  const onGetStarted = () => {
    /* It saves a value to the local storage and then redirects the user to the next page */
    ls.save('welcome', true)

    /* Redirecting the user to the next page. */
    Router.push(
      `/${t('calculator.paths.mvp_calculator')}/${t(
        'calculator.paths.analogues'
      )}`
    )
  }

  return { onGetStarted }
}

export default useActions
