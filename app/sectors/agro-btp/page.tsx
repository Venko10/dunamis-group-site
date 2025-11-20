import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function AgroBtpPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Bannière */}
        <div
          className="h-48 sm:h-64 bg-cover bg-center border-b border-slate-200"
          style={{
            backgroundImage:
              'url("/images/sectors/agro-btp-banner.png")',
          }}
        />

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Secteur Agro-BTP & infrastructures"
              title="Des solutions pratiques pour projets agricoles & chantiers"
              align="left"
            />

            <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              Dunamis Group accompagne les projets agricoles, les chantiers BTP,
              les infrastructures rurales et les programmes agro-industriels.
              Nous apportons des solutions adaptées aux réalités terrains, aux
              volumes, aux contraintes logistiques et aux besoins de sécurité.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 text-sm">
              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-slate-900">Kits Agro-BTP</h3>
                <p className="mt-1 text-slate-700">
                  EPI, petit matériel, signalisation, outils et accessoires pour
                  chantiers ruraux et agricoles.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-slate-900">Support logistique rural</h3>
                <p className="mt-1 text-slate-700">
                  Solutions d’acheminement, coordination matériels et gestion
                  approvisionnement pour zones rurales.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/contact?mode=devis&ref=Projet%20Agro%20BTP"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Contacter Dunamis Group pour un projet Agro-BTP
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
