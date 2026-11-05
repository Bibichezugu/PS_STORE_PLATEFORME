import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PS STORE | Gaming & accessoires",
  description: "La boutique gaming PS STORE : jeux vidéo, consoles et accessoires.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
