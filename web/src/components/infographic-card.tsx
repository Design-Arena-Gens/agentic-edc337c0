import { ReactNode } from "react";

const gradients = [
  "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  "from-violet-500/30 via-fuchsia-500/20 to-rose-500/30",
  "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  "from-amber-500/30 via-orange-500/20 to-rose-500/30",
];

type InfographicCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  icon: ReactNode;
  stats?: { label: string; value: string }[];
  gradientIndex?: number;
};

export function InfographicCard({
  title,
  subtitle,
  description,
  icon,
  stats,
  gradientIndex = 0,
}: InfographicCardProps) {
  const gradientClass = gradients[gradientIndex % gradients.length];

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/20 sm:p-8">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative space-y-4">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/10 p-3 text-2xl text-sky-100 shadow-inner shadow-sky-500/20">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            {subtitle && (
              <p className="text-sm uppercase tracking-[0.25em] text-slate-300/70">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <p className="text-slate-200/85">{description}</p>
        {stats && (
          <dl className="grid gap-3 text-sm text-slate-100/90 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
              >
                <dt className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
                  {stat.label}
                </dt>
                <dd className="text-lg font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}
