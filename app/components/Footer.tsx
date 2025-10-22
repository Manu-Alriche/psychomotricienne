import { useEffect, useState } from "react";

interface FooterProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const Footer = ({
  title = "Marion Couasse, Psychomotricienne D.E",
  description = "1 bis rue du stade, 14860 Ranville — Tel : 06.27.37.57.87",
  linkText = "✉ marioncouasse.psychomot@gmail.com",
  linkUrl = "#contact",
}: FooterProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  return (
    <section className="bg-background w-full border-t px-4 py-3 pt-8 pb-8">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <span className="text-sm">
            <span className="font-medium">
              © {new Date().getFullYear()} - {title}
            </span>{" "}
            <br />
            <span className="text-muted-foreground">
              {description} <br />
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
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Mode clair" : "Mode sombre"}
        </button>
      </div>
    </section>
  );
};

export { Footer };
