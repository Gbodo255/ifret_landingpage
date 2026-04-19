import React from 'react';
import googlePlayLogo from '../assets/icons8-google-play-store-96.png';
import heroShape from '../assets/hero-shape.png';
import heroPhones from '../assets/hero-phones.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 pt-20 pb-20 overflow-hidden">
      {/* Hero Top Wave (Solid Yellow, Flipped) */}
      <div 
        className="absolute top-0 left-0 w-full h-[120px] sm:h-[180px] pointer-events-none z-0"
        style={{
          maskImage: `url(${heroShape})`,
          maskSize: '100% 100%',
          maskPosition: 'top',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: `url(${heroShape})`,
          WebkitMaskSize: '100% 100%',
          WebkitMaskPosition: 'top',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#FFC000',
          transform: 'scaleY(-1)', // Flip upside down
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center w-full relative z-20 -mt-20">
        {/* Proposition de valeur */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark leading-tight mb-3 animate-fade-in-up">
            Optimisez vos expéditions avec intelligence
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-5 animate-fade-in-up [animation-delay:200ms]">
            La plateforme qui simplifie votre logistique, réduit vos coûts et suit vos expéditions en temps réel.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            {/* App Store Button */}
            <button className="flex items-center gap-2.5 bg-brand-dark px-4 py-1.5 rounded-lg shadow-sm hover:bg-black transition-colors active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-7 h-7 text-white">
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="flex flex-col items-start leading-none mt-1">
                    <span className="text-[10px] text-slate-300 font-semibold mb-0.5">Disponible sur</span>
                    <span className="text-sm font-bold text-white tracking-tight">App Store</span>
                </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-2.5 bg-brand-dark px-4 py-1.5 rounded-lg shadow-sm hover:bg-black transition-colors active:scale-95">
                <img src={googlePlayLogo} alt="Google Play" className="w-7 h-7 object-contain" />
                <div className="flex flex-col items-start leading-none mt-1">
                    <span className="text-[10px] text-slate-300 font-semibold mb-0.5">Disponible sur</span>
                    <span className="text-sm font-bold text-white tracking-tight">Google Play</span>
                </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Concentric Circles (Lowered even more with gradient visibility) */}
      <div className="absolute bottom-[-650px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[950px] sm:h-[950px] pointer-events-none z-0 flex items-center justify-center">
        <div className="absolute w-full h-full border-2 border-brand-primary/10 rounded-full animate-[pulse_8s_infinite]"></div>
        <div className="absolute w-[80%] h-[80%] border-2 border-brand-primary/20 rounded-full animate-[pulse_10s_infinite]"></div>
        <div className="absolute w-[60%] h-[60%] border-2 border-brand-primary/40 rounded-full animate-[pulse_12s_infinite]"></div>
        <div className="absolute w-[40%] h-[40%] border-2 border-brand-primary/60 rounded-full animate-[pulse_14s_infinite]"></div>
      </div>

      {/* Phone Mockups */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-10 animate-fade-in-up [animation-delay:600ms]">
        <img 
          src={heroPhones} 
          alt="I-fret mobile mockups" 
          className="w-full h-auto object-contain drop-shadow-2xl scale-105 sm:scale-110 translate-y-6 sm:translate-y-12 relative z-10" 
        />
      </div>
    </section>
  );
};

export default Hero;
