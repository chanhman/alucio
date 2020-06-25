import Layout from '../components/Layout'
import { attributes } from '../content/company.md'
import Hero from '../components/Company/Hero'
import SectionIntro from '../components/Page/SectionIntro'

const Company = () => (
  <Layout>
    <Hero heading={ attributes.hero__heading } description={ attributes.hero__description }/>

    <SectionIntro heading={attributes.team__heading} description={attributes.team__description}/>
    {/* Loop teamMembers */}

    <SectionIntro heading={attributes.productAdvisoryBoard__heading} description={attributes.productAdvisoryBoard__description}/>
    {/* Loop productAdvisoryBoardMembers */}

    <SectionIntro heading={attributes.workingAtAlucio__heading} description={attributes.workingAtAlucio__description}/>

    <section>
      <h2>{attributes.whatWeValue__heading}</h2>
      {/* Loop values */}
    </section>

    <SectionIntro heading={attributes.joinUs__heading} description={attributes.joinUs__description}/>

    <SectionIntro heading={attributes.press__heading} description={attributes.press__description}/>

    <section>
      <h2>{attributes.pledgeOnePercentage__heading}</h2>
      <p>{attributes.pledgeOnePercentage__description}</p>
      <a href="#">{attributes.pledgeOnePercentage__CtaLabel}</a>
    </section>
  </Layout>
)

export default Company
