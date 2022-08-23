import { useState, useEffect } from 'react'
import { getTags } from '../../../helpers'

const useGetTags = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const _tags = await getTags()
      setTags(_tags)
    }
    fetch()
  }, [])

  return [tags]
}

export default useGetTags
