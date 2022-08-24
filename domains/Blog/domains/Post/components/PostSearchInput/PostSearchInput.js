import { useCallback, useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'

const PostSearchInput = (props) => {
  const {
    advancedSearchHidden = false,
    onSettings,
    onChange,
    onClear,
    value
  } = props

  // [COMPONENT STATE]
  const [localValue, setValue] = useState('')

  // [ADDITIONAL HOOKS]
  const timeoutRef = useRef(null)
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  // [HELPER FUNCTIONS]
  const submitChanges = useCallback((value) => onChange?.(value), [onChange])
  const handleChange = (e) => {
    if (timeoutRef?.current) clearTimeout(timeoutRef.current)
    const _value = e.target.value?.replace(/\s+/g, ' ')
    setValue(_value)
    timeoutRef.current = setTimeout(() => submitChanges(_value), [1000])
  }
  const handleClear = useCallback(() => {
    onClear?.()
    setValue('')
  }, [onClear])

  // [LIFECYCLE]
  useEffect(() => {
    let isMounted = true
    isMounted && value !== undefined && setValue(value)
    return () => (isMounted = false)
  }, [value]) // update
  useEffect(() => {
    return () => {
      if (timeoutRef?.current) clearTimeout(timeoutRef.current)
    }
  }, []) // unmount

  return (
    <div className="sort-input">
      <div className="search-icon-wrapper">
        <div className="search-icon">
          <Image
            src="/assets/search-placeholder-icon.svg"
            alt="Search"
            layout="fill"
          />
        </div>
      </div>

      <input
        placeholder={t('blog.search.placeholder')}
        value={localValue}
        onChange={handleChange}
        className="sort-input"
      />
      {localValue ? (
        <div className="setting-icon" onClick={handleClear}>
          <Image src="/assets/close.svg" alt="Settings" layout="fill" />
        </div>
      ) : (
        !advancedSearchHidden && (
          <div className="setting-icon" onClick={onSettings}>
            <Image
              src="/assets/settings-adjust-placeholder-icon.svg"
              alt="Settings"
              layout="fill"
            />
          </div>
        )
      )}
    </div>
  )
}

PostSearchInput.propTypes = {
  advancedSearchHidden: PropTypes.bool,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSettings: PropTypes.func,
  value: PropTypes.any
}

export default PostSearchInput
