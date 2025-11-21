type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={
        align === "left" ? "text-left mb-6" : "text-center mb-6"
      }
    >
      {eyebrow && (
        <div className="text-xs font-medium text-emerald-700 mb-1">
          {eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
