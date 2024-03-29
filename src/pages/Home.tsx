import AboutUs from "../sections/AboutUs/AboutUs";
import Features from "../sections/Features/Features";
import Header from "../sections/Header/Header";
import OurClients from "../sections/OurClients/OurClients";
import OurPortfolio from "../sections/OurPortfolio/OurPortfolio";
import OurTeam from "../sections/OurTeam/OurTeam";
import Services from "../sections/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Features />
      <OurPortfolio />
      <OurClients />
      <OurTeam />
    </>
  );
};

export default Home;
