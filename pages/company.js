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

const Company = () => {
  let {teamMembers, values} = attributes

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
        <Features heading={attributes.whatWeValue__heading}>
          {values.map(value => (
            <Feature
              heading={value.heading}
              description={value.description}
            />
          ))}
        </Features>
      </SectionIntro>

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

      <Highlight heading={attributes.diversity__heading} description={attributes.diversity__description}></Highlight>

      <section>
        <h2>Contact</h2>
        <div>
          <h3>Customer Inquiries</h3>
          <p>
            <a href="#">415.XXX.XXXX</a>
          </p>
          <p>
            <a href="mailto:sales@alucio.io">sales@alucio.io</a>
          </p>
          <p>
            <a href="#">Request a Demo</a>
          </p>
        </div>
        <div>
          <h3>Media Relations</h3>
          <p>Lisa Amin Gulezian</p>
          <p>
            <a href="tel:925-788-3533">925-788-3533</a>
          </p>
          <p>
            <a href="mailto:lgulezian@alucio.io">lgulezian@alucio.io</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Company
