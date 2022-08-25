import { getClassNames } from '../../../utils'
import { useInView } from 'react-cool-inview'

const Section = (props) => {
  const { children, dark, sectionBackground, className, id, ...rest } = props

  // [COMPUTED PROPERTY]
  const classNames = getClassNames({
    section: true,
    [className]: className,
    'section-dark': dark
  })

  const { observe } = useInView({
    threshold: 0.5,
    onEnter: () => {
      const dots = document.getElementById('navigation-dots')
      if (dots) {
        Object.values(dots.querySelectorAll('li.navigation-dot')).map(
          (element) => element.classList.remove('active')
        )
        document.getElementById(`navigation-${id}`)?.classList.add('active')
      }
    }
  })

  return (
    <section id={id} ref={observe} className={classNames} {...rest}>
      {sectionBackground}
      <div className="section-content">
        <div className="container">{children}</div>
      </div>
    </section>
  )
}

export default Section
