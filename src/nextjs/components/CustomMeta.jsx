import Head from 'next/head'

const CustomMeta = (props) => {
  let { title, desc, canon, image } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={title} />
      <meta name='og:description' property='og:description' content={desc} />
      <meta property='og:site_name' content='' />
      <meta property='og:url' content={canon || ''} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={desc} />
      <link rel='icon' type='image/png' href='favicon.ico' />
      <link rel='apple-touch-icon' href='favicon.ico' />

      <meta property='og:image' content={image || 'mainImage.png'} />

      <meta property='twitter:image' content={image || 'mainImage.png'} />

      <link rel='canonical' href={canon || ''} />
    </Head>
  )
}
export default CustomMeta
