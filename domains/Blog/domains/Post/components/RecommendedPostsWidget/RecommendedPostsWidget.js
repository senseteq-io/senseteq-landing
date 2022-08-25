import { Section, Title } from '../../../../../../components'

import { PostView } from '../..'
import { useTranslation } from 'next-i18next'

const RecommendedPostsWidget = (props) => {
  const { posts } = props

  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

  return posts?.length ? (
    <div className="blog-page">
      <Section id="senseteq-blog-widget-section" className="posts">
        <Title as="h2" dataAos="fade-down" center>
          {t('home.senseteq-blog-widget-section.title')}
        </Title>
        {posts?.map?.((post) => {
          return (
            <PostView
              key={post?._id}
              id={post?._id}
              author={post.author}
              thumb={post.previewImageUrl}
              publishingDate={post.publishingDate}
              title={post.title}
              descriptionPreview={post.descriptionPreview}
              path={post.path}
            />
          )
        })}
      </Section>
    </div>
  ) : null
}

export default RecommendedPostsWidget
