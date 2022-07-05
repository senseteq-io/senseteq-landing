import { ACCESSARY_TOOLS } from '../../__constants__'
import { AccessaryToolView } from '../../components'
import cn from 'classnames'
import styles from '../../AccessaryTool.module.css'

/**
 * It takes an array of objects (Accessary tools),
 * and returns an list of accessary tool views
 */
const AccessaryToolList = () => {
  // [COMPUTED PROPERTIES]
  const wrapperClassName = cn({ [styles['accessary-tool-wrapper']]: true })

  return (
    <div className="row">
      {ACCESSARY_TOOLS?.map(({ title, description }) => (
        <div
          key={title}
          className={`col-12 col-md-6 col-xxl-4 ${wrapperClassName}`}
          data-aos="fade-right">
          <AccessaryToolView title={title} description={description} />
        </div>
      ))}
    </div>
  )
}

export default AccessaryToolList
