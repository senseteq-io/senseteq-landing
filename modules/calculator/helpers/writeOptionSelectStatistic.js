import moment from 'moment'
import { STATISTIC_COLLECTIONS } from '../__constants__'
import increaseCounter from '../services/database/increaseCounter'

/**
 * This function need to increase the counter of the option selects for statistic.
 * @param {string} type
 * @param {string} value
 * @returns {Promise<TransactionResult>}
 */
const writeOptionSelectStatistic = ({ type, value }) => {
  const today = moment().format('YYYY-MM-DD')
  const path = `${STATISTIC_COLLECTIONS.OPTION_SELECT_COUNT}/${today}/${type}/${value}`
  return increaseCounter({ path })
}

export default writeOptionSelectStatistic
