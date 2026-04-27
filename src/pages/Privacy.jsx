import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className="space-y-6"
  >
    {children}
  </motion.section>
);

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-slate-400 mb-12">Dernière mise à jour : Juin 2025</p>

          <div className="prose prose-slate max-w-none space-y-20 text-slate-600">
            <Section>
              <p className="text-lg leading-relaxed italic border-l-4 border-brand-primary pl-6 py-2 bg-slate-50/50 rounded-r-xl">
                La confidentialité et la sécurité des données de nos utilisateurs sont des priorités essentielles pour nous. Cette politique détaille comment nous traitons vos informations.
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">1. Collecte des Informations</h2>
              <p>Nous collectons les informations suivantes lorsque vous utilisez notre Application :</p>
              
              <div className="space-y-6 pl-4 border-l-2 border-slate-100">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-dark">1.1 Informations que vous nous fournissez directement :</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Informations d'identification personnelle telles que votre nom, votre adresse e-mail, votre numéro de téléphone et les informations relatives à votre entreprise.</li>
                    <li>Informations sur vos transactions, y compris les détails des expéditions de fret et les informations de paiement.</li>
                    <li>Informations que vous publiez sur notre Application à des fins de renseignements.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-dark">1.2 Informations que nous collectons automatiquement :</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Données de journal :</strong> Nous recueillons automatiquement des informations de journal, telles que votre adresse IP, le type de navigateur, les pages consultées et les horaires d'accès.</li>
                    <li><strong>Données de localisation :</strong> Nous pouvons collecter des informations sur votre emplacement géographique pour faciliter le suivi des expéditions.</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">2. Utilisation des Informations</h2>
              <p>Nous utilisons les informations que nous collectons pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir, exploiter et maintenir notre Application.</li>
                <li>Personnaliser et améliorer votre expérience utilisateur.</li>
                <li>Traiter les transactions et envoyer des notifications relatives aux expéditions.</li>
                <li>Assurer la sécurité de la plateforme et prévenir la fraude.</li>
              </ul>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">3. Partage des Informations</h2>
              <p>
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers sans votre consentement, sauf si cela est nécessaire pour fournir le service (ex: partager les détails de l'expédition avec le transporteur choisi) ou pour se conformer à la loi.
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">4. Sécurité des Informations</h2>
              <p>
                Nous mettons en place des mesures de sécurité techniques, administratives et physiques pour protéger vos informations personnelles contre tout accès non autorisé, perte ou altération.
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">5. Vos Choix et Droits</h2>
              <p>
                Vous pouvez accéder, mettre à jour ou supprimer vos informations personnelles en vous connectant à votre compte. Vous pouvez également nous contacter pour toute demande relative à vos données.
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">6. Modifications de cette Politique</h2>
              <p>
                Nous nous réservons le droit de mettre à jour cette Politique de Confidentialité à tout moment. Nous vous informerons de tout changement important par le biais de l'Application.
              </p>
            </Section>

            <Section>
              <div className="pt-10 border-t border-slate-100">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Contactez-nous</h2>
                <div className="space-y-2 text-slate-500">
                  <p><strong>Tél :</strong> 97 09 51 01 / 96 73 54 54 / 96 26 69 32</p>
                  <p><strong>E-mail :</strong> iltsarl17@gmail.com</p>
                </div>
              </div>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
