import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  Construction,
  Leaf,
  Package,
  Truck,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secteur Agro-BTP & infrastructures | Dunamis Group",
  description:
    "Approvisionnements, EPI, consommables et logistique pour les secteurs Agro-BTP, chantiers et infrastructures.",
};

export default function AgroBtpPage() {
  const devisUrl = "/contact?mode=devis&ref=" +
    encodeURIComponent("Secteur Agro-BTP & infrastructures – Dunamis Group");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 lg:pt-20 lg:pb-14 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <Construction className="w-4 h-4" />
                <span>Agro-BTP &amp; infrastructures</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Aligner approvisionnements, chantiers
                <span className="block text-emerald-700">
                  et contraintes terrain.
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Dunamis Group accompagne les acteurs de{" "}
                <span className="font-medium text-slate-900">
                  l’agro-industrie, du BTP et des infrastructures
                </span>{" "}
                dans la sécurisation de leurs approvisionnements en matériaux, EPI,
                consommables et services logistiques, pour des projets répartis sur
                plusieurs sites.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={devisUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
                >
                  Obtenir un devis pour l’Agro-BTP
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
                src="/images/sectors/agro-btp-banner.png"
                alt="Chantiers, agro-industrie et infrastructures"
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
              title="Multi-sites, délais serrés & contraintes environnementales"
              align="left"
            />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Vos enjeux sur les chantiers
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>
                    • Approvisionner plusieurs sites ou chantiers en parallèle, avec des{" "}
                    <span className="font-medium">délais serrés</span>.
                  </li>
                  <li>
                    • Gérer l’acheminement des matériaux, EPI et consommables vers des
                    zones parfois éloignées.
                  </li>
                  <li>
                    • Garantir la sécurité des équipes et la{" "}
                    <span className="font-medium">
                      conformité aux exigences QHSE
                    </span>.
                  </li>
                  <li>
                    • Maîtriser les coûts et limiter les achats d’urgence de dernière
                    minute.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Ce que Dunamis Group apporte
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>
                    • Centralisation des besoins par chantier, phase et site.
                  </li>
                  <li>
                    • Plans d’approvisionnement alignés sur les jalons du planning projet.
                  </li>
                  <li>
                    • Sélection d’équipements et d’EPI adaptés aux contraintes terrain.
                  </li>
                  <li>
                    • Coordination logistique avec transporteurs et parties prenantes.
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
              title="Services clés pour Agro-BTP & infrastructures"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Matériaux &amp; fournitures
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Matériaux et équipements pour chantiers.</li>
                  <li>• Fournitures de base pour bases vie &amp; dépôts.</li>
                  <li>• Consommables techniques &amp; MRO.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    EPI &amp; sécurité chantier
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• EPI adaptés aux activités de BTP et d’agro-industrie.</li>
                  <li>• Intégration des exigences QHSE et environnementales.</li>
                  <li>• Accompagnement dans la définition des dotations.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Logistique &amp; multi-sites
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Planification des livraisons par chantier et par phase.</li>
                  <li>• Coordination avec les transporteurs.</li>
                  <li>• Réduction des urgences &amp; achats de dernière minute.</li>
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
              title="Approvisionnements multi-sites pour un acteur Agro-BTP"
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
                Une entreprise Agro-BTP devait alimenter{" "}
                <span className="font-medium">
                  plusieurs sites et chantiers en matériaux, EPI et consommables
                </span>{" "}
                avec des contraintes de délais fortes et des accès logistiques parfois
                complexes.
              </p>

              <h4 className="mt-4 text-xs sm:text-sm font-semibold text-slate-900">
                Intervention de Dunamis Group
              </h4>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Centralisation des besoins par chantier / site.</li>
                <li>• Élaboration d’un plan d’approvisionnement par phase du projet.</li>
                <li>
                  • Coordination avec les transporteurs et prise en compte des contraintes
                  terrain.
                </li>
                <li>
                  • Mise en place d’un point focal unique pour les demandes complémentaires.
                </li>
              </ul>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-emerald-800">
                  Résultats obtenus
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Respect des jalons clés du planning chantier.</li>
                <li>• Réduction des achats d’urgence et des surcoûts associés.</li>
                <li>• Meilleure visibilité budgétaire sur les approvisionnements.</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
