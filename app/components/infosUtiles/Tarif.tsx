import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import { Info } from "lucide-react";

const Tarif = () => {
  return (
    <motion.section
      id="tarif"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 lg:py-20 bg-background"
    >
      <section className="bg-background">
        <div className="container">
          <Card className="shadow-sm border border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-semibold md:text-4xl">
                Tarifs
              </CardTitle>
            </CardHeader>

            <CardContent>
              {/* Tableau stylé */}
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="py-3 px-4 text-lg font-medium">
                        Prestation
                      </th>
                      <th className="py-3 px-4 text-lg font-medium">Tarif</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4">Bilan standardisé</td>
                      <td className="py-3 px-4 font-semibold">200 €</td>
                    </tr>
                    <tr className="border-t border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4">Observation psychomotrice</td>
                      <td className="py-3 px-4 font-semibold">150 €</td>
                    </tr>
                    <tr className="border-t border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4">
                        Consultation de suivi et séances de relaxation
                      </td>
                      <td className="py-3 px-4 font-semibold">44 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground italic text-center mt-6">
                (Tarifs en vigueur – année 2025)
              </p>

              {/* Encadré informatif */}
              <Alert className="mt-8 border-primary/30 bg-primary/5">
                <Info className="h-5 w-5 text-primary" />
                <AlertDescription className="text-muted-foreground text-sm leading-relaxed">
                  Les séances de psychomotricité ne sont pas remboursées par la
                  Sécurité Sociale. Certaines mutuelles proposent toutefois une
                  prise en charge partielle.
                  <br /> N’hésitez pas à vous renseigner auprès de votre
                  complémentaire santé.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>
    </motion.section>
  );
};

export default Tarif;
