import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  Truck,
  Boxes,
  Layers,
  Leaf,
  BarChart3,
  Target,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title:
    "Dunamis Group — Approvisionnements sécurisés & solutions opérationnelles",
  description:
    "Approvisionnements sécurisés, logistique maîtrisée et support QHSE pour les secteurs Oil & Gas, Mines & industrie, Agro-BTP & infrastructures.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO PRINCIPAL */}
        <section className="relative border-b border-slate-200 bg-slate-900">
          {/* Image de fond (optionnelle mais recommandée) */}
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/hero/dunamis-operations.jpg")', // à adapter selon tes visuels
            }}
          />
          {/* Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/40" />

          <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 lg:pt-24 lg:pb-20">
            <div className="max-w-3xl text-white">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200/70 bg-emerald-50/10 text-emerald-100 text-[0.7rem] font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Approvisionnements, logistique &amp; support QHSE
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Un partenaire opérationnel
                <span className="block text-emerald-200">
                  pour vos sites industriels et projets en Afrique.
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-100/90 leading-relaxed">
                Dunamis Group accompagne les acteurs de l&apos;Oil &amp; Gas,
                des Mines, de l&apos;Énergie et de l&apos;Agro-BTP à sécuriser
                leurs approvisionnements, structurer leurs flux logistiques et
                renforcer la performance QHSE sur le terrain.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Discuter d&apos;un projet
                </Link>
                <Link
                  href="#secteurs"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-400/70 bg-slate-900/40 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-100 hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Voir les secteurs d&apos;intervention
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS CLÉS */}
        <section className="py-10 lg:py-12 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Notre positionnement"
              title="Dunamis Group, un intermédiaire opérationnel et responsable"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Approvisionnements sécurisés
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Compréhension fine des besoins terrain, sélection rigoureuse
                  des solutions et attention portée à la conformité QHSE.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Délai &amp; pragmatisme
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Recherche de solutions réalistes, adaptées aux contraintes
                  locales, aux délais et aux enjeux de continuité d&apos;activité.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Relation de confiance
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Dialogue direct avec les équipes achats, logistique,
                  maintenance et HSE pour des décisions mieux alignées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS INTÉGRÉES */}
        <section
          id="solutions"
          className="py-12 lg:py-16 border-b border-slate-200 bg-slate-50"
          aria-labelledby="solutions-title"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Solutions intégrées"
              title="Une offre modulaire autour de l’approvisionnement, de la logistique et du QHSE"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              <article className="border border-slate-200 rounded-2xl bg-white p-4 shadow-sm h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Boxes className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Approvisionnements &amp; catalogue
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Équipements, consommables, outillage et EPI adaptés aux
                  environnements Oil &amp; Gas, Mines &amp; industrie, Agro-BTP.
                </p>
                <p className="text-slate-600">
                  Objectif : éviter les ruptures terrain et proposer des options
                  techniquement pertinentes.
                </p>
              </article>

              <article className="border border-slate-200 rounded-2xl bg-white p-4 shadow-sm h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Logistique &amp; coordination
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Organisation des flux depuis les fournisseurs jusqu&apos;au
                  site : transport, formalités, contraintes d&apos;accès et
                  phasage projet.
                </p>
                <p className="text-slate-600">
                  Objectif : fiabiliser les livraisons et limiter les points de
                  friction opérationnels.
                </p>
              </article>

              <article className="border border-slate-200 rounded-2xl bg-white p-4 shadow-sm h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Support technique &amp; QHSE
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Prise en compte des contraintes QHSE, de la réalité site et
                  des exigences client dès la phase consultation.
                </p>
                <p className="text-slate-600">
                  Objectif : sécuriser les opérations et renforcer la confiance
                  entre parties prenantes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTEURS D’INTERVENTION */}
        <section
          id="secteurs"
          className="py-12 lg:py-16 border-b border-slate-200 bg-white"
          aria-labelledby="secteurs-title"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Secteurs d’intervention"
              title="Des solutions adaptées à vos environnements d’exploitation"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              {/* OIL & GAS */}
              <article className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-emerald-600">
                <div
                  className="h-32 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("/images/sectors/oil-gas-terminal.jpg")',
                  }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Oil &amp; Gas – onshore / offshore
                  </h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">
                    Dépôts, terminaux, jetties, opérations STS/STT, bases
                    onshore &amp; sites offshore.
                  </p>
                  <Link
                    href="/sectors/oil-gas"
                    className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-600 focus:outline-none"
                  >
                    Découvrir l&apos;offre Oil &amp; Gas
                  </Link>
                </div>
              </article>

              {/* MINES & INDUSTRIE */}
              <article className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-emerald-600">
                <div
                  className="h-32 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("/images/sectors/mining-plant.jpg")',
                  }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Mines, énergie &amp; industrie
                  </h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">
                    Sites miniers, centrales, usines et zones industrielles,
                    souvent éloignés et exigeants.
                  </p>
                  <Link
                    href="/sectors/mines-energie"
                    className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-600 focus:outline-none"
                  >
                    Découvrir l&apos;offre Mines &amp; industrie
                  </Link>
                </div>
              </article>

              {/* AGRO-BTP */}
              <article className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-emerald-600">
                <div
                  className="h-32 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("/images/sectors/agro-btp-site.jpg")',
                  }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Agro-BTP &amp; infrastructures
                  </h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">
                    Projets agricoles, centres de transformation, chantiers BTP
                    et infrastructures.
                  </p>
                  <Link
                    href="/sectors/agro-btp"
                    className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-600 focus:outline-none"
                  >
                    Découvrir l&apos;offre Agro-BTP
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION QHSE PREMIUM */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-slate-900">
              Engagement QHSE et excellence opérationnelle
            </h2>

            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              Dunamis Group garantit une maîtrise totale de la sécurité, de la
              conformité et de la performance dans toutes ses opérations :
              terminaux, dépôts, sites industriels, opérations STS/STT et
              approvisionnements complexes.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-sm">
              <div className="p-4 border rounded-lg bg-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <strong className="text-slate-900">
                    Sécurité &amp; conformité
                  </strong>
                </div>
                <ul className="mt-2 space-y-1 text-slate-600">
                  <li>• Analyse de risques systématique</li>
                  <li>• EPI &amp; équipements certifiés</li>
                  <li>• Conformité ATEX &amp; exigences client</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-emerald-700" />
                  <strong className="text-slate-900">
                    Performance opérationnelle
                  </strong>
                </div>
                <ul className="mt-2 space-y-1 text-slate-600">
                  <li>• Disponibilité opérationnelle visée : 99%</li>
                  <li>• Délai de réponse &lt; 48h sur les demandes</li>
                  <li>• Reporting &amp; traçabilité des opérations</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                  <strong className="text-slate-900">Exigences ESG</strong>
                </div>
                <ul className="mt-2 space-y-1 text-slate-600">
                  <li>• Efficience énergétique &amp; limitation des impacts</li>
                  <li>• Sécurité et développement des équipes</li>
                  <li>• Gouvernance et conformité aux standards</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-500 italic">
              « La Direction s’engage à déployer les moyens humains, techniques
              et organisationnels nécessaires à la sécurité, à la performance et
              à l’amélioration continue des opérations. »
            </p>

            <div className="mt-4">
              <Link
                href="/qhse"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-600"
              >
                Découvrir notre politique QHSE détaillée
              </Link>
            </div>
          </div>
        </section>

        {/* CTA CONTACT FINAL */}
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Vous préparez un projet ou une consultation ?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl">
                  Quelques lignes sur le secteur, le type de site (dépôt,
                  mine, chantier, agro-industrie) et vos enjeux suffisent pour
                  initier un échange structuré.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-xs">
                <a
                  href="mailto:contact@dunamisgroups.online?subject=Contact%20Dunamis%20Group"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Écrire à Dunamis Group
                </a>
                <p className="text-[0.7rem] text-slate-500">
                  Objet conseillé : « Projet / consultation – [Secteur / pays] »
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
