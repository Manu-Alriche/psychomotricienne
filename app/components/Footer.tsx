"use client";
import { useTheme } from "@/hooks/useTheme";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";
import { Moon, Sun } from "lucide-react";

interface FooterProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
}

export const Footer = ({
  title = "Marion Couasse, Psychomotricienne D.E",
  description = "1 bis rue du stade, 14860 Ranville — Tel : 06.27.37.57.87 —  ",
  linkText = "✉ marioncouasse.psychomot@gmail.com",
  linkUrl = "#contact",
}: FooterProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <footer className="bg-background w-full border-t px-4 py-8 transition-colors">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <div>
          <span className="text-sm">
            <span className="font-medium">
              © {new Date().getFullYear()} - {title}
            </span>
            <br />
            <span className="text-muted-foreground">
              {description}
              <a
                href={linkUrl}
                className="hover:text-foreground underline underline-offset-2"
                target="_blank"
              >
                {linkText}
              </a>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3 mt-2 transition-all duration-500 ease-in-out">
          <Sun
            className={`h-5 w-5 transition-all duration-500 ${
              isDark
                ? "text-gray-400 scale-90 opacity-50"
                : "text-yellow-500 scale-110 opacity-100"
            }`}
          />

          <Switch
            checked={isDark}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-primary transition-all duration-500"
          />

          <Moon
            className={`h-5 w-5 transition-all duration-500 ${
              isDark
                ? "text-blue-500 scale-110 opacity-100"
                : "text-gray-400 scale-90 opacity-50"
            }`}
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
