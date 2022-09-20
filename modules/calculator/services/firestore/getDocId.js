import { collection, doc } from 'firebase/firestore'
import { firestore } from '../firebase'

const getDocId = (collectionName) =>
  doc(collection(firestore, collectionName)).id

export default getDocId
