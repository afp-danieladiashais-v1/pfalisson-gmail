
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TopBar from "@/components/TopBar";
import Brands from "@/components/Brands";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const Index = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <section id="home" className="scroll-mt-20 bg-gradient-to-b from-primary-50 to-white">
            <Hero />
          </section>
          <section id="benefits" className="scroll-mt-20 bg-gradient-to-b from-white to-secondary/30">
            <Benefits />
          </section>
          <section id="services" className="scroll-mt-20 bg-gradient-to-b from-secondary/30 to-primary-50">
            <Pricing />
          </section>
          <section id="testimonials" className="scroll-mt-20 bg-gradient-to-b from-primary-50 to-white">
            <Testimonials />
          </section>
          <section id="brands" className="scroll-mt-20 bg-gradient-to-b from-white to-secondary/20">
            <Brands />
          </section>
          <section id="faq" className="scroll-mt-20 bg-gradient-to-b from-secondary/20 to-primary-100">
            <FAQ />
          </section>
          <section className="bg-accent/90 text-white">
            <CTA />
          </section>
        </motion.main>
      </div>
    </LazyMotion>
  );
};

export default Index;

