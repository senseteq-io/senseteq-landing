import { Text, Title } from '../../../../../../components'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import moment from 'moment'
import { useMemo } from 'react'

const PostView = (props) => {
  const {
    thumb,
    author,
    publishingDate,
    title,
    descriptionPreview,
    path,
    redirectPath
  } = props

  // [COMPUTED PROPERTIES]
  const publishingDateComputed = useMemo(
    () => moment(publishingDate).format('D MMM, YYYY'),
    [publishingDate]
  )
  const hrefComputed = useMemo(
    () => `${redirectPath || '/blog/post/'}${path}`,
    [redirectPath, path]
  )

  return (
    <div className="post">
      <Link href={hrefComputed}>
        <a>
          <div className="row wrapper">
            <div className="col-12 col-md-5">
              <div className="thumb-wrapper ">
                <img src={thumb} alt="Thumb" className="thumb" />
              </div>
            </div>
            <div className="content col-12 col-md-7">
              <div className="subtitle row ">
                <div className="col-auto p-0">
                  <p>{author}</p>
                </div>
                <div className="col-auto p-0">
                  <p className="separator">·</p>
                </div>
                <div className="col-auto p-0">
                  <p>{publishingDateComputed}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Title as="h5">{title}</Title>
                </div>
                <div className="col-12">
                  <Text className="description">{descriptionPreview}</Text>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostView
