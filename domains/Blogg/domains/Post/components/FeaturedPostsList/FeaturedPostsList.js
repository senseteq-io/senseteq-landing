// import FeaturedPostView from '../FeaturedPostView'
// import { useGetPosts } from '../../hooks'
// import { useMemo } from 'react'
// import PostView from '../PostView'

const FeaturedPostsList = (props) => {
  // TODO in future
  // const {
  //   withMore = false,
  //   limit = 3,
  //   startAfter,
  //   redirectPath,
  //   filter
  // } = props

  // const [posts = []] = useGetPosts(limit, filter, startAfter, withMore)

  return (
    <>
      {/* {computedPosts.map((chunk, chunkIndex) => {
        return (
          <div className="posts" key={chunkIndex}>
            {chunk?.map?.((post) => {
              return (
                <div key={post?._id} className="col-12 col-lg-4">
                  <FeaturedPostView
                    id={post?._id}
                    author={post.author}
                    thumb={post.previewImageUrl}
                    publishingDate={post.publishingDate}
                    title={post.title}
                    descriptionPreview={post.descriptionPreview}
                    path={post.path}
                    redirectPath={redirectPath}
                  />
                </div>
              )
            })}
          </div>
        )
      })} */}
    </>
  )
}

export default FeaturedPostsList
