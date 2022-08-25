/* eslint-disable @next/next/no-img-element */
import {
  PageWrapper,
  RichTextContent,
  Section,
  Text,
  Title
} from '../../../components'

import { DEFAULT_GRADIENT_IMAGE_URL } from '../../../domains/Blog/__constants__'
import { getPostData } from '../../../domains/Blog/domains/Post/helpers'
import moment from 'moment'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useMemo } from 'react'

export default function Post({ postJson }) {
  const {
    author,
    publishingDate,
    previewImageUrl,
    title,
    description,
    metaDescription
  } = JSON.parse(postJson)

  // [COMPUTED PROPERTIES]
  const publishingDateFormatted = useMemo(
    () => moment(publishingDate).format('DD MMM YYYY'),
    [publishingDate]
  )
  const descriptionComputed = useMemo(
    () => description && JSON.parse(description),
    [description]
  )
  const imageComputed = useMemo(
    () => previewImageUrl || DEFAULT_GRADIENT_IMAGE_URL,
    [previewImageUrl]
  )
  const metaDescriptionComputed = useMemo(
    () => metaDescription || `${title} | Menta Helse`,
    [title, metaDescription]
  )

  return (
    <PageWrapper
      pageMetaProps={{
        title,
        image: imageComputed,
        description: metaDescriptionComputed
      }}>
      <Section dark id="prime-section">
        <Title>{title}</Title>
      </Section>
      <Section className="blog-post-page">
        <div className="post">
          <div className="thumb-wrapper">
            <img src={imageComputed} className="thumb" alt="Menta | Thumb" />
          </div>
          <div className="description">
            <RichTextContent data={descriptionComputed} />
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <Text caption italic>
                {author}
              </Text>
            </div>
            <div className="col-auto">
              <Text caption italic>
                {publishingDateFormatted}
              </Text>
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}

// This gets called on every request
export async function getServerSideProps({ params, locale }) {
  const post = await getPostData(params.pid)
  const postJson = JSON.stringify(post || {})

  // Pass data to the page via props
  return {
    props: { postJson, ...(await serverSideTranslations(locale, ['landing'])) }
  }
}
