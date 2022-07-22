import cn from 'classnames'
import { createElement } from 'react'
import helpers from '../TypographyHelpers.module.css'
import styles from './Title.module.css'

const DEFAULT_TAG = 'h1'

/**
 * It returns a React element with a className that is a combination of the tag name, the alignment,
 * the font weight, and the variant
 * @returns A function that takes in props and returns a React element.
 */
export default function Title({
  as,
  children,
  align,
  regular,
  lighter,
  variant,
  ...rest
}) {
  const tag = as || DEFAULT_TAG
  return createElement(
    tag,
    {
      className: cn({
        [styles[tag]]: true,
        [helpers[`text-${align}`]]: align,
        [helpers['fw-regular']]: regular,
        [helpers['fw-lighter']]: lighter,
        [helpers[`text-${variant}`]]: variant
      }),
      role: 'heading',
      ariaLevel: 1,
      ...rest
    },
    children
  )
}
