import { CompanyView } from '../../components'
import { List } from '../../../../components'
import { SUPPORTING_COMPANIES } from '../../__constants__'
/**
 * It takes an array of objects (Companies),
 * and returns an list of accessary tool views
 */

const CompanyList = (props) => {
  return (
    <List
      data={SUPPORTING_COMPANIES}
      listItemComponent={CompanyView}
      listItemWrapperClassName="col-12 col-lg-6 company-wrapper"
      {...prop}
    />
  )
}

export default CompanyList
