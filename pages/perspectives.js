import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageIntro from '../components/PageIntro'
import Table from '../components/Table'
import { attributes } from '../content/perspectives.md'

const Perspectives = () => {
  let {
    hero__heading,
    intro,
    articleTable__headings,
    articles,
    researchTable_headings,
    research
  } = attributes

  return (
    <Layout>
      <Hero heading={hero__heading} />
      <PageIntro description={intro}/>
      <Table headings={articleTable__headings} rows={articles}/>
      <Table headings={researchTable_headings} rows={research}/>
    </Layout>
  )
}

export default Perspectives
