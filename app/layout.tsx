import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psychomoticienne Calvados",
  description:
    "Psychomotricienne proche Caen, Cabourg, Dives-sur-Mer | Marion Couasse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
