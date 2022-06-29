import useBuildPath from './useBuildPath'
import { useTranslation } from 'next-i18next'

/**
 * It takes in an object of routes and returns an object of the current route
 * @param routes - An object that contains the routes.
 * @returns An object with the following properties:
 * - type: The type of route.
 * - selected: The value of the route.
 * - parent: The parent route.
 * - parentSelected: The value of the parent route.
 * - extraStep: The extra step route.
 * - path: The translated path.
 */
const useCurrentRoute = (routes) => {
  /* A hook from next-i18next that allows us to translate the path. */
  const { t } = useTranslation()

  /* A custom hook that builds the path based on the routes. */
  const path = useBuildPath(routes)

  /* Destructuring the routes object. */
  const { baseRoute, baseRouteValue, nestedRoute, nestedRouteValue, extraStepRoute } = routes

  return {
    type: nestedRoute || baseRoute,
    selected: nestedRouteValue || baseRouteValue,
    parent: nestedRoute && baseRoute ? baseRoute : null,
    parentSelected: nestedRoute && baseRoute && baseRouteValue ? baseRouteValue : null,
    extraStep: extraStepRoute,
    path: t(path)
  }
}

export default useCurrentRoute