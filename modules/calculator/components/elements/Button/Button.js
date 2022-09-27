import cn from 'classnames'
import Loading from '../../../assets/loading'
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
  loading,
  disabled,
  bordered,
  ...rest
}) {
  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={loading}
      className={cn({
        [styles['full-width']]: block,
        [styles['disabled']]: disabled || loading,
        [styles['bordered']]: bordered,
        [styles['btn']]: true,
        [styles[`btn-${size}`]]: size,
        [styles[`btn-${variant}`]]: !!variant,
        [styles[`btn-shape-${shape}`]]: !!shape
      })}>
      {loading && (
        <Loading
          fill="var(--calc-module-text-white)"
          style={{ marginRight: '8px' }}
        />
      )}

      {children}
    </button>
  )
}
