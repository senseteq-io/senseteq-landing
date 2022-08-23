import { collection, query, where, getDocs } from 'firebase/firestore'
import { firestore } from '../../../../../services'

const getPostData = async (path) => {
  const q = query(collection(firestore, 'posts'), where('path', '==', path))
  const querySnapshot = await getDocs(q)
  const data = querySnapshot?.docs?.[0]?.data()

  return data
}

export default getPostData
