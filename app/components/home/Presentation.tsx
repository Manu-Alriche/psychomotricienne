"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface PresentationProps {
  heading: string;
  description: string;
  button: {
    text: string;
    url: string;
  };
}

function Presentation({
  heading = "Cabinet de psychomotricité à Ranville",
  description = "Au sein de la Maison de Santé Pluridisciplinaire (CAEN)",
  button = {
    text: "Prendre rendez-vous",
    url: "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
  },
}: PresentationProps) {
  return (
    <section
      className="relative min-h-[92vh] w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image_6.jpg')",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu centré */}
      <div className="relative z-10 mt-25 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold lg:text-6xl leading-tight"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-200 text-lg lg:text-xl mt-6 max-w-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Button
            asChild
            size="lg"
            className="mt-10 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
          >
            <a href={button.url}>{button.text}</a>
          </Button>
        </motion.div>

        {/* Chevron animé sous le bouton */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-30 flex justify-center"
        >
          <ChevronDown
            size={40}
            className="text-white cursor-pointer hover:opacity-80 transition"
            onClick={() => {
              document.getElementById("cabinet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
export default Presentation;
