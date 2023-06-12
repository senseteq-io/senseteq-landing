const useProgress = (calculatorData) => {
  const {
    analogues,
    industries,
    platforms,
    ai,
    administration,
    appearance,
    authentication,
    brand,
    external_service,
    localization,
    revenue
  } = calculatorData

  const arr = [
    !!analogues,
    !!industries,
    !!platforms,
    !!ai,
    !!administration,
    !!appearance,
    !!authentication,
    !!brand,
    !!external_service,
    !!localization,
    !!revenue
  ]

  const completed = arr.filter((item) => item).length

  return (completed / arr.length) * 100
}

export default useProgress
