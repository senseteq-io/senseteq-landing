import { List } from '../../../../components'
import { REASONS } from '../../__constants__'
import ReasonView from '../ReasonView'
import { useTranslation } from 'next-i18next'

const ReasonList = () => {
  return (
    <List
      data={REASONS}
      listItemComponent={ReasonView}
      listItemWrapperClassName="col-12 col-md-6 col-lg-4 reason-item-wrapper"
    />
  )
}

export default ReasonList
