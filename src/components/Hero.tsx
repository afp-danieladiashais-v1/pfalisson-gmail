
import { Sparkles, Palette, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { KeywordTag } from "./ui/keyword-tag";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const heroKeywords = [
  { text: "Expertise em Mechas", icon: Sparkles },
  { text: "Coloração Profissional", icon: Palette },
  { text: "Tratamentos Avançados", icon: Star },
  { text: "Beleza Autêntica", icon: Heart }
];

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-4">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto text-center relative z-10"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-serif font-bold text-primary-600 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800"
        >
          Transformação e Arte em Cada Fio
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-primary-500 mb-8 max-w-2xl mx-auto font-light"
        >
          Descubra a <span className="font-semibold text-primary-600">excelência</span> em coloração e tratamentos capilares personalizados
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {heroKeywords.map((keyword, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <KeywordTag keyword={keyword} />
            </motion.div>
          ))}
        </motion.div>
        <motion.a
          href="https://wa.me/5534999659886"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Agende sua Transformação
          <motion.svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
