"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface Slide {
  image: string;
  heading: string;
  description: string;
}

interface PresentationProps {
  slides?: Slide[];
  button?: {
    text: string;
    url: string;
  };
}

function Presentation({
  slides = [
    {
      image: "/image_8.webp",
      heading: "Cabinet de psychomotricité à Ranville",
      description:
        "Au sein de la Maison de Santé Pluridisciplinaire (CAEN) — un espace dédié au bien-être corporel et émotionnel.",
    },
    {
      image: "/image_7.webp",
      heading: "Un accompagnement personnalisé",
      description:
        "Chaque séance est adaptée à vos besoins pour retrouver équilibre, harmonie et confiance en soi.",
    },
    {
      image: "/image_12.webp",
      heading: "Psychomotricité pour enfants et adultes",
      description:
        "Des suivis complets pour le développement psychomoteur, la relaxation et la gestion des émotions.",
    },
  ],
  button = {
    text: "Prendre rendez-vous",
    url: "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
  },
}: PresentationProps) {
  const [current, setCurrent] = useState(0);

  // ⏱️ Défilement automatique toutes les 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[current];

  return (
    <section
      aria-label="Présentation du cabinet"
      className="relative min-h-[92vh] w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
    >
      {/* --- Image de fond animée --- */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* --- Contenu dynamique --- */}
      <div className="relative z-10 mt-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold lg:text-6xl leading-tight mb-6">
              {activeSlide.heading}
            </h1>
            <p className="text-gray-200 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              {activeSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all"
        >
          <a
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prendre rendez-vous"
          >
            {button.text}
          </a>
        </Button>

        {/* Chevron animé */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-20 flex justify-center"
        >
          <ChevronDown
            size={40}
            className="text-white cursor-pointer hover:opacity-80 transition"
            aria-label="Faire défiler vers la section suivante"
            onClick={() => {
              document.getElementById("cabinet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>

      {/* --- Indicateurs (dots) --- */}
      <div className="absolute bottom-6 left-6 flex gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label="Aller a la slide suivante"
            whileHover={{ scale: 1.2 }}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current
                ? "bg-primary scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
export default Presentation;
