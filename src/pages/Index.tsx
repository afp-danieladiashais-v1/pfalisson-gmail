
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TopBar from "@/components/TopBar";
import Brands from "@/components/Brands";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <section id="home">
          <Hero />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="services">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="brands">
          <Brands />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <CTA />
      </motion.main>
    </div>
  );
};

export default Index;

