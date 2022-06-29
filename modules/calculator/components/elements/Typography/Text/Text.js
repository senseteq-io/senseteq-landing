import cn from 'classnames'
import { createElement } from "react"
import helpers from '../TypographyHelpers.module.css'
import styles from './Text.module.css'

const DEFAULT_TAG = 'p'
const DEFAULT_SIZE = 'body1'

/**
 * It returns a React element with the appropriate className
 * @returns A function that takes in props and returns a React element.
 */
export default function Text({as, children, size, align, semibold, subtitle, variant}) {
  const tag = as || DEFAULT_TAG
  const cls = size || DEFAULT_SIZE
  return createElement(tag, {
    className: cn({
      [styles[cls]]: true,
      [helpers[`text-${align}`]]: align,
      [helpers['fw-semibold']]: semibold,
      [helpers[`text-${variant}`]]: variant,
      [styles.subtitle]: subtitle
    })
  }, children)
}