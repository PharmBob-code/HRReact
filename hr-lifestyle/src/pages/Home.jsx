import TopColor from "../components/TopColor";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Assurance from "../components/Assurance";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Home({ toggleModal, isModalOpen, closeModal }) {
  return (
    <div>
      <TopColor />
      <Navbar
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <Hero />
      <FloatingActionButton />
      <About />
      <Services />
      <WhyChooseUs />
      <Assurance />
      <Footer />
    </div>
  );
}
