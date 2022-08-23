import { useState, useEffect } from 'react'
import { getCategories } from '../../../helpers'

const useGetCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const _categories = await getCategories()
      setCategories(_categories)
    }
    fetch()
  }, [])

  return [categories]
}

export default useGetCategories
