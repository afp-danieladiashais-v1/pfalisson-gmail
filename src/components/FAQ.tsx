
const faqs = [
  {
    question: "Quanto tempo dura uma sessão de mechas?",
    answer: "O tempo pode variar de 2 a 4 horas, dependendo do comprimento e da técnica escolhida."
  },
  {
    question: "Com qual frequência devo fazer manutenção da cor?",
    answer: "Recomendamos a manutenção a cada 30-45 dias para manter a cor vibrante."
  },
  {
    question: "Vocês trabalham com agendamento?",
    answer: "Sim, trabalhamos exclusivamente com agendamento prévio para garantir um atendimento personalizado."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-primary-800 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-6 mb-4">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
