import styles from './Input.module.css'

const Input = ({
  type,
  value,
  placeholder,
  autoFocus,
  onChange,
  withHorizontalPaddings = true,
  ...rest
}) => {
  return (
    <input
      {...rest}
      autoFocus={autoFocus}
      className={`${styles.input} ${!withHorizontalPaddings && styles['px-0']}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
