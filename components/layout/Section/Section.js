import { getClassNames } from '../../../utils'

const Section = (props) => {
  const { children, className } = props

  // [COMPUTED PROPERTY]
  const classNames = getClassNames({
    section: true,
    [className]: className
  })

  return (
    <section className={classNames}>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default Section
