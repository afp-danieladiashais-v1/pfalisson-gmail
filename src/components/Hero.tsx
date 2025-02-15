
import { Sparkles, Palette, Star, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { KeywordTag } from "./ui/keyword-tag";

const heroKeywords = [
  { text: "Expertise em Mechas", icon: Sparkles },
  { text: "Coloração Profissional", icon: Palette },
  { text: "Tratamentos Avançados", icon: Star },
  { text: "Beleza Autêntica", icon: Heart }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20 object-left-top"
          loading="eager"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-neutral-800 mb-6 leading-tight animate-fade-in">
          Realce Sua Beleza
          <span className="text-5xl md:text-7xl text-primary block mt-2">
            Daniela Dias Hair
          </span>
          <span className="text-2xl md:text-3xl font-serif font-bold text-primary-600 mb-8 block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
            Transformação e Arte em Cada Fio
          </span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-slide-up">
          {heroKeywords.map((keyword, index) => (
            <KeywordTag key={index} keyword={keyword} />
          ))}
        </div>
        <p className="text-xl md:text-2xl text-primary-500 mb-8 animate-slide-up max-w-2xl mx-auto font-light">
          Descubra a <span className="font-semibold text-primary-600">excelência</span> em coloração e tratamentos capilares personalizados
        </p>
        <p className="text-lg md:text-xl text-primary-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Especialista em técnicas exclusivas que transformam seu cabelo com respeito à sua natureza e personalidade
        </p>
        <a
          href="https://wa.me/5534999659886"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary group animate-fade-in"
        >
          Agende sua Transformação AGORA
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            Atendimento VIP
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            Produtos Premium
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            Satisfação Garantida
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
