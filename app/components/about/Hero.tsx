import { ArrowUpRight, ArrowDownRight, ChevronDown } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero = ({
  badge = "✨ Psychomotricienne à Ranville (proche Caen)",
  heading = "Marion Couasse, Psychomotricienne D.E",
  description = "Numéro SIRET : 93051265200015 / RPPS : 10007273534",
  buttons = {
    primary: {
      text: "Contact",
      url: "/#contact",
    },
    secondary: {
      text: "Prendre rendez-vous",
      url: "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
    },
  },
}: HeroProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-base-100 py-20"
    >
      <section>
        <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-5xl xl:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-4 max-w-xl">{description}</p>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Membre de l’Association Française des Psychomotriciens Libéraux
              (AFPL)
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowDownRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
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
          <div className="flex">
            <img
              src="marion-couasse-psychomotricienne.webp"
              alt="Marion Couasse"
              className="max-h-[600px] w-xl rounded-md object-cover lg:max-h-[600px]"
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Hero;
