import { useEffect, useState } from 'react'

const usePageOrder = (calculatorData) => {
  const [pageOrder, setPageOrder] = useState([])

  useEffect(() => {
    const data = {
      analogues: calculatorData?.analogues,
      industries: calculatorData?.industries,
      platforms: calculatorData?.platforms
    }

    const START = ['welcome']
    const STATIC = [
      'administration',
      'localization',
      'authentication',
      'external_services',
      'appearance',
      'brand',
      'revenue',
      'result'
    ]

    const { analogues, industries, platforms } = data

    /* Checking if the user has selected any of the options. */
    const isAnaloguesOnly = analogues && !industries && !platforms
    const isIndustriesOnly = !analogues && industries && !platforms
    const isPlatformsOnly = !analogues && !industries && platforms
    const isNoAnaloguesOnly = !analogues && industries && platforms
    const isNoIndustriesOnly = analogues && !industries && platforms
    const isNoPlatformsOnly = analogues && industries && !platforms

    /* Setting the order of the pages. */
    const DEFAULT_ORDER = ['analogues', 'industries', 'platforms']
    const INDUSTRIES_ONLY_ORDER = ['industries', 'analogues', 'platforms']
    const PLATFORMS_ONLY_ORDER = ['platforms', 'analogues', 'industries']
    const NO_ANALOGUES_ORDER = ['industries', 'platforms', 'analogues']
    const NO_INDUSTRIES_ORDER = ['analogues', 'platforms', 'industries']
    const NO_PLATFORMS_ORDER = ['analogues', 'industries', 'platforms']

    /* Setting the order of the pages. */
    if (isAnaloguesOnly) {
      setPageOrder([...START, ...DEFAULT_ORDER, ...STATIC])
    } else if (isIndustriesOnly) {
      setPageOrder([...START, ...INDUSTRIES_ONLY_ORDER, ...STATIC])
    } else if (isPlatformsOnly) {
      setPageOrder([...START, ...PLATFORMS_ONLY_ORDER, ...STATIC])
    } else if (isNoAnaloguesOnly) {
      setPageOrder([...START, ...NO_ANALOGUES_ORDER, ...STATIC])
    } else if (isNoIndustriesOnly) {
      setPageOrder([...START, ...NO_INDUSTRIES_ORDER, ...STATIC])
    } else if (isNoPlatformsOnly) {
      setPageOrder([...START, ...NO_PLATFORMS_ORDER, ...STATIC])
    } else {
      setPageOrder([...START, ...DEFAULT_ORDER, ...STATIC])
    }
  }, [
    calculatorData?.analogues,
    calculatorData?.industries,
    calculatorData?.platforms
  ])

  return pageOrder
}

export default usePageOrder
