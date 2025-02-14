
import { Scissors, Sparkles, Palette, Wand2, Heart, Zap, Crown } from "lucide-react";

const services = [
  {
    title: "Mechas Exclusivas",
    description: "Design personalizado de mechas que realçam sua beleza natural. Técnicas inovadoras para um resultado único e duradouro.",
    icon: Sparkles,
    keywords: "Iluminação natural, Dimensão, Personalização"
  },
  {
    title: "Coloração Premium",
    description: "Cores vibrantes e duradouras com produtos de alta performance. Transforme seu visual com tecnologia de ponta.",
    icon: Palette,
    keywords: "Cobertura perfeita, Brilho intenso, Proteção"
  },
  {
    title: "Ruivos Deslumbrantes",
    description: "Especialistas em tons ruivos que harmonizam com seu tom de pele. Do cobre suave ao vermelho intenso.",
    icon: Heart,
    keywords: "Tons personalizados, Durabilidade, Vivacidade"
  },
  {
    title: "Alisamento Inteligente",
    description: "Técnicas avançadas de alisamento que mantêm a saúde dos fios. Resultado natural com máximo cuidado.",
    icon: Wand2,
    keywords: "Sem formol, Redução de volume, Proteção"
  },
  {
    title: "Tratamentos VIP",
    description: "Protocolos exclusivos de tratamento para recuperação e fortalecimento dos fios. Resultados visíveis desde a primeira sessão.",
    icon: Crown,
    keywords: "Hidratação profunda, Reconstrução, Nutrição"
  },
  {
    title: "Finalização Expert",
    description: "Técnicas profissionais de finalização que realçam seu estilo. Aprenda a manter o visual do salão em casa.",
    icon: Zap,
    keywords: "Durabilidade, Praticidade, Estilo"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-primary-50/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-primary-600 mb-8">
          Serviços Exclusivos
        </h2>
        <p className="text-center text-primary-500 mb-16 max-w-2xl mx-auto">
          Descubra nossa coleção de serviços premium, desenvolvidos para transformar seu cabelo e elevar sua autoestima
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <service.icon className="w-12 h-12 text-primary-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-600">{service.title}</h3>
              <p className="text-primary-500 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.split(', ').map((keyword, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-rose-light text-primary-600 border border-rose-dark/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
