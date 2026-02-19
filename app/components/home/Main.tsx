"use client";
import { HandHelping, Users, Zap } from "lucide-react";
import React from "react";
import { Separator } from "@/app/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

interface MainProps {
  heading?: string | React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
}

const Main = ({
  heading = "Marion Couasse, Psychomotricienne D.E",
  imageSrc = "./image_4.webp",
  imageAlt = "Cabinet de psychomotricité à Ranville",
  features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Horaires",
      description:
        "Du lundi au jeudi sur rendez-vous (Permanence téléphonique le vendredi) - Bébés et enfants / Relaxation adultes / Bilans et séances.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Contact",
      description:
        "1 bis rue du stade, 14860 Ranville — Tel : 06.27.37.57.87 - ✉ marioncouasse.psychomot@gmail.com",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Adresse",
      description:
        "1 bis rue du stade, 14860 Ranville (proche Caen, Cabourg, Dives-sur-Mer) — Parking gratuit, accès PMR",
    },
  ],
}: MainProps) => {
  return (
    <motion.section
      id="cabinet"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-100 py-20"
    >
      <section>
        <div className="container mx-auto overflow-hidden">
          <div className="mb-20 flex flex-col items-center gap-6 text-center">
            <h2 className="text-4xl font-semibold lg:text-4xl">{heading}</h2>
            <p className="text-xl italic text-muted-foreground max-w-2xl">
              J’accueille les bébés, enfants et adultes pour des bilans et
              séances de psychomotricité.
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <div className="relative mx-auto max-w-5xl aspect-video">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="rounded-xl object-cover"
                priority
              />
            </div>

            <div className="bg-linear-to-t from-background absolute inset-0 via-transparent to-transparent"></div>
            <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 bg-size-[12px_12px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
            <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 bg-size-[12px_12px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          </div>
          <div
            className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row"
            aria-label="Informations principales du cabinet de psychomotricité"
          >
            {features.map((feature, index) => (
              <React.Fragment key={feature.title}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="bg-linear-to-b from-muted to-muted mx-6 hidden h-auto w-[2px] via-transparent md:block"
                  />
                )}
                <div
                  key={index}
                  className="bg-background flex grow basis-0 flex-col rounded-md p-4"
                >
                  <div className="bg-background mb-6 flex size-10 items-center justify-center rounded-full drop-shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Main;
