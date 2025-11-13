"use client";
import { useTheme } from "@/hooks/useTheme";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

interface FooterProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
}

export const Footer = ({
  title = "Marion Couasse, Psychomotricienne D.E",
  description = "1 bis rue du stade, 14860 Ranville — Tel : 06.27.37.57.87 — ",
  linkText = "✉ marioncouasse.psychomot@gmail.com",
  linkUrl = "#contact",
}: FooterProps) => {
  const { isDark, toggleTheme } = useTheme();

  // ✅ Données structurées SEO (schema.org)
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Cabinet de psychomotricité de Marion Couasse",
    url: "https://www.psychomotricienne-calvados.fr",
    logo: "https://www.psychomotricienne-calvados.fr/logo.png",
    image: "https://www.psychomotricienne-calvados.fr/image_4.webp",
    description:
      "Cabinet de psychomotricité à Ranville pour bébés, enfants et adultes — bilans, séances de relaxation et suivi psychomoteur.",
    telephone: "+33 6 27 37 57 87",
    email: "marioncouasse.psychomot@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 bis rue du stade",
      addressLocality: "Ranville",
      postalCode: "14860",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.202,
      longitude: -0.269,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Lundi", "Mardi", "Mercredi", "Jeudi"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.google.com/maps/place/1+Bis+Rue+du+Stade,+14860+Ranville",
      "https://www.docorga.com/praticien/66deb2fdfe355c835a95fd2f",
    ],
  };

  return (
    <footer
      className="bg-background w-full border-t px-4 py-8 transition-colors text-center"
      aria-label="Pied de page du site Marion Couasse Psychomotricienne"
    >
      {/* 🧠 JSON-LD pour Google */}
      <Script
        id="medicalClinic-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinicSchema),
        }}
      />

      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        {/* Bloc principal */}
        <div className="text-sm leading-relaxed text-muted-foreground space-y-1">
          <p className="font-medium text-foreground">
            © {new Date().getFullYear()} — {title}
          </p>
          <p>
            {description}
            <Link
              href={linkUrl}
              className="underline underline-offset-2 hover:text-primary focus:text-primary focus:outline-none"
            >
              {linkText}
            </Link>
          </p>
        </div>
        <div
          className="flex items-center gap-3 mt-1 transition-all duration-500 ease-in-out"
          aria-label="Changer le mode d'affichage clair/sombre"
        >
          <Sun
            className={`h-5 w-5 transition-all duration-500 ${
              isDark
                ? "text-gray-400 scale-90 opacity-50"
                : "text-yellow-500 scale-110 opacity-100"
            }`}
            aria-hidden="true"
          />

          <Switch
            checked={isDark}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-primary transition-all duration-500"
            aria-label="Basculer le mode sombre"
          />

          <Moon
            className={`h-5 w-5 transition-all duration-500 ${
              isDark
                ? "text-blue-500 scale-110 opacity-100"
                : "text-gray-400 scale-90 opacity-50"
            }`}
            aria-hidden="true"
          />

          <Label
            className={`text-sm transition-all duration-500 ${
              isDark ? "text-blue-500" : "text-yellow-600"
            }`}
          >
            {isDark ? "Mode sombre" : "Mode clair"}
          </Label>
        </div>
      </div>
    </footer>
  );
};
