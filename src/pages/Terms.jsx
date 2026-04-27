import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className="space-y-4"
  >
    {children}
  </motion.section>
);

const Terms = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-slate-400 mb-12">Dernière mise à jour : Juin 2025</p>

          <div className="prose prose-slate max-w-none space-y-20 text-slate-600">
            <Section>
              <p className="text-lg leading-relaxed border-l-4 border-brand-primary pl-6 py-2 bg-slate-50/50 rounded-r-xl">
                Veuillez lire attentivement ces Conditions Générales d'Utilisation ("CGU") avant d'utiliser notre application de transport de fret ("I-Fret"). Ces CGU régissent votre accès et votre utilisation de l'Application. En utilisant l'Application, vous acceptez d'être lié par ces CGU. Si vous n'acceptez pas ces CGU, veuillez ne pas utiliser l’Application.
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">1. Utilisation de l'Application</h2>
              <div className="space-y-4">
                <p><strong>1.1</strong> Vous devez avoir au moins 18 ans pour utiliser l'Application.</p>
                <p><strong>1.2</strong> Vous êtes responsable de l'exactitude et de la légalité des informations que vous fournissez via l'Application.</p>
                <p><strong>1.3</strong> Vous acceptez de ne pas utiliser l'Application à des fins illégales ou non autorisées.</p>
              </div>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">2. Compte Utilisateur</h2>
              <div className="space-y-4">
                <p><strong>2.1</strong> Pour accéder à certaines fonctionnalités de l'Application, vous devrez créer un compte utilisateur. Vous êtes responsable de la confidentialité de vos identifiants.</p>
                <p><strong>2.2</strong> Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.</p>
              </div>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">3. Contenu Utilisateur</h2>
              <div className="space-y-4">
                <p><strong>3.1</strong> Vous êtes seul responsable du contenu que vous publiez, téléchargez ou transmettez via l'Application.</p>
                <p><strong>3.2</strong> En publiant du Contenu Utilisateur, vous accordez à l'Application une licence mondiale, non exclusive, libre de redevance, pour utiliser, reproduire et distribuer ce contenu dans le cadre du service.</p>
                <p><strong>3.3</strong> Vous garantissez que vous avez tous les droits nécessaires pour accorder la licence susmentionnée.</p>
              </div>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">4. Responsabilité</h2>
              <div className="space-y-4">
                <p><strong>4.1</strong> Nous nous efforçons de fournir une Application fiable et sécurisée, mais nous ne garantissons pas qu'elle sera exempte d'erreurs ou d'interruptions.</p>
                <p><strong>4.2</strong> Nous ne sommes pas responsables des dommages directs, indirects, accessoires ou consécutifs résultant de votre utilisation de l'Application.</p>
                <p><strong>4.3</strong> Vous acceptez de nous indemniser et de nous défendre contre toute réclamation découlant de votre violation de ces CGU.</p>
              </div>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">5. Modifications des CGU</h2>
              <p>
                Nous nous réservons le droit de modifier ces CGU à tout moment. Nous vous informerons de toute modification importante en affichant les CGU révisées sur l'Application.
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold text-brand-dark">6. Loi Applicable et Règlement des Litiges</h2>
              <p>
                Ces CGU sont régies par les lois en vigueur en république du Bénin. Tout litige relatif à ces CGU sera soumis à la compétence exclusive des tribunaux de Cotonou.
              </p>
            </Section>

            <Section>
              <div className="pt-10 border-t border-slate-100">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Contactez-nous</h2>
                <div className="space-y-2 text-slate-500">
                  <p><strong>Tél :</strong> 97 09 51 01 / 96 73 54 54 / 96 26 69 32</p>
                  <p><strong>E-mail :</strong> iltsarl17@gmail.com</p>
                </div>
                <p className="mt-8 font-semibold text-brand-dark italic">
                  En utilisant l'Application, vous consentez à être lié par ces CGU.
                </p>
              </div>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;

