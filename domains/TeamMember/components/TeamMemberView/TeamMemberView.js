import { Text, Title } from '../../../../components'

import { useTranslation } from 'next-i18next'

const TeamMemberView = (props) => {
  const { src, name, role } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return (
    <div
      className="team-member-item"
      itemScope
      itemType="https://schema.org/Person">
      <div
        className="team-member-image"
        style={{
          background: `url(${src}) center center / cover no-repeat`
        }}
      />
      <meta itemProp="image" content={src} />
      <Title as="h4" itemprop="name">
        {name}
      </Title>
      <Text size="body2" itemprop="jobTitle">
        {t(role)}
      </Text>
    </div>
  )
}

export default TeamMemberView
