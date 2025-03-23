import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import BacktoTop from "../common/toTop";
import MainBlogSection from "../components/Insights/mainBlogSection";

const InsigthsPage = () => {
  return (
    <main>
      <NavBar />
      <BacktoTop />
      <Subhero page="Insights" />
      <MainBlogSection />
      <Footer />
    </main>
  );
};

export default InsigthsPage;
