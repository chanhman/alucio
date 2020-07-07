import fs from 'fs'
import path from 'path'
import Layout from '../components/Layout'

const Post = ({ test }) => {
  if (!test) return <div>not found</div>

  const { attributes } = test

  return (
    <Layout>
      <article>
        <h1>{attributes.title}</h1>
        <img src={attributes.thumbnail} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/generic'))
    .map((pageName) => {
      const trimmedName = pageName.substring(0, pageName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols wheter not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const test = await import(`../content/generic/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      test: test.default,
    },
  }
}

export default Post
