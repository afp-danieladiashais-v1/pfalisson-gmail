
const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20 object-left-top"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-600 mb-8 animate-fadeIn">
          Desperte Sua Beleza Natural
        </h1>
        <p className="text-xl md:text-2xl text-primary-500 mb-8 animate-slideUp max-w-2xl mx-auto">
          Transforme seu visual com expert<span className="text-primary-600">ise</span> e cuidado personalizado
        </p>
        <p className="text-lg md:text-xl text-primary-400 mb-12 max-w-3xl mx-auto">
          Especialistas em técnicas exclusivas de mechas, ruivos deslumbrantes, 
          e tratamentos que revelam a melhor versão do seu cabelo
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="text-sm bg-primary-100 text-primary-600 px-3 py-1 rounded-full">#MechasNaturais</span>
          <span className="text-sm bg-primary-100 text-primary-600 px-3 py-1 rounded-full">#RuivoPerfeito</span>
          <span className="text-sm bg-primary-100 text-primary-600 px-3 py-1 rounded-full">#CabelosSaudáveis</span>
          <span className="text-sm bg-primary-100 text-primary-600 px-3 py-1 rounded-full">#TransformaçãoCapilar</span>
          <span className="text-sm bg-primary-100 text-primary-600 px-3 py-1 rounded-full">#DanielaDiasHair</span>
        </div>
        <a
          href="https://wa.me/5534999659886"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Agende sua Transformação → 
        </a>
      </div>
    </section>
  );
};

export default Hero;
