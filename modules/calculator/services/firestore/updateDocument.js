import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import { firestore } from '../firebase'

/**
 * This functions uses to update document by id in firestore.
 *
 * @param {string} collection
 * @param {string} id
 * @param {object} data
 * @returns {Promise<void>}
 */
const updateDocument = ({ collection, id, data }) => {
  const ref = doc(firestore, collection, id)
  return updateDoc(ref, {
    _isUpdated: true,
    _updatedAt: serverTimestamp(),
    _updatedBy: 'mvp-calculator',
    ...data
  })
}

export default updateDocument
