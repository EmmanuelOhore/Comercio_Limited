import Carosel from "../common/carosel";
import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import AboutLogos from "../components/About/AboutLogos";
import AboutUs from "../components/About/aboutUs";
// import Clientele from "../components/About/cintella";
import CyberSecurity from "../components/About/cubersycirty";
import MissionVision from "../components/About/missionvission";
import OurCompany from "../components/About/OurCompany";
import Overlay from "../components/About/overlay";
import TeamComponents from "../components/About/teamSection";

const AboutPage = () => {
  return (
    <main>
      <NavBar />
      <Subhero page="About" />
      <AboutUs />
      <MissionVision />
      <TeamComponents />
      <AboutLogos />
      <OurCompany />
      <Overlay />
      <CyberSecurity />
      <Carosel
        header="Our Clientele"
        text="Driving technology for leading brands"
      />
      <Footer />
    </main>
  );
};

export default AboutPage;
