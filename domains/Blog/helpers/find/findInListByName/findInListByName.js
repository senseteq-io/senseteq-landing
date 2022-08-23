const findInListByName = (list = [], name = '') =>
  list?.filter((el) => el.name?.toLowerCase?.() === name?.toLowerCase?.())?.[0]

export default findInListByName
