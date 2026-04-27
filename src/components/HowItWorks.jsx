import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import mockupIphone from '../assets/mockupIphone.png';

const steps = [
  {
    step: "ÉTAPE 01",
    title: "Publie ta demande",
    description: "Décris ta marchandise, indique d'où elle part et où elle doit arriver. Ça prend moins d'une minute.",
  },
  {
    step: "ÉTAPE 02",
    title: "Choisis ton transporteur",
    description: "Reçois des offres de transporteurs vérifiés près de toi. Compare les prix et choisis celui qui te convient.",
  },
  {
    step: "ÉTAPE 03",
    title: "Suis ta livraison",
    description: "Ton transporteur prend la route. Tu suis ta marchandise en temps réel jusqu'à destination.",
  }
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // All useTransform calls MUST be at the top level — not inside JSX
  const opacityStep1 = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const opacityStep2 = useTransform(smoothProgress, [0.33, 0.45, 0.65], [0, 1, 0]);
  const opacityStep3 = useTransform(smoothProgress, [0.66, 0.8], [0, 1]);

  return (
    <section id="comment-ca-marche" ref={containerRef} className="relative bg-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row relative">
        
        {/* Left Side: Scrolling Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col lg:pl-12">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="min-h-[60vh] lg:h-screen flex flex-col justify-center py-12 lg:py-20"
            >
              <div className="max-w-xl">
                <span className="text-brand-primary font-semibold text-sm uppercase tracking-[0.2em] block mb-4">
                  {item.step}
                </span>
                <h3 className="text-3xl lg:text-5xl font-display font-semibold text-brand-dark mb-8 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="h-[20vh]" />
        </div>

        {/* Right Side: Sticky Mockup in Container */}
        <div className="hidden lg:block w-1/2 sticky top-0 h-screen overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <div className="relative w-full h-full max-h-[750px] bg-[#F1F1F1] rounded-[3rem] flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm">
                <div className="absolute inset-0 opacity-[0.2]" style={{ 
                    backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)', 
                    backgroundSize: '30px 30px' 
                }}></div>

                <motion.div className="relative w-full max-w-[340px] z-10 translate-y-24">
                    <img 
                        src={mockupIphone} 
                        alt="Ifret App" 
                        className="w-full h-auto object-contain drop-shadow-2xl scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-10">
                        <div className="w-[85%] h-[85%] bg-white rounded-[2.5rem] mt-4 overflow-hidden relative border border-slate-100">
                             {/* Step 1 Content */}
                             <motion.div 
                                className="absolute inset-0 p-6 flex flex-col gap-4"
                                style={{ opacity: opacityStep1 }}
                             >
                                <div className="h-8 w-1/2 bg-slate-50 rounded-lg"></div>
                                <div className="h-32 w-full bg-slate-50 rounded-2xl"></div>
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-slate-50 rounded-full"></div>
                                    <div className="h-4 w-3/4 bg-slate-50 rounded-full"></div>
                                </div>
                             </motion.div>

                             {/* Step 2 Content */}
                             <motion.div 
                                className="absolute inset-0 p-6 flex flex-col gap-4 bg-white"
                                style={{ opacity: opacityStep2 }}
                             >
                                <div className="h-8 w-1/2 bg-brand-primary/10 rounded-lg"></div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-24 bg-slate-50 rounded-xl"></div>
                                    <div className="h-24 bg-slate-50 rounded-xl"></div>
                                </div>
                                <div className="h-32 w-full bg-slate-50 rounded-2xl"></div>
                             </motion.div>

                             {/* Step 3 Content */}
                             <motion.div 
                                className="absolute inset-0 p-6 flex flex-col gap-4 bg-white"
                                style={{ opacity: opacityStep3 }}
                             >
                                <div className="h-8 w-1/2 bg-green-50 rounded-lg"></div>
                                <div className="flex-1 w-full bg-slate-50 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-primary rounded-full animate-ping"></div>
                                </div>
                             </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Mockup */}
        <div className="lg:hidden w-full flex justify-center pb-20">
            <img src={mockupIphone} alt="App" className="w-2/3 h-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
