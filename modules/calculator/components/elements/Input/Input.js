import styles from './Input.module.css'

const Input = ({ type, value, placeholder, autoFocus }) => {
  return (
    <input
      autoFocus={autoFocus}
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input
