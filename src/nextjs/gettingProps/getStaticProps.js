export const getStaticProps = async () => {
  const data = await fetch('some.url')

  return {
    props: { data },
    revalidate: 1000,
  }
}
