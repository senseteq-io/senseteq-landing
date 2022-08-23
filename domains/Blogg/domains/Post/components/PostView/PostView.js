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
    () => `${redirectPath || '/blogg/innlegg/'}${path}`,
    [redirectPath, path]
  )

  return (
    <div className="post">
      <Link href={hrefComputed}>
        <a>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="thumb-wrapper ">
                <img src={thumb} alt="Thumb" className="thumb" />
              </div>
            </div>
            <div className="content col-12 col-md-6">
              <div className="subtitle row no-gutters">
                <div className="col-auto">
                  <p>{author}</p>
                </div>
                <div className="col-auto">
                  <p className="separator">·</p>
                </div>
                <div className="col-auto">
                  <p>{publishingDateComputed}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h5 className="title">{title}</h5>
                </div>
                <div className="col-12">
                  <p className="description">{descriptionPreview}</p>
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
