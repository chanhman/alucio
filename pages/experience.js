import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Quotes from '../components/Quotes'
import SectionIntro from '../components/SectionIntro'
import { attributes } from '../content/experience.md'

const Experience = () => (
  <Layout>
    <Hero heading='Experience'/>
    <SectionIntro description={attributes.intro}/>
    <Quotes/>
  </Layout>
)

export default Experience
