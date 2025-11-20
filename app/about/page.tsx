import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  ShieldCheck,
  Truck,
  Boxes,
  Factory,
  Globe2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "À propos de Dunamis Group — Approvisionnements sécurisés & solutions industrielles",
  description:
    "Dunamis Group est un partenaire d’excellence pour les acteurs de l’Oil & Gas, des Mines, de l’Énergie et de l’Agro-BTP : approvisionnements, logistique, STS/STT, barèmage, maintenance et conformité QHSE.",
  openGraph: {
    title:
      "À propos de Dunamis Group — Approvisionnements sécurisés & solutions industrielles",
    description:
      "Présentation de Dunamis Group, de sa vision, de son ancrage terrain et de son engagement QHSE pour les opérations industrielles critiques.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO A PROPOS */}
        <section className="relative border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 lg:pt-24 lg:pb-20">
            <div className="grid gap-10 lg:grid-cols-[1.3fr,0.9fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                  <Globe2 className="w-4 h-4" />
                  <span>À propos de Dunamis Group</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                  Un partenaire opérationnel,
                  <span className="block text-emerald-700">
                    aligné sur vos enjeux terrain.
                  </span>
                </h1>

                <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl">
                  Dunamis Group accompagne les acteurs de l&apos;Oil &amp; Gas,
                  des Mines, de l&apos;Énergie et de l&apos;Agro-BTP en Côte
                  d&apos;Ivoire et en Afrique de l&apos;Ouest, avec une approche
                  centrée sur les{" "}
                  <span className="font-medium text-slate-900">
                    approvisionnements sécurisés, la performance logistique et
                    la conformité QHSE
                  </span>
                  .
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Le positionnement de Dunamis Group va au-delà du simple rôle
                  de fournisseur : l&apos;objectif est d&apos;être{" "}
                  <span className="font-medium text-slate-900">
                    un relais opérationnel fiable
                  </span>{" "}
                  entre les contraintes du terrain, les exigences des directions
                  opérationnelles et les impératifs des sièges.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-700 mb-2">
                    Axes clés
                  </p>
                  <ul className="space-y-2 text-xs text-slate-800">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Conformité QHSE intégrée aux décisions d&apos;achat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-emerald-600" />
                      <span>Logistique maîtrisée, orientée délais &amp; fiabilité</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-emerald-600" />
                      <span>
                        Solutions adaptées aux environnements onshore &amp; offshore
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
                    Ancrage &amp; vision
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Basé à Abidjan, Dunamis Group développe des solutions
                    pensées pour les réalités africaines, tout en intégrant les{" "}
                    <span className="font-medium text-slate-900">
                      attentes des groupes internationaux
                    </span>{" "}
                    en matière de conformité, traçabilité et performance
                    opérationnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HISTOIRE & ADN */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="ADN & histoire"
              title="Une expertise construite au contact des opérations"
              align="left"
            />

            <div className="mt-6 grid gap-8 lg:grid-cols-2 text-sm text-slate-700">
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  Dunamis Group est né de l&apos;expérience terrain au sein de
                  chaînes logistiques pétrolières et industrielles : dépôts,
                  terminaux, sites de production, chantiers, bases logistiques.
                </p>
                <p>
                  Cette expérience a mis en évidence un besoin récurrent du
                  marché : disposer d&apos;un partenaire capable de{" "}
                  <span className="font-medium text-slate-900">
                    comprendre les contraintes opérationnelles, traduire les
                    besoins réels des sites
                  </span>{" "}
                  et les transformer en solutions d&apos;approvisionnement,
                  logistiques et techniques cohérentes.
                </p>
                <p>
                  L&apos;approche Dunamis Group est donc résolument orientée{" "}
                  <span className="font-medium text-slate-900">
                    « terrain &amp; performance »
                  </span>
                  , avec une attention particulière portée à la lisibilité des
                  solutions proposées pour les équipes opérationnelles comme
                  pour les directions.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p className="font-medium text-slate-900">
                  Trois convictions structurantes :
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    • <span className="font-medium">L’efficacité</span> ne se
                    résume pas au prix : elle intègre la disponibilité, la
                    fiabilité, la qualité de l’information et la conformité.
                  </li>
                  <li>
                    • <span className="font-medium">La logistique</span> est un
                    maillon stratégique de la performance industrielle, et non
                    un simple centre de coûts.
                  </li>
                  <li>
                    • <span className="font-medium">La QHSE</span> doit être
                    intégrée dès la conception de la solution (choix des
                    équipements, prestataires, modes opératoires).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AXES D’INTERVENTION */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Axes d’intervention"
              title="Ce que Dunamis Group apporte concrètement"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs">
              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Boxes className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Approvisionnements &amp; équipements
                  </h3>
                </div>
                <p className="text-slate-700 mb-2 text-xs sm:text-sm leading-relaxed">
                  Fourniture d&apos;équipements industriels, consommables,
                  outillage et EPI adaptés aux environnements critiques.
                </p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Onshore, offshore, dépôts, terminaux</li>
                  <li>• Équipements adaptés aux exigences QHSE</li>
                  <li>• Gestion des familles électriques, fluides, MRO…</li>
                </ul>
              </div>

              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Logistique &amp; opérations
                  </h3>
                </div>
                <p className="text-slate-700 mb-2 text-xs sm:text-sm leading-relaxed">
                  Coordination logistique et opérationnelle de bout en bout,
                  avec une attention forte aux délais et à la fiabilité.
                </p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Transport, douane, manutention</li>
                  <li>• STS / STT, barèmage, jaugeage</li>
                  <li>• Interface entre sites, prestataires &amp; direction</li>
                </ul>
              </div>

              <div className="border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Support QHSE &amp; structuration
                  </h3>
                </div>
                <p className="text-slate-700 mb-2 text-xs sm:text-sm leading-relaxed">
                  Intégration des dimensions QHSE et structuration des processus
                  liés aux opérations et aux achats.
                </p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Documentation &amp; traçabilité</li>
                  <li>• Bonnes pratiques inspirées des standards ISO / API</li>
                  <li>• Capitalisation des retours d&apos;expérience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DIMENSION HUMAINE */}
        <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2">
            <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 md:p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-emerald-700 mt-1" />
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Une relation de partenariat, pas uniquement de fourniture
                  </h3>
                  <p>
                    L&apos;ambition de Dunamis Group est de bâtir des relations
                    de long terme avec ses clients, basées sur{" "}
                    <span className="font-medium text-slate-900">
                      la confiance, la transparence et la fiabilité
                    </span>
                    .
                  </p>
                  <p>
                    Cela se traduit par une écoute active des besoins des sites,
                    une communication claire avec les différents niveaux
                    (opérations, achats, direction) et une volonté de{" "}
                    <span className="font-medium text-slate-900">
                      contribuer réellement à la performance globale
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 md:p-5 text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Zones d&apos;intervention &amp; ambition
              </h3>
              <p>
                Dunamis Group intervient en priorité en{" "}
                <span className="font-medium text-slate-900">
                  Côte d&apos;Ivoire et en Afrique de l&apos;Ouest
                </span>
                , avec une ambition claire : devenir{" "}
                <span className="font-medium text-slate-900">
                  un acteur de référence
                </span>{" "}
                dans la sécurisation des approvisionnements et la performance
                opérationnelle pour les secteurs Oil &amp; Gas, Mines, Énergie
                et Agro-BTP.
              </p>
              <p>
                Cette ambition s&apos;appuie sur une montée en puissance
                progressive des offres, des outils et des partenariats,
                construits sur des bases solides : sérieux, intégrité et sens
                du résultat.
              </p>
            </div>
          </div>
        </section>

        {/* APPEL À ACTION */}
        <section className="py-10 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border border-slate-200 bg-white rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between shadow-sm">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Discuter d’un besoin ou d’un projet ?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed max-w-xl">
                  Vous souhaitez structurer un partenariat, préparer un projet
                  ou clarifier un besoin complexe ? Dunamis Group peut vous
                  aider à cadrer les enjeux opérationnels, logistiques et QHSE.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-xs">
                <a
                  href="mailto:contact@dunamisgroups.online?subject=Prise%20de%20contact%20–%20Dunamis%20Group"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Contacter Dunamis Group
                </a>
                <p className="text-[0.7rem] text-slate-500">
                  Email :{" "}
                  <span className="font-medium">
                    contact@dunamisgroups.online
                  </span>
                  <br />
                  Objet conseillé : « Prise de contact – [Nom de votre
                  entreprise] »
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
