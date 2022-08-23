import { collection, query, getDocs, where } from 'firebase/firestore'
import { firestore } from '../../../../../services'

const getCategory = async (path) => {
  const q = query(
    collection(firestore, 'categories'),
    where('path', '==', path)
  )
  const querySnapshot = await getDocs(q)
  const data = querySnapshot?.docs?.[0]?.data()

  return data
}

export default getCategory
