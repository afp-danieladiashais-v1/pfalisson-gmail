
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDEE2] via-[#FFE4E6] to-[#FFF1F2] overflow-hidden">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Benefits />
          <Services />
          <Testimonials />
          <Brands />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
