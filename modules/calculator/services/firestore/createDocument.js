import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { firestore } from '../firebase'
import getDocId from './getDocId'

/**
 * This function use to create document with provided or random id in firestore.
 *
 * @param {string} collection
 * @param {object} data
 * @param {string} id
 * @returns {Promise<void>}
 */
const createDocument = ({ collection, data, id }) => {
  const docId = id || getDocId(collection)
  const ref = doc(firestore, collection, docId)

  return setDoc(ref, {
    _id: docId,
    _isUpdated: false,
    _updatedAt: serverTimestamp(),
    _createdAt: serverTimestamp(),
    _updatedBy: 'mvp-calculator',
    _createdBy: 'mvp-calculator',
    ...data
  })
}

export default createDocument
