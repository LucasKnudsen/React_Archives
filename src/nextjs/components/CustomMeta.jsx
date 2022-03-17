import Head from 'next/head'
import staticImage from '../../../public/mainImage.png'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const CustomMeta = (props) => {
  let { title, desc, canon, image } = props

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title + ' | Mad For Fattigrøve'}</title>
      <meta name="title" content={title + ' | Mad For Fattigrøve'} />
      <meta name="description" content={desc} />

      <meta property="og:title" content={title + ' | Mad For Fattigrøve'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content="Mad For Fattigrøve" />
      <meta property="og:url" content={canon ? DOMAIN + canon : DOMAIN} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title + ' | Mad For Fattigrøve'} />
      <meta name="twitter:description" content={desc} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta
        property="og:image"
        content={image ? image : DOMAIN + staticImage.src}
      />

      <meta
        property="twitter:image"
        content={image ? image : DOMAIN + staticImage.src}
      />

      <link rel="canonical" href={canon ? DOMAIN + canon : DOMAIN} />
    </Head>
  )
}
export default CustomMeta
