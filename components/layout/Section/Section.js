import { getClassNames } from '../../../utils'

const Section = (props) => {
  const { children, dark, sectionBackground, className, ...rest } = props

  // [COMPUTED PROPERTY]
  const classNames = getClassNames({
    section: true,
    [className]: className,
    'section-dark': dark
  })

  return (
    <section className={classNames} {...rest}>
      {sectionBackground}
      <div className="section-content">
        <div className="container">{children}</div>
      </div>
    </section>
  )
}

export default Section
