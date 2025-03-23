import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import BacktoTop from "../common/toTop";
import MainContact from "../components/ContactsUs/contactMain";

const ContactPage = () => {
  return (
    <main>
      <NavBar />
      <BacktoTop />
      <Subhero page="Contact Us" />
      <MainContact />
      <Footer />
    </main>
  );
};

export default ContactPage;
