import cn from 'classnames'
import { createElement } from 'react'
import styles from './List.module.css'

/**
 * It takes in an array of data and a component to render for each item in the array
 * @returns A list of items
 */
const List = (props) => {
  const {
    data,
    listItemComponent,
    listItemWrapperClassName,
    listClassName,
    ...rest
  } = props

  // [COMPUTED PROPERTIES]
  // get class names for list
  const _listClassName = cn({
    row: true,
    [listClassName]: listClassName
  })
  // get class names for list items wrapper
  const _listItemWrapperClassName = cn({
    [styles['list-item-wrapper']]: true,
    [listItemWrapperClassName]: listItemWrapperClassName
  })

  return (
    <div className={_listClassName} {...rest}>
      {data?.map((item, index) => (
        <div
          key={item?.title || item?.name || index}
          className={_listItemWrapperClassName}
          data-aos="fade-right">
          {createElement(listItemComponent, { ...item, index })}
        </div>
      ))}
    </div>
  )
}

export default List
