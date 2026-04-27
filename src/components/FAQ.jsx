import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "C'est quoi exactement i-fret ?",
    answer: "I-fret est une application qui te met en contact avec des transporteurs vérifiés pour envoyer ta marchandise partout en Afrique de l'Ouest. Tu publies ta demande, tu reçois des offres et tu choisis — le tout depuis ton téléphone."
  },
  {
    question: "Est-ce que l'application est gratuite ?",
    answer: "Oui, i-fret est gratuit à télécharger sur App Store et Google Play. Pas de frais cachés, tu crées ton compte et tu commences tout de suite."
  },
  {
    question: "Comment je sais que le transporteur est sérieux ?",
    answer: "Tous les transporteurs sur i-fret sont vérifiés par notre équipe avant d'être acceptés. Tu peux aussi consulter les avis d'autres utilisateurs avant de faire ton choix."
  },
  {
    question: "Est-ce que je peux suivre ma marchandise en temps réel ?",
    answer: "Oui. Dès que ton transporteur prend la route, tu reçois des notifications à chaque étape. Tu sais toujours où est ta marchandise sans appeler personne."
  },
  {
    question: "Dans quels pays i-fret est disponible ?",
    answer: "I-fret est disponible partout en Afrique de l'Ouest — au Bénin, au Togo, au Nigeria, au Niger et dans les pays voisins."
  },
  {
    question: "Que se passe-t-il si j'ai un problème avec ma livraison ?",
    answer: "Notre équipe est disponible 7j/7 pour t'aider. Tu nous contactes directement depuis l'app et on prend en charge ta situation rapidement."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full py-5 px-6 flex items-center justify-between text-left transition-all duration-300 rounded-2xl ${isOpen ? 'bg-slate-50 ring-1 ring-slate-200' : 'bg-white border border-slate-100 hover:bg-slate-50/50'}`}
      >
        <span className={`font-display font-semibold text-base lg:text-lg pr-8 transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-dark'}`}>
          {question}
        </span>
        <div className={`shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : 'text-slate-300'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="py-4 px-6 text-slate-500 leading-relaxed text-sm lg:text-base bg-slate-50 rounded-b-2xl mt-[-1rem] pt-8 -z-10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="min-h-[90vh] bg-white pt-4 pb-24 flex items-center border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left Column: Heading */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-display font-semibold text-brand-dark leading-tight mb-6">
              Des questions ? On a <br /> les réponses.
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
