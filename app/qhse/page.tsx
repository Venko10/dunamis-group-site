import type { Metadata } from "next";
import Link from "next/link";
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
  Download,
  ArrowRight,
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
    detail:
      "Objectif permanent : Zéro accident grave sur sites, dépôts et chantiers.",
    icon: ShieldCheck,
  },
  {
    label: "Prestations conformes",
    value: "98,7 %",
    detail:
      "Livraisons & opérations réalisées conformément aux exigences contractuelles.",
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
    detail:
      "Dotation en EPI certifiés et contrôlés avant déploiement sur le terrain.",
    icon: Users,
  },
];

const organigramLines = [
  {
    title: "Direction Générale",
    detail:
      "Définit la vision QHSE, valide la politique, alloue les ressources et approuve les objectifs.",
  },
  {
    title: "Responsable QHSE",
    detail:
      "Conçoit, anime et met à jour le système QHSE. Assure la veille réglementaire et suit les indicateurs.",
  },
  {
    title: "Référents QHSE / Sécurité (sites, dépôts, chantiers)",
    detail:
      "Déclinent les exigences QHSE sur le terrain, mènent les causeries, inspections et remontent les incidents.",
  },
  {
    title: "Responsables Opérations (STS/STT, logistique, appro, maintenance)",
    detail:
      "Intègrent les exigences QHSE dans la préparation et l’exécution des opérations pour chaque client.",
  },
  {
    title: "Superviseurs / Chefs d’équipe",
    detail:
      "Encadrent les équipes, contrôlent l’application des consignes et exercent le Stop Work en cas de danger grave.",
  },
  {
    title: "Opérateurs / Chauffeurs / Techniciens",
    detail:
      "Appliquent les consignes, utilisent les EPI fournis et signalent systématiquement toute situation dangereuse.",
  },
];

const processBlocks = [
  {
    title: "Gestion des risques",
    icon: AlertTriangle,
    steps: [
      "Identifier les activités (STS/STT, manutention, transport, stockage, interventions techniques…).",
      "Identifier les dangers (mécaniques, chimiques, électriques, environnementaux, chutes, circulation…).",
      "Évaluer les risques (probabilité × gravité) et les classer.",
      "Définir les mesures de maîtrise (techniques, organisationnelles, humaines).",
      "Communiquer les consignes via causeries et affichages.",
      "Réviser régulièrement le registre des risques après incident ou changement de contexte.",
    ],
  },
  {
    title: "Gestion des incidents & presqu’accidents",
    icon: ShieldCheck,
    steps: [
      "Sécuriser immédiatement les personnes et la zone en cas d’événement.",
      "Déclarer systématiquement tout incident, accident ou presqu’accident.",
      "Analyser les causes (immédiates, profondes, contextuelles).",
      "Définir et mettre en œuvre les actions correctives & préventives (CAPA).",
      "Suivre l’avancement et vérifier l’efficacité des actions.",
      "Capitaliser dans les retours d’expérience QHSE.",
    ],
  },
  {
    title: "Gestion des EPI",
    icon: Users,
    steps: [
      "Analyser les postes et déterminer les EPI nécessaires par type d’activité.",
      "Sélectionner des EPI conformes aux normes (CE / EN / ATEX si nécessaire).",
      "Attribuer les EPI aux collaborateurs (fiche EPI, traçabilité).",
      "Former à l’usage, aux limites et à l’entretien des EPI.",
      "Effectuer des contrôles réguliers de l’état des EPI sur le terrain.",
      "Renouveler les EPI usés et gérer les stocks de manière anticipée.",
    ],
  },
];

const raciRows = [
  {
    activity: "Définition de la politique QHSE",
    dg: "A",
    qhse: "C",
    ref: "I",
    sup: "I",
    op: "I",
  },
  {
    activity: "Fixation des objectifs QHSE",
    dg: "A",
    qhse: "R",
    ref: "C",
    sup: "I",
    op: "I",
  },
  {
    activity: "Analyse des risques",
    dg: "A",
    qhse: "R",
    ref: "C",
    sup: "C",
    op: "I",
  },
  {
    activity: "Élaboration / mise à jour des procédures",
    dg: "A",
    qhse: "R",
    ref: "C",
    sup: "C",
    op: "I",
  },
  {
    activity: "Causeries & sensibilisation terrain",
    dg: "I",
    qhse: "C",
    ref: "R",
    sup: "R",
    op: "C",
  },
  {
    activity: "Gestion des EPI",
    dg: "I",
    qhse: "A",
    ref: "R",
    sup: "C",
    op: "C",
  },
  {
    activity: "Inspection QHSE site / dépôt / chantier",
    dg: "I",
    qhse: "A",
    ref: "R",
    sup: "C",
    op: "I",
  },
  {
    activity: "Gestion des déchets",
    dg: "I",
    qhse: "A",
    ref: "R",
    sup: "C",
    op: "C",
  },
  {
    activity: "Déclaration incidents / presqu’accidents",
    dg: "I",
    qhse: "A",
    ref: "R",
    sup: "R",
    op: "C",
  },
  {
    activity: "Audits internes",
    dg: "A",
    qhse: "R",
    ref: "C",
    sup: "C",
    op: "I",
  },
  {
    activity: "Suivi des plans d’actions QHSE",
    dg: "A",
    qhse: "R",
    ref: "C",
    sup: "C",
    op: "I",
  },
  {
    activity: "Reporting QHSE",
    dg: "A",
    qhse: "R",
    ref: "C",
    sup: "I",
    op: "I",
  },
];

const procedures = [
  {
    title: "Gestion des déchets industriels",
    purpose:
      "Définir les règles de collecte, tri, stockage et évacuation des déchets pour prévenir toute pollution.",
    scope: "Tous les sites, dépôts, chantiers et opérations Dunamis Group.",
    bullets: [
      "Identifier les déchets dangereux, non dangereux et recyclables.",
      "Mettre en place des contenants dédiés, clairement identifiés.",
      "Stocker dans des zones sécurisées, ventilées et sur rétention si nécessaire.",
      "Faire évacuer les déchets par des prestataires agréés, avec bordereaux.",
      "Archiver les justificatifs et sensibiliser régulièrement les équipes.",
    ],
  },
  {
    title: "Gestion des EPI",
    purpose:
      "Garantir que chaque collaborateur dispose d’EPI adaptés, conformes et en bon état.",
    scope: "Tous les collaborateurs et sous-traitants intervenant pour Dunamis Group.",
    bullets: [
      "Définir les EPI par type d’activité et de risque.",
      "Doter chaque collaborateur et tracer les attributions (fiche EPI).",
      "Former à l’usage, aux limites et à l’entretien des EPI.",
      "Contrôler régulièrement l’état des EPI sur le terrain.",
      "Renouveler systématiquement tout EPI usé, endommagé ou non conforme.",
    ],
  },
  {
    title: "Gestion des huiles usagées & fluides",
    purpose:
      "Prévenir les pollutions liées aux huiles et fluides usagés issus des activités de maintenance et d’exploitation.",
    scope: "Opérations de maintenance, tests, transferts et manipulations de fluides.",
    bullets: [
      "Collecter les huiles usagées dans des récipients fermés et étiquetés.",
      "Stocker sur rétention, à l’abri des intempéries et des chocs.",
      "Interdire tout rejet au sol, dans les caniveaux ou cours d’eau.",
      "Faire évacuer via un collecteur agréé, avec bordereaux de suivi.",
      "Appliquer la procédure d’urgence en cas de fuite ou déversement.",
    ],
  },
  {
    title: "Opérations STS/STT & barèmage sécurisés",
    purpose:
      "Sécuriser les transferts de produits (Ship To Ship, Ship To Terminal) et les opérations de barèmage.",
    scope: "Opérations maritimes / portuaires, dépôts, terminaux et chantiers associés.",
    bullets: [
      "Vérifier les documents (permis, plans, conditions météo, marée).",
      "Tenir une réunion de sécurité avant l’opération (toolbox meeting).",
      "Contrôler l’intégrité des équipements (flexibles, brides, vannes).",
      "Mettre en place les moyens anti-pollution adaptés.",
      "Superviser l’opération et clôturer par un contrôle et un retour d’expérience si nécessaire.",
    ],
  },
  {
    title: "Consignation & permis de travail",
    purpose:
      "Éviter toute mise en énergie ou mouvement involontaire lors des travaux sur équipements et installations.",
    scope:
      "Interventions sur équipements électriques, mécaniques, hydrauliques, sous pression, etc.",
    bullets: [
      "Analyser les risques et identifier les sources d’énergie.",
      "Établir le permis de travail / permis feu si applicable.",
      "Mettre en œuvre les mesures de consignation (cadenassage, purge…).",
      "Vérifier la consignation avant le début des travaux.",
      "Lever la consignation uniquement après vérifications et validation.",
    ],
  },
  {
    title: "Gestion des incidents & presqu’accidents",
    purpose:
      "Formaliser la déclaration, l’analyse et le suivi de tout événement QHSE.",
    scope:
      "Tous les incidents Santé, Sécurité, Environnement, dommages matériels et presqu’accidents.",
    bullets: [
      "Sécuriser d’abord les personnes et la zone.",
      "Déclarer systématiquement l’événement via la fiche ou le registre adapté.",
      "Analyser les causes avec les personnes concernées.",
      "Définir des actions correctives & préventives et suivre leur mise en œuvre.",
      "Partager le retour d’expérience auprès des équipes.",
    ],
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

        {/* ENGAGEMENT DIRECTION + KPI */}
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
                affirme que{" "}
                <span className="font-medium text-slate-900">
                  aucun objectif opérationnel ne justifie de compromettre la
                  sécurité
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
                  <span className="font-medium">
                    Environnementaux, Sociaux et de Gouvernance (ESG)
                  </span>{" "}
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

              {/* Bouton téléchargement PDF QHSE */}
              <div className="mt-5">
                <Link
                  href="/docs/DUNAMIS_GROUP_Politique_QHSE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-600 bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 hover:border-emerald-500"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger la Politique QHSE (PDF)</span>
                </Link>
              </div>
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
                  Objectif permanent :{" "}
                  <span className="font-medium">zéro accident</span>. Chaque
                  opération est précédée d&apos;une analyse des risques et d&apos;un
                  rappel des consignes clés.
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Permis de travail et consignation adaptés aux opérations.</li>
                  <li>• Formation aux risques chimiques, ATEX, manutention & levage.</li>
                  <li>
                    • Suivi des incidents et presqu&apos;accidents, retours
                    d&apos;expérience structurés.
                  </li>
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
                  <li>
                    • Engagement sur les délais, la conformité technique et la
                    traçabilité.
                  </li>
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
                  <li>• Sensibilisation aux bonnes pratiques d&apos;hygiène.</li>
                  <li>
                    • Surveillance des conditions de travail sur dépôts, terminaux et
                    chantiers.
                  </li>
                  <li>
                    • Prise en compte de l&apos;ergonomie des postes et des rythmes de
                    travail.
                  </li>
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
                  <li>
                    • Prévention des fuites, déversements et pollutions accidentelles.
                  </li>
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
                  <li>• Conformité aux réglementations locales et aux standards.</li>
                </ul>
              </div>
            </div>

            {/* Bouton téléchargement PDF RSE & ESG */}
            <div className="mt-8">
              <Link
                href="/docs/DUNAMIS_GROUP_Politique_RSE_ESG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger la Politique RSE &amp; ESG (PDF)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ORGANIGRAMME QHSE */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Organisation QHSE"
              title="Organigramme QHSE Dunamis Group"
              align="left"
            />
            <p className="mt-3 text-sm text-slate-700 max-w-3xl">
              L&apos;organisation QHSE de Dunamis Group est structurée pour couvrir à la
              fois la vision stratégique, l&apos;animation du système et la réalité du
              terrain sur les sites, dépôts, chantiers et opérations STS/STT.
            </p>

            <div className="mt-6 space-y-3">
              {organigramLines.map((line) => (
                <div
                  key={line.title}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
                >
                  <div className="mt-1">
                    <ArrowRight className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {line.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      {line.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSUS QHSE */}
        <section className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Processus QHSE"
              title="Trois processus structurants"
              align="left"
            />
            <p className="mt-3 text-sm text-slate-700 max-w-3xl">
              Les processus QHSE de Dunamis Group structurent la manière dont les risques
              sont identifiés, les incidents traités et les EPI gérés au quotidien.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {processBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <div
                    key={block.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-emerald-700" />
                      <h3 className="text-sm font-semibold text-slate-900">
                        {block.title}
                      </h3>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {block.steps.map((step, idx) => (
                        <li key={idx}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TABLEAU RACI */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Rôles & responsabilités"
              title="Tableau RACI QHSE"
              align="left"
            />
            <p className="mt-3 text-sm text-slate-700 max-w-3xl">
              Le tableau RACI précise les responsabilités de chaque acteur dans le
              dispositif QHSE : qui est Responsable (R), qui Approuve (A), qui est
              Consulté (C) et qui est Informé (I).
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
              <table className="min-w-full text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold border-b border-slate-200">
                      Activité QHSE
                    </th>
                    <th className="px-2 py-2 text-center font-semibold border-b border-slate-200">
                      DG
                    </th>
                    <th className="px-2 py-2 text-center font-semibold border-b border-slate-200">
                      Resp. QHSE
                    </th>
                    <th className="px-2 py-2 text-center font-semibold border-b border-slate-200">
                      Référent site / dépôt
                    </th>
                    <th className="px-2 py-2 text-center font-semibold border-b border-slate-200">
                      Superviseur
                    </th>
                    <th className="px-2 py-2 text-center font-semibold border-b border-slate-200">
                      Opérateur
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {raciRows.map((row) => (
                    <tr key={row.activity} className="border-t border-slate-200">
                      <td className="px-3 py-2 text-left align-top text-slate-800">
                        {row.activity}
                      </td>
                      <td className="px-2 py-2 text-center align-top">{row.dg}</td>
                      <td className="px-2 py-2 text-center align-top">{row.qhse}</td>
                      <td className="px-2 py-2 text-center align-top">{row.ref}</td>
                      <td className="px-2 py-2 text-center align-top">{row.sup}</td>
                      <td className="px-2 py-2 text-center align-top">{row.op}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-600">
              <span className="font-semibold">R</span> = Responsable &nbsp;|&nbsp;
              <span className="font-semibold">A</span> = Approuve &nbsp;|&nbsp;
              <span className="font-semibold">C</span> = Consulté &nbsp;|&nbsp;
              <span className="font-semibold">I</span> = Informé
            </p>
          </div>
        </section>

        {/* MINI-PROCÉDURES QHSE */}
        <section className="py-10 lg:py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Procédures essentielles"
              title="QHSE au quotidien"
              align="left"
            />
            <p className="mt-3 text-sm text-slate-700 max-w-3xl">
              Ces procédures structurent la manière dont Dunamis Group gère les déchets,
              les EPI, les huiles usagées, les opérations STS/STT, la consignation et les
              incidents pour garantir une exécution sûre et conforme.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {procedures.map((proc) => (
                <article
                  key={proc.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    {proc.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700">
                    <span className="font-semibold">Objet : </span>
                    {proc.purpose}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-700">
                    <span className="font-semibold">Champ d&apos;application : </span>
                    {proc.scope}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-700">
                    {proc.bullets.map((b, idx) => (
                      <li key={idx}>• {b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
