import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import Bio from '../../components/Company/Bio'

const TeamMemberBio = ({ teamMember }) => {
  if (!teamMember) return <div>not found</div>

  const { title, jobTitle, jobTitle2, picture, bio } = teamMember.attributes

  return (
    <Layout>
      <Hero heading={title}/>
      <Bio
        picture={picture}
        title={title}
        jobTitle={jobTitle}
        jobTitle2={jobTitle2}
        bio={bio}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/teamMember'))
    .map((pageName) => {
      const trimmedName = pageName.substring(0, pageName.length - 3)
      return {
        params: { bio: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols wheter not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { bio } = params

  const teamMember = await import(`../../content/teamMember/${bio}.md`).catch(
    () => null
  )

  return {
    props: {
      teamMember: teamMember.default,
    },
  }
}

export default TeamMemberBio
