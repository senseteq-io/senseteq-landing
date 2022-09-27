import { ref, set } from 'firebase/database'
import { database } from '../firebase'

/**
 * This function using to set object into RTDB.
 *
 * @param {string} path
 * @param {object} value
 * @returns {Promise<void>}
 */
const setValue = ({ path, value }) => set(ref(database, path), value)

export default setValue
