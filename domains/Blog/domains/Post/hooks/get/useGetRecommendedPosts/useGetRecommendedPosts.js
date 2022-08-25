import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { firestore } from '../../../../../services'

const useGetRecommendedPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const whereFilter = [
        where('isDraft', '==', false),
        where('isRecommended', '==', true)
      ]

      const queryRef = query(
        collection(firestore, 'posts'),
        orderBy('publishingDate', 'desc'),
        ...whereFilter
      )
      const querySnapshot = await getDocs(queryRef)
      const data = querySnapshot.docs.map((item) => item?.data())

      data.length && setPosts(data)
      setLoading(false)
    }

    if (!posts?.length && !loading) fetchData()
    fetchData()
  }, [loading, posts?.length])

  return [posts]
}

export default useGetRecommendedPosts
