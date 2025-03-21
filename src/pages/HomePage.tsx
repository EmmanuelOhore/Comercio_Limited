import CompanyLogosSection from "../components/home/company_logos";
import EnterpriceSection from "../components/home/EnterPrise";
import HeroSection from "../components/home/Hero";
import LatestSection from "../components/home/latest";
import OptimizingSection from "../components/home/Optimization";
import ServicesSection from "../components/home/servicesSection";
import NavBar from "../common/NavBar";
import Footer from "../common/footer";

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <EnterpriceSection />
      <LatestSection />
      <OptimizingSection />
      <CompanyLogosSection />
      <Footer />
    </main>
  );
};

export default HomePage;
