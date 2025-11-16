type Metric = {
  label: string;
  value: string;
  detail: string;
};

type MetricClusterProps = {
  title: string;
  metrics: Metric[];
};

export function MetricCluster({ title, metrics }: MetricClusterProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl shadow-blue-900/20">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-sm uppercase tracking-[0.28em] text-slate-300/70">
          Key Impact Signals
        </p>
      </div>
      <dl className="grid gap-6 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/2 to-white/0 p-4 text-center"
          >
            <dt className="text-xs uppercase tracking-[0.3em] text-slate-300/70">
              {metric.label}
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-sky-100">
              {metric.value}
            </dd>
            <p className="mt-2 text-xs text-slate-300/80">{metric.detail}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
