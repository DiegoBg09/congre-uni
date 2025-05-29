import AboutUs from '../../components/aboutUs'
import Contact from '../../components/contact'
import Header from '../../components/header'
import Schedule from '../../components/schedule'

import HeaderBody from './headerBody'

const Home = () => (
  <>
    <Header body={<HeaderBody />} />
    <AboutUs />
    <Schedule />
    <Contact />
  </>
)

export default Home
