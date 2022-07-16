import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const ResultHeader = () => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()

  return (
    <div className="row mb-4">
      <div className="col-12">
        <Title as="h3" align="center">
          {t('calculator.result.title')}
        </Title>
      </div>
      <div className="col-12">
        <Text variant="secondary" align="center" subtitle>
          {t('calculator.result.description')}
        </Text>
      </div>
    </div>
  )
}

export default ResultHeader
