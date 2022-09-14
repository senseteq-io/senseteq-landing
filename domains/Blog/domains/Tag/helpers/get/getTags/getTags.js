import { collection, getDocs, query } from 'firebase/firestore'

import { ARTIQLE_COLLECTIONS } from '../../../../../__constants__'
import { firestore } from '../../../../../services'

const getTags = async () => {
  const q = query(collection(firestore, ARTIQLE_COLLECTIONS.TAGS))
  const querySnapshot = await getDocs(q)
  const data = querySnapshot?.docs?.map((doc) => doc.data())

  return data
}

export default getTags
