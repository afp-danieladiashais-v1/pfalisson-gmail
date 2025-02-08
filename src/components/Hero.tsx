
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5511999999999?text=Olá! Gostaria de agendar um horário", "_blank");
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#FDE1D3] to-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#FFDEE2]/20 text-primary rounded-full"
        >
          Realce sua beleza natural
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-primary"
        >
          Daniela Dias Hair
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-secondary mb-8 max-w-2xl mx-auto"
        >
          Especialistas em transformar seu visual com as mais modernas técnicas de mechas, 
          coloração e alisamentos. Realce sua beleza com nossos serviços exclusivos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            onClick={handleWhatsAppClick}
            className="inline-flex items-center px-6 py-3 bg-[#D946EF] text-white rounded-lg hover:bg-[#D946EF]/90 transition-colors duration-200"
          >
            Agende seu Horário
            <Scissors className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

