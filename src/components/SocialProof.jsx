import React from 'react';

// Import logos from the assets folder
import LogoCobedimen from '../assets/Logo (1)/COBEDIMEN.jpg';
import LogoCroixRouge from '../assets/Logo (1)/Croix rouge 2.png';
import LogoFanMilk from '../assets/Logo (1)/Fan Milk.png';
import LogoSobaps from '../assets/Logo (1)/SOBAPS 1.png';
import LogoUnops from '../assets/Logo (1)/UNOPS 3.png';
import LogoCnil from '../assets/Logo (1)/logo-filigranne-CNIL1-drapeaux-du-benin-sans-contour.png';

const logos = [
  { src: LogoCobedimen, alt: 'COBEDIMEN' },
  { src: LogoCroixRouge, alt: 'Croix rouge' },
  { src: LogoFanMilk, alt: 'Fan Milk' },
  { src: LogoSobaps, alt: 'SOBAPS' },
  { src: LogoUnops, alt: 'UNOPS' },
  { src: LogoCnil, alt: 'CNIL' },
];

const SocialProof = () => {
  // Triple the logos to ensure they fill even the widest screens without gaps
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-8 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <p className="text-center text-sm font-bold text-slate-900 uppercase tracking-wider">
          Ils nous font confiance :
        </p>
      </div>
      
      {/* Horizontal Scrolling Band */}
      <div className="relative flex overflow-x-hidden scrollbar-hide group max-w-[100vw]">
        <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap min-w-max">
          {/* Premier Set */}
          <div className="flex items-center gap-20 px-10">
            {repeatedLogos.map((logo, index) => (
              <img 
                key={`logo-1-${index}`} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-14 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            ))}
          </div>
          {/* Deuxième Set (pour la boucle infinie de l'animation -50%) */}
          <div className="flex items-center gap-20 px-10">
            {repeatedLogos.map((logo, index) => (
              <img 
                key={`logo-2-${index}`} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-14 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
