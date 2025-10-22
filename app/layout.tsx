import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marion Couasse – Psychomotricienne D.E",
  description: "Psychomotricienne à Ranville (près de Caen et Cabourg)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
