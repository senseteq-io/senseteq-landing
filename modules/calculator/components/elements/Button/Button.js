import cn from 'classnames'
import styles from './Button.module.css'

/**
 * It returns a button element with a className that is a combination of the styles.btn class and the
 * styles.btn-{variant} and styles.btn-shape-{shape} classes
 * @returns A button element with the className of btn, btn-variant, and btn-shape-shape.
 */
export default function Button({ children, variant, shape, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn({
        [styles['calc-module-btn']]: true,
        [styles[`calc-module-btn-${variant}`]]: !!variant,
        [styles[`calc-module-btn-shape-${shape}`]]: !!shape
      })}>
      {children}
    </button>
  )
}
