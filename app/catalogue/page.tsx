import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  Boxes,
  HardHat,
  Wrench,
  Cog,
  ShieldCheck,
  Truck,
  Zap,
  Droplets,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Catalogue – Dunamis Group",
  description:
    "Sélection de solutions Dunamis Group : équipements, EPI, outillage, consommables, packs logistiques et support pour sites industriels et projets en Afrique.",
};

type ProductItem = {
  label: string;
  description: string;
  category: string;
  icon?: React.ReactNode;
};

/**
 * Carte produit / service avec CTA reliés à /contact
 */
function ProductCard({ item }: { item: ProductItem }) {
  const refParam = encodeURIComponent(item.label);

  return (
    <article className="border border-slate-200 rounded-2xl bg-white p-4 shadow-sm text-xs sm:text-sm flex flex-col h-full">
      <div className="flex items-start gap-3 mb-2">
        {item.icon && (
          <div className="mt-0.5">
            {/* Icône */}
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        )}
        <div className="flex-1">
          <p className="text-[0.7rem] font-medium uppercase tracking-wide text-emerald-700">
            {item.category}
          </p>
          <h3 className="text-sm font-semibold text-slate-900 mt-0.5">
            {item.label}
          </h3>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed flex-1">{item.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {/* CTA Obtenir un devis */}
        <Link
          href={`/contact?mode=devis&ref=${refParam}`}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3 py-1.5 text-[0.75rem] font-semibold text-white shadow-sm hover:bg-emerald-500"
        >
          Obtenir un devis
        </Link>

        {/* CTA Ajouter au devis (même comportement pour l’instant) */}
        <Link
          href={`/contact?mode=devis&ref=${refParam}`}
          className="inline-flex items-center justify-center rounded-lg border border-emerald-500 px-3 py-1.5 text-[0.75rem] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
        >
          Ajouter au devis
        </Link>
      </div>
    </article>
  );
}

const CATALOGUE_ITEMS: ProductItem[] = [
  {
    category: "EPI & sécurité",
    label: "Kit EPI complet – Zone dépôt / terminal",
    description:
      "Casques, gants, lunettes, gilets haute visibilité, chaussures de sécurité et protections auditives adaptés aux environnements Oil & Gas (dépôts, terminaux, jetties).",
    icon: <HardHat className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "EPI & sécurité",
    label: "Pack EPI chantier Agro-BTP",
    description:
      "EPI de base pour équipes terrain : casques, gilets, chaussures, gants et lunettes, adaptés aux chantiers routiers, agricoles et infrastructures.",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Outillage & maintenance",
    label: "Outillage de base pour maintenance site minier",
    description:
      "Jeux de clés mixtes, tournevis, pinces, douilles, coffrets et accessoires pour opérations de maintenance quotidienne sur sites miniers et industriels.",
    icon: <Wrench className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Outillage & maintenance",
    label: "Kit outillage pour base logistique Oil & Gas",
    description:
      "Sélection d’outillage et consommables pour ateliers de bases logistiques : serrage, coupe, mesure, électricité, petites réparations.",
    icon: <Cog className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Consommables & fournitures",
    label: "Consommables techniques pour sites industriels",
    description:
      "Rubans, colliers, adhésifs, lubrifiants, petits matériels et consommables divers pour opérations de maintenance et de support.",
    icon: <Boxes className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Consommables & fournitures",
    label: "Fournitures pour chantiers Agro-BTP",
    description:
      "Signalisation, balisage, petits matériels, rubans, marquage et consommables pour sécuriser et organiser vos chantiers.",
    icon: <Boxes className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Électrique & énergie",
    label: "Pack câblage & accessoires électriques – site industriel",
    description:
      "Câbles, connectiques, gaines, boîtes de dérivation et accessoires pour petites interventions électriques (hors étude et installation complexes).",
    icon: <Zap className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Fluides & transfert",
    label: "Flexibles & accessoires de transfert de fluides",
    description:
      "Flexibles, raccords, vannes et accessoires pour circuits de fluides industriels, en cohérence avec les spécifications techniques et QHSE client.",
    icon: <Droplets className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Logistique & opérations",
    label: "Pack logistique dépôt / base opérationnelle",
    description:
      "Solutions pour organisation des zones de stockage, identification, rayonnage léger et équipements de manutention légère.",
    icon: <Truck className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Logistique & opérations",
    label: "Support logistique pour opérations STS / STT",
    description:
      "Pré-sélection de matériels, consommables et EPI usuels pour accompagner les opérations de Ship To Ship / Ship To Terminal.",
    icon: <Truck className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Services & assistance",
    label: "Assistance à la définition de besoins techniques",
    description:
      "Appui à la clarification et la formalisation de besoins techniques avant consultation fournisseurs (EPI, outillage, consommables, équipements).",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-700" />,
  },
  {
    category: "Services & assistance",
    label: "Accompagnement logistique & QHSE pour projet spécifique",
    description:
      "Support ponctuel pour structurer les aspects approvisionnement, logistique et QHSE d’un projet ou d’une opération terrain ciblée.",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-700" />,
  },
];

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO CATALOGUE */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-20 pb-14 lg:pt-24 lg:pb-18">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <Boxes className="w-4 h-4" />
                <span>Catalogue Dunamis Group</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Des solutions pensées pour
                <span className="block text-emerald-700">
                  vos sites et vos réalités terrain.
                </span>
              </h1>

              <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                Ce catalogue présente une sélection de solutions proposées par
                Dunamis Group : équipements, EPI, outillage, consommables, packs
                logistiques et accompagnement. Il peut être adapté en fonction
                de vos sites, de vos standards internes et de vos contraintes
                opérationnelles.
              </p>
            </div>
          </div>
        </section>

        {/* GRID CATALOGUE */}
        <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Sélection de solutions"
              title="Exemples de kits, packs et services proposés"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
              {CATALOGUE_ITEMS.map((item) => (
                <ProductCard key={item.label} item={item} />
              ))}
            </div>

            <p className="mt-6 text-[0.75rem] text-slate-500 max-w-3xl">
              Cette sélection n&apos;est pas exhaustive. Dunamis Group peut
              adapter ces solutions ou en définir de nouvelles en fonction de vos
              standards, de vos sites (dépôts, terminaux, mines, centrales,
              chantiers) et de vos contraintes QHSE.
            </p>
          </div>
        </section>

        {/* CTA CONTACT */}
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Vous souhaitez adapter ce catalogue à vos besoins ?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl">
                  Indiquez vos sites, volumes, contraintes et priorités
                  (sécurité, délais, coûts, standardisation). Dunamis Group vous
                  proposera une approche catalogue adaptée.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-xs">
                <Link
                  href="/contact?mode=devis&ref=Catalogue%20Dunamis%20Group"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Discuter d&apos;un catalogue adapté
                </Link>
                <p className="text-[0.7rem] text-slate-500">
                  Le formulaire sera pré-rempli pour une demande autour du
                  catalogue.
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
