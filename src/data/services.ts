
import { Service } from "@/types/common";
import { Sparkles, Palette, Heart, Wand2, Crown, Zap, Star, Shield, Droplet, Clock, Smile, Scissors } from "lucide-react";

export const services: Service[] = [
  {
    title: "Mechas Exclusivas",
    description: "Design personalizado de mechas que realçam sua beleza natural. Técnicas inovadoras e produtos premium para um resultado único e duradouro. Garanta luminosidade e dimensão perfeitas para seu rosto.",
    icon: Sparkles,
    keywords: [
      { text: "Iluminação natural", icon: Star },
      { text: "Dimensão", icon: Palette },
      { text: "Personalização", icon: Heart }
    ]
  },
  {
    title: "Coloração Premium",
    description: "Cores vibrantes e duradouras com produtos de alta performance. Transforme seu visual com tecnologia de ponta e proteção máxima para seus fios. Resultados impressionantes desde a primeira aplicação.",
    icon: Palette,
    keywords: [
      { text: "Cobertura perfeita", icon: Shield },
      { text: "Brilho intenso", icon: Sparkles },
      { text: "Proteção", icon: Heart }
    ]
  },
  {
    title: "Ruivos Deslumbrantes",
    description: "Especialistas em tons ruivos que harmonizam perfeitamente com seu tom de pele. Do cobre suave ao vermelho intenso, encontre o tom ideal para sua personalidade. Manutenção especializada para cores duradouras.",
    icon: Heart,
    keywords: [
      { text: "Tons personalizados", icon: Palette },
      { text: "Durabilidade", icon: Clock },
      { text: "Vivacidade", icon: Sparkles }
    ]
  },
  {
    title: "Alisamento Inteligente",
    description: "Técnicas avançadas de alisamento que mantêm a saúde dos fios. Resultado natural com máximo cuidado. Redução de volume e frizz com tratamentos seguros e eficazes. Cabelos disciplinados por mais tempo.",
    icon: Wand2,
    keywords: [
      { text: "Sem formol", icon: Shield },
      { text: "Redução de volume", icon: Droplet },
      { text: "Proteção", icon: Heart }
    ]
  },
  {
    title: "Tratamentos Personalizados",
    description: "Protocolos exclusivos de tratamento para recuperação e fortalecimento dos fios. Diagnóstico completo e resultados visíveis desde a primeira sessão. Recupere a saúde e beleza natural do seu cabelo.",
    icon: Crown,
    keywords: [
      { text: "Hidratação profunda", icon: Droplet },
      { text: "Reconstrução", icon: Shield },
      { text: "Nutrição", icon: Heart }
    ]
  },
  {
    title: "Finalização Expert",
    description: "Técnicas profissionais de finalização que realçam seu estilo pessoal. Aprenda a manter o visual do salão em casa com dicas exclusivas. Produtos e técnicas selecionados para seu tipo de cabelo.",
    icon: Zap,
    keywords: [
      { text: "Durabilidade", icon: Clock },
      { text: "Praticidade", icon: Star },
      { text: "Estilo", icon: Smile }
    ]
  },
  {
    title: "Corte com Visagismo",
    description: "Análise facial completa para um corte verdadeiramente personalizado. Acabamento perfeito e dicas de estilo para valorizar seus traços. Transforme seu visual com um corte que harmoniza com sua personalidade.",
    icon: Scissors,
    keywords: [
      { text: "Identidade visual", icon: Smile },
      { text: "Correção de imperfeições", icon: Wand2 },
      { text: "Estilo pessoal", icon: Star }
    ]
  }
];
