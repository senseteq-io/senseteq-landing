import { PostView } from '../..'
import { useGetPosts } from '../../hooks'

const PostsList = (props) => {
  const { withMore = true, limit = 7, startAfter, redirectPath, filter } = props

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
        <div className="row justify-content-center">
          <div className="col-auto">
            <a
              onClick={next}
              className="btn btn-lg btn-outlined btn-primary-blue">
              Les mer
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default PostsList
