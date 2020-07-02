import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageIntro from '../components/PageIntro'
import PartnerLogos from '../components/PartnerLogos'
import SectionIntro from '../components/SectionIntro'
import { attributes } from '../content/partners.md'

const Partners = () => {
  let {
    hero__heading,
    intro,
    logos,
    partnering__heading,
    partnering__description
  } = attributes

  return (
    <Layout>
      <Hero heading={hero__heading} />
      <PageIntro description={intro}/>
      <PartnerLogos logos={logos}/>
      <SectionIntro
        heading={partnering__heading}
        description={partnering__description}
      />
    </Layout>
  )
}

export default Partners
