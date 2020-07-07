import fs from 'fs'
import path from 'path'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Body from '../components/GeneralPages/Body'

const Post = ({ general }) => {
  if (!general) return <div>not found</div>

  const { title, body } = general.attributes

  return (
    <Layout>
      <article>
        <Hero heading={title}/>
        <Body data={body}/>
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

  const general = await import(`../content/generic/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      general: general.default,
    },
  }
}

export default Post
