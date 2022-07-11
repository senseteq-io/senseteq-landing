import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

/**
 * It's a React component that takes in a title and description,
 * and returns a view of accessary tool
 *
 * @returns A component that is a view with a title and description.
 */
const AccessaryToolView = (props) => {
  const { title, description } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="accessary-tool">
      <Title as="h4">{t(title)}</Title>
      <Text>{t(description)}</Text>
    </div>
  )
}
export default AccessaryToolView
