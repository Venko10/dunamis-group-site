import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  Factory,
  Wrench,
  BarChart3,
  Truck,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secteur Mines, énergie & industrie | Dunamis Group",
  description:
    "Approvisionnements, pièces de rechange, consommables et support logistique pour les secteurs mines, énergie et industrie.",
};

export default function MinesEnergiePage() {
  const devisUrl = "/contact?mode=devis&ref=" +
    encodeURIComponent("Secteur Mines, énergie & industrie – Dunamis Group");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 lg:pt-20 lg:pb-14 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <Factory className="w-4 h-4" />
                <span>Mines, énergie &amp; industrie</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Sécuriser les pièces et consommables
                <span className="block text-emerald-700">
                  pour des sites industriels critiques.
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Dunamis Group accompagne les sites miniers, énergétiques et industriels
                dans la{" "}
                <span className="font-medium text-slate-900">
                  disponibilité des pièces de rechange, consommables et services associés
                </span>
                , en intégrant les contraintes de production, de sécurité et de logistique.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={devisUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
                >
                  Obtenir un devis pour le secteur Mines &amp; énergie
                </Link>
                <Link
                  href="/catalogue"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  Consulter le catalogue
                </Link>
              </div>
            </div>

            <div className="relative h-52 sm:h-64 lg:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-200">
              <Image
                src="/images/sectors/mines-energie-banner.png"
                alt="Mines, énergie et industrie"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ENJEUX & RÉPONSE */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Enjeux du secteur"
              title="Continuité de production & maîtrise des risques"
              align="left"
            />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Vos enjeux opérationnels
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>
                    • Éviter les arrêts non planifiés liés à{" "}
                    <span className="font-medium">l’indisponibilité des pièces</span>.
                  </li>
                  <li>
                    • Sécuriser les approvisionnements sur des sites parfois éloignés ou
                    difficilement accessibles.
                  </li>
                  <li>
                    • Gérer un parc de fournisseurs nombreux, avec des niveaux de service
                    variables.
                  </li>
                  <li>
                    • Intégrer les contraintes QHSE dans la sélection des produits et
                    prestataires.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Ce que Dunamis Group apporte
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>
                    • Analyse structurée des consommations (ABC) et identification des
                    références critiques.
                  </li>
                  <li>
                    • Schémas logistiques adaptés aux contraintes des sites (stock avancé,
                    groupage, planification).
                  </li>
                  <li>
                    • Sélection de fournisseurs fiables, alignés avec vos exigences QHSE.
                  </li>
                  <li>
                    • Suivi des indicateurs de performance (respect délais, qualité,
                    taux de service).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES PRINCIPAUX */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Nos interventions"
              title="Services clés pour mines, énergie & industrie"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Pièces de rechange &amp; MRO
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Pièces de rechange pour équipements de production.</li>
                  <li>• Consommables de maintenance (lubrifiants, filtres, joints…).</li>
                  <li>• Optimisation des listes critiques &amp; stocks mini.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Pilotage &amp; performance
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Analyse ABC / XYZ des consommations.</li>
                  <li>• Indicateurs de service, délais &amp; qualité.</li>
                  <li>• Recommandations d’amélioration continue.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Logistique &amp; coordination
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Approvisionnements vers sites miniers / industriels.</li>
                  <li>• Coordination fournisseurs / transporteurs.</li>
                  <li>• Gestion des contraintes d’accès terrain.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ÉTUDE DE CAS */}
        <section className="py-10 lg:py-14 bg-slate-50 border-t border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Étude de cas"
              title="Sécurisation des pièces de rechange pour un site minier"
              align="left"
            />

            <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 p-2">
                  <Briefcase className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                  Contexte &amp; enjeux
                </h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-700">
                Un site minier faisait face à des{" "}
                <span className="font-medium">
                  ruptures fréquentes sur des références de pièces critiques
                </span>{" "}
                et à des coûts d’arrêt élevés pour les équipements de production.
              </p>

              <h4 className="mt-4 text-xs sm:text-sm font-semibold text-slate-900">
                Intervention de Dunamis Group
              </h4>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>
                  • Analyse ABC des consommations et identification des références critiques.
                </li>
                <li>
                  • Sélection de fournisseurs fiables et alignés avec les exigences QHSE.
                </li>
                <li>
                  • Mise en place d’un schéma logistique de réapprovisionnement optimisé.
                </li>
                <li>
                  • Définition de stocks de sécurité sur les articles les plus sensibles.
                </li>
              </ul>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-emerald-800">
                  Résultats obtenus
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Réduction de plus de 50&nbsp;% des ruptures sur références critiques.</li>
                <li>• Diminution des temps d’arrêt liés aux pièces de rechange.</li>
                <li>• Relation fournisseurs mieux structurée et suivie.</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
