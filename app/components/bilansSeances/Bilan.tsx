"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface Bilan {
  id: string;
  heading: string;
  description: string;
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
  title = "Bilans et Séances",
  description = "Comprendre le déroulement des bilans psychomoteurs et des séances adaptées.",
  buttonUrl = "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
  buttonText = "Prendre rendez-vous",
  features = [
    {
      id: "feature-1",
      heading: "Les bilans et observations cliniques",
      description: `
        Le bilan psychomoteur regroupe plusieurs tests standardisés permettant d'observer un âge développemental et/ou des difficultés et des compétences.<br/>
        <br/>
        Il évalue différents domaines :<br/>
          <li>La motricité globale et fine</li>
          <li>Les représentations du corps</li>
          <li>Les coordinations</li>
          <li>L'équilibre</li>
          <li>Les capacités visuo-spatiales et visuo-constructives</li>
          <li>La compréhension</li>
          <li>Les compétences graphomotrices</li>
          <li>Le tonus musculaire</li>
            <br/>
          Quand un enfant n'est pas encore accessible à la situation de bilan,
          il est possible de réaliser une observation de son développement
          dans différentes situations de jeux.<br/>
            <br/>
          Ces deux temps sont toujours précédés d'une anamnèse où le·a
          psychomotricien·ne échange avec le patient (et les parents pour les
          enfants) sur les difficultés qui l'amènent à consulter, le
          développement de l'enfant, son quotidien, les antécédents familiaux,
          etc.<br/>
            <br/>
          À l'issue du bilan, les observations seront restituées à la famille
          et au médecin prescripteur. Le·a psychomotricien·ne proposera des
          axes thérapeutiques pour la suite de la prise en charge. Il est
          parfois possible que le bilan ne montre pas de nécessité de suivi
          psychomoteur. Il est alors possible de réorienter si besoin vers le·s
          professionnel·s compétent·s.
      `,
      image: "/image_3.jpg",
    },
    {
      id: "feature-2",
      heading: "Les séances",
      description: `
        Les séances durent entre 30 et 45 minuteset sont généralement hebdomadaires.<br/>
        
        Elles comprennent un temps d’échanges avec les parents ou le patient.<br/>
       
        Chaque séance est adaptée au projet thérapeutique et propose différentes médiations :<br/>
      <br/>
          <li>Jeux et parcours moteurs</li>
          <li>Exploration sensorielle</li>
          <li>Relaxation</li>
          <li>Jeux travaillant les capacités instrumentales (réflexion, planification, orientation et construction dans l’espace, graphomotricité…)</li>
          <li>Jeux de régulation tonique</li>
          <li>Expressivité et conscience corporelle</li>  
      `,
      image: "/image_2.png",
    },
    {
      id: "feature-3",
      heading: "Les séances de relaxation pour adultes",
      description: `
        La relaxation pour adultes peut être prescrite pour différents troubles :<br/>
            <br/>
          <li>Maladies chroniques (pouvant entraîner notamment de la douleur)</li>
          <li>Troubles anxio-dépressifs</li>
          <li>Stress post-traumatique</li>
          <li>Difficultés d'image du corps et de rapport à son corps</li>
            <br/>
          Le soin par la relaxation est adaptable à chaque patient. <br/>
          Étant formée à différentes approches, je propose de la relaxation avec ou sans toucher 
          (Amma thérapeutique, mobilisations passives de Wintrebert, relaxation de Jacobson…).
      `,
      image: "/image_1.avif",
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
      className="bg-base-100 py-20"
    >
      <section>
        <div className="container">
          <div className="mb-8 lg:max-w-sm">
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {title}
            </h2>
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
          <div className="grid grid-cols-2 grid-rows-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`
        border-border overflow-clip rounded-xl border 
        ${
          index === 0
            ? "col-span-2 flex flex-col md:flex-row"
            : "row-start-2 flex flex-col"
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
                  <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    {feature.heading}
                  </h3>
                  <p
                    className="text-muted-foreground lg:text-lg"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Bilan;
