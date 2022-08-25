import {
  collection,
  limit,
  getDocs,
  orderBy,
  query,
  startAfter,
  where
} from 'firebase/firestore'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { firestore } from '../../../../../services'

const useGetPosts = (max = 7, filter, start = null, withPagination = true) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [lastVisible, setLastVisible] = useState(max)

  const filterPosts = useCallback((list, filter) => {
    if (!filter) return list
    return list.filter((item) => {
      switch (filter[1]) {
        case 'equals':
          return item[filter[0]] === filter[2]
        case 'array-includes':
          return item[filter[0]].includes(filter[2])
        case 'in':
          return item[filter[0]]
            ?.toLowerCase?.()
            .includes(filter[2]?.toLowerCase?.())
      }
    })
  }, [])

  const paginatePosts = useCallback(
    (list, max) => {
      if (!max || !withPagination) return list
      return list.slice(0, max)
    },
    [withPagination]
  )

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const startFilter = start ? [startAfter(start)] : []
      const limitFilter = !withPagination ? [limit(max)] : []
      const whereFilter =
        filter && !withPagination
          ? [where(...filter), where('isDraft', '==', false)]
          : [where('isDraft', '==', false)]

      const queryRef = query(
        collection(firestore, 'posts'),
        orderBy('publishingDate', 'desc'),
        ...whereFilter,
        ...startFilter,
        ...limitFilter
      )
      const querySnapshot = await getDocs(queryRef)
      const data = querySnapshot.docs.map((item) => item?.data())

      data.length && setPosts(data)
      setLoading(false)
    }

    if (!posts?.length && !loading) fetchData()
    else if (start && !loading && posts?.[0]?.publishingDate === start)
      fetchData()
  }, [posts, loading, filter, start, withPagination, max])

  const next = useCallback(() => setLastVisible((prev) => prev + max), [max])
  const filteredPosts = useMemo(
    () => filterPosts(posts, filter),
    [filter, filterPosts, posts]
  )

  const paginatedPosts = useMemo(() => {
    return paginatePosts(filteredPosts, lastVisible)
  }, [filteredPosts, lastVisible, paginatePosts])
  const loadMoreAvailable = useMemo(
    () => filteredPosts?.length > lastVisible,
    [filteredPosts?.length, lastVisible]
  )

  return [paginatedPosts, loading, next, loadMoreAvailable]
}

export default useGetPosts
