import Head from 'next/head'

export default function PageHead({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Senseteq" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"></meta>

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
