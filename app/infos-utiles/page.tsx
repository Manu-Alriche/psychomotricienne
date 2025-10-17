"use client";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";

export default function InfosUtiles() {
  return (
    <Wrapper>
      {/* HERO */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero min-h-[50vh] bg-base-200"
      >
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Infos utiles</h1>
            <p className="text-lg text-gray-600">
              Aides financières et informations pratiques pour les soins
              psychomoteurs.
            </p>
          </div>
        </div>
      </motion.section>

      {/* AIDES FINANCIÈRES + TARIFS */}
      <motion.section
        id="aides-financieres"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center text-primary">
            Aides financières
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Bien que les psychomotricien.ne.s soient des professionnels de
              santé, l'assurance maladie ne rembourse pas de façon complète et
              uniforme les soins psychomoteurs.
            </p>
            <p>
              Les soins sont totalement pris en charge lorsqu'ils sont réalisés
              dans des établissements sanitaires ou médico-sociaux (Centre
              Médico-Psychologiques, Instituts Médico-Éducatifs, etc.), mais les
              délais d'attente sont souvent très longs. Les enfants ayant un
              dossier MDPH avec une prise en charge à 100% peuvent également
              bénéficier d'un remboursement.
            </p>
            <p>
              Vous pouvez faire une demande exceptionnelle de remboursement de
              soins auprès de votre CPAM, qui étudiera votre dossier en
              commission.
            </p>
            <p>
              Certaines mutuelles prennent en charge les soins psychomoteurs
              sous forme de forfait annuel ou de réduction de prix des séances.
              Chaque mutuelle étant différente, il est nécessaire de se
              renseigner auprès de la vôtre. Les soins psychomoteurs
              appartiennent à la catégorie "médecine douce" (car non
              médicamenteux).
            </p>
            <p>
              La P.C.O (Plateforme de Coordination et d’Orientation), présente
              dans chaque département, peut financer les soins pour un an,
              renouvelable une fois (soit deux ans de soins). Cette plateforme
              s'adresse aux familles dont les enfants sont en cours de dépistage
              ou ont déjà été diagnostiqués avec un trouble neurodéveloppemental
              et ont entre 0 et 12 ans.
            </p>
          </div>

          {/* --- Nouvelle section Tarifs --- */}
          <div className="mt-16 bg-base-200 shadow-md rounded-2xl p-8 border border-base-300">
            <h2 className="text-3xl font-semibold mb-8 text-primary text-center">
              Tarifs
            </h2>

            {/* Tableau responsive */}
            <div className="overflow-x-auto">
              <table className="table w-full text-center">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-lg">Prestation</th>
                    <th className="text-lg">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-base-100 transition">
                    <td>Bilan standardisé</td>
                    <td className="font-semibold">200 €</td>
                  </tr>
                  <tr className="hover:bg-base-100 transition">
                    <td>Observation psychomotrice</td>
                    <td className="font-semibold">150 €</td>
                  </tr>
                  <tr className="hover:bg-base-100 transition">
                    <td>Consultation de suivi et séances de relaxation</td>
                    <td className="font-semibold">44 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-gray-500 italic text-center">
              (Tarifs en vigueur – année 2025)
            </p>
          </div>
        </div>
      </motion.section>
    </Wrapper>
  );
}
