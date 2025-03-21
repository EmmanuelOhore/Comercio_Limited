import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import ExtraOrdinary from "../components/Servicess/extraordinary";
import WhoWeAre from "../components/Servicess/whoWeAre";
import WhyComercio from "../components/Servicess/whycomercio";

const ServicesPage = () => {
  return (
    <main>
      <NavBar />
      <Subhero page="Services" />
      <ExtraOrdinary />
      <WhoWeAre />
      <WhyComercio />
      <Footer />
    </main>
  );
};

export default ServicesPage;
