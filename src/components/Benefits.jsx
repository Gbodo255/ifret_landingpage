import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Layout, Wallet, Bell, BarChart3, Truck, ShieldCheck, Zap } from 'lucide-react';

const benefitsData = [
  {
    title: "Bourse de fret interactive",
    description: "Une mise en relation directe et rapide entre expéditeurs et transporteurs qualifiés pour toutes vos marchandises au Bénin.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: "Optimisation des revenus",
    description: "Dites adieu aux retours à vide. Notre plateforme aide les transporteurs à trouver du fret pour leurs trajets de retour.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Suivi & Sécurité garantie",
    description: "Visualisez vos envois en temps réel sur une carte interactive et profitez d'un réseau de professionnels vérifiés.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

const Benefits = () => {
  return (
    <section id="avantages" className="min-h-screen lg:h-screen flex items-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Mockup */}
          <div className="flex flex-col animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-brand-dark mb-4 leading-tight pr-4">
              Pourquoi choisir <span className="text-brand-primary">iFret</span> pour votre logistique ?
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
              Nous réinventons le transport de marchandises au Bénin grâce au digital. Une solution d'intermédiation professionnelle, sécurisée et ultra-performante.
            </p>
            
            {/* UI Mockup */}
            <div className="relative w-full max-w-md ml-4 sm:ml-8 hidden sm:block">
              <div className="absolute -top-6 -bottom-6 -left-6 w-56 bg-brand-primary rounded-[30px] overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-black/10 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-black/10 rounded-full"></div>
              </div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.07)] border border-slate-100 p-6 z-10 w-full"
              >
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-slate-50">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-dark shrink-0">
                      <Bell className="w-5 h-5" />
                   </div>
                   <div className="w-full pt-0.5">
                     <div className="text-[13px] font-bold text-brand-dark mb-2">Demande de transport</div>
                     <div className="flex gap-2 mb-2"><div className="h-2 w-16 bg-slate-200 rounded-full"></div><div className="h-2 w-10 bg-slate-200 rounded-full"></div></div>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-dark shrink-0">
                      <BarChart3 className="w-5 h-5" />
                   </div>
                   <div className="w-full pt-0.5">
                     <div className="text-[13px] font-bold text-brand-dark mb-2">Trajets optimisés</div>
                     <div className="flex gap-2 mb-2"><div className="h-2 w-14 bg-slate-200 rounded-full"></div><div className="h-2 w-16 bg-slate-200 rounded-full"></div></div>
                   </div>
                </div>
              </motion.div>
            </div>
            
          </div>

          {/* Right Column: Stacked Benefit Cards */}
          <div className="flex flex-col gap-5 lg:pl-6">
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  backgroundColor: "rgba(255, 192, 0, 0.02)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-brand-primary/40 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 bg-slate-50 text-brand-dark rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors duration-300 shadow-sm"
                >
                  {benefit.icon}
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="hidden sm:flex self-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
