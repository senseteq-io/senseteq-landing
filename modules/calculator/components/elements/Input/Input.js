import cn from 'classnames'
import styles from './Input.module.css'

const Input = ({
  type,
  value,
  placeholder,
  autoFocus,
  onChange,
  variant,
  withHorizontalPaddings = true,
  ...rest
}) => {
  return (
    <input
      {...rest}
      autoFocus={autoFocus}
      className={cn({
        [styles['px-0']]: !withHorizontalPaddings,
        [styles['input']]: true,
        [styles[`input-${variant}`]]: !!variant
      })}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
