import Layout from '../components/Layout'
import { attributes } from '../content/company.md'
import SectionIntro from '../components/Page/SectionIntro'

const Company = () => (
  <Layout>
    <div>{ attributes.title }</div>
    <div>{ attributes.hero__heading }</div>
    <div>{ attributes.hero__description }</div>
    <SectionIntro heading={attributes.team__heading} description={attributes.team__description}/>
    <SectionIntro heading={attributes.productAdvisoryBoard__heading} description={attributes.productAdvisoryBoard__description}/>
    <SectionIntro heading={attributes.workingAtAlucio__heading} description={attributes.workingAtAlucio__description}/>
    <div>{ attributes.whatWeValue__heading }</div>
    <div>{ attributes.whatWeValue__listItem1 }</div>
    <div>{ attributes.whatWeValue__listItem2 }</div>
    <div>{ attributes.whatWeValue__listItem3 }</div>
    <div>{ attributes.whatWeValue__listItem4 }</div>
    <div>{ attributes.whatWeValue__listItem5 }</div>
    <div>{ attributes.whatWeValue__listItem6 }</div>
    <div>{ attributes.whatWeValue__linkedinLabel }</div>
    <div>{ attributes.whatWeValue__linkedinHref }</div>
    <div>{ attributes.whatWeValue__glassdoorLabel }</div>
    <div>{ attributes.whatWeValue__glassdoorHref }</div>
    <div>{ attributes.joinUs__heading }</div>
    <div>{ attributes.joinUs__description }</div>
    <div>{ attributes.press__heading }</div>
    <div>{ attributes.press__description }</div>
    <div>{ attributes.pledgeOnePercentage__heading }</div>
    <div>{ attributes.pledgeOnePercentage__description }</div>
    <div>{ attributes.pledgeOnePercentage__CtaLabel }</div>
  </Layout>
)

export default Company
