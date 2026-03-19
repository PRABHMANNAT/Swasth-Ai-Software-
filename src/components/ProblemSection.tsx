const problems = [
  {
    title: "Your records are everywhere except where they matter.",
    body:
      "Split across 5 hospitals, 3 apps, and a drawer full of paper. Every new doctor means starting over. Every emergency means guessing. 1.6 million Indians die every year from chronic diseases - not because cures do not exist, but because their history is lost.",
  },
  {
    title: "Fixed schedules ignore your body.",
    body:
      "You take the same BP pill at 8 AM whether your body needs it or not. Your pressure is fine in the morning but spikes at 2 PM. The medicine does not care. Fixed doses flood your system, cause side effects, and wear off completely - no middle ground.",
  },
  {
    title: "By the time you feel it, it is already an emergency.",
    body:
      "No system watches your body 24/7. No system acts before you even notice something is wrong. 50% of chronic patients forget or skip doses. The result: avoidable ER visits, preventable ICU admissions, and a healthcare system that reacts instead of prevents.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-red-200/80">
            The Problem
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            India&apos;s healthcare system is broken at the last mile.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/55">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="mb-4 text-xl font-medium leading-8 tracking-[-0.03em] text-white/92">
                {problem.title}
              </h3>
              <p className="text-sm leading-7 text-white/58 md:text-[15px]">
                {problem.body}
              </p>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-4xl text-center text-2xl font-medium leading-relaxed tracking-[-0.03em] text-white/82 md:text-4xl">
          &quot;India sends rockets to Mars but still makes diabetic patients guess
          their insulin timing from a piece of paper written 3 months ago.&quot;
        </blockquote>
      </div>
    </section>
  );
}
