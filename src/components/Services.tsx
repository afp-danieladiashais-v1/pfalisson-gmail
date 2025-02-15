
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-primary-50/50 to-white/30">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container-custom"
      >
        <motion.h2
          variants={fadeInUp}
          className="heading-2 text-center"
        >
          Serviços Exclusivos e Transformadores
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="paragraph text-center max-w-2xl mx-auto mb-16"
        >
          Descubra nossa coleção de serviços premium, desenvolvidos com expertise e dedicação para transformar não apenas seu cabelo, mas também sua autoestima. Cada serviço é uma experiência única de beleza e cuidado.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="card"
            >
              <div className="flex flex-col items-center">
                <service.icon className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="heading-3 text-center">{service.title}</h3>
                <p className="paragraph text-center mb-6">{service.description}</p>
                <div className="flex flex-col items-center space-y-3 mt-auto">
                  {service.keywords.map((keyword, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <keyword.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{keyword.text}</span>
                    </motion.div>
                  ))}
                </div>
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
            className="button-primary"
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
