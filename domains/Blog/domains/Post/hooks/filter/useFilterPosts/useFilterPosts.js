import { findInListByName } from '../../../../../helpers'
import { useGetCategories } from '../../../../Category'
import { useGetTags } from '../../../../Tag'
import { useState } from 'react'

const useFilterPosts = () => {
  const [filter, setFilter] = useState({})
  const [isAdvancedSearch, setAdvancedSearch] = useState(false)
  const [categories] = useGetCategories()
  const [tags] = useGetTags()

  const handleQueryChange = (query) => {
    if (!query) {
      setFilter(() => ({ query: '', filters: null, isTag: false }))
    } else {
      const category = findInListByName(categories, query)
      const tag = findInListByName(tags, query)
      if (category) handleCategoryChange(category._id, category.name)
      else if (tag) handleTagChange(tag._id, tag.name)
      else setFilter({ query, filters: ['title', 'in', query], isTag: false })
    }
    setAdvancedSearch(false)
  }
  const handleTagChange = (tagId, tagName) => {
    setFilter((prev) => {
      const isFilterExists = prev.filters?.[2] === tagId
      const _filters = isFilterExists ? null : ['tags', 'array-includes', tagId]
      const _query = isFilterExists ? '' : tagName
      return { filters: _filters, query: _query, isTag: true }
    })
    setAdvancedSearch(false)
  }
  const handleCategoryChange = (categoryId, categoryName) => {
    setFilter((prev) => {
      const isFilterExists = prev.filters?.[2] === categoryId
      const _filters = isFilterExists
        ? null
        : ['categoryId', 'equals', categoryId]
      const _query = isFilterExists ? '' : categoryName
      return { filters: _filters, query: _query, isTag: true }
    })
    setAdvancedSearch(false)
  }
  const handleClear = () =>
    setFilter({ query: '', filters: null, isTag: false })
  const toggleAdvancedSearch = () => setAdvancedSearch((prev) => !prev)

  return {
    filter,
    tags,
    categories,
    isAdvancedSearch,
    handleQueryChange,
    handleTagChange,
    handleCategoryChange,
    handleClear,
    toggleAdvancedSearch
  }
}

export default useFilterPosts
