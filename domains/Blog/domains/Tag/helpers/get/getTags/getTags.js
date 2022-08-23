import { collection, query, getDocs } from 'firebase/firestore'
import { firestore } from '../../../../../services'

const getTags = async () => {
  const q = query(collection(firestore, 'tags'))
  const querySnapshot = await getDocs(q)
  const data = querySnapshot?.docs?.map((doc) => doc.data())

  return data
}

export default getTags
