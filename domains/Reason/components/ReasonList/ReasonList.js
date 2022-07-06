import { List } from '../../../../components'
import { REASONS } from '../../__constants__'
import ReasonView from '../ReasonView'
import { useTranslation } from 'next-i18next'

const ReasonList = () => {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <List
      data={REASONS}
      listItemComponent={ReasonView}
      listItemWrapperClassName="col-12 col-md-6 col-lg-4 service-item-wrapper"
    />
  )
}

export default ReasonList
