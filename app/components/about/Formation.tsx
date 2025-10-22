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
    date: "1956",
    title: "A. Bullinger",
    content: "Sensibilisation à l’approche sensori-motrice",
  },
  {
    date: "1966-1973",
    title: "Hôpital Avicenne",
    content: "Sensibilisation / formation au psycho-traumatisme",
  },
  {
    date: "1980-1987",
    title: "RESPIR' Formation",
    content: "Formation au Amma Thérapeutique",
  },
  {
    date: "1997",
    title: "AFDET",
    content: "Formation en Éducation Thérapeutique du Patient",
  },
  {
    date: "1997",
    title: "RESPIR' Formation",
    content: "Formation en graphomotricité (acte graphique)",
  },
  {
    date: "1997",
    title: "Massage Bébé Shantala",
    content: "Formation Massage Bébé Shantala",
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
          <h1 className="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Mes formations complémentaires
          </h1>
          <div className="relative mx-auto max-w-xl">
            <Separator
              orientation="vertical"
              className="bg-muted absolute left-2 top-4"
            />
            {formationData.map((entry, index) => (
              <div key={index} className="relative mb-10 pl-8">
                <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
                <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                  {entry.title}
                </h4>

                <h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
                  {entry.date}
                </h5>

                <Card className="my-5 border-none shadow-none">
                  <CardContent className="px-0 xl:px-2">
                    <div
                      className="prose dark:prose-invert text-foreground"
                      dangerouslySetInnerHTML={{ __html: entry.content }}
                    />
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
