import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Dunamis Group — Approvisionnements sécurisés & solutions opérationnelles",
    template: "%s | Dunamis Group",
  },
  description:
    "Approvisionnements sécurisés, logistique maîtrisée et support QHSE pour les secteurs Oil & Gas, Mines & industrie, Agro-BTP & infrastructures.",
  // Pas besoin de icons ici, Next trouvera tout seul /favicon.ico
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
