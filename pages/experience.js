import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Quotes from '../components/Quotes'
import PageIntro from '../components/PageIntro'
import SectionIntro from '../components/SectionIntro'
import { attributes } from '../content/experience.md'

const Experience = () => (
  <Layout>
    <Hero heading={attributes.hero__heading} description={attributes.hero__description}/>
    <PageIntro description={attributes.intro}/>
    <SectionIntro
      heading={attributes.productAdvisoryBoard__heading}
      description={attributes.productAdvisoryBoard__description}
    />
    <SectionIntro
      heading={attributes.userFeedback__heading}
      description={attributes.userFeedback__description}
    />
    <Quotes data={attributes.quotes}/>
  </Layout>
)

export default Experience
