import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const AdvantageView = (props) => {
  const { title, subtitle } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <>
      <Title center as="h2">
        {t(title)}
      </Title>
      <Text center>{t(subtitle)}</Text>
    </>
  )
}

export default AdvantageView
