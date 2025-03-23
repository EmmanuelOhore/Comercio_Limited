import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import BacktoTop from "../common/toTop";
import ExtraOrdinary from "../components/Servicess/extraordinary";
import WhoWeAre from "../components/Servicess/whoWeAre";
import WhyComercio from "../components/Servicess/whycomercio";

const ServicesPage = () => {
  return (
    <main>
      <NavBar />
      <BacktoTop />
      <Subhero page="Services" />
      <ExtraOrdinary />
      <WhoWeAre />
      <WhyComercio />
      <Footer />
    </main>
  );
};

export default ServicesPage;
