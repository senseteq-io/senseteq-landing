import { collection, query, getDocs } from 'firebase/firestore'
import { firestore } from '../../../../../services'

const getCategories = async () => {
  const q = query(collection(firestore, 'categories'))
  const querySnapshot = await getDocs(q)
  const data = querySnapshot?.docs?.map((doc) => doc.data())

  return data
}

export default getCategories
