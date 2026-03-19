import DotPattern from "./DotPattern";
import ProfileCard from "./ProfileCard";
import "./FoundersSection.css";

const founderBios = [
  {
    name: "Adhiraj Dogra",
    bio:
      "Adhiraj is a student entrepreneur, product architect, and AI engineer based between Sydney and India. As CEO of Swasth AI, he drives product strategy, platform architecture, and business development. He brings experience spanning AI product design, full-stack development, and startup execution, with prior recognition including a Google People's Choice Award and Shark Tank India experience. He is currently at the University of Sydney and part of the INCUBATE accelerator.",
  },
  {
    name: "Prabhmannat Singh",
    bio:
      "Prabhmannat is a Computer Science and Business Systems student at Chandigarh University and the technical backbone of Swasth AI. He leads engineering across the app, AI models, and hardware systems - from the React Native front end to the ESP32-based DoseGuard patch. He is an IEEE-published researcher who designed and 3D-printed the DoseGuard prototype and built the closed-loop sensor-to-dose pipeline from scratch.",
  },
];

export default function FoundersSection() {
  return (
    <section className="fs-section" id="founders">
      <DotPattern className="fs-dot-pattern" />
      <div className="fs-bg-glow fs-bg-glow-left" />
      <div className="fs-bg-glow fs-bg-glow-right" />

      <div className="fs-container">
        <div className="fs-eyebrow-wrap">
          <span className="fs-eyebrow">Leadership</span>
        </div>

        <h2 className="fs-headline">Meet the founders.</h2>
        <p className="fs-subheadline">
          Two builders turning AI, embedded systems, and healthcare execution
          into one unified care platform for India.
        </p>

        <div className="fs-grid">
          <ProfileCard
            name="Adhiraj Dogra"
            title="Co-Founder & CEO"
            handle="adhiraj-dogra"
            status="Leading"
            contactText="LinkedIn"
            avatarUrl="/founder-image/adhiraj.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.open("https://linkedin.com/in/adhiraj-dogra", "_blank")}
            behindGlowColor="rgba(15, 214, 140, 0.4)"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)"
          />

          <ProfileCard
            name="Prabhmannat Singh"
            title="Co-Founder & CTO"
            handle="prabhmannat"
            status="Building"
            contactText="LinkedIn"
            avatarUrl="/founder-image/prabh.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.open("https://linkedin.com/in/prabhmannat", "_blank")}
            behindGlowColor="rgba(15, 214, 140, 0.4)"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)"
          />
        </div>

        <div className="mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-2">
          {founderBios.map((founder) => (
            <article
              key={founder.name}
              className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl"
            >
              <h3 className="mb-3 text-xl font-medium tracking-[-0.03em] text-white">
                {founder.name}
              </h3>
              <p className="text-sm leading-7 text-white/58 md:text-[15px]">
                {founder.bio}
              </p>
            </article>
          ))}
        </div>

        <div className="fs-trust-bar">
          {[
            "IEEE Published",
            "Patent Pending",
            "INCUBATE (USyd)",
            "CU TBI",
            "PharmEasy Partner",
          ].map((item, index, items) => (
            <span key={item} className="fs-trust-item">
              {item}
              {index < items.length - 1 && <span className="fs-trust-sep">.</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
