"use client";
export const dynamic = "force-dynamic";
import { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        console.error("CONTACT_API_ERROR", data);
        setStatus("error");
        return;
      }

      setStatus("success");
      // Si tu veux vider après envoi, tu peux décommenter :
      // setFormData({
      //   name: "",
      //   company: "",
      //   email: "",
      //   phone: "",
      //   subject: "",
      //   message: "",
      // });
    } catch (err) {
      console.error("CONTACT_FETCH_ERROR", err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO CONTACT */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-20 pb-14 lg:pt-24 lg:pb-18">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-4">
                <Mail className="w-4 h-4" />
                <span>Contact &amp; demandes de devis</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Décrivez votre besoin,
                <span className="block text-emerald-700">
                  Dunamis Group structure la solution.
                </span>
              </h1>

              <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                Qu&apos;il s&apos;agisse d&apos;une{" "}
                <span className="font-medium text-slate-900">
                  demande de devis, d&apos;un besoin récurrent ou d&apos;un
                  projet complexe
                </span>
                , vous pouvez utiliser ce formulaire pour partager le maximum
                d&apos;éléments utiles : contexte, site, volumes, délais,
                contraintes QHSE, etc.
              </p>

              <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs sm:text-sm text-emerald-800">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  Plus votre description est précise, plus notre réponse sera
                  adaptée à vos contraintes opérationnelles.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* FORMULAIRE + INFOS */}
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              eyebrow="Formulaire de contact"
              title="Votre message à Dunamis Group"
              align="left"
            />

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="border border-slate-200 rounded-2xl bg-white p-4 md:p-5 space-y-3 shadow-sm"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-slate-900"
                    >
                      Nom &amp; prénom *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Nom de la personne de contact"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="company"
                      className="text-xs font-medium text-slate-900"
                    >
                      Société / Projet
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Nom de l’entreprise ou du site"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-slate-900"
                    >
                      Email professionnel *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="exemple@entreprise.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium text-slate-900"
                    >
                      Téléphone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="+225 ..."
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-slate-900"
                  >
                    Objet / type de besoin *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Fourniture d’équipements, prestation logistique, support technique..."
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-slate-900"
                  >
                    Description détaillée du besoin *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    placeholder="Contexte (site / projet), localisation, volumes, délais souhaités, contraintes QHSE, Incoterms, etc."
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    {status === "sending"
                      ? "Envoi en cours..."
                      : "Envoyer ma demande"}
                  </button>

                  {status === "success" && (
                    <p className="text-xs text-emerald-700">
                      Votre message a été pris en compte. Dunamis Group vous
                      recontactera rapidement.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-xs text-red-600">
                      Une erreur est survenue. Vous pouvez également écrire à{" "}
                      <span className="font-medium">
                        contact@dunamisgroups.online
                      </span>
                      .
                    </p>
                  )}
                </div>
              </form>

              {/* INFOS CONTACT + QHSE */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="border border-slate-200 rounded-2xl bg-white p-4 shadow-sm">
                  <h2 className="text-sm font-semibold text-slate-900 mb-2">
                    Coordonnées Dunamis Group
                  </h2>
                  <div className="space-y-2 text-slate-700">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-emerald-700" />
                      <span>
                        Abidjan, Cocody – Abatta
                        <br />
                        Côte d&apos;Ivoire
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Mail className="w-4 h-4 mt-0.5 text-emerald-700" />
                      <span>
                        Email :{" "}
                        <span className="font-medium">
                          contact@dunamisgroups.online
                        </span>
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Phone className="w-4 h-4 mt-0.5 text-emerald-700" />
                      <span>Contact téléphonique / WhatsApp sur demande.</span>
                    </p>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-2xl bg-white p-4 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <h2 className="text-sm font-semibold text-slate-900">
                      Pour un traitement rapide
                    </h2>
                  </div>
                  <p className="text-slate-700">
                    Pour optimiser l&apos;analyse de votre demande, pensez à
                    préciser :
                  </p>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Le site / dépôt / chantier concerné</li>
                    <li>• Le type d&apos;opération (approvisionnement, STS/STT, maintenance…)</li>
                    <li>• Les délais souhaités et contraintes majeures</li>
                    <li>• Les exigences QHSE particulières (ATEX, zones à risque, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
