
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { 
  Sparkles, Crown, Award, Palette, 
  MessageSquare, CreditCard, HelpCircle,
  Star, Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5511999999999?text=Olá! Gostaria de agendar um horário", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Nossos Serviços Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="bg-[#FDE1D3]/30 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">O Que Nossas Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Melhor experiência em mechas que já tive! O resultado superou minhas expectativas.",
                role: "Cliente desde 2022",
              },
              {
                name: "Ana Santos",
                text: "Profissionais extremamente capacitados. Meu ruivo está exatamente como eu sonhava!",
                role: "Cliente desde 2023",
              },
              {
                name: "Julia Costa",
                text: "O alisamento deixou meu cabelo incrível e super natural. Super recomendo!",
                role: "Cliente desde 2021",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <MessageSquare className="w-8 h-8 text-[#D946EF] mb-4" />
                <p className="text-secondary mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-primary mt-4">{testimonial.name}</h4>
                <p className="text-sm text-secondary">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Nossos Serviços e Pacotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mechas",
                price: "A partir de R$ 250",
                features: ["Mechas tradicionais", "Mechas invertidas", "Babylights", "Californianas"],
                highlight: false,
              },
              {
                title: "Transformação Completa",
                price: "A partir de R$ 450",
                features: ["Mechas", "Hidratação", "Corte", "Finalização"],
                highlight: true,
              },
              {
                title: "Coloração",
                price: "A partir de R$ 180",
                features: ["Coloração global", "Retoque de raiz", "Tonalização", "Matização"],
                highlight: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={`p-6 rounded-xl ${
                  plan.highlight
                    ? "bg-[#D946EF] text-white"
                    : "bg-white border border-[#FFDEE2]/20"
                }`}
              >
                <CreditCard className={`w-8 h-8 mb-4 ${
                  plan.highlight ? "text-white" : "text-[#D946EF]"
                }`} />
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.highlight ? "text-white" : "text-primary"
                }`}>{plan.title}</h3>
                <p className={`text-2xl font-bold mb-6 ${
                  plan.highlight ? "text-white" : "text-primary"
                }`}>{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Star className={`w-4 h-4 ${
                        plan.highlight ? "text-white" : "text-[#D946EF]"
                      }`} />
                      <span className={plan.highlight ? "text-white" : "text-secondary"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleWhatsAppClick}
                  className={`w-full ${
                    plan.highlight
                      ? "bg-white text-[#D946EF] hover:bg-white/90"
                      : "bg-[#D946EF] text-white hover:bg-[#D946EF]/90"
                  }`}
                >
                  Agendar Agora
                  <Scissors className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#FDE1D3]/30 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo dura uma sessão de mechas?",
                answer: "O tempo pode variar de 2 a 4 horas, dependendo do comprimento do cabelo e da técnica escolhida.",
              },
              {
                question: "Com que frequência devo retocar a coloração?",
                answer: "Recomendamos retoques a cada 30-45 dias para manter a cor vibrante e uniforme.",
              },
              {
                question: "O alisamento danifica o cabelo?",
                answer: "Utilizamos produtos de alta qualidade e técnicas modernas que minimizam os danos aos fios.",
              },
              {
                question: "Vocês trabalham com agendamento online?",
                answer: "Sim! Você pode agendar seu horário através do nosso WhatsApp, de forma rápida e prática.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white p-6 rounded-xl"
              >
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-[#D946EF] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 px-4 bg-[#D946EF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transforme Seu Visual com as Melhores Profissionais
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Agende agora sua consulta e descubra como podemos realçar sua beleza natural
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-white text-[#D946EF] hover:bg-white/90 text-lg px-8 py-6"
          >
            Agende seu Horário
            <Scissors className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
