
import { Instagram, Star, Youtube, MessageCircle, Sparkles, Palette, Shield, Heart, Clock, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-100/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary-600 mb-6">Daniela Dias Hair</h3>
            <p className="text-primary-500 mb-4">Transformando visual e autoestima</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1 text-primary-500">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Especialista em Mechas</span>
              </div>
              <div className="flex items-center gap-1 text-primary-500">
                <Palette className="w-4 h-4" />
                <span className="text-sm">Coloração Premium</span>
              </div>
              <div className="flex items-center gap-1 text-primary-500">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Ruivos Naturais</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary-600 mb-6">Contato</h4>
            <a
              href="https://wa.me/5534999659886"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-500 hover:text-primary-600 mb-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              +55 (34) 99965-9886
            </a>
            <p className="text-primary-500 mt-4">
              Agende sua transformação e descubra como podemos realçar sua beleza natural
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-1 text-primary-500">
                <Star className="w-4 h-4" />
                <span className="text-sm">Atendimento VIP</span>
              </div>
              <div className="flex items-center gap-1 text-primary-500">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Resultados Garantidos</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary-600 mb-6">Redes Sociais</h4>
            <div className="flex space-x-6 mb-6">
              <a href="https://www.instagram.com/danieladias_hair" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="https://www.tiktok.com/@danieladiashair" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
                <Star size={28} />
              </a>
              <a href="https://www.youtube.com/@DanielaDiasHair" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
                <Youtube size={28} />
              </a>
            </div>
            <p className="text-primary-500">
              Siga-nos para inspirações, dicas e resultados incríveis
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-1 text-primary-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Antes e Depois</span>
              </div>
              <div className="flex items-center gap-1 text-primary-500">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Dicas de Cabelo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
