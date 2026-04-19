import React from 'react';
import googlePlayLogo from '../assets/icons8-google-play-store-96.png';

const FinalCTA = () => {
  return (
    <section className="bg-white py-1 sm:py-2 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto bg-[#FFC000] relative overflow-hidden rounded-xl sm:rounded-[2rem] min-h-[15vh] flex items-center py-4 sm:py-6">
        {/* White Concentric Rings - Subtle background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/20 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/20 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            
            {/* Left Column: Compact Text & Buttons */}
            <div className="flex flex-col text-brand-dark animate-fade-in-up text-center lg:text-left">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-display font-black mb-1 leading-tight uppercase tracking-tight">
                Lancez votre aventure <span className="text-white italic">iFret</span> dès maintenant !
              </h2>
              <p className="text-brand-dark/70 text-xs sm:text-sm lg:text-base mb-4 max-w-lg font-bold mx-auto lg:ml-0">
                Simple, rapide, et connectée. Rejoignez la révolution logistique.
              </p>
              
              {/* Store Buttons - Smaller version */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <button className="flex items-center gap-2 bg-brand-dark px-4 py-1.5 rounded-lg shadow-lg hover:bg-black transition-all active:scale-95 border border-black/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 text-white">
                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[8px] text-slate-300 font-semibold mb-0.5 uppercase">Disponible sur</span>
                        <span className="text-xs font-bold text-white tracking-tight">App Store</span>
                    </div>
                </button>

                <button className="flex items-center gap-2 bg-brand-dark px-4 py-1.5 rounded-lg shadow-lg hover:bg-black transition-all active:scale-95 border border-black/10">
                    <img src={googlePlayLogo} alt="Google Play" className="w-5 h-5 object-contain" />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[8px] text-slate-300 font-semibold mb-0.5 uppercase">Disponible sur</span>
                        <span className="text-xs font-bold text-white tracking-tight">Google Play</span>
                    </div>
                </button>
              </div>
            </div>

            {/* Right Column: Empty */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
