import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { motion } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = "Foire aux questions",
  items = [
    {
      id: "faq-1",
      question: "Qu’est-ce qu’un psychomotricien ?",
      answer:
        "Le psychomotricien est un professionnel paramédical diplômé d’État. Il évalue et accompagne les personnes présentant des difficultés dans leur développement psychomoteur, leur coordination, leur équilibre, leur motricité fine, ou encore leur gestion des émotions et du corps. Son approche est à la croisée du corps, du mouvement et de la vie psychique.",
    },
    {
      id: "faq-2",
      question: "À qui s’adresse la psychomotricité ?",
      answer:
        "La psychomotricité s’adresse à tous les âges de la vie : nourrissons, enfants, adolescents, adultes et personnes âgées. Les motifs de consultation peuvent être variés : troubles du tonus, de la coordination, hyperactivité, difficultés graphomotrices, angoisses corporelles, stress, troubles du schéma corporel, ou encore relaxation thérapeutique.",
    },
    {
      id: "faq-3",
      question: "Faut-il une ordonnance pour consulter ?",
      answer:
        "Oui, une ordonnance médicale est nécessaire pour la réalisation d’un bilan psychomoteur. Elle permet également de transmettre un compte rendu au médecin prescripteur. Les séances peuvent ensuite être réalisées avec ou sans prescription, selon les besoins du patient.",
    },
    {
      id: "faq-4",
      question: "Les séances sont-elles remboursées ?",
      answer:
        "Les séances de psychomotricité ne sont pas remboursées par la Sécurité Sociale. Cependant, certaines mutuelles prennent en charge une partie des soins sous forme de forfait annuel. Il est également possible d’obtenir un financement via la Plateforme de Coordination et d’Orientation (PCO) pour les enfants de 0 à 12 ans présentant des troubles du neurodéveloppement.",
    },
    {
      id: "faq-5",
      question: "Comment se déroule un bilan psychomoteur ?",
      answer:
        "Le bilan comprend : un entretien initial (anamnèse) avec les parents ou le patient, des observations cliniques et tests standardisés, une restitution orale et écrite des conclusions. Il permet d’évaluer le développement psychomoteur, les compétences et les difficultés, afin de proposer une prise en charge adaptée.",
    },
    {
      id: "faq-6",
      question:
        "Quelle est la différence entre psychomotricité et kinésithérapie ?",
      answer:
        "Le kinésithérapeute travaille sur la rééducation du mouvement fonctionnel (force, mobilité, réadaptation physique). Le psychomotricien, quant à lui, agit sur la dimension psychocorporelle du mouvement — comment la personne vit son corps, son tonus, son équilibre et ses émotions à travers ses gestes. C’est une approche globale du corps et du ressenti.",
    },
    {
      id: "faq-7",
      question: "Combien de temps dure une séance et à quelle fréquence ?",
      answer:
        "Une séance dure généralement 30 à 45 minutes, à un rythme hebdomadaire. La fréquence peut être ajustée selon le projet thérapeutique établi à la suite du bilan. Chaque séance est personnalisée, basée sur le jeu, la relaxation, le mouvement ou les médiations adaptées à chaque âge.",
    },
  ],
}: FaqProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-background"
    >
      <section>
        <div className="container max-w-5xl">
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
            {heading}
          </h1>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </motion.section>
  );
};

export default Faq;
