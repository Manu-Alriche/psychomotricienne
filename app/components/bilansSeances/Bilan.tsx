"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface Bilan {
  id: string;
  heading: string;
  description: React.ReactNode;
  image: string;
  url: string;
}

interface BilanProps {
  title: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
}

const Bilan = ({
  title = "Bilans & Séances",
  description = "Comprendre le déroulement des bilans psychomoteurs et des séances adaptées.",
  buttonUrl = "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
  buttonText = "Prendre rendez-vous",
  features = [
    {
      id: "feature-1",
      heading: "Les bilans et observations cliniques",
      description: (
        <>
          <p>
            Le bilan psychomoteur regroupe plusieurs tests standardisés
            permettant d'observer un âge développemental et/ou des difficultés
            et des compétences.
          </p>
          <br />
          <p>Il évalue différents domaines :</p>
          <ul className="list-disc pl-6">
            <li>La motricité globale et fine</li>
            <li>Les représentations du corps</li>
            <li>Les coordinations</li>
            <li>L'équilibre</li>
            <li>Les capacités visuo-spatiales et visuo-constructives</li>
            <li>La compréhension</li>
            <li>Les compétences graphomotrices</li>
            <li>Le tonus musculaire</li>
          </ul>
          <br />
          <p>
            Quand un enfant n'est pas encore accessible à la situation de bilan,
            il est possible de réaliser une observation de son développement
            dans différentes situations de jeux.
          </p>
          <br />
          <p>
            Ces deux temps sont toujours précédés d'une anamnèse où le·a
            psychomotricien·ne échange avec le patient (et les parents pour les
            enfants) sur les difficultés qui l'amènent à consulter, le
            développement de l'enfant, son quotidien, les antécédents familiaux,
            etc.
          </p>
          <br />
          <p>
            À l'issue du bilan, les observations seront restituées à la famille
            et au médecin prescripteur. Le·a psychomotricien·ne proposera des
            axes thérapeutiques pour la suite de la prise en charge. Il est
            parfois possible que le bilan ne montre pas de nécessité de suivi
            psychomoteur. Il est alors possible de réorienter si besoin vers
            le·s professionnel·s compétent·s.
          </p>
        </>
      ),
      image: "/image_3.webp",
    },
    {
      id: "feature-2",
      heading: "Les séances",
      description: (
        <>
          <p>
            Les séances durent entre 30 et 45 minutes et sont généralement
            hebdomadaires.
          </p>
          <br />
          <p>
            Chaque séance comprend un temps d’échanges avec les parents ou le
            patient.
          </p>
          <br />
          <p>
            Chaque séance est adaptée au projet thérapeutique et propose
            différentes médiations :
          </p>
          <ul className="list-disc pl-6">
            <li>Jeux et parcours moteurs</li>
            <li>Exploration sensorielle</li>
            <li>Relaxation</li>
            <li>
              Jeux travaillant les capacités instrumentales (réflexion,
              planification, orientation et construction dans l’espace,
              graphomotricité…)
            </li>
            <li>Jeux de régulation tonique</li>
            <li>Expressivité et conscience corporelle</li>
          </ul>
        </>
      ),
      image: "/image_14.webp",
    },
    {
      id: "feature-3",
      heading: "Les séances de relaxation pour adultes",
      description: (
        <>
          <p>
            La relaxation pour adultes peut être prescrite pour différents
            troubles :
          </p>
          <ul className="list-disc pl-6">
            <li>
              Maladies chroniques (pouvant entraîner notamment de la douleur)
            </li>
            <li>Troubles anxio-dépressifs</li>
            <li>Stress post-traumatique</li>
            <li>Difficultés d'image du corps et de rapport à son corps</li>
          </ul>
          <br />
          <p>
            Le soin par la relaxation est adaptable à chaque patient. Étant
            formée à différentes approches, je propose de la relaxation avec ou
            sans toucher (Amma thérapeutique, mobilisations passives de
            Wintrebert, relaxation de Jacobson…).
          </p>
        </>
      ),
      image: "/image_13.webp",
    },
  ],
}: BilanProps) => {
  return (
    <motion.section
      id="bilan"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      aria-label="Bilans et séances"
      className="bg-base-100 py-15"
    >
      <div className="container">
        <div className="mb-8 lg:max-w-sm">
          <h1 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground mb-8 lg:text-lg">
              {description}
            </p>
          )}
          {buttonUrl && (
            <Button variant="link" asChild>
              <a
                href={buttonUrl}
                className="group flex items-center font-medium md:text-base lg:text-lg"
              >
                {buttonText}
                <ArrowRight />
              </a>
            </Button>
          )}
        </div>

        <article className="grid grid-cols-2 grid-rows-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`
        border-border overflow-clip rounded-xl border 
        ${
          index === 0 ? "col-span-2 flex flex-col md:flex-row" : "flex flex-col"
        }
      `}
            >
              {/* Image */}
              <a className={`${index === 0 ? "md:w-1/2" : "w-full"}`}>
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className={`h-full w-full object-cover object-center transition-opacity hover:opacity-80 ${
                    index === 0 ? "aspect-auto" : "aspect-16/9"
                  }`}
                />
              </a>

              {/* Contenu */}
              <div
                className={`flex flex-col justify-center ${
                  index === 0
                    ? "md:w-1/2 p-8 md:p-10 lg:p-12"
                    : "px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12"
                }`}
              >
                <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.heading}
                </h2>
                <div className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </motion.section>
  );
};

export default Bilan;
