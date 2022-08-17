import { useEffect, useState } from 'react'
import { DEV_URL, PROD_URL } from '../../../../../constants/backendUrls'

/**
 * It fetches the calculator data from Firestore and returns it as an array
 * @param id - The id of the document to fetch.
 * @returns An array with 3 values: data, loading, error
 */
const useFetchResult = (id) => {
  /* Creating a state variable called data, loading, and error. */
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    /**
     * It fetches the data from the firestore database and sets the data to the state
     */
    const fetchResults = async () => {
      try {
        /* It sets the loading state to true. */
        setLoading(true)
        const isDev = JSON.parse(localStorage.getItem('isDev'))

        /* Creating a reference to the document in the firestore database. */
        const res = await fetch(
          `${isDev ? DEV_URL : PROD_URL}/calculatorResults/get/${id}`,
          { method: 'GET' }
        )
        const data = await res.json()

        /* Checking if data is truthy and if it is, it sets the data to the state. */
        data && setData(data.calculatorData)

        /* It sets the loading state to false. */
        setLoading(false)
      } catch (e) {
        /* It sets the error state to the error that was caught. */
        setError(e)
        setLoading(false)
      }
    }

    /* Checking if the id is truthy and if it is, it calls the fetchResults function. */
    if (id) fetchResults()
  }, [id])

  return [data, loading, error]
}

export default useFetchResult
