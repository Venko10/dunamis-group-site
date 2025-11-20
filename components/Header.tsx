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

          {/* MENU SECTEURS */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-emerald-700"
              onClick={() => setSectorsOpen((v) => !v)}
            >
              Secteurs
              <ChevronDown
                className={`w-3 h-3 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
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
        >
          {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>
    </header>
  );
}
