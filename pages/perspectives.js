import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageIntro from '../components/PageIntro'
import Table from '../components/Table'
import { attributes } from '../content/perspectives.md'

const Perspectives = () => {
  let {
    hero__heading,
    intro,
    articles,
    research
  } = attributes

  return (
    <Layout>
      <Hero heading={hero__heading} />
      <PageIntro description={intro}/>
      <Table data={articles}/>
      <Table data={research}/>
    </Layout>
  )
}

export default Perspectives
