import { motion } from "framer-motion";
import { Sparkles, Palette, Heart, Star, Shield, Clock, Zap, MessageCircle, Instagram, Youtube } from "lucide-react";
import { KeywordTag } from "./ui/keyword-tag";
import { fadeInUp, staggerContainer, slideInLeft } from "@/utils/animations";

const footerKeywords = {
  features: [
    { text: "Especialista em Mechas", icon: Sparkles },
    { text: "Coloração Profissional", icon: Palette },
    { text: "Ruivos Naturais", icon: Heart }
  ],
  benefits: [
    { text: "Atendimento VIP", icon: Star },
    { text: "Resultados Garantidos", icon: Shield }
  ],
  social: [
    { text: "Antes e Depois", icon: Clock },
    { text: "Dicas de Cabelo", icon: Zap }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-[#FFDEE2]/80 py-16">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={slideInLeft}>
            <h3 className="text-3xl font-serif font-bold text-primary-600 mb-6">Daniela Dias Hair</h3>
            <p className="text-primary-500 mb-4">Transformando visual e autoestima</p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-2"
            >
              {footerKeywords.features.map((keyword, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <KeywordTag keyword={keyword} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            custom={1}
          >
            <h4 className="text-xl font-semibold text-primary-600 mb-6">Contato</h4>
            <motion.a
              href="https://wa.me/5534999659886"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-primary-500 hover:text-primary-600 mb-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              +55 (34) 99965-9886
            </motion.a>
            <p className="text-primary-500 mt-4">
              Agende sua transformação e descubra como podemos realçar sua beleza natural
            </p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-2 mt-4"
            >
              {footerKeywords.benefits.map((keyword, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <KeywordTag keyword={keyword} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={2}
          >
            <h4 className="text-xl font-semibold text-primary-600 mb-6">Redes Sociais</h4>
            <div className="flex space-x-6 mb-6">
              {[
                { icon: Instagram, url: "https://www.instagram.com/danieladias_hair" },
                { icon: Star, url: "https://www.tiktok.com/@danieladiashair" },
                { icon: Youtube, url: "https://www.youtube.com/@DanielaDiasHair" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
            <p className="text-primary-500">
              Siga-nos para inspirações, dicas e resultados incríveis
            </p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-2 mt-4"
            >
              {footerKeywords.social.map((keyword, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <KeywordTag keyword={keyword} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
