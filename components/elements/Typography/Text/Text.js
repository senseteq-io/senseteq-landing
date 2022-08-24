import cn from 'classnames'
import { createElement } from 'react'
import styles from './Text.module.css'

const DEFAULT_TAG = 'p'
const DEFAULT_SIZE = 'body'

/**
 * It returns a React element with the appropriate className
 * @returns A function that takes in props and returns a React element.
 */
export default function Text(props) {
  const {
    children,
    size,
    style,
    description,
    caption,
    dataAos,
    className,
    center,
    ariaLabel,
    italic,
    ...rest
  } = props

  // [COMPUTED PROPERTIES]
  const tag = DEFAULT_TAG
  const cls = size || DEFAULT_SIZE

  return createElement(tag, {
    style,
    className: cn({
      [styles[cls]]: true,
      [styles.description]: description,
      [styles.caption]: caption,
      [styles.italic]: italic,
      [className]: className,
      'text-center': center
    }),
    dangerouslySetInnerHTML: { __html: children },
    ['data-aos']: dataAos,
    ['aria-label']: ariaLabel,
    ...rest
  })
}
