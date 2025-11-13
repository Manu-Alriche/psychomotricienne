import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Poppins, Lora } from "next/font/google";
import AnimatedCursor from "./components/AnimedCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Marion Couasse – Psychomotricienne D.E",
  description: "Psychomotricienne à Ranville (près de Caen et Cabourg)",
  icons: {
    icon: "/logo_1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${poppins.variable}`}>
      <body
        className={cn(
          lora.className,
          "bg-background text-foreground antialiased"
        )}
      >
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
