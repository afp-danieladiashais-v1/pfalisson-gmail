
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { KeywordTag } from "./ui/keyword-tag";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-primary-50/50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-serif font-bold text-center text-primary-600 mb-8"
        >
          Serviços Exclusivos e Transformadores
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-primary-500 mb-16 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Descubra nossa coleção de serviços premium, desenvolvidos com expertise e dedicação para transformar não apenas seu cabelo, mas também sua autoestima. Cada serviço é uma experiência única de beleza e cuidado.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="glass-card p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-primary-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-600">{service.title}</h3>
              <p className="text-primary-500 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                {service.keywords.map((keyword, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <KeywordTag keyword={keyword} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-primary-600 font-medium text-lg mb-6">
            Transforme seu visual com quem entende de beleza. Agende agora sua consulta personalizada!
          </p>
          <motion.a
            href="https://wa.me/5534999659886"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agende seu Horário
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
      </motion.div>
    </section>
  );
};

export default Services;
