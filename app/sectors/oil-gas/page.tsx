import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  Fuel,
  ShieldCheck,
  Droplets,
  Truck,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secteur Oil & Gas – Onshore / Offshore | Dunamis Group",
  description:
    "Approvisionnements, logistique et support opérationnel pour le secteur Oil & Gas onshore / offshore : EPI, outillage, équipements, opérations STS/STT et QHSE.",
};

export default function OilGasPage() {
  const devisUrl = "/contact?mode=devis&ref=" +
    encodeURIComponent("Secteur Oil & Gas – Dunamis Group");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 lg:pt-20 lg:pb-14 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <Fuel className="w-4 h-4" />
                <span>Secteur Oil &amp; Gas – onshore / offshore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Un partenaire opérationnel
                <span className="block text-emerald-700">
                  au service des opérations Oil &amp; Gas.
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Dunamis Group accompagne les opérateurs et prestataires{" "}
                <span className="font-medium text-slate-900">
                  onshore, offshore et terminaux
                </span>{" "}
                dans leurs besoins en approvisionnements, logistique et support
                QHSE, avec une attention particulière à la sécurité des personnes,
                à l’intégrité des installations et à la conformité réglementaire.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={devisUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
                >
                  Obtenir un devis pour le secteur Oil &amp; Gas
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
                src="/images/sectors/oil-gas-banner.png"
                alt="Opérations Oil & Gas, onshore et offshore"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ENJEUX & RÉPONSE DUNAMIS */}
        <section className="py-10 lg:py-14 bg-white border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Enjeux du secteur"
              title="Sécurité, disponibilité et conformité en environnement exigeant"
              align="left"
            />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  Vos enjeux sur le terrain
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>
                    • Garantir la{" "}
                    <span className="font-medium">
                      sécurité des équipes
                    </span>{" "}
                    dans des environnements à risque (zones ATEX, offshore, terminaux).
                  </li>
                  <li>
                    • Disposer d’EPI, d’outillage et d’équipements{" "}
                    <span className="font-medium">conformes aux standards</span> des
                    majors et aux réglementations locales.
                  </li>
                  <li>
                    • Maîtriser les délais d’approvisionnement pour{" "}
                    <span className="font-medium">
                      éviter les interruptions de production
                    </span>{" "}
                    ou d’opérations critiques.
                  </li>
                  <li>
                    • Coordonner plusieurs sites, bases logistiques, dépôts et
                    terminaux avec une{" "}
                    <span className="font-medium">
                      logistique fluide et tracée
                    </span>.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                  La réponse Dunamis Group
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>
                    • Approvisionnements EPI, outillage, fluides et consommables{" "}
                    <span className="font-medium">spécifiquement adaptés</span> au
                    contexte Oil &amp; Gas.
                  </li>
                  <li>
                    • Coordination logistique de bout en bout{" "}
                    <span className="font-medium">
                      jusqu’à la base, au dépôt ou au terminal
                    </span>.
                  </li>
                  <li>
                    • Intégration des exigences QHSE dès la phase de sourcing et
                    de préparation des opérations.
                  </li>
                  <li>
                    • Capacité à intervenir sur des{" "}
                    <span className="font-medium">
                      opérations STS/STT &amp; barèmage
                    </span>{" "}
                    avec un socle méthodologique QHSE structuré.
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
              title="Services clés pour le secteur Oil &amp; Gas"
              align="left"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    EPI &amp; conformité HSE
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• EPI adaptés aux zones ATEX et aux risques spécifiques.</li>
                  <li>• Traçabilité des certificats &amp; conformité.</li>
                  <li>• Accompagnement dans la définition des dotations.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Fluides, flexibles &amp; accessoires
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Flexibles, tuyauteries, brides, raccords.</li>
                  <li>• Équipements pour huiles, carburants, produits chimiques.</li>
                  <li>• Support sur la gestion des huiles usagées.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Logistique &amp; opérations
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• Approvisionnements multi-sites &amp; bases logistiques.</li>
                  <li>• Support aux opérations STS/STT &amp; barèmage.</li>
                  <li>• Coordination des flux et des prestataires.</li>
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
              title="Structuration des approvisionnements EPI pour un acteur Oil & Gas"
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
                Un opérateur Oil &amp; Gas devait sécuriser ses approvisionnements en EPI
                et outillage pour des opérations offshore et terminal, dans un contexte de{" "}
                <span className="font-medium">
                  délais irréguliers et de non-conformités ponctuelles
                </span>{" "}
                par rapport à ses standards HSE.
              </p>

              <h4 className="mt-4 text-xs sm:text-sm font-semibold text-slate-900">
                Intervention de Dunamis Group
              </h4>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>
                  • Revue détaillée des besoins par familles (EPI, outillage, consommables).
                </li>
                <li>
                  • Sélection de références conformes aux normes et standards du client.
                </li>
                <li>
                  • Mise en place d’une liste cadre avec conditions (prix, délais, stock mini).
                </li>
                <li>
                  • Coordination logistique des livraisons vers base logistique et terminal.
                </li>
              </ul>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-emerald-800">
                  Résultats obtenus
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>
                  • Réduction d’environ 30&nbsp;% des délais d’approvisionnement sur les EPI
                  critiques.
                </li>
                <li>• Zéro non-conformité majeure sur les EPI livrés sur la période.</li>
                <li>• Traçabilité documentaire complète (certificats, MSDS, datasheets).</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
