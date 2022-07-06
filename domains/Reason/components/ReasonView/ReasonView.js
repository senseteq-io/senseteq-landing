import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const ReasonView = (props) => {
  const { index, title, description } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div data-aos="fade-left" className="reason-item">
      <div className="number-wrapper">
        <Text className="number">{index + 1}</Text>
      </div>
      <div className="reason-item">
        <Title as="h4">{t(title)}</Title>
        <Text>{t(description)}</Text>
      </div>
    </div>
  )
}

export default ReasonView
