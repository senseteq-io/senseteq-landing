import Head from 'next/head'

const PageMeta = (props) => {
  const { title, description, keywords, author } = props

  return (
    <Head itemscope itemtype="http://schema.org/Organization">
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <!-- Basic --> */}
      <link rel="icon" href="/assets/senseteq.jpg" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <meta name="image" content="/assets/senseteq.jpg" />
      <meta name="theme-color" content="var(--primary)" />
      {author && <meta name="author" content={author} />}

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      {/* <!-- Open Graph --> */}
      <meta property="og:site_name" content="Senseteq" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image:alt" content="Senseteq" />
    </Head>
  )
}

export default PageMeta
