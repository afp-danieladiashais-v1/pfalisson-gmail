
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Experiência",
              description: "Mais de 10 anos no mercado digital",
            },
            {
              title: "Qualidade",
              description: "Projetos premiados e reconhecidos",
            },
            {
              title: "Inovação",
              description: "Tecnologias de ponta para seu negócio",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              className="p-6 bg-muted rounded-xl hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
