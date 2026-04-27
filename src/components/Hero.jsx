import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import LogoFanMilk from '../assets/Logo (1)/Fan Milk.png';
import LogoSobaps from '../assets/Logo (1)/SOBAPS 1.png';
import LogoCroixRouge from '../assets/Logo (1)/Croix rouge 2.png';
import mockupIphone from '../assets/mockupIphone.png';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center p-6 lg:p-10 bg-white overflow-hidden pt-24 lg:pt-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent"></div>
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -left-20 -z-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center">
        {/* Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark leading-[1.25]">
            Expédiez où vous voulez, quand vous <br className="hidden sm:block" />
            voulez en toute <span className="text-brand-primary">confiance.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed mt-2">
            Gérez vos expéditions, optimisez vos coûts et suivez vos marchandises en temps réel avec la plateforme logistique la plus intuitive du marché.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a 
              href="https://play.google.com/store/apps/details?id=com.ilt.ifret_mobile&hl=fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 w-full sm:w-auto bg-brand-dark text-white px-10 rounded-full text-base font-bold hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary border-2 border-transparent transition-all shadow-2xl shadow-brand-dark/20 flex items-center justify-center gap-3 group overflow-hidden"
            >
              <span>Télécharger l'app</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <div className="flex flex-row transition-transform duration-500 ease-in-out group-hover:-translate-x-5">
                  <ArrowRight className="w-5 h-5 shrink-0" />
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </div>
              </div>
            </a>
            
            <motion.button 
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              className="h-14 w-full sm:w-auto flex items-center gap-4 group px-8 bg-slate-50 border border-slate-100 rounded-full hover:border-brand-primary/30 hover:bg-white transition-all shadow-sm justify-center"
            >
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300 overflow-hidden">
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 4, opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-brand-dark rounded-full pointer-events-none"
                />
                <motion.div
                  variants={{
                    hover: { 
                      rotate: 360,
                      scale: [1, 1.2, 1],
                      transition: { 
                        rotate: { duration: 1.5, ease: "easeInOut" },
                        scale: { repeat: Infinity, duration: 1.5 }
                      }
                    }
                  }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Play className="w-4 h-4 fill-current ml-1" />
                </motion.div>
              </div>
              <span className="text-base font-bold text-brand-dark">Voir comment ça marche</span>
            </motion.button>
          </div>

          {/* iPhone Mockup Row */}
          <div className="mt-16 flex flex-row items-center justify-center -space-x-12 sm:-space-x-32 lg:-space-x-44 w-full max-w-6xl mx-auto overflow-visible">
            {/* Left Mockup */}
            <div className="w-[120px] sm:w-[280px] lg:w-[340px] shrink-0 opacity-90 translate-y-2">
              <img 
                src={mockupIphone} 
                alt="Ifret Mobile App 1" 
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Center Mockup */}
            <div className="w-[140px] sm:w-[320px] lg:w-[400px] shrink-0 z-10">
              <img 
                src={mockupIphone} 
                alt="Ifret Mobile App 2" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Mockup */}
            <div className="w-[120px] sm:w-[280px] lg:w-[340px] shrink-0 opacity-90 translate-y-2">
              <img 
                src={mockupIphone} 
                alt="Ifret Mobile App 3" 
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
