import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  Anchor,
  Compass,
  ShieldCheck,
  FileSearch,
  Ship,
  Droplets,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title:
    "STS / STT & Barèmage – Opérations pétrolières & conformité | Dunamis Group",
  description:
    "Opérations STS / STT, barèmage, jaugeage et contrôle de quantité pour produits pétroliers : coordination logistique, conformité QHSE et traçabilité documentaire.",
  openGraph: {
    title:
      "STS / STT & Barèmage – Opérations pétrolières & conformité | Dunamis Group",
    description:
      "Dunamis Group accompagne les dépôts, terminaux et opérateurs Oil & Gas dans les opérations STS / STT, barèmage et contrôle quantitatif.",
  },
};

export default function STSPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO STS / STT */}
        <section className="relative border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 lg:pt-24 lg:pb-20">
            <div className="grid gap-10 lg:grid-cols-[1.25fr,0.9fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                  <Ship className="w-4 h-4" />
                  <span>STS / STT • Barèmage • Contrôle quantitatif</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                  Opérations STS / STT &amp; barèmage,
                  <span className="block text-emerald-700">
                    sécurisation des volumes &amp; conformité QHSE.
                  </span>
                </h1>

                <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl">
                  Dunamis Group accompagne les dépôts, terminaux, traders et
                  opérateurs pétroliers dans la préparation, l’exécution et la
                  documentation des opérations{" "}
                  <span className="font-medium text-slate-900">
                    Ship to Ship (STS), Ship to Terminal (STT), barèmage et
                    jaugeage
                  </span>
                  , avec un focus sur la précision des volumes et la traçabilité.
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 max-w-md text-xs sm:text-sm">
                  <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
                    <dt className="flex items-center gap-2 text-slate-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Conformité &amp; contrôle</span>
                    </dt>
                    <dd className="mt-1 text-slate-700 leading-relaxed">
                      Méthodes alignées sur les bonnes pratiques
                      opérationnelles, exigences QHSE et standards
                      internationaux.
                    </dd>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
                    <dt className="flex items-center gap-2 text-slate-900">
                      <FileSearch className="w-4 h-4 text-emerald-700" />
                      <span>Traçabilité documentaire</span>
                    </dt>
                    <dd className="mt-1 text-slate-700 leading-relaxed">
                      Rapports structurés, relevés, photos, check-lists et
                      synthèse opérationnelle pour les parties prenantes.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-700 mb-2">
                    Typologie d’opérations
                  </p>
                  <ul className="space-y-2 text-xs text-slate-800">
                    <li className="flex items-center gap-2">
                      <Ship className="w-4 h-4 text-emerald-600" />
                      <span>Ship to Ship (STS) – transfert navire à navire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-emerald-600" />
                      <span>Ship to Terminal (STT) – navire &lt;&gt; terminal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-emerald-600" />
                      <span>
                        Barèmage, jaugeage, contrôle de quantité &amp; densité
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
                    Enjeux clients
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Réduire les écarts de quantité, sécuriser les flux
                    financiers liés aux volumes transférés, et disposer de{" "}
                    <span className="font-medium text-slate-900">
                      preuves documentées en cas de litige ou de divergence
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOC SERVICES STS / STT & BAREMAGE */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Offre STS / STT & barèmage"
              title="Une prise en charge opérationnelle de bout en bout"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Préparation &amp; coordination
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  Organisation en amont des opérations STS / STT &amp; barèmage :
                  validation des paramètres techniques et des contraintes QHSE.
                </p>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Revue des documents navire / terminal</li>
                  <li>• Coordination avec dépôt, terminal, armateur</li>
                  <li>• Check-list pré-opération &amp; briefing</li>
                </ul>
              </div>

              <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Barèmage, jaugeage &amp; mesures
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  Réalisation ou supervision des mesures nécessaires à la
                  validation des volumes transférés.
                </p>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Jaugeage avant / après opération</li>
                  <li>• Densité, température, calcul de volumes</li>
                  <li>• Barèmage &amp; application des tables</li>
                </ul>
              </div>

              <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FileSearch className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Reporting &amp; traçabilité
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  Production de rapports exploitables par les équipes
                  exploitation, finance, trading et QHSE.
                </p>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Rapports détaillés &amp; synthèse exécutive</li>
                  <li>• Relevés, photos, tableaux de volumes</li>
                  <li>• Archivage &amp; transmission structurée</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS EN 4 ÉTAPES */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Méthode"
              title="Un déroulé opérationnel clair, partagé avec vos équipes"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-4 text-xs">
              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Étape 1
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Analyse &amp; cadrage
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Revue des données d&apos;opération (navire, terminal, produit,
                  volumes, fenêtres météo) et formalisation des hypothèses.
                </p>
              </div>

              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Étape 2
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Pré-opération &amp; QHSE
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Check-lists, consignes, revues QHSE, validation des points
                  critiques avec les équipes navire / terminal / dépôt.
                </p>
              </div>

              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Étape 3
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Suivi en temps réel
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Suivi des volumes, densité, temps d&apos;opération, incidents
                  éventuels et actions correctives décidées.
                </p>
              </div>

              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Étape 4
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Clôture &amp; rapports
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Consolidation des données, calculs finaux, écarts, rapports
                  opérationnels &amp; synthèse pour la direction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QHSE & ZONES D’INTERVENTION */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2">
            <div className="border border-emerald-100 bg-emerald-50 rounded-2xl p-4 md:p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-700 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    Intégration QHSE à chaque étape
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-900 mb-2 leading-relaxed">
                    Les opérations STS / STT &amp; barèmage sont conduites dans
                    un environnement à risques : sécurité des personnes,
                    prévention des pollutions, maîtrise des incidents.
                  </p>
                  <ul className="text-xs text-emerald-900 space-y-1">
                    <li>• Vérification des prérequis sécurité</li>
                    <li>• Coordination avec les procédures HSE des sites</li>
                    <li>• Capitalisation des retours d&apos;expérience (REX)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 md:p-5 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <h3 className="text-sm font-semibold text-slate-900">
                  Zones d’intervention &amp; types de sites
                </h3>
              </div>
              <p>
                Dunamis Group intervient principalement en{" "}
                <span className="font-medium text-slate-900">
                  Côte d’Ivoire et en Afrique de l’Ouest
                </span>{" "}
                sur différents types de sites :
              </p>
              <ul className="text-slate-700 space-y-1">
                <li>• Dépôts pétroliers &amp; terminaux maritimes</li>
                <li>• Zones d&apos;ancrage pour opérations STS</li>
                <li>• Installations onshore &amp; infrastructures logistiques</li>
              </ul>

              <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>
                    Interventions planifiées ou en support de situations
                    urgentes (fenêtres marées, contraintes navires…)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>
                    Objectif : fournir une vision claire, chiffrée et
                    documentée des volumes transférés.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPEL À ACTION */}
        <section className="py-10 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border border-slate-200 bg-white rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between shadow-sm">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Préparer une opération STS / STT ou un barèmage ?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed max-w-xl">
                  Partagez votre contexte (site, navire, produit, volumes,
                  délais) et Dunamis Group vous propose un cadrage opérationnel
                  et documentaire adapté.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-xs">
                <a
                  href="mailto:contact@dunamisgroups.online?subject=Demande%20d'informations%20–%20STS%20/%20STT%20&amp;bar%C3%A8mage"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Écrire à Dunamis Group
                </a>
                <p className="text-[0.7rem] text-slate-500">
                  Email :{" "}
                  <span className="font-medium">
                    contact@dunamisgroups.online
                  </span>
                  <br />
                  Objet conseillé : « STS / STT &amp; barèmage – [Nom du site /
                  navire] »
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
