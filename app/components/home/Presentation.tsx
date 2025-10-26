import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface PresentationProps {
  badge?: string;
  heading: string;
  description: string;
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
  image: {
    src: string;
    alt: string;
  };
}

const Presentation = ({
  badge = "✨ Psychomotricienne à Ranville (proche Caen)",
  heading = "Marion Couasse, Psychomotricienne D.E",
  description = "J’accueille les bébés, enfants et adultes pour des bilans et séances de psychomotricité, ainsi que des séances de relaxation adaptées à chacun.",
  buttons = {
    primary: {
      text: "Contact",
      url: "#contact",
    },
    secondary: {
      text: "Prendre rendez-vous",
      url: "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
    },
  },
  image = {
    src: "/image_5.jpg",
    alt: "Marion Couasse, Psychomotricienne",
  },
}: PresentationProps) => {
  return (
    <motion.section
      id="intro"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero min-h-[95vh] bg-base-200"
    >
      <section className=" py-15">
        <div className="container mx-auto">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {badge && (
                <Badge variant="outline">
                  {badge}
                  <ArrowUpRight className="ml-2 size-4" />
                </Badge>
              )}
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                {heading}
              </h1>
              <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                {description}
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {buttons.primary && (
                  <Button asChild className="w-full sm:w-auto">
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-15 flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-10 flex justify-center"
                >
                  <ChevronDown
                    size={40}
                    className=" text-primary text-center cursor-pointer hover:opacity-80 transition"
                    onClick={() => {
                      document.getElementById("cabinet")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  />
                </motion.div>
              </div>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-150 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Presentation;
