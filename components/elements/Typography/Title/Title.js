import cn from 'classnames'
import { createElement } from 'react'
import styles from './Title.module.css'

const DEFAULT_TAG = 'h1'

/**
 * It returns a React element
 * @param props - This is the props object that is passed to the component.
 * @returns A React component that renders an HTML element with the tag name specified by the `as`
 * prop, or `h1` if no `as` prop is provided. The component's class name is set to the tag name, and
 * the component's inner HTML is set to the value of the `text` prop.
 */
export default function Title(props) {
  const { as, children, text } = props

  const tag = as || DEFAULT_TAG

  return createElement(
    tag,
    {
      className: cn({
        [styles[tag]]: true
      }),
      dangerouslySetInnerHTML: { __html: text }
    },
    children
  )
}
