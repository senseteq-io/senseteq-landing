import { ref, runTransaction } from 'firebase/database'
import { database } from '../firebase'

/**
 * This function using to increase counter in RTDB.
 *
 * @param {string} path
 * @returns {Promise<TransactionResult>}
 */
const increaseCounter = ({ path }) => {
  const dbRef = ref(database, path)

  return runTransaction(dbRef, (counter) => (counter ? ++counter : 1))
}

export default increaseCounter
