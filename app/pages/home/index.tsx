import Header from "../../components/header";
import HeaderBody from "./headerBody";
import AboutUs from "../../components/aboutUs";
import Contact from "../../components/contact";
import Speakers from "../../components/speakers";

const Home = () => (
  <>
    <Header body={<HeaderBody />} />
    <Speakers />
    <Contact />
  </>
);

export default Home;
