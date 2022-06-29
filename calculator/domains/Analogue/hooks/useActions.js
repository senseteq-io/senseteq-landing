import Router from 'next/router'
import ls from '../../../utils/ls'
import { useTranslation } from 'next-i18next'

const useActions = () => {
  /* A hook that allows us to use the `t` function to translate our text. */
  const { t } = useTranslation()

  /**
   * `onGetStarted` is a function that saves the value `true` to the `welcome` key in local storage,
   * and then redirects the user to the `/mvp-calculator/platforms` page
   */
  const onGetStarted = () => {
    /* It's saving the value `true` to the `welcome` key in local storage. */
    ls.save('welcome', true);

    /* It's redirecting the user to the `/mvp-calculator/platforms` page. */
    Router.push(`/${t('calculator.paths.mvp_calculator')}/${t('calculator.paths.platforms')}`);
  }

  return { onGetStarted }
}

export default useActions