import AboutUs from '../../components/aboutUs'
import Contact from '../../components/contact'
import EventActivities from '../../components/eventActivities'
import Header from '../../components/header'
import Schedule from '../../components/schedule'
import TechnicalVisits from '../../components/technicalVisits'

import HeaderBody from './headerBody'

const Home = () => (
  <>
    <Header body={<HeaderBody />} />
    <AboutUs />
    <Schedule />
    <TechnicalVisits />
    <EventActivities />
    <Contact />
  </>
)

export default Home
