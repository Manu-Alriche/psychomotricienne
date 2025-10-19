"use client";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";

export default function Psychomotricite() {
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
            <h1 className="text-5xl font-bold mb-4">La Psychomotricité</h1>
            <p className="text-lg text-gray-600">
              Pour qui, pourquoi, et comment elle accompagne le développement et
              l'équilibre psychomoteur.
            </p>
          </div>
        </div>
      </motion.section>

      {/* DÉFINITION */}
      <motion.section
        id="definition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl text-primary font-bold mb-6 text-center">
            Qu’est-ce que la psychomotricité ?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Le.a psychomotricien.ne est un professionnel de santé paramédical,
            qui reçoit sur prescription médicale.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La psychomotricité se définit par la liaison entre les capacités
            neurologiques, psychologiques et les capacités motrices. C’est un
            domaine de soin se situant à la fois dans la prévention, la
            rééducation et la thérapie.
          </p>
          <p className="text-lg leading-relaxed">
            La personne, quel que soit son âge, est considérée dans la globalité
            de son développement et de son équilibre psychomoteur (motricité
            globale et fine, équilibre, coordinations, relation à soi, à son
            corps, aux autres et à son environnement, autonomie,
            apprentissages…).
          </p>
        </div>
      </motion.section>

      {/* POUR QUI / TROUBLES */}
      <motion.section
        id="public"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-200 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl text-primary font-bold mb-6 text-center">
            Pour qui et pourquoi ?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Toute personne rencontrant des difficultés psychologiques,
            neurologiques ou psychiques impactant ses capacités motrices ou
            inversement, peut consulter un.e psychomotricien.ne.
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Troubles neuro-génétiques</li>
            <li>Retards de développement</li>
            <li>Troubles neuro-développementaux</li>
            <li>Agitation ou inhibition psychomotrice</li>
            <li>Stress post-traumatique</li>
            <li>
              Troubles des apprentissages (maladresse, difficultés d'écriture,
              de concentration…)
            </li>
            <li>Accidents avec pertes de capacités psychomotrices</li>
            <li>Trouble de l'image du corps</li>
            <li>Troubles anxieux et psychoaffectifs</li>
            <li>Troubles psychiques</li>
          </ul>
        </div>
      </motion.section>

      {/* BILAN ET SÉANCES */}
      <motion.section
        id="bilan"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl text-primary font-bold mb-6 text-center">
            Le bilan et les séances
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Un bilan psychomoteur est souvent proposé afin d’évaluer les
            capacités et les difficultés du patient.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Les différents axes thérapeutiques, propres à chaque patient, seront
            ensuite travaillés en séance.
          </p>
          <p className="text-lg leading-relaxed">
            Différentes médiations psychocorporelles et ludiques sont utilisées
            : jeux, exercices corporels, relaxation, activités sensorielles et
            motrices adaptées.
          </p>
        </div>
      </motion.section>
    </Wrapper>
  );
}
