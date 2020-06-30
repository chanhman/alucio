import Layout from '../components/Layout'
import { attributes } from '../content/company.md'
import Hero from '../components/Company/Hero'
import SectionIntro from '../components/Company/SectionIntro'
import PledgeOnePercent from '../components/Company/PledgeOnePerccent'
import Profiles from '../components/Company/Profiles'
import Profile from '../components/Company/Profile'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Highlight from '../components/Highlight'
import Contact from '../components/Company/Contact'
import Jobs from '../components/Company/Jobs'
import Press from'../components/Company/Press'

const Company = () => {
  let {teamMembers, advisoryBoardMembers, values} = attributes

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
              picture={teamMember.picture}
              name={teamMember.name}
              title={teamMember.title}
            />
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
            >
              <p>{advisoryBoardMember.company}</p>
              <p><a href="{advisoryBoardMember.linkedIn}">LinkedIn</a></p>
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
        flip
      />

      <Contact data={attributes}/>
    </Layout>
  )
}

export default Company
