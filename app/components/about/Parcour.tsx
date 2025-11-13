import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";

const Parcour = () => {
  return (
    <motion.section
      id="parcours"
      aria-labelledby="parcours-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-100 py-20"
    >
      <section>
        <div className="container mx-auto text-center space-y-10">
          {/* Titre */}
          <div>
            <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-4">
              Mon parcours
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez mon expérience professionnelle et mon engagement auprès
              des patients.
            </p>
          </div>

          {/* Contenu */}
          <Card className="max-w-5xl mx-auto shadow-lg border-border/40">
            <CardContent className="p-8 text-left space-y-6 text-lg leading-relaxed">
              <p>
                Diplômée depuis <strong>2016</strong> de l’Institut de Formation
                de Psychomotricité de la{" "}
                <strong>Pitié-Salpêtrière à Paris</strong>, j’ai exercé durant{" "}
                <strong>8 ans</strong> en Centre Médico-Psychologique pour
                enfants et adolescents.
              </p>

              <p>
                J’ai ainsi pu construire mon expérience auprès d’enfants de tout
                âge et présentant différentes pathologies : autisme, troubles
                des apprentissages, retard de développement, stress
                post-traumatique, agitation psychomotrice, syndromes génétiques,
                etc.
              </p>

              <p>
                J’ai également exercé à la{" "}
                <strong>Maison des Femmes de Saint-Denis</strong> auprès de
                femmes victimes de violences sexuelles et conjugales, où je
                proposais des séances de relaxation favorisant le retour à soi
                et la reconnexion au corps.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </motion.section>
  );
};

export default Parcour;
