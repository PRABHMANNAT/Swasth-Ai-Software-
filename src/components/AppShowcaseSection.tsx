import { Carousel, Card } from "./ui/apple-cards-carousel";

// Expandable card content for each feature
const FeatureDetail = ({
  description,
  imgSrc,
  imgAlt,
}: {
  description: string;
  imgSrc: string;
  imgAlt: string;
}) => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-6 dark:bg-neutral-800 sm:p-8 md:p-14">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      {description}
    </p>
    <img
      src={imgSrc}
      alt={imgAlt}
      className="mt-8 md:w-2/3 w-full mx-auto object-contain rounded-2xl shadow-lg"
    />
  </div>
);

const data = [
  {
    category: "Dashboard",
    title: "Everything at a glance.",
    src: "/app-ui/Home (1).png",
    content: (
      <FeatureDetail
        description="Your personalised health dashboard gives you a live snapshot of vitals, upcoming appointments, active prescriptions and family health — all in one scroll."
        imgSrc="/app-ui/Home (1).png"
        imgAlt="Swasth AI home dashboard"
      />
    ),
  },
  {
    category: "Reports",
    title: "All your reports, organised.",
    src: "/app-ui/Reports.png",
    content: (
      <FeatureDetail
        description="Upload, store and access every lab report, scan and discharge summary. Swasth AI automatically categorises them so you never hunt for a document again."
        imgSrc="/app-ui/Reports.png"
        imgAlt="Swasth AI reports list"
      />
    ),
  },
  {
    category: "Report Details",
    title: "Understand your results.",
    src: "/app-ui/Reports - Details.png",
    content: (
      <FeatureDetail
        description="Our AI reads your reports and explains them in plain language — highlighting what's normal, what needs attention, and what to ask your doctor."
        imgSrc="/app-ui/Reports - Details.png"
        imgAlt="Swasth AI report details"
      />
    ),
  },
  {
    category: "Trends",
    title: "Track your health over time.",
    src: "/app-ui/Reports - Trends.png",
    content: (
      <FeatureDetail
        description="Visualise how your key health markers have changed over weeks, months and years. Spot patterns early and stay ahead of chronic conditions."
        imgSrc="/app-ui/Reports - Trends.png"
        imgAlt="Swasth AI health trends chart"
      />
    ),
  },
  {
    category: "Fitness",
    title: "Move better, live longer.",
    src: "/app-ui/Workout.jpg",
    content: (
      <FeatureDetail
        description="Personalised workout plans and activity tracking tied to your health data. Swasth AI adapts your fitness routine based on how your body is responding."
        imgSrc="/app-ui/Workout.jpg"
        imgAlt="Swasth AI workout tracking"
      />
    ),
  },
];

export default function AppShowcaseSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full bg-black py-20">
      {/* Section header */}
      <div className="mx-auto mb-4 max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-3">
          The App
        </p>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
          Everything your health needs,{" "}
          <span
            style={{
              background: "linear-gradient(to right, #e5e7eb, rgba(209,213,219,0.5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in one place.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/50 md:text-lg">
          A peek inside Swasth AI — built for real patients and real doctors across India.
        </p>
      </div>

      {/* Carousel */}
      <Carousel items={cards} />
    </section>
  );
}
