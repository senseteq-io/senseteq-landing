import { useTranslation } from 'next-i18next'

/**
 * It takes in a route object and returns an object with the meta data for that route
 * @param routes - {
 */
const useMetaData = (routes) => {
  const { t } = useTranslation()

  /* 
    Checking if the route object has a baseRoute, baseRouteValue, and nestedRoute. If it does not,
    then it returns the meta data for the welcome page. 
  */
  if (!routes?.baseRoute && !routes?.baseRouteValue && !routes?.nestedRoute) {
    return {
      title: t(`calculator.head.welcome.title`),
      description: t(`calculator.head.welcome.description`),
      meta_description: t(`calculator.head.welcome.meta_description`),
      keywords: t(`calculator.head.welcome.keywords`)
    }
  } else if (
    routes.baseRoute &&
    !routes.baseRouteValue &&
    !routes.nestedRoute
  ) {
    /* 
      Checking if the route object has a baseRoute, baseRouteValue, and nestedRoute. If it does not,
      then it returns the meta data for the welcome page. 
    */
    return {
      title: t(`calculator.head.${routes.baseRoute}.title`),
      description: t(`calculator.head.${routes.baseRoute}.description`),
      meta_description: t(
        `calculator.head.${routes.baseRoute}.meta_description`
      ),
      keywords: t(`calculator.head.${routes.baseRoute}.keywords`)
    }
  } else if (routes.baseRoute && routes.baseRouteValue && !routes.nestedRoute) {
    return {
      title: t(
        `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.title`
      ),
      description: t(
        `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.description`
      ),
      meta_description: t(
        `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.meta_description`
      ),
      keywords: t(
        `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.keywords`
      )
    }
  } else if (
    routes.baseRoute &&
    routes.baseRouteValue &&
    routes.nestedRoute &&
    !routes.nestedRouteValue
  ) {
    if (routes.baseRoute === 'platforms') {
      return {
        title: t(
          `calculator.head.${routes.nestedRoute}.${routes.baseRoute}.${routes.baseRouteValue}.title`
        ),
        description: t(
          `calculator.head.${routes.nestedRoute}.${routes.baseRoute}.${routes.baseRouteValue}.description`
        ),
        meta_description: t(
          `calculator.head.${routes.nestedRoute}.${routes.baseRoute}.${routes.baseRouteValue}.meta_description`
        ),
        keywords: t(
          `calculator.head.${routes.nestedRoute}.${routes.baseRoute}.${routes.baseRouteValue}.keywords`
        )
      }
    } else {
      return {
        title: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.title`
        ),
        description: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.description`
        ),
        meta_description: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.meta_description`
        ),
        keywords: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.keywords`
        )
      }
    }
  } else if (
    routes.baseRoute &&
    routes.baseRouteValue &&
    routes.nestedRoute &&
    routes.nestedRouteValue
  ) {
    if (routes.baseRoute === 'platforms') {
      return {
        title: t(
          `calculator.head.${routes.nestedRoute}.${routes.nestedRouteValue}.${routes.baseRoute}.${routes.baseRouteValue}.title`
        ),
        description: t(
          `calculator.head.${routes.nestedRoute}.${routes.nestedRouteValue}.${routes.baseRoute}.${routes.baseRouteValue}.description`
        ),
        meta_description: t(
          `calculator.head.${routes.nestedRoute}.${routes.nestedRouteValue}.${routes.baseRoute}.${routes.baseRouteValue}.meta_description`
        ),
        keywords: t(
          `calculator.head.${routes.nestedRoute}.${routes.nestedRouteValue}.${routes.baseRoute}.${routes.baseRouteValue}.keywords`
        )
      }
    } else {
      return {
        title: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.${routes.nestedRouteValue}.title`
        ),
        description: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.${routes.nestedRouteValue}.description`
        ),
        meta_description: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.${routes.nestedRouteValue}.meta_description`
        ),
        keywords: t(
          `calculator.head.${routes.baseRoute}.${routes.baseRouteValue}.${routes.nestedRoute}.${routes.nestedRouteValue}.keywords`
        )
      }
    }
  }

  return {}
}

export default useMetaData
