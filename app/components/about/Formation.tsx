import { Card, CardContent } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { motion } from "framer-motion";

type FormationEntry = {
  date: string;
  title: string;
  content: string;
};

const formationData: FormationEntry[] = [
  {
    date: "2025",
    title: "Octo-Opus Formation",
    content: "Formation Troubles sensoriels dans les TND",
  },
  {
    date: "2024",
    title: "Massage Bébé Shantala",
    content: "Formation Massage Bébé Shantala",
  },
  {
    date: "2023 - 2024",
    title: "RESPIR' Formation",
    content: "Formation en graphomotricité (acte graphique)",
  },
  {
    date: "2022 - 2023",
    title: "AFDET",
    content: "Formation en Éducation Thérapeutique du Patient",
  },
  {
    date: "2020 - 2021",
    title: "RESPIR' Formation",
    content: "Formation au Amma Thérapeutique",
  },
  {
    date: "2021 - 2022",
    title: "Hôpital Avicenne",
    content: "Sensibilisation / formation au psycho-traumatisme",
  },
  {
    date: "1956",
    title: "A. Bullinger",
    content: "Sensibilisation à l’approche sensori-motrice",
  },
];

const Formation = () => {
  return (
    <motion.section
      id="formations"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-200 py-20"
    >
      <section className="bg-background">
        <div className="container mx-auto">
          <h2 className="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Mes formations complémentaires
          </h2>
          <div className="relative mx-auto max-w-xl" role="list">
            <Separator
              orientation="vertical"
              className="bg-muted absolute left-2 top-4"
            />
            {formationData.map((entry, index) => (
              <div key={index} className="relative mb-10 pl-8" role="listitem">
                <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
                <h3 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                  {entry.title}
                </h3>

                <h4 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
                  {entry.date}
                </h4>

                <Card className="my-5 border-none shadow-none">
                  <CardContent className="px-0 xl:px-2">
                    <p className="text-foreground">{entry.content}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Formation;
