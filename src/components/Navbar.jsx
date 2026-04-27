import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import ifretLogo from '../assets/logo/2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', href: '/#accueil' },
    { name: 'Pourquoi nous ?', href: '/#avantages' },
    { name: 'Comment ça marche ?', href: '/#comment-ca-marche' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/contact', isPage: true },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
      <div className="w-full h-[10vh] min-h-[70px] flex items-center px-6 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer w-[150px] md:w-[180px]">
          <img src={ifretLogo} alt="Ifret" className="h-8 md:h-10 w-auto object-contain" />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-dark'}`}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center justify-end w-[150px] md:w-[180px] gap-4">
          <button className="hidden sm:flex btn-premium group whitespace-nowrap py-2 px-5 text-sm">
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            <span>Télécharger</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-brand-dark transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className={`text-lg font-semibold transition-colors ${location.pathname === link.href ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'}`}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href} 
                onClick={handleLinkClick}
                className="text-lg font-semibold text-brand-dark hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <button className="btn-premium w-full justify-center py-4 text-base">
            <Download className="w-5 h-5 mr-2" />
            <span>Télécharger l'app</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
