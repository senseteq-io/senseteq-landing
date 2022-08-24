import { Button } from '../../../../../../components'
import { PostView } from '../..'
import { useGetPosts } from '../../hooks'
import { useTranslation } from 'next-i18next'

const PostsList = (props) => {
  const { withMore = true, limit = 7, startAfter, redirectPath, filter } = props

  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')
  const [posts = [], loading, next, loadMoreAvailable] = useGetPosts(
    limit,
    filter,
    startAfter,
    withMore
  )

  return (
    <>
      <div className="posts">
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
              redirectPath={redirectPath}
            />
          )
        })}
      </div>

      {loadMoreAvailable && withMore && (
        <div className="row justify-content-center posts-load-more">
          <div className="col-auto">
            <a onClick={next} className="btn btn-lg btn-primary">
              {t('blog.posts_list.load_more_text')}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default PostsList
