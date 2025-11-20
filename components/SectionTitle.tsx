export default function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="container">
      <p
        className="text-sm font-semibold tracking-widest"
        style={{ color: "#00C896" }}
      >
        {kicker}
      </p>
      <h2
        className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>}
    </div>
  );
}
