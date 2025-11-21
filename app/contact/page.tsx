import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

// On force la page en dynamique car elle dépend des paramètres d'URL
export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        <Suspense
          fallback={
            <div className="max-w-6xl mx-auto px-4 py-16 text-sm text-slate-500">
              Chargement du formulaire de contact...
            </div>
          }
        >
          <ContactContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
