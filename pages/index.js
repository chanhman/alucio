import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Beacon from '../components/Home/Beacon'
import Cta from '../components/Home/Cta'
import { attributes } from '../content/home.md'

const Home = () => (
  <Layout>
    <Hero data={attributes}/>
    <Features data={attributes}/>
    <Beacon data={attributes}/>
    <Cta data={attributes}/>
  </Layout>
)

export default Home
