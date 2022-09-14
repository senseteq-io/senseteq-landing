import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'

import { ARTIQLE_COLLECTIONS } from '../../../../../__constants__'
import { firestore } from '../../../../../services'

const getRecommendedPosts = async () => {
  const queryRef = query(
    collection(firestore, ARTIQLE_COLLECTIONS.POSTS),
    orderBy('publishingDate', 'desc'),
    where('isDraft', '==', false),
    where('isRecommended', '==', true)
  )
  const querySnapshot = await getDocs(queryRef)
  const posts = querySnapshot.docs.map((item) => item.data())

  return posts
}

export default getRecommendedPosts
