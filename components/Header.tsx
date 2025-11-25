"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const MAIN_NAV = [
  { label: "Accueil", href: "/" },
  { label: "Solutions intégrées", href: "/#solutions" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "STS / STT & Barèmage", href: "/sts" },
  { label: "QHSE", href: "/qhse" },
  { label: "À propos", href: "/about" },
];

const SECTOR_LINKS = [
  { label: "Oil & Gas – onshore / offshore", href: "/sectors/oil-gas" },
  { label: "Mines, énergie & industrie", href: "/sectors/mines-energie" },
  { label: "Agro-BTP & infrastructures", href: "/sectors/agro-btp" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSectorsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* LOGO + NOM */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-dunamis.png"
            alt="Dunamis Group logo"
            width={32}
            height={32}
            className="rounded-sm object-contain"
          />
          <span className="font-semibold text-sm sm:text-base text-slate-900">
            Dunamis Group
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-700 hover:text-emerald-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* MENU SECTEURS (DESKTOP) */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-emerald-700"
              onClick={() => setSectorsOpen((v) => !v)}
            >
              Secteurs
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  sectorsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sectorsOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-lg py-2 text-xs">
                {SECTOR_LINKS.map((sector) => (
                  <Link
                    key={sector.href}
                    href={sector.href}
                    onClick={() => setSectorsOpen(false)}
                    className="block px-3 py-1.5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {sector.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Contact
          </Link>
        </nav>

        {/* BURGER MOBILE */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-1.5 text-slate-700"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-sm text-slate-800 animate-[fadeDown_0.18s_ease-out]">
            {/* Pages principales */}
            {MAIN_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block py-1.5"
              >
                {item.label}
              </Link>
            ))}

            {/* Secteurs mobile */}
            <div className="border-t border-slate-200 pt-2 mt-2">
              <button
                type="button"
                className="flex w-full items-center justify-between py-1.5"
                onClick={() => setMobileSectorsOpen((v) => !v)}
              >
                <span>Secteurs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectorsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSectorsOpen && (
                <div className="mt-1 space-y-1 pl-3">
                  {SECTOR_LINKS.map((sector) => (
                    <Link
                      key={sector.href}
                      href={sector.href}
                      onClick={closeMobileMenu}
                      className="block py-1 text-slate-700"
                    >
                      {sector.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Bouton contact */}
            <div className="pt-3 mt-2 border-t border-slate-200">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* petite animation CSS */}
      <style jsx global>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
