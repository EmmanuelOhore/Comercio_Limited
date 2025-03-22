import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import MainBlogSection from "../components/Insights/mainBlogSection";

const InsigthsPage = () => {
  return (
    <main>
      <NavBar />
      <Subhero page="Insights" />
      <MainBlogSection />
      <Footer />
    </main>
  );
};

export default InsigthsPage;
