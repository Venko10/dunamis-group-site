import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Target,
  Recycle,
  Users,
  ClipboardList,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Politique QHSE – Dunamis Group",
  description:
    "Qualité, Hygiène, Sécurité et Environnement au cœur de chaque décision opérationnelle de Dunamis Group : approvisionnements, logistique, opérations terrain et support projet.",
};

export default function QHSEPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO QHSE */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-20 pb-14 lg:pt-24 lg:pb-18">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Politique QHSE Dunamis Group</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Qualité, Hygiène, Sécurité &amp; Environnement,
                <span className="block text-emerald-700">
                  au cœur de chaque décision opérationnelle.
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Dunamis Group considère la QHSE comme une dimension centrale de
                ses activités : approvisionnements, logistique, opérations
                terrain, interventions sur sites industriels et chantiers.
                Chaque prestation est pensée pour réduire les risques, protéger
                les personnes et renforcer la fiabilité des opérations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approche QHSE intégrée aux décisions</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Réduction des risques sur le terrain</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILIERS QHSE */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Piliers de la politique QHSE"
              title="Ce que signifie la QHSE pour Dunamis Group"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-4 text-xs sm:text-sm">
              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Qualité
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Garantir des solutions adaptées au besoin réel, en cohérence
                  avec les contraintes site et les standards du secteur.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Hygiène
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Préserver des conditions de travail saines pour les équipes,
                  en particulier sur sites sensibles et environnements isolés.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Sécurité
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Minimiser l&apos;exposition aux risques, via des équipements
                  adaptés, une préparation rigoureuse et le respect des
                  procédures.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Environnement
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Limiter l&apos;impact des activités sur l&apos;environnement,
                  en intégrant sobriété, durabilité et conformité réglementaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS CONCRETS */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Engagements concrets"
              title="Des principes en actions sur le terrain"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-2 text-xs sm:text-sm">
              <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-emerald-700" />
                  <h2 className="text-sm font-semibold text-slate-900">
                    Au niveau des approvisionnements &amp; solutions
                  </h2>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Analyse du besoin réel avant proposition.</li>
                  <li>• Attention portée aux spécifications QHSE client.</li>
                  <li>• Sélection de solutions adaptées au terrain.</li>
                  <li>
                    • Dialogue avec les équipes techniques, maintenance et HSE.
                  </li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <h2 className="text-sm font-semibold text-slate-900">
                    Au niveau des opérations &amp; chantiers
                  </h2>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Prise en compte des risques du site d&apos;exploitation.</li>
                  <li>
                    • Coordination avec les responsables HSE et opérationnels.
                  </li>
                  <li>• Sensibilisation aux bons usages des équipements.</li>
                  <li>• Retour d&apos;expérience pour améliorer les pratiques.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ClipboardList className="w-4 h-4 text-emerald-700" />
                  <h2 className="text-sm font-semibold text-slate-900">
                    Au niveau des processus internes
                  </h2>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Traçabilité des demandes et décisions clés.</li>
                  <li>• Documentation des choix techniques sensibles.</li>
                  <li>• Capitalisation sur les cas d&apos;intervention.</li>
                  <li>• Amélioration continue des procédures.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Recycle className="w-4 h-4 text-emerald-700" />
                  <h2 className="text-sm font-semibold text-slate-900">
                    Au niveau environnemental &amp; sociétal
                  </h2>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  <li>• Recherche de solutions plus sobres quand c&apos;est possible.</li>
                  <li>• Sensibilité aux enjeux locaux (communautés, territoires).</li>
                  <li>• Attention portée à la durée de vie des équipements.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* QHSE DANS LES SECTEURS */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="QHSE & secteurs d’activité"
              title="Une même exigence, adaptée à chaque environnement"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Oil &amp; Gas – onshore / offshore
                </h2>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Attention particulière aux risques majeurs, aux opérations
                  marines, aux dépôts et aux terminaux.
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>• Conformité aux procédures HSE des opérateurs.</li>
                  <li>• Sensibilité aux opérations STS/STT &amp; barèmage.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Mines, énergie &amp; industrie
                </h2>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Sites isolés, équipements critiques et exigences de production
                  continue.
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>• Prise en compte des accès difficiles au site.</li>
                  <li>• Intégration des règles HSE propre à chaque site.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl bg-slate-50 p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Agro-BTP &amp; infrastructures
                </h2>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Chantiers, projets agro-industriels et environnements ruraux
                  ou périurbains.
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>• Sécurité des équipes et organisation des flux.</li>
                  <li>• Attention portée à l&apos;environnement local.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXEMPLES & APPROCHE */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2 text-xs sm:text-sm">
            <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-emerald-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Exemples d&apos;application de la QHSE
                </h2>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                <li>
                  • Choix d&apos;EPI adaptés aux risques spécifiques d&apos;un
                  dépôt, d&apos;une mine ou d&apos;un chantier.
                </li>
                <li>
                  • Intégration des contraintes HSE dans la préparation d&apos;une
                  opération STS/STT ou d&apos;une intervention maintenance.
                </li>
                <li>
                  • Ajustement des délais et solutions logistiques en fonction
                  des conditions du site et des contraintes environnementales.
                </li>
                <li>
                  • Retour d&apos;expérience pour améliorer les consultations
                  futures et les pratiques internes.
                </li>
              </ul>
            </div>

            <div className="border border-emerald-100 rounded-2xl bg-emerald-50 p-4 md:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Une démarche d&apos;amélioration continue
                </h2>
              </div>
              <p className="text-emerald-900 leading-relaxed mb-2">
                La politique QHSE de Dunamis Group n&apos;est pas figée : elle
                s&apos;enrichit au contact des projets, des retours clients et des
                réalités terrain rencontrées en Afrique de l&apos;Ouest.
              </p>
              <ul className="space-y-1 text-emerald-900">
                <li>• Capitalisation sur chaque intervention significative.</li>
                <li>• Recherche de solutions toujours plus adaptées.</li>
                <li>• Volonté d&apos;être perçu comme un partenaire fiable.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA CONTACT */}
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Intégrer la QHSE dans votre prochain projet ou consultation ?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl">
                  Partagez vos enjeux QHSE (site, type d&apos;activité, risques
                  majeurs, exigences client) et Dunamis Group vous proposera une
                  approche structurée et pragmatique.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-xs">
                <a
                  href="mailto:contact@dunamisgroups.online?subject=Projet%20avec%20enjeux%20QHSE%20–%20Dunamis%20Group"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Échanger sur vos enjeux QHSE
                </a>
                <p className="text-[0.7rem] text-slate-500">
                  Objet conseillé : « Projet avec enjeux QHSE – [Secteur / pays] »
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
