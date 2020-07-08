import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import SectionIntro from '../../components/SectionIntro'
import PledgeOnePercent from '../../components/Company/PledgeOnePerccent'
import Profiles from '../../components/Company/Profiles'
import Profile from '../../components/Company/Profile'
import Features from '../../components/Features'
import Feature from '../../components/Feature'
import Highlight from '../../components/Highlight'
import Contact from '../../components/Company/Contact'
import Jobs from '../../components/Company/Jobs'
import Press from'../../components/Company/Press'
import { attributes } from '../../content/company.md'

const importTeamMembers = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/teamMembers', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/teamMembers/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Company = ({teamMembers}) => {
  let {advisoryBoardMembers, values} = attributes

  return (
    <Layout>
      <Hero
        heading={ attributes.hero__heading }
        description={ attributes.hero__description }
      />

      <SectionIntro
        heading={attributes.team__heading}
        description={attributes.team__description}
      >
        <Profiles>
          {teamMembers.map(teamMember => (
            <Profile
              picture={teamMember.attributes.picture}
              name={teamMember.attributes.title}
              title={teamMember.attributes.jobTitle}
              href="/company/[bio]"
              as={`/company/${teamMember.slug}`}
            >
              <p>{teamMember.attributes.jobTitle2}</p>
            </Profile>
          ))}
        </Profiles>
      </SectionIntro>

      <SectionIntro
        heading={attributes.productAdvisoryBoard__heading}
        description={attributes.productAdvisoryBoard__description}
      >
        <Profiles>
          {advisoryBoardMembers.map(advisoryBoardMember => (
            <Profile
              picture={advisoryBoardMember.picture}
              name={advisoryBoardMember.name}
              title={advisoryBoardMember.title}
              title2={advisoryBoardMember.title2}
            >
              <p>{advisoryBoardMember.company}</p>
              <p><a href={advisoryBoardMember.linkedIn}>LinkedIn</a></p>
            </Profile>
          ))}
        </Profiles>
      </SectionIntro>

      <SectionIntro
        heading={attributes.workingAtAlucio__heading}
        description={attributes.workingAtAlucio__description}
      >
        <Features heading={attributes.whatWeValue__heading}>
          {values.map(value => (
            <Feature
              heading={value.heading}
              description={value.description}
            />
          ))}
        </Features>
      </SectionIntro>

      <Jobs data={attributes}/>

      <Press data={attributes}/>

      <PledgeOnePercent
        heading={attributes.pledgeOnePercentage__heading}
        description={attributes.pledgeOnePercentage__description}
        ctaLbl={attributes.pledgeOnePercentage__ctaLabel}
        ctaLink={attributes.pledgeOnePercentage__ctaLink}
      />

      <Highlight
        heading={attributes.diversity__heading}
        description={attributes.diversity__description}
        image={attributes.diversity__image}
        flip
      />

      <Contact data={attributes}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const teamMembers = await importTeamMembers()

  return {
    props: {
      teamMembers,
    }, // will be passed to the page component as props
  }
}

export default Company
