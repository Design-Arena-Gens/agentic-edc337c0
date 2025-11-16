type TimelineStep = {
  title: string;
  description: string;
  outcome: string;
  icon: string;
};

type WorkflowTimelineProps = {
  steps: TimelineStep[];
};

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div className="relative grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
      <div className="hidden md:block">
        <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-slate-200/80">
          AIScribe orchestrates data capture, clinical intelligence, and hospital
          automation in a continuous loop. Each module feeds structured insights
          back into the workflow, so documentation, decision-making, and patient
          navigation stay synchronized in real time.
        </div>
      </div>
      <div className="relative space-y-8">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-sky-400/80 via-white/10 to-indigo-500/70 md:block" />
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-5 shadow-xl shadow-sky-900/20 md:pl-14"
          >
            <div className="absolute -left-[14px] top-8 hidden h-7 w-7 items-center justify-center rounded-full border-2 border-sky-300 bg-slate-950 text-xl text-sky-200 md:flex">
              {step.icon}
            </div>
            <div className="space-y-3">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400/80">
                STEP {index + 1}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-base text-slate-200/80">{step.description}</p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-sky-100/90">
                <span className="text-xs uppercase tracking-[0.28em] text-sky-200/90">
                  Outcome
                </span>
                <p className="mt-2 text-base font-semibold text-white">
                  {step.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
