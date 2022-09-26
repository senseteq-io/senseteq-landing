import {
  AnalogueQuestion,
  AnalogueWelcome
} from '../domains/Analogue/components'
import {
  IndustryQuestion,
  IndustryWelcome
} from '../domains/Industry/components'
import {
  PlatformQuestion,
  PlatformWelcome
} from '../domains/Platform/components'
import { useEffect, useMemo, useState } from 'react'

import { AdministrationQuestion } from '../domains/Administration/components'
import { AppearanceQuestion } from '../domains/Appearance/components'
import { AuthenticationQuestion } from '../domains/Authentication/components'
import { BrandQuestion } from '../domains/Brand/components'
import { CalculatorWelcome } from '../domains/Calculator/components'
import { ExternalServiceQuestion } from '../domains/ExternalService/components'
import { LocalizationQuestion } from '../domains/Localization/components'
import { ResultSimpleView } from '../domains/Result/components'
import { RevenueQuestion } from '../domains/Revenue/components'
import ls from '../utils/ls'

/**
 * It's a React hook that allows us to use state in a functional component
 * @param routes - It's an object that contains the `baseRoute`, `baseRouteValue`, `nestedRoute`, and
 * @returns It's returning the `currentPage` state.
 */
const usePages = (routes) => {
  /* It's a React hook that allows us to use state in a functional component. */
  const [currentPage, setCurrentPage] = useState()

  /* It's a React hook that allows us to use state in a functional component. */
  const [isWelcomeSeen, setIsWelcomeSeen] = useState()

  /* It's a React hook that allows us to use state in a functional component. */
  const [options, setOptions] = useState({})

  const pagesMap = useMemo(() => {
    if (!isWelcomeSeen) {
      return {
        platforms: <PlatformWelcome {...options} />,
        industries: <IndustryWelcome {...options} />,
        analogues: <AnalogueWelcome {...options} />,
        welcome: <CalculatorWelcome />,
        result: <ResultSimpleView />
      }
    } else {
      return {
        platforms: <PlatformQuestion />,
        industries: <IndustryQuestion />,
        analogues: <AnalogueQuestion />,
        administration: <AdministrationQuestion />,
        localization: <LocalizationQuestion />,
        authentication: <AuthenticationQuestion />,
        external_services: <ExternalServiceQuestion />,
        appearance: <AppearanceQuestion />,
        brand: <BrandQuestion />,
        revenue: <RevenueQuestion />,
        result: <ResultSimpleView />
      }
    }
  }, [isWelcomeSeen, options])

  useEffect(() => {
    /* It's setting the `isWelcomeSeen` state to the value of the `welcome` key in the `localStorage`
    object. */
    if (routes?.baseRoute) {
      setIsWelcomeSeen(ls.get('welcome'))
    } else {
      setIsWelcomeSeen(false)
    }
  }, [routes?.baseRoute])

  useEffect(() => {
    /* It's checking if the `baseRoute` exists in the `routes` object. If it does, it sets the
    `currentPage` to the value of the `baseRoute` in the `pagesMap` object. */

    if (routes?.baseRoute) {
      setCurrentPage(pagesMap[routes?.baseRoute])
    } else {
      setCurrentPage(pagesMap.welcome)
    }
  }, [pagesMap])

  useEffect(() => {
    /* It's setting the `options` state to the values of the `baseRoute` and `nestedRoute` in the
    `routes` object. */
    if (routes) {
      const { baseRoute, baseRouteValue, nestedRoute, nestedRouteValue } =
        routes

      setOptions({
        [baseRoute]: baseRouteValue,
        [nestedRoute]: nestedRouteValue
      })
    }
  }, [routes])

  return { currentPage, isWelcomeSeen }
}

export default usePages
