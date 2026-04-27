import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "iFret a complètement changé ma façon de gérer mes expéditions. Je ne m'étais jamais rendu compte à quel point je perdais du temps avant de voir les choses clairement.",
    name: "Sophie Lefebvre",
    date: "12 Avril 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "La transparence sur les prix et le suivi en temps réel sont des atouts majeurs. Je choisis mes transporteurs en toute confiance maintenant.",
    name: "Marc Antoine",
    date: "25 Mars 2026",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "Une solution simple, efficace et surtout très intuitive. Mes équipes ont adopté l'outil en moins d'une semaine. Un gain de productivité énorme.",
    name: "Julie Durand",
    date: "10 Février 2026",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "Plus de stress lors des livraisons critiques. Je sais exactement où se trouve ma marchandise à chaque instant. Bravo pour cette application.",
    name: "Thomas Bernard",
    date: "05 Janvier 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "L'interface est d'une clarté incroyable. On gagne un temps précieux sur chaque dossier logistique.",
    name: "Lucie Morel",
    date: "18 Décembre 2025",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "Une flexibilité hors pair. iFret nous permet de réagir vite aux demandes de nos clients.",
    name: "Alexandre Dupont",
    date: "02 Novembre 2025",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsVisible(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = testimonials.length - itemsVisible;
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [itemsVisible, testimonials.length]);

  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12 lg:mb-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-semibold text-brand-dark mb-4">
          Ils nous font confiance.
        </h2>
        <p className="text-slate-500 text-base lg:text-lg max-w-2xl mx-auto">
          Découvrez pourquoi des centaines d'entreprises choisissent iFret.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <div className="overflow-visible">
          <motion.div 
            animate={{ x: `-${(index * 100) / itemsVisible}%` }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex gap-6"
          >
            {testimonials.map((item, i) => (
              <div 
                key={i}
                className="w-full lg:w-[calc(33.333%-1.5rem)] shrink-0 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
              >
                <p className="text-base sm:text-lg font-display font-medium text-brand-dark mb-6 sm:mb-8 leading-relaxed italic">
                  “{item.text}”
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover bg-slate-100 border border-slate-100"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-brand-dark leading-none mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: testimonials.length - (itemsVisible - 1) }).map((_, i) => (
            <button 
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-brand-primary' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

