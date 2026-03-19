import {
  Activity,
  FileStack,
  Pill,
  Stethoscope,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: FileStack,
    title: "All your records. One place. Zero paper.",
    body:
      "Auto-fetch, sort, and categorize every medical document - blood reports, prescriptions, imaging, and surgical records. Powered by DigiLocker integration and OCR so your history follows you everywhere.",
  },
  {
    icon: Activity,
    title: "A single number that tells you where you stand.",
    body:
      "Upload your blood report and get a Health Score out of 100 from 80+ physiological parameters. Track trends over time, see severity flags, and understand what needs attention first.",
  },
  {
    icon: Pill,
    title: "Medicine delivered only when your body needs it.",
    body:
      "DoseGuard combines real-time bio-sensors with a micro-pump that releases precise micro-doses only when live body signals demand it - no floods, no crashes, no fixed-clock guesswork.",
  },
  {
    icon: Stethoscope,
    title: "AI-powered consultation. One-tap booking. Any hospital.",
    body:
      "Talk to an AI doctor trained on government-approved medical databases, get symptom analysis and medication guidance, and book in-person or video appointments from a single interface.",
  },
  {
    icon: Users,
    title: "Your family's health. One account.",
    body:
      "Manage records, scores, appointments, and wellness history for your whole family from one dashboard. Switch profiles in a tap and keep everyone on the same care loop.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="product"
      className="border-t border-white/10 bg-[#040404] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-4xl">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
            The Solution
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            One platform. Unified records. Intelligent dosing. Zero guesswork.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/58 md:text-lg">
            Swasth AI combines a full-stack health management app with DoseGuard
            - a wearable micro-dosing patch that senses your vitals in real time
            and delivers medicine only when your body signals demand it.
            Together, they form a closed-loop system: Sense - Decide - Dose -
            Log.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-xl font-medium leading-8 tracking-[-0.03em] text-white/92">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-7 text-white/58 md:text-[15px]">
                  {pillar.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
