export const getStaticPaths = async () => {
  let data = await fetch('some_niceness')
  let paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  let { id } = ctx.params

  const data = await fetch('some.url/' + id)

  return {
    props: { data },
    revalidate: 1000,
  }
}
