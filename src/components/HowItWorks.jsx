import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    title: "Créez votre compte",
    description: "Inscrivez-vous en quelques clics et configurez votre profil d'entreprise pour commencer à expédier sans attendre. Une interface simple pour une prise en main immédiate.",
  },
  {
    title: "Planifiez vos envois",
    description: "Renseignez les détails de vos marchandises. Notre algorithme vous connecte instantanément avec les transporteurs les plus fiables et les mieux adaptés à vos besoins.",
  },
  {
    title: "Suivez en temps réel",
    description: "Gardez un œil sur votre cargaison 24h/24 grâce à notre système de géolocalisation. Recevez des notifications automatiques et gérez vos documents en un seul endroit.",
  }
];

const HowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const start = rect.top - (viewportHeight * 0.8);
      const height = rect.height;
      
      const progress = Math.max(0, Math.min(100, (-start / (height * 0.7)) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden py-8 sm:py-16 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        
        {/* Intro Phrase (Aligned Left) */}
        <div className="mb-12 sm:mb-16 flex flex-col items-start text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-dark/80 font-bold text-[10px] uppercase tracking-widest w-max mb-4">
             Logistique simplifiée
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark mb-2">
            iFret, on y va ?
          </h2>
          <p className="text-lg sm:text-xl font-display font-medium text-slate-500 max-w-xl leading-relaxed">
            Chez <span className="text-brand-dark font-bold underline decoration-brand-primary decoration-4 underline-offset-4 font-black">iFret</span>, optimiser vos flux se fait naturellement, étape par étape.
          </p>
        </div>

        {/* Unified Vertical Progress Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[280px] bottom-20 w-[2px] bg-slate-100 z-0">
          <div 
            className="absolute top-0 left-0 w-full bg-brand-primary transition-all duration-300 ease-out origin-top"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {steps.map((step, index) => {
            const stepThreshold = (index / (steps.length - 1)) * 80;
            const isStepActive = scrollProgress > stepThreshold;

            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-10 sm:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 ${isStepActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-10'}`}
              >
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                  <div className={`aspect-[16/10] bg-slate-100 rounded-[2rem] flex items-center justify-center border transition-all duration-500 overflow-hidden relative group ${isStepActive ? 'border-brand-primary/30 shadow-lg' : 'border-slate-200'}`}>
                     {/* Decorative background element for placeholder */}
                     <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full transition-transform duration-1000 ${isStepActive ? 'scale-150' : 'scale-100'}`}></div>
                     
                     <div className={`flex flex-col items-center gap-4 relative z-10 transition-all duration-500 ${isStepActive ? 'text-brand-primary' : 'text-slate-400'}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="48" 
                            height="48" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Visuel Etape #{index + 1}</span>
                     </div>
                  </div>
                </div>

                {/* Vertical separator spacing holder */}
                <div className="hidden md:block w-px h-px invisible"></div>

                {/* Text Column */}
                <div className="w-full md:w-1/2">
                  <div className={`max-w-md ${index % 2 !== 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`font-display font-black text-6xl transition-colors duration-500 select-none ${isStepActive ? 'text-brand-primary opacity-20' : 'text-slate-300 opacity-10'}`}>
                        0{index + 1}
                      </div>
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-display font-bold mb-4 leading-tight transition-colors duration-500 ${isStepActive ? 'text-brand-dark' : 'text-slate-400'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${isStepActive ? 'text-slate-600' : 'text-slate-400'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
