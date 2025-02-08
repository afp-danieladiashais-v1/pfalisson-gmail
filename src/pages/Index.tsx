
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Sparkles, Crown, Award, Palette } from "lucide-react";

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Mechas",
              description: "Técnicas exclusivas para iluminar seu visual",
              icon: Sparkles,
            },
            {
              title: "Ruivos",
              description: "Especialistas em tons vibrantes e naturais",
              icon: Palette,
            },
            {
              title: "Coloração",
              description: "As últimas tendências em cores",
              icon: Crown,
            },
            {
              title: "Alisamentos",
              description: "Tratamentos para todos os tipos de cabelo",
              icon: Award,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-200 border border-[#FFDEE2]/20"
            >
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 mb-4 text-[#D946EF]" />
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
