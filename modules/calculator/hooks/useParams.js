import ls from '../utils/ls'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * It's updating the local storage with the query params
 */
const useParams = () => {
  const router = useRouter()

  useEffect(() => {
    /* It's updating the local storage with the query params. */
    ls.update(router?.query)
  }, [router])

  return router?.query
}

export default useParams
