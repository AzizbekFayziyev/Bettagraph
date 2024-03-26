import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Services from "./components/Services";
import Vacancy from "./components/Vacancy";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    // Animate On Scroll
    AOS.init();
  }, []);

  return (
    <>
      {/* Components */}
      <Navbar />

      <Header />
      <About />
      <Services />
      <Progress />
      <Contact />
      <Vacancy />

      <Footer />
    </>
  );
};

export default App;
