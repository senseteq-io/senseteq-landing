import PropTypes from 'prop-types'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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
  useEffect(() => value !== undefined && setValue(value), [value]) // update
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
            src="/search-placeholder-icon.svg"
            alt="Search"
            layout="fill"
          />
        </div>
      </div>

      <input
        placeholder="Panic, Anxiety, etc..."
        value={localValue}
        onChange={handleChange}
        className="sort-input"
      />
      {localValue ? (
        <div className="setting-icon" onClick={handleClear}>
          <Image src="/close.svg" fill="red" alt="Settings" layout="fill" />
        </div>
      ) : (
        !advancedSearchHidden && (
          <div className="setting-icon" onClick={onSettings}>
            <Image
              src="/settings-adjust-placeholder-icon.svg"
              fill="red"
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
