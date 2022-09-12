import cn from 'classnames'
import styles from './Button.module.css'

/**
 * It returns a button element with a className that is a combination of the styles.btn class and the
 * styles.btn-{variant} and styles.btn-shape-{shape} classes
 * @returns A button element with the className of btn, btn-variant, and btn-shape-shape.
 */
export default function Button({
  children,
  variant,
  shape,
  block,
  onClick,
  size,
  bordered,
  ...rest
}) {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={cn({
        [styles['full-width']]: block,
        [styles['bordered']]: bordered,
        [styles['btn']]: true,
        [styles[`btn-${size}`]]: size,
        [styles[`btn-${variant}`]]: !!variant,
        [styles[`btn-shape-${shape}`]]: !!shape
      })}>
      {children}
    </button>
  )
}
