import AboutUs from '../../components/aboutUs'
import Contact from '../../components/contact'
import CountDown from '../../components/countDown'
import EventActivities from '../../components/eventActivities'
import Header from '../../components/header'
import Mancora from '../../components/mancora'
import Schedule from '../../components/schedule'
import Speakers from '../../components/speakers'
import TechnicalVisits from '../../components/technicalVisits'

import HeaderBody from './headerBody'
const Home = () => (
  <>
    <Header body={<HeaderBody />} />
    <AboutUs />
    <Mancora />
    <Schedule />
    <EventActivities />
    <Speakers />
    <TechnicalVisits />
    <CountDown />
    <Contact />
  </>
)

export default Home
