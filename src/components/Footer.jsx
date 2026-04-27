import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/1.png';
import logoFull from '../assets/logo/2.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200 min-h-[25vh] flex flex-col justify-center">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Services */}
          <div>
            <h4 className="text-brand-dark font-display font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Publier une demande', href: '/#accueil' },
                { name: 'Trouver un transporteur', href: '/#comment-ca-marche' },
                { name: 'Suivi en temps réel', href: '/#comment-ca-marche' },
                { name: 'Solutions Entreprises', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 text-xs hover:text-brand-primary transition-colors font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Aide & Support */}
          <div>
            <h4 className="text-brand-dark font-display font-bold mb-4 text-sm uppercase tracking-wider">Aide & Support</h4>
            <ul className="space-y-3">
              {[
                { name: 'Centre d\'assistance', href: '/contact' },
                { name: 'Comment ça marche', href: '/#comment-ca-marche' },
                { name: 'Sécurité des envois', href: '/#avantages' },
                { name: 'Contact', href: '/contact', isPage: true }
              ].map((link) => (
                <li key={link.name}>
                  {link.isPage ? (
                    <Link to={link.href} className="text-slate-500 text-xs hover:text-brand-primary transition-colors font-medium">{link.name}</Link>
                  ) : (
                    <a href={link.href} className="text-slate-500 text-xs hover:text-brand-primary transition-colors font-medium">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: iFret */}
          <div>
            <h4 className="text-brand-dark font-display font-bold mb-4 text-sm uppercase tracking-wider">iFret</h4>
            <ul className="space-y-3">
              {[
                { name: 'À propos de nous', href: '/#avantages' },
                { name: 'Devenir transporteur', href: '/contact', isPage: true },
                { name: 'Carrières', href: '/contact', isPage: true }
              ].map((link) => (
                <li key={link.name}>
                  {link.isPage ? (
                    <Link to={link.href} className="text-slate-500 text-xs hover:text-brand-primary transition-colors font-medium">{link.name}</Link>
                  ) : (
                    <a href={link.href} className="text-slate-500 text-xs hover:text-brand-primary transition-colors font-medium">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Réseaux */}
          <div className="flex flex-col">
            <h4 className="text-brand-dark font-display font-bold mb-4 text-sm uppercase tracking-wider">Restons connectés</h4>
            <div className="flex gap-2 mb-6">
              {[
                { name: 'Facebook', path: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' },
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
              ].map((social) => (
                <a key={social.name} href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-primary transition-all duration-300 shadow-sm border border-slate-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Logo & Legal */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img src={logoFull} alt="iFret Logo" className="h-8 w-auto object-contain brightness-0 opacity-80" />
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-slate-400 text-[10px] font-medium">
                <Link to="/privacy" className="hover:text-brand-dark transition-colors">Confidentialité</Link>
                <Link to="/terms" className="hover:text-brand-dark transition-colors">Mentions légales</Link>
                <Link to="/terms" className="hover:text-brand-dark transition-colors">Conditions d'utilisation</Link>
                <Link to="/privacy" className="hover:text-brand-dark transition-colors">Cookies</Link>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-slate-400 text-[10px] font-medium tracking-wide">
              © {new Date().getFullYear()} iFret Technologies. Tous droits réservés.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
