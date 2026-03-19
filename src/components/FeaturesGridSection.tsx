const features = [
  ["Medical Repository", "Auto-fetch, sort, and categorize all your medical records in one place."],
  ["AI Health Score", "Comprehensive score out of 100 from 80+ blood parameters."],
  ["AI Doctor", "Symptom checker and medication guidance powered by medical LLMs."],
  ["One-Tap Booking", "Book any doctor, any hospital, any specialization from one interface."],
  ["Video Consultation", "Live video calls with doctors directly from the app."],
  ["Nearby Doctor Finder", "GPS-powered search for nearby doctors with ratings and availability."],
  ["Family Health Management", "Manage records and scores for your entire family."],
  ["Blood Pressure Monitor", "Track and log BP readings with trend visualization."],
  ["Blood Glucose Tracker", "Monitor glucose levels over time with alerts."],
  ["Sleep Tracker", "Track sleep quality and duration."],
  ["Calorie Counter", "Log meals and track daily caloric intake."],
  ["BMI Calculator", "Instant BMI computation with health category indicators."],
  ["Stress Management", "Guided exercises and tracking tools for stress."],
  ["Medicine Reminders", "Smart reminders that adapt to your schedule."],
  ["Medicine Tracker", "Log every dose taken with adherence statistics."],
  ["Symptom Checker", "AI-powered symptom analysis with triage recommendations."],
  ["Diet Chart", "Personalized dietary plans based on your health data."],
  ["Workout Assistant", "Exercise routines with calorie burn estimates."],
  ["Allergy Tracker", "Log and monitor allergic reactions and triggers."],
  ["Water Intake Tracker", "Daily hydration tracking with smart reminders."],
  ["Weight Management", "Track weight goals with progress charts."],
  ["Nutrition Database", "Look up nutritional content of foods."],
  ["Quick Health Checks", "Trending health articles, COVID info, and fitness tips."],
  ["Wearable Integration", "Sync with smartwatches, fitness bands, and Google Fit."],
  ["Report Sharing", "Share reports with doctors or family through secure links."],
  ["PDF Chat", "Chat with your uploaded medical PDFs using AI."],
  ["Ambulance Finder", "One-tap emergency ambulance request."],
  ["Health Trend Visualization", "Charts showing how your parameters change over time."],
  ["Prescription Viewer", "View and filter prescriptions across all records."],
  ["Care Network", "See all your doctors and healthcare providers in one view."],
  ["Notifications & Alerts", "Smart alerts for appointments, doses, and critical readings."],
  ["Payment Integration", "In-app UPI payments for consultations and bookings."],
];

export default function FeaturesGridSection() {
  return (
    <section
      id="all-features"
      className="border-t border-white/10 bg-[#040404] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            32+ tools. One app. Everything your health needs.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map(([title, description], index) => (
            <article
              key={title}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/38">
                Feature {(index + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-lg font-medium tracking-[-0.03em] text-white/92">
                {title}
              </h3>
              <p className="text-sm leading-7 text-white/56">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
