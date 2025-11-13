"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface Psychomot {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

interface PsychomotProps {
  title: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
}

const Psychomot = ({
  title = "La Psychomotricité",
  description = "Pour qui, pourquoi, et comment elle accompagne le développement et l'équilibre psychomoteur.",
  buttonUrl = "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
  buttonText = "Prendre rendez-vous",
  features = [
    {
      id: "feature-1",
      heading: "Qu’est-ce que la psychomotricité ?",
      description: `
        <p>Le.a psychomotricien.ne est un professionnel de santé paramédical,
            qui reçoit sur prescription médicale.</p>
        <br/>
        
          <p>La psychomotricité se définit par la liaison entre les capacités
            neurologiques, psychologiques et les capacités motrices. C’est un
            domaine de soin se situant à la fois dans la prévention, la
            rééducation et la thérapie.</p>
            <br/>
           <p>La personne, quel que soit son âge, est considérée dans la globalité
            de son développement et de son équilibre psychomoteur (motricité
            globale et fine, équilibre, coordinations, relation à soi, à son
            corps, aux autres et à son environnement, autonomie,
            apprentissages…).</p>
      `,
      image: "/image_2.webp",
    },
    {
      id: "feature-2",
      heading: "Pour qui et pourquoi ?",
      description: `
        <p>Toute personne rencontrant des difficultés psychologiques,
            neurologiques ou psychiques impactant ses capacités motrices ou
            inversement, peut consulter un.e psychomotricien.ne.</p>
            <br/>
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
         
      `,
      image: "/image_11.webp",
    },
    {
      id: "feature-3",
      heading: "Le bilan et les séances",
      description: `
        <p>Un bilan psychomoteur est souvent proposé afin d’évaluer les
            capacités et les difficultés du patient.</p>
            <br/>
           <p>Les différents axes thérapeutiques, propres à chaque patient, seront
            ensuite travaillés en séance.</p><br/>
           <p>Différentes médiations psychocorporelles et ludiques sont utilisées
            : jeux, exercices corporels, relaxation, activités sensorielles et
            motrices adaptées.</p>
      `,
      image: "/image_3.webp",
    },
  ],
}: PsychomotProps) => {
  return (
    <motion.section
      id="bilan"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-100 py-15"
    >
      <section>
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
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="border-border flex flex-col overflow-clip rounded-xl border"
              >
                <a>
                  <img
                    src={feature.image}
                    alt={feature.heading}
                    className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                  />
                </a>
                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    {feature.heading}
                  </h2>
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

export default Psychomot;
