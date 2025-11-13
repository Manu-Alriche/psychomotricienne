"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

interface BannerProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  defaultVisible?: boolean;
}

const Banner = ({
  title = "* CRENEAUX DISPONIBLE ! *",
  description = "- Pour une première prise de RDV, merci de prendre contact par téléphone, mail ou",
  linkText = "ici",
  linkUrl = "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
  defaultVisible = true,
}: BannerProps) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="bg-background w-full border-b px-4 py-1">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <span className="text-sm">
            <span className="font-medium">{title}</span>{" "}
            <span className="text-muted-foreground">
              {description}{" "}
              <a
                href={linkUrl}
                className="hover:text-foreground underline underline-offset-2"
                target="_blank"
              >
                {linkText}
              </a>
              .
            </span>
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 h-8 w-8 flex-none"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export { Banner };
