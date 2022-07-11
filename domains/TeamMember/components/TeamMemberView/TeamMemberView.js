import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const TeamMemberView = (props) => {
  const { src, name, role } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div className="team-member-item">
      <div
        className="team-member-image"
        style={{
          background: `url(${src}) center center / cover no-repeat`
        }}
      />
      <Title as="h5">{name}</Title>
      <Text size="body2">{t(role)}</Text>
    </div>
  )
}

export default TeamMemberView
