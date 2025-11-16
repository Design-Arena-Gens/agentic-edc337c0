import { InfographicCard } from "@/components/infographic-card";
import { MetricCluster } from "@/components/metric-cluster";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowTimeline } from "@/components/workflow-timeline";

const challenges = [
  {
    title: "Documentation overload",
    description:
      "Clinicians spend 30–40% of their day transcribing SOAP notes and discharge summaries, leaving less time for direct care.",
    stat: "38% time loss",
  },
  {
    title: "Fragmented hospital analytics",
    description:
      "Disconnected HIS, EMR, pharmacy, and ward systems mean leaders cannot see unified performance or utilization trends.",
    stat: "0 real-time dashboards",
  },
  {
    title: "Rural digital divide",
    description:
      "Tier 2/3 facilities lack multilingual digital documentation, causing gaps in continuity and claim readiness.",
    stat: "75% journeys paper-based",
  },
];

const solutionPillars = [
  {
    title: "Real-time AIScribe Engine",
    description:
      "Transforms doctor-patient conversations into structured SOAP notes with multilingual speech recognition and medical ontologies.",
    icon: "🧠",
  },
  {
    title: "Smart Clinical Copilot",
    description:
      "Suggests differential diagnoses, orders, and care plans tuned to specialty, protocols, and evolving patient context.",
    icon: "🩺",
  },
  {
    title: "Hospital Workflow Automation",
    description:
      "Auto-routes tasks across OPD, IPD, labs, pharmacy, and billing while syncing follow-ups, reminders, and escalations.",
    icon: "⚙️",
  },
  {
    title: "360° Analytic Fabric",
    description:
      "Combines clinical, operational, and financial signals into unified dashboards for CXOs, administrators, and doctors.",
    icon: "📊",
  },
];

const workflowSteps = [
  {
    title: "Capture & Understand",
    description:
      "Multilingual speech-to-text captures the encounter, enriches it with terminologies, and identifies key clinical entities.",
    outcome:
      "Clean transcript aligned to SNOMED & ICD with patient context and physician intent captured.",
    icon: "🎙️",
  },
  {
    title: "Structure & Recommend",
    description:
      "LLM-driven structuring creates SOAP, prescriptions, investigation orders, and sparks specialty-aware recommendations.",
    outcome:
      "Ready-to-sign documentation with nudges for missing vitals, risk flags, and clinical decision pathways.",
    icon: "🗂️",
  },
  {
    title: "Orchestrate Workflows",
    description:
      "Automations push data into HIS/EHR, trigger order sets, notify nursing stations, and update patient portals instantly.",
    outcome:
      "Seamless handoffs across departments with latency-free updates and traceable task completion.",
    icon: "🔁",
  },
  {
    title: "Surface Insight Loops",
    description:
      "Dashboards synthesize doctor productivity, patient flow, revenue cycles, and quality indicators in real time.",
    outcome:
      "Actionable cockpit for leadership with anomaly alerts, forecasting, and KPI commitments per unit.",
    icon: "📡",
  },
];

const analyticsFrames = [
  {
    title: "Care Continuity Lens",
    subtitle: "Clinical Excellence",
    description:
      "Traces every visit, episode, and intervention with drop-off detection and outcome tracking, enabling quality accreditation readiness.",
    stats: [
      { label: "Revisit reductions", value: "↓ 17%", detail: "Post-op follow-up compliance" },
      { label: "Protocol adherence", value: "93%", detail: "Specialty pathways completed" },
    ],
  },
  {
    title: "Operational Pulse",
    subtitle: "Hospital Performance",
    description:
      "Real-time bed, theatre, and ward utilization with wait-time heatmaps, queue predictions, and escalation alerts.",
    stats: [
      { label: "OPD throughput", value: "+28%", detail: "Visits per doctor per day" },
      { label: "Bed turnaround", value: "↑ 34 min", detail: "Faster discharge readiness" },
    ],
  },
  {
    title: "Financial Clarity",
    subtitle: "Revenue & Claims",
    description:
      "Claims automation with coding accuracy dashboards, denial predictors, and payer benchmarking for CFO visibility.",
    stats: [
      { label: "Claims accuracy", value: "98.5%", detail: "Reduction in payer queries" },
      { label: "Revenue leakage", value: "-12%", detail: "Caught via SKU variance scans" },
    ],
  },
];

const deploymentTracks = [
  {
    title: "Urban Tertiary Hospitals",
    description:
      "Full AIScribe stack with premium analytics, surgical pathway automation, and EMR deep integration.",
    icon: "🏥",
  },
  {
    title: "Tier 2/3 Networks",
    description:
      "Hybrid offline-first deployment with remote scribing, local language support, and telemedicine integrations.",
    icon: "🌐",
  },
  {
    title: "Rural Command Centers",
    description:
      "Lightweight edge capture devices stream structured notes to district hubs, ensuring continuity and claim readiness.",
    icon: "🏘️",
  },
];

const roadmap = [
  {
    title: "Q2 2024",
    description:
      "Clinical scribe GA for OPD, specialty playbooks for cardiology, ortho, and gynecology, and bilingual (EN-HI) rollout.",
    icon: "🚀",
  },
  {
    title: "Q3 2024",
    description:
      "Launch ambient in-patient rounding scribe, bed allocation automation, and automated discharge summary workflows.",
    icon: "🗓️",
  },
  {
    title: "Q4 2024",
    description:
      "Decision intelligence layer with predictive readmission scoring, revenue cycle AI, and tele-health control tower.",
    icon: "🔮",
  },
];

const impactMetrics = [
  {
    label: "Documentation time saved / doctor / day",
    value: "86 mins",
    detail: "Across 40 pilot doctors in multi-specialty hospitals",
  },
  {
    label: "Transcription cost reduction",
    value: "62%",
    detail: "Versus human scribe contracts in tier-1 networks",
  },
  {
    label: "Automation coverage",
    value: "21+",
    detail: "Hospital workflows fully orchestrated and monitored",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-100px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute left-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[12%] top-[45%] h-[320px] w-[320px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 sm:px-8 sm:pt-24">
        <header className="glass-border glow relative overflow-hidden rounded-[48px] border-white/10 bg-white/[0.03] p-10 shadow-[0_40px_120px_-45px_rgba(14,165,233,0.45)] sm:p-16">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
                Impact AI India Summit
              </span>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                AIScribe — Ambient Intelligence For Hospital Excellence
              </h1>
              <p className="text-lg text-slate-200/85 sm:text-xl">
                Ambient, multilingual, and LLM-native medical scribing that
                collapses documentation time, synchronizes hospital workflows,
                and unlocks a 360° command center for patient, clinical, and
                financial intelligence.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-100/80">
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3">
                  <span className="block text-xs uppercase tracking-[0.28em] text-slate-300/70">
                    Idea
                  </span>
                  <span className="text-base font-semibold text-white">
                    AI-powered medical scribe + hospital automation fabric
                  </span>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3">
                  <span className="block text-xs uppercase tracking-[0.28em] text-slate-300/70">
                    Impact
                  </span>
                  <span className="text-base font-semibold text-white">
                    Real-time documentation · Smart suggestions · Analytics cloud
                  </span>
                </div>
              </div>
            </div>
            <div className="relative hidden h-full lg:block">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-sky-400/15 via-blue-500/10 to-indigo-500/15 blur-3xl" />
              <div className="relative rounded-[36px] border border-white/10 bg-slate-950/80 p-8 shadow-inner shadow-sky-900/40">
                <div className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-300/60">
                  Realtime encounter journey
                </div>
                <div className="space-y-4 text-sm text-slate-100/85">
                  <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
                    <span className="font-semibold text-white">Doctor ↔ Patient</span>
                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-sky-100">
                      Capture
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-300/60">
                      <span>LLM Brain</span>
                      <span>Realtime</span>
                    </div>
                    <p className="mt-2 text-base font-semibold text-white">
                      SOAP note · Labs · Prescriptions · Care plan
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-indigo-500/10 p-4">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-sky-200">
                        Automation
                      </p>
                      <p className="mt-2 text-sm text-slate-100/85">
                        HIS · EMR · Pharmacy · Billing · Ward
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-violet-500/10 p-4">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200">
                        Insights
                      </p>
                      <p className="mt-2 text-sm text-slate-100/85">
                        Analytics cockpit · Alerts · Forecasting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-sky-400/20 blur-2xl" />
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-indigo-400/30 blur-2xl" />
        </header>

        <section className="mt-20 space-y-12">
          <SectionHeading
            eyebrow="Core Problem Landscape"
            title="Healthcare loses time, insight, and reach without ambient intelligence"
            description="AIScribe targets the three systemic gaps throttling care delivery across India—documentation burden, opaque hospital operations, and the rural digital divide."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400/70">
                  Challenge {index + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200/85">{item.description}</p>
                <div className="mt-6 rounded-2xl border border-sky-400/40 bg-sky-500/10 px-4 py-3 text-xs uppercase tracking-[0.32em] text-sky-100/90">
                  {item.stat}
                </div>
              </div>
            ))}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-violet-500/20 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-white/70">
                Opportunity
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Reclaim clinical focus, unlock data-driven command, bridge rural care
              </h3>
              <p className="mt-3 text-sm text-slate-100/85">
                AIScribe merges ambient AI capture with automation and analytics,
                turning every patient encounter into structured knowledge powering
                decisions, compliance, and growth.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 space-y-12">
          <SectionHeading
            eyebrow="Solution Blueprint"
            title="AIScribe orchestrates end-to-end hospital intelligence"
            description="A modular stack spanning clinical encounter capture, smart copilots, automation rails, and decision intelligence dashboards."
            align="center"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {solutionPillars.map((pillar, index) => (
              <InfographicCard
                key={pillar.title}
                title={pillar.title}
                subtitle="Capability"
                description={pillar.description}
                icon={<span>{pillar.icon}</span>}
                gradientIndex={index}
              />
            ))}
          </div>
        </section>

        <section className="mt-24 space-y-12">
          <SectionHeading
            eyebrow="Experience Flow"
            title="Ambient-to-analytics workflow in continuous motion"
            description="From the exam room to the command center, AIScribe maintains a live loop of documentation, orchestration, and intelligence."
          />
          <WorkflowTimeline steps={workflowSteps} />
        </section>

        <section className="mt-24 space-y-12">
          <SectionHeading
            eyebrow="Analytics Fabric"
            title="Infographics that fuel hospital command centers"
            description="Layered dashboards merge clinical, operational, and financial KPIs—giving leadership line-of-sight and the power to act."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {analyticsFrames.map((frame, index) => (
              <InfographicCard
                key={frame.title}
                title={frame.title}
                subtitle={frame.subtitle}
                description={frame.description}
                icon={<span>{["📈", "📊", "💹"][index]}</span>}
                stats={frame.stats}
                gradientIndex={index}
              />
            ))}
          </div>
        </section>

        <section className="mt-24 space-y-12">
          <SectionHeading
            eyebrow="Deployment Tracks"
            title="Scaled for every care setting"
            description="AIScribe adapts from super-specialty metros to rural command centers, matching bandwidth, compliance, and staffing realities."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {deploymentTracks.map((track, index) => (
              <InfographicCard
                key={track.title}
                title={track.title}
                subtitle="Rollout Focus"
                description={track.description}
                icon={<span>{track.icon}</span>}
                gradientIndex={index}
              />
            ))}
          </div>
        </section>

        <section className="mt-24 space-y-12">
          <SectionHeading
            eyebrow="Impact Evidence"
            title="Pilot metrics already signal system-level uplift"
            description="Each deployment unleashes measurable time savings, accuracy gains, and workflow automation depth."
          />
          <MetricCluster title="Proof Points" metrics={impactMetrics} />
        </section>

        <section className="mt-24 space-y-12">
          <SectionHeading
            eyebrow="Roadmap"
            title="Momentum toward nationwide hospital intelligence"
            description="AIScribe evolves from transcription intelligence to a self-optimizing operating system for healthcare providers."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {roadmap.map((item, index) => (
              <InfographicCard
                key={item.title}
                title={item.title}
                subtitle="Launch Wave"
                description={item.description}
                icon={<span>{item.icon}</span>}
                gradientIndex={index}
              />
            ))}
          </div>
        </section>

        <section className="mt-28 rounded-[42px] border border-white/10 bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-violet-500/10 p-10 sm:p-16">
          <div className="space-y-6 text-center sm:space-y-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              AIScribe ignites the future of Indian healthcare operations
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-100/85 sm:text-lg">
              From city hospitals to rural command hubs, AIScribe ensures every
              patient journey is captured once, automated everywhere, and measured
              in real time. This is the blueprint for equitable, efficient, and
              insight-led healthcare across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-100/90">
              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2">
                Multilingual Ambient AI
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2">
                Workflow Orchestration
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2">
                Decision Command Center
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2">
                Rural Digital Reach
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
