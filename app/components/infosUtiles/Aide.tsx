import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";

const Aide = () => {
  return (
    <motion.section
      id="aides-financieres"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-100 py-20"
    >
      <section>
        <div className="container">
          <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
            Infos utiles
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Aides financières et informations pratiques pour les soins
            psychomoteurs.
          </p>

          <Card className="shadow-sm border border-border text-left">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold md:text-4xl text-center">
                Aides financières
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Bien que les psychomotricien·ne·s soient des professionnels de
                santé, l’Assurance Maladie ne rembourse pas de façon complète et
                uniforme les soins psychomoteurs.
              </p>
              <p>
                Les soins sont totalement pris en charge lorsqu’ils sont
                réalisés dans des établissements sanitaires ou médico-sociaux
                (Centre Médico-Psychologiques, Instituts Médico-Éducatifs,
                etc.), mais les délais d’attente sont souvent très longs. Les
                enfants ayant un dossier MDPH avec une prise en charge à 100%
                peuvent également bénéficier d’un remboursement.
              </p>
              <p>
                Vous pouvez faire une demande exceptionnelle de remboursement de
                soins auprès de votre CPAM, qui étudiera votre dossier en
                commission.
              </p>
              <p>
                Certaines mutuelles prennent en charge les soins psychomoteurs
                sous forme de forfait annuel ou de réduction de prix des
                séances. Chaque mutuelle étant différente, il est nécessaire de
                se renseigner auprès de la vôtre. Les soins psychomoteurs
                appartiennent à la catégorie « médecine douce » (car non
                médicamenteux).
              </p>
              <p>
                La P.C.O (Plateforme de Coordination et d’Orientation), présente
                dans chaque département, peut financer les soins pour un an,
                renouvelable une fois (soit deux ans de soins). Cette plateforme
                s’adresse aux familles dont les enfants sont en cours de
                dépistage ou ont déjà été diagnostiqués avec un trouble
                neurodéveloppemental et ont entre 0 et 12 ans.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </motion.section>
  );
};

export default Aide;
