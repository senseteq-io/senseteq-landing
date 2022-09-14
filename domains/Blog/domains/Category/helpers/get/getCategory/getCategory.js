import { collection, getDocs, query, where } from 'firebase/firestore'

import { ARTIQLE_COLLECTIONS } from '../../../../../__constants__'
import { firestore } from '../../../../../services'

const getCategory = async (path) => {
  const q = query(
    collection(firestore, ARTIQLE_COLLECTIONS.CATEGORIES),
    where('path', '==', path)
  )
  const querySnapshot = await getDocs(q)
  const data = querySnapshot?.docs?.[0]?.data()

  return data
}

export default getCategory
