import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../firebase'

const getDocument = async ({ collection, id }) => {
  const ref = doc(firestore, collection, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}

export default getDocument
