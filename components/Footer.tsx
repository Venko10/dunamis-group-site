import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* LOGO + NOM */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/images/logo-dunamis.png"
            alt="Dunamis Group logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-semibold text-lg text-slate-900 tracking-tight">
            Dunamis Group
          </span>
        </div>

        {/* LIENS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-600">
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Pages</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-emerald-700">Accueil</Link></li>
              <li><Link href="/catalogue" className="hover:text-emerald-700">Catalogue</Link></li>
              <li><Link href="/sts" className="hover:text-emerald-700">STS / STT</Link></li>
              <li><Link href="/qhse" className="hover:text-emerald-700">QHSE</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Secteurs</h3>
            <ul className="space-y-1">
              <li><Link href="/sectors/oil-gas" className="hover:text-emerald-700">Oil & Gas</Link></li>
              <li><Link href="/sectors/mines-energie" className="hover:text-emerald-700">Mines & énergie</Link></li>
              <li><Link href="/sectors/agro-btp" className="hover:text-emerald-700">Agro-BTP</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
            <p className="text-slate-700">Abidjan, Cocody – Abatta</p>
            <p className="text-slate-700 mt-1">Email : contact@dunamisgroups.online</p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Dunamis Group — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
