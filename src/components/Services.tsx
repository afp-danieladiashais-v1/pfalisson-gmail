
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
          Serviços Exclusivos
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-primary-500 mb-16 max-w-2xl mx-auto"
        >
          Descubra nossa coleção de serviços premium, desenvolvidos para transformar seu cabelo e elevar sua autoestima
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
              <p className="text-primary-500 mb-4">{service.description}</p>
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
      </motion.div>
    </section>
  );
};

export default Services;
