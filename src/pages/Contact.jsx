import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-primary font-semibold text-sm uppercase tracking-[0.2em] block mb-4">
                CONTACTEZ-NOUS
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-brand-dark mb-8 leading-tight">
                Une question ? <br />
                Parlons de votre <span className="text-brand-primary">logistique.</span>
              </h1>
              <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-12">
                Notre équipe basée à Cotonou est là pour vous aider à optimiser vos expéditions et répondre à toutes vos interrogations sur la plateforme iFret.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-primary transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Email</h4>
                    <p className="text-slate-500 font-medium">contact@ifret.com</p>
                    <p className="text-slate-400 text-sm italic">iltsarl17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-primary transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Téléphone</h4>
                    <p className="text-slate-500 font-medium">+229 97 09 51 01</p>
                    <p className="text-slate-500 font-medium">+229 96 73 54 54</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-primary transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Bureau</h4>
                    <p className="text-slate-500 font-medium">Quartier Wologuèdè, Cotonou, Bénin</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 rounded-[40px] p-8 lg:p-12 border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark ml-2">Nom complet</label>
                    <input 
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark ml-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="jean@exemple.com"
                      className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-2">Sujet</label>
                  <select className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:outline-none transition-all appearance-none cursor-pointer">
                    <option>Demande de renseignements</option>
                    <option>Devenir transporteur</option>
                    <option>Support technique</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-2">Message</label>
                  <textarea 
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows="5"
                    className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full h-14 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all group">
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

