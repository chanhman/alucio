import Layout from '../components/Layout'
import { attributes } from '../content/company.md'
import Hero from '../components/Company/Hero'
import SectionIntro from '../components/Company/SectionIntro'
import PledgeOnePercent from '../components/Company/PledgeOnePerccent'
import Profiles from '../components/Company/Profiles'
import Profile from '../components/Company/Profile'
import Features from '../components/Features'
import Feature from '../components/Feature'

const Company = () => {
  let {teamMembers} = attributes

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
            >
              {teamMember.title}
            </Profile>
          ))}
        </Profiles>
      </SectionIntro>

      <SectionIntro
        heading={attributes.productAdvisoryBoard__heading}
        description={attributes.productAdvisoryBoard__description}
      >
        <Profiles>
          {teamMembers.map(teamMember => (
            <Profile
              picture={teamMember.picture}
              name={teamMember.name}
            >
              {teamMember.title}
            </Profile>
          ))}
        </Profiles>
      </SectionIntro>

      <SectionIntro
        heading={attributes.workingAtAlucio__heading}
        description={attributes.workingAtAlucio__description}
      >
        <Features>
          <Feature
            heading='Test'
            description='Test'
            icon='Test'
          />
        </Features>
      </SectionIntro>

      <section>
        <h2>{attributes.whatWeValue__heading}</h2>
        {/* Loop values */}
      </section>

      <SectionIntro
        heading={attributes.joinUs__heading}
        description={attributes.joinUs__description}
      />

      <SectionIntro
        heading={attributes.press__heading}
        description={attributes.press__description}
      />

      <PledgeOnePercent
        heading={attributes.pledgeOnePercentage__heading}
        description={attributes.pledgeOnePercentage__description}
        ctaLbl={attributes.pledgeOnePercentage__CtaLabel}
      />
    </Layout>
  )
}

export default Company
