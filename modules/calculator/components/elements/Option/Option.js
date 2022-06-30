import Image from 'next/image'
import Text from '../Typography/Text'
import cn from 'classnames'
import styles from './Option.module.css'

/**
 * It renders a div with a click handler that calls the onSelect function with the value prop
 * @returns A div with a className of option and option-selected if selected is true.
 */
export default function Option({ src, label, selected, value, onSelect }) {
  return (
    <div
      onClick={() => onSelect(value)}
      className={cn({
        [styles.option]: true,
        [styles['option-selected']]: selected
      })}>
      <div className="bs-row">
        {src ? (
          <div className="bs-col-12 bs-d-flex bs-justify-content-center bs-mb-4">
            <Image src={src} alt={label} width="100px" height="100px" />
          </div>
        ) : null}
        <div className="bs-col-12">
          <Text align="center" semibold={selected}>
            {label}
          </Text>
        </div>
      </div>
    </div>
  )
}
