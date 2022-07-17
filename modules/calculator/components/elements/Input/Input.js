import styles from './Input.module.css'

const Input = ({ type, value, placeholder, autoFocus, onChange }) => {
  return (
    <input
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
