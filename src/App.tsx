import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import InsigthsPage from "./pages/insights";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/insights" element={<InsigthsPage />} />
      </Routes>
    </>
  );
}

export default App;
