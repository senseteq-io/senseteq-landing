import { collection, getDocs } from 'firebase/firestore'

import { firestore } from '../firebase'

const getCollection = async (collectionPath) => {
  const ref = collection(firestore, collectionPath)
  const docsSnapshot = await getDocs(ref)
  return docsSnapshot?.docs?.map((doc) => doc.data())
}

export default getCollection
