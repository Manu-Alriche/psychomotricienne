"use client";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";
import { ChevronDown } from "lucide-react";

export default function About() {
  return (
    <Wrapper>
      {/* HERO INTRO */}
      <motion.section
        id="intro"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero min-h-[95vh] bg-base-200"
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="/marion-couasse-psychomotricienne.webp"
            className="max-w-sm rounded-2xl shadow-2xl"
            alt="Marion Couasse Psychomotricienne"
          />
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4">
              Marion Couasse
              <br />
              <span className="text-primary text-3xl font-semibold">
                Psychomotricienne D.E
              </span>
            </h1>
            <p className="text-lg mb-2">
              Membre de l’Association Française des Psychomotriciens Libéraux
              (AFPL)
            </p>
            <p className="text-base text-gray-600">
              Psychomotricienne à Ranville (proche Caen, Cabourg)
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-10 flex justify-center"
            >
              <ChevronDown
                size={40}
                className="text-primary cursor-pointer hover:opacity-80 transition"
                onClick={() => {
                  document.getElementById("parcours")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* MON PARCOURS */}
      <motion.section
        id="parcours"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl text-primary font-bold text-center mb-10">
            Mon parcours
          </h2>
          <div className="max-w-4xl mx-auto leading-relaxed text-lg space-y-5">
            <p>
              Diplômée depuis <strong>2016</strong> de l’Institut de Formation
              de Psychomotricité de la{" "}
              <strong>Pitié-Salpêtrière à Paris</strong>, j’ai exercé durant{" "}
              <strong>8 ans</strong> en Centre Médico-Psychologique pour enfants
              et adolescents.
            </p>
            <p>
              J’ai ainsi pu construire mon expérience auprès d’enfants de tout
              âge et présentant différentes pathologies : autisme, troubles des
              apprentissages, retard de développement, stress post-traumatique,
              agitation psychomotrice, syndromes génétiques, etc.
            </p>
            <p>
              J’ai également exercé à la{" "}
              <strong>Maison des Femmes de Saint-Denis</strong> auprès de femmes
              victimes de violences sexuelles et conjugales, où je proposais des
              séances de relaxation favorisant le retour à soi et la reconnexion
              au corps.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="formations"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-200 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Mes formations complémentaires
          </h2>

          <div className="max-w-3xl mx-auto relative">
            <ul className="relative border-l-2 border-primary ml-4">
              {/* Timeline item */}
              {[
                {
                  org: "A. Bullinger",
                  title: "Sensibilisation à l’approche sensori-motrice",
                },
                {
                  org: "Hôpital Avicenne",
                  title: "Sensibilisation / formation au psycho-traumatisme",
                },
                {
                  org: "RESPIR' Formation",
                  title: "Formation au Amma Thérapeutique",
                },
                {
                  org: "AFDET",
                  title: "Formation en Éducation Thérapeutique du Patient",
                },
                {
                  org: "RESPIR' Formation",
                  title: "Formation en graphomotricité (acte graphique)",
                },
                {
                  org: "Massage Bébé Shantala",
                  title: "Formation Massage Bébé Shantala",
                },
              ].map((item, index) => (
                <li key={index} className="mb-10 ml-6 relative">
                  {/* Dot */}
                  <span className="absolute -left-4 top-2 w-4 h-4 bg-primary rounded-full border-2 border-white"></span>

                  {/* Organisation */}
                  <p className="font-semibold text-lg mb-2 ">{item.org}</p>

                  {/* Card */}
                  <div className="bg-base-100 shadow-md rounded-xl p-5">
                    <p>{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* VALEURS / CITATION */}
      <motion.section
        id="valeurs"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl text-primary font-semibold mb-8">
            Ma vision de la psychomotricité
          </h2>
          <blockquote className="italic text-lg max-w-3xl mx-auto text-gray-600">
            “Le corps et les émotions sont étroitement liés : en apprenant à
            écouter son corps, on retrouve la possibilité d’agir, de ressentir
            et de s’apaiser.”
          </blockquote>
        </div>
      </motion.section>
    </Wrapper>
  );
}
