import { ADVANTAGES_UKRAINIAN_DEVELOPERS } from '../../__constants__'
import { AdvantageView } from '../../components'
import { List } from '../../../../components'

const AdvantageList = () => {
  return (
    <List
      data={ADVANTAGES_UKRAINIAN_DEVELOPERS}
      listItemComponent={AdvantageView}
      listItemWrapperClassName="col-12 col-lg-3 advantage-item-wrapper"
    />
  )
}

export default AdvantageList
