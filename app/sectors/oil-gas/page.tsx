import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function OilGasPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Bannière */}
        <div
          className="h-48 sm:h-64 bg-cover bg-center border-b border-slate-200"
          style={{
            backgroundImage:
              'url("/images/sectors/oil-gas-banner.png")',
          }}
        />

        {/* Contenu */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Secteur Oil & Gas"
              title="Solutions adaptées aux environnements onshore et offshore"
              align="left"
            />

            <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              Dunamis Group intervient sur les environnements pétroliers : dépôts,
              terminaux, jetties, bases logistiques, opérations STS/STT,
              plateformes offshore, et sites de production. Nos solutions prennent
              en compte les exigences QHSE, les contraintes opérationnelles et les
              délais critiques.
            </p>

            {/* Liste des services */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 text-sm">
              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-slate-900">Approvisionnements critiques</h3>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  EPI offshore, consommables, flexibles, outillage, équipements de
                  transfert, accessoires ATEX.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-slate-900">Support logistique & STS/STT</h3>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Coordination pour opérations Ship-to-Ship / Ship-to-Terminal,
                  barèmage, conformité documentaire.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact?mode=devis&ref=Projet%20Oil%20and%20Gas"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Discuter d’un besoin Oil & Gas
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
