"use client";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";

export default function BilansSeances() {
  return (
    <Wrapper>
      {/* HERO */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero min-h-[60vh] bg-base-200"
      >
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Bilans et Séances</h1>
            <p className="text-lg text-gray-600">
              Comprendre le déroulement des bilans psychomoteurs et des séances
              adaptées.
            </p>
          </div>
        </div>
      </motion.section>

      {/* BILANS ET OBSERVATIONS CLINIQUES */}
      <motion.section
        id="bilans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Les bilans et observations cliniques
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Le bilan psychomoteur regroupe plusieurs tests standardisés,
            permettant d'observer un âge développemental et/ou des difficultés
            et des compétences. Il évalue différents domaines :
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
            <li>La motricité globale et fine</li>
            <li>Les représentations du corps</li>
            <li>Les coordinations</li>
            <li>L'équilibre</li>
            <li>Les capacités visuo-spatiales et visuo-constructives</li>
            <li>La compréhension</li>
            <li>Les compétences graphomotrices</li>
            <li>Le tonus musculaire</li>
          </ul>
          <p className="text-lg leading-relaxed mb-4">
            Quand un enfant n'est pas encore accessible à la situation de bilan,
            il est possible de réaliser une observation de son développement
            dans différentes situations de jeux.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Ces deux temps sont toujours précédés d'une anamnèse où le.a
            psychomotricien.nne échange avec le patient (et les parents pour les
            enfants), sur les difficultés qui l'amènent à consulter, le
            développement de l'enfant, son quotidien, les antécédents familiaux,
            etc.
          </p>
          <p className="text-lg leading-relaxed">
            À l'issue du bilan, les observations seront restituées à la famille
            et au médecin prescripteur. Le.a psychomotricien.nne proposera des
            axes thérapeutiques pour la suite de la prise en charge. Il est
            parfois possible que le bilan ne montre pas de nécessité de suivi
            psychomoteur. Il est alors possible de ré-orienter si besoin vers le
            ou les professionnels compétents.
          </p>
        </div>
      </motion.section>

      {/* LES SÉANCES */}
      <motion.section
        id="seances"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-200 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Les séances</h2>
          <p className="text-lg leading-relaxed mb-4">
            Les séances durent 30 à 45 minutes et sont généralement
            hebdomadaires. Elles comprennent un temps d'échanges avec les
            parents ou le patient. Chaque séance est adaptée au projet
            thérapeutique et propose différentes médiations :
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
            <li>Jeux et parcours moteurs</li>
            <li>Exploration sensorielle</li>
            <li>Relaxation</li>
            <li>
              Jeux travaillant les capacités instrumentales (réflexion,
              planification, orientation et construction dans l'espace,
              graphomotricité…)
            </li>
            <li>Jeux de régulation tonique</li>
            <li>Expressivité et conscience corporelle</li>
          </ul>
        </div>
      </motion.section>

      {/* RELAXATION ADULTES */}
      <motion.section
        id="relaxation"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Les séances de relaxation pour adultes
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            La relaxation pour adultes peut être prescrite pour différents
            troubles :
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
            <li>
              Maladies chroniques (pouvant entraîner notamment de la douleur)
            </li>
            <li>Troubles anxio-dépressifs</li>
            <li>Stress post-traumatique</li>
            <li>Difficultés d'image du corps et de rapport à son corps</li>
          </ul>
          <p className="text-lg leading-relaxed">
            Le soin par la relaxation est adaptable à chaque patient. Étant
            formée à différentes approches, je propose de la relaxation avec ou
            sans toucher (Amma thérapeutique, mobilisations passives de
            Wintrebert, relaxation de Jacobson…).
          </p>
        </div>
      </motion.section>
    </Wrapper>
  );
}
