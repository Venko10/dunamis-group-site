import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  ShieldCheck,
  AlertTriangle,
  Leaf,
  Users,
  FileText,
  BarChart3,
  CheckCircle2,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "QHSE & Engagement Durable | Dunamis Group",
  description:
    "Politique QHSE, RSE & ESG de Dunamis Group : sécurité, qualité de service, protection de l’environnement et engagement de la Direction pour une performance durable.",
};

const kpiCards = [
  {
    label: "Accidents majeurs",
    value: "0",
    detail: "Objectif permanent : Zéro accident grave sur sites, dépôts et chantiers.",
    icon: ShieldCheck,
  },
  {
    label: "Prestations conformes",
    value: "98,7 %",
    detail: "Livraisons & opérations réalisées conformément aux exigences contractuelles.",
    icon: CheckCircle2,
  },
  {
    label: "Satisfaction clients",
    value: "96 %",
    detail: "Sur les contrats et projets suivis par la Direction.",
    icon: BarChart3,
  },
  {
    label: "Personnel équipé",
    value: "100 %",
    detail: "Dotation en EPI certifiés et contrôlés avant déploiement.",
    icon: Users,
  },
];

export default function QHSEPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO QHSE */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-16 pb-14 lg:pt-20 lg:pb-18">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Politique QHSE, RSE &amp; ESG</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                La performance opérationnelle
                <span className="block text-emerald-700">
                  ne se conçoit jamais sans sécurité ni responsabilité.
                </span>
              </h1>

              <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                Chez <span className="font-semibold">Dunamis Group</span>, la
                Qualité, l&apos;Hygiène, la Sécurité et l&apos;Environnement ne sont
                pas de simples obligations réglementaires, mais des{" "}
                <span className="font-medium text-slate-900">
                  piliers de notre modèle opérationnel
                </span>
                . Elles guident la façon dont nous concevons, préparons et
                exécutons chaque opération au service de nos clients.
              </p>
            </div>
          </div>
        </section>

        {/* BLOC ENGAGEMENT DIRECTION + KPI */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200/60">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
            {/* Engagement direction */}
            <article className="rounded-2xl border border-emerald-100 bg-white p-5 md:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-700" />
                Engagement de la Direction
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                La Direction de <span className="font-semibold">Dunamis Group</span>{" "}
                affirme que <span className="font-medium text-slate-900">
                  aucun objectif opérationnel ne justifie de compromettre la sécurité
                </span>{" "}
                des personnes, l&apos;intégrité des installations ou la protection de
                l&apos;environnement.
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Nous nous engageons à :
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                <li>
                  • Déployer des pratiques alignées sur les références
                  internationales (ISO 9001, ISO 45001, ISO 14001, MASE).
                </li>
                <li>
                  • Fournir à nos équipes les moyens, la formation et les EPI
                  nécessaires pour travailler en sécurité.
                </li>
                <li>
                  • Développer une culture du retour d&apos;expérience, de
                  l&apos;analyse des risques et de l&apos;amélioration continue.
                </li>
                <li>
                  • Intégrer les enjeux{" "}
                  <span className="font-medium">Environnementaux, Sociaux et de Gouvernance (ESG)</span>{" "}
                  dans nos décisions et dans la sélection de nos partenaires.
                </li>
              </ul>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Dunamis Group se positionne comme un{" "}
                <span className="font-semibold text-slate-900">
                  partenaire responsable et fiable
                </span>{" "}
                pour les acteurs industriels en Afrique de l&apos;Ouest.
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-500">
                La Direction Générale — Dunamis Group
              </p>
            </article>

            {/* KPI */}
            <div className="space-y-4">
              <SectionTitle
                eyebrow="Indicateurs QHSE"
                title="Chiffres clés & objectifs"
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {kpiCards.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <div
                      key={kpi.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-slate-500">
                            {kpi.label}
                          </p>
                          <p className="mt-1 text-xl font-semibold text-slate-900">
                            {kpi.value}
                          </p>
                        </div>
                        <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 p-2">
                          <Icon className="w-4 h-4 text-emerald-700" />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {kpi.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* AXES QHSE */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Axes QHSE"
              title="Sécurité, qualité, hygiène & environnement"
              align="left"
            />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Sécurité & prévention
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Objectif permanent : <span className="font-medium">zéro accident</span>.
                  Chaque opération est précédée d&apos;une analyse des risques (AST) et
                  d&apos;un rappel des consignes clés.
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Permis de travail et consignation adaptés aux opérations.</li>
                  <li>• Formation aux risques chimiques, ATEX, manutention & levage.</li>
                  <li>• Suivi des incidents et presqu&apos;accidents, retours d&apos;expérience.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Qualité & conformité
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  La qualité de service est pilotée par des référentiels inspirés de{" "}
                  <span className="font-medium">l&apos;ISO 9001</span> : préparation, contrôle
                  et traçabilité.
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Contrôle documentaire : datasheets, certificats, MSDS.</li>
                  <li>• Suivi des non-conformités et actions correctives.</li>
                  <li>• Engagement sur les délais, la conformité technique et la traçabilité.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Hygiène & conditions de travail
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  La protection de la santé et le respect de l&apos;intégrité physique des
                  équipes sont au cœur des décisions.
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Sensibilisation continue aux bonnes pratiques d&apos;hygiène.</li>
                  <li>• Surveillance des conditions de travail sur dépôts & chantiers.</li>
                  <li>• Prise en compte de l&apos;ergonomie des postes et des rythmes de travail.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Environnement & impact
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Dunamis Group limite l&apos;empreinte environnementale de ses activités
                  en s&apos;alignant sur les bonnes pratiques de{" "}
                  <span className="font-medium">l&apos;ISO 14001</span>.
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Prévention des fuites, déversements et pollutions accidentelles.</li>
                  <li>• Gestion responsable des huiles, fluides et déchets.</li>
                  <li>• Optimisation des déplacements et des flux logistiques.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RSE / ESG */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200/60">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="RSE & ESG"
              title="Responsabilité environnementale, sociale et gouvernance"
              align="left"
            />
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Environnement (E)
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Réduction des impacts environnementaux liés à nos activités.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Gestion structurée des déchets industriels.</li>
                  <li>• Priorité à des équipements et fournisseurs conformes.</li>
                  <li>• Réduction progressive de l&apos;empreinte carbone logistique.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Social (S)
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Valorisation des compétences, sécurité et développement des équipes.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Formation continue : QHSE, technique, management.</li>
                  <li>• Implication des équipes dans la prévention des risques.</li>
                  <li>• Inclusion de talents locaux et partenariats responsables.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Gouvernance (G)
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Une gouvernance structurée, transparente et conforme.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Procédures écrites & contrôlées.</li>
                  <li>• Zéro tolérance pour la corruption et les pratiques illicites.</li>
                  <li>• Conformité aux réglementations locales et aux standards industriels.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
