import styles from './Input.module.css'

const Input = ({ type, value, placeholder, autoFocus, onChange, ...rest }) => {
  return (
    <input
      {...rest}
      autoFocus={autoFocus}
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
