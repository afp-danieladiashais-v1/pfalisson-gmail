
import { MapPin, Star, Clock } from "lucide-react";

const Benefits = () => {
  return (
    <section className="section-padding bg-white/80">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-primary-600 mb-16">
          Por que escolher Daniela Dias Hair?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <MapPin className="w-14 h-14 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Localização Premium</h3>
            <p className="text-primary-500">Ambiente sofisticado e acolhedor</p>
          </div>
          <div className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <Star className="w-14 h-14 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Profissionais Experts</h3>
            <p className="text-primary-500">Equipe altamente qualificada</p>
          </div>
          <div className="glass-card p-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <Clock className="w-14 h-14 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Atendimento Exclusivo</h3>
            <p className="text-primary-500">Horário marcado para sua comodidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
