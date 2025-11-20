import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function MinesEnergiePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Bannière */}
        <div
          className="h-48 sm:h-64 bg-cover bg-center border-b border-slate-200"
          style={{
            backgroundImage:
              'url("/images/sectors/mines-energie-banner.png")',
          }}
        />

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Secteur Mines, énergie & industrie"
              title="Des solutions robustes pour environnements exigeants"
              align="left"
            />

            <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              Dunamis Group accompagne les sites miniers, industriels et
              énergétiques dans leurs besoins en approvisionnements, équipements,
              logistique et support QHSE. Nos solutions sont adaptées aux zones
              isolées, aux environnements critiques et aux contraintes fortes.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 text-sm">
              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-slate-900">Outillage & maintenance</h3>
                <p className="mt-1 text-slate-700">
                  Solutions pour équipes maintenance : jeux de clés, outillages
                  spécifiques, équipements robustes.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-slate-900">Consommables techniques</h3>
                <p className="mt-1 text-slate-700">
                  Consommables, lubrifiants, accessoires et fournitures pour
                  interventions quotidiennes.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/contact?mode=devis&ref=Projet%20Mine%20Energie"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Faire une demande pour site minier / industriel
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
