import React, { useState, useEffect } from 'react';
import ifretLogo from '../assets/logo/2.png';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 sm:px-10 py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src={ifretLogo} alt="Ifret" className="h-9 sm:h-10 w-auto object-contain" />
        </div>
        
        {/* Menu - Empty for now */}
        <nav className="hidden md:flex items-center gap-8">
        </nav>

        {/* CTA */}
        <div>
          <button className="btn-premium group">
            <span className="fill-circle"></span>
            <div className="flex items-center overflow-hidden transition-all duration-300 ease-in-out w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 group-hover:mr-1.5 relative z-10">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="shrink-0"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </div>
            <span className="relative z-10 transition-colors duration-300">Télécharger</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
