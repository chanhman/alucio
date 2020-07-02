import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageIntro from '../components/PageIntro'
import PartnerLogos from '../components/PartnerLogos'
import { attributes } from '../content/partners.md'

const Partners = () => {
  let {hero__heading, intro, logos} = attributes

  return (
    <Layout>
      <Hero heading={hero__heading} />
      <PageIntro description={intro}/>
      <PartnerLogos logos={logos}/>
    </Layout>
  )
}

export default Partners
