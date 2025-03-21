import Footer from "../common/footer";
import NavBar from "../common/NavBar";
import Subhero from "../common/subhero";
import MainContact from "../components/ContactsUs/contactMain";

const ContactPage = () => {
  return (
    <main>
      <NavBar />
      <Subhero page="Contact Us" />
      <MainContact />
      <Footer />
    </main>
  );
};

export default ContactPage;
