const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const generateStaticPages = () => {
  const pages = []

  return pages
    .map((item) => {
      return `
        <url>
            <loc>${`${DOMAIN}/${item}`}</loc>
        </url>
     `
    })
    .join('')
}

const generateDynamicMaps = (list, path) => {
  return list
    .map((item) => {
      return `
        <url>
            <loc>${`${DOMAIN}/${path}/${item.id}`}</loc>
        </url>
     `
    })
    .join('')
}

export const getServerSideProps = async ({ res }) => {
  const responses = await Promise.all([]) // FETCH

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // ${generateStaticPages()}
      ${generateDynamicMaps(responses[0], 'opskrifter')}
      ${generateDynamicMaps(responses[1], 'madplaner')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

const SiteMap = () => {}

export default SiteMap
