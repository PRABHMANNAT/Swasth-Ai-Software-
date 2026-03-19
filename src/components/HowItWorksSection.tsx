const steps = [
  {
    label: "Upload",
    description:
      "Upload your blood report, prescription, or medical document. Our OCR engine extracts and categorizes everything automatically.",
  },
  {
    label: "Analyze",
    description:
      "Our AI processes 80+ health parameters, computes your Health Score from 0 to 100, and flags critical values with severity indicators and trend data.",
  },
  {
    label: "Act",
    description:
      "Get personalized recommendations - dietary plans, lifestyle changes, medication guidance - and book doctors, order medicines, or consult the AI doctor instantly.",
  },
  {
    label: "Sense & Dose",
    description:
      "DoseGuard monitors your vitals 24/7. When your body signals demand it, the micro-pump delivers a precise micro-dose that is logged, timestamped, and sent to your doctor's dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
            How It Works
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            From upload to insight in under 60 seconds.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.label}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-3 text-sm font-medium text-white/72">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-xl font-medium tracking-[-0.03em] text-white">
                {step.label}
              </h3>
              <p className="text-sm leading-7 text-white/58 md:text-[15px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
