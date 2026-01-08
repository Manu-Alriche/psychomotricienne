"use client";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center bg-background text-foreground p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold mb-4 md:text-8xl">404</h1>
      <h2 className="text-2xl font-semibold mb-6 md:text-3xl">
        Oups… Page introuvable !
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        La page que vous recherchez n'existe pas ou a été déplacée. Reprenez
        votre navigation depuis la page d’accueil ou prenez directement
        rendez-vous.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex flex-col gap-3 sm:flex-row sm:justify-start"
      >
        <Button
          onClick={() => router.push("/")}
          aria-label="Retourner à l'accueil"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l’accueil
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            window.open(
              "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
              "_blank",
              "noopener,noreferrer"
            )
          }
          aria-label="Prendre rendez-vous (s'ouvre dans un nouvel onglet)"
          className="flex items-center gap-2"
        >
          Prendre rendez-vous
          <ExternalLink className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
