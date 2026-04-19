import React from 'react';

const benefitsData = [
  {
    title: "Suivi des expéditions en temps réel",
    description: "Gardez un œil sur l'emplacement exact de vos marchandises 24h/24, avec des notifications instantanées pour chaque étape d'expédition.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v5m0 10v5M2 12h5m10 0h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Connectez votre chaîne logistique",
    description: "Gérez vos factures, vos bons de livraison et communiquez de manière fluide avec les transporteurs sur une seule interface.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    title: "Optimisez vos dépenses facilement",
    description: "Notre système intelligent analyse les itinéraires pour réduire considérablement vos coûts et vous fournir des rapports détaillés.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Benefits = () => {
  return (
    <section className="min-h-screen flex items-center pt-12 pb-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Mockup */}
          <div className="flex flex-col animate-fade-in-up">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-dark/80 font-bold text-[10px] uppercase tracking-widest w-max mb-5">
              Pourquoi nous ?
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4 leading-tight pr-4">
              Ifret est le choix incontournable !
            </h2>
            
            <p className="text-slate-500 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Transformez votre gestion logistique en une expérience fluide, économique et totalement maîtrisée grâce à nos solutions de pointe.
            </p>
            
            {/* UI Mockup matching the image style */}
            <div className="relative w-full max-w-md ml-4 sm:ml-8 hidden sm:block">
              {/* Brand background shape */}
              <div className="absolute -top-6 -bottom-6 -left-6 w-56 bg-brand-primary rounded-[30px] overflow-hidden">
                 {/* Decorative rings inside */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-black/10 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-black/10 rounded-full"></div>
              </div>
              
              {/* White floating card */}
              <div className="relative bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.07)] border border-slate-100 p-6 z-10 w-full animate-fade-in-up [animation-delay:300ms]">
                {/* Mockup Row 1 */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-slate-50">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-dark shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                   </div>
                   <div className="w-full pt-0.5">
                     <div className="text-[13px] font-bold text-brand-dark mb-2 drop-shadow-sm">Envois Automatisés</div>
                     <div className="flex gap-2 mb-2"><div className="h-2 w-16 bg-slate-200 rounded-full"></div><div className="h-2 w-10 bg-slate-200 rounded-full"></div><div className="h-2 w-12 bg-slate-200 rounded-full"></div></div>
                     <div className="flex gap-2"><div className="h-2 w-20 bg-slate-100 rounded-full"></div><div className="h-2 w-12 bg-slate-100 rounded-full"></div></div>
                   </div>
                </div>
                {/* Mockup Row 2 */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-slate-50">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-dark shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                   </div>
                   <div className="w-full pt-0.5">
                     <div className="text-[13px] font-bold text-brand-dark mb-2 drop-shadow-sm">Synchronisation Fluide</div>
                     <div className="flex gap-2 mb-2"><div className="h-2 w-20 bg-slate-200 rounded-full"></div><div className="h-2 w-8 bg-slate-200 rounded-full"></div><div className="h-2 w-10 bg-slate-200 rounded-full"></div></div>
                     <div className="flex gap-2"><div className="h-2 w-14 bg-slate-100 rounded-full"></div><div className="h-2 w-20 bg-slate-100 rounded-full"></div></div>
                   </div>
                </div>
                {/* Mockup Row 3 */}
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-dark shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                   </div>
                   <div className="w-full pt-0.5">
                     <div className="text-[13px] font-bold text-brand-dark mb-2 drop-shadow-sm">Rapports d'Activité</div>
                     <div className="flex gap-2 mb-2"><div className="h-2 w-14 bg-slate-200 rounded-full"></div><div className="h-2 w-16 bg-slate-200 rounded-full"></div></div>
                     <div className="flex gap-2"><div className="h-2 w-10 bg-slate-100 rounded-full"></div><div className="h-2 w-16 bg-slate-100 rounded-full"></div></div>
                   </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Stacked Benefit Cards */}
          <div className="flex flex-col gap-5 lg:pl-6">
            {benefitsData.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-brand-primary/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-slate-50 text-brand-dark rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold text-brand-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
