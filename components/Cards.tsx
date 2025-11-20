import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}

export function Commitment({
  Icon,
  title,
  text,
}: {
  Icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-2">
        {Icon ? <Icon className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

export function ServiceCard({
  Icon,
  title,
  text,
}: {
  Icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="card p-6 hover:shadow-md transition">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg mb-3 bg-dunamis-gray">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

export function SectorCard({
  Icon,
  title,
  points,
}: {
  Icon: any;
  title: string;
  points: string[];
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-5 w-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export function SolutionPill({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc pl-5">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export function QHSECard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck className="h-5 w-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
