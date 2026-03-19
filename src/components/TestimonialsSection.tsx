import { useEffect, useRef, useState } from "react";
import DarkVeil from "./DarkVeil";

const testimonials = [
  {
    quote:
      "I used to carry a folder of old reports to every doctor visit. With Swasth AI, everything is organized, scored, and ready to share in one tap. The Health Score alone changed how I think about my check-ups.",
    name: "Rajan M.",
    title: "Diabetes Patient",
    location: "Chandigarh",
    tag: "Patient",
  },
  {
    quote:
      "The idea of medicine that responds to your body in real time - not a schedule written months ago - is exactly what chronic care has been missing. Swasth AI is solving a problem no one else in India is touching.",
    name: "Dr. Neeraj Sharma",
    title: "General Physician",
    location: "Mohali",
    tag: "Doctor",
  },
  {
    quote:
      "As a cardiologist, I see patients every 3 months and have no idea what happens in between. A system that monitors vitals continuously and logs every dose with a reason would be transformative for how I manage hypertension.",
    name: "Dr. Anita Verma",
    title: "Cardiologist",
    location: "Delhi",
    tag: "Doctor",
  },
  {
    quote:
      "We recognized Swasth AI as one of the most promising startups incubated at Chandigarh University. The combination of a functional app with 32+ features and a working hardware prototype at this stage is exceptional.",
    name: "Chandigarh University TBI",
    title: "Institutional Partner",
    location: "Chandigarh",
    tag: "Institution",
  },
  {
    quote:
      "Managing my parents' health from another city was a nightmare. Now I switch between their profiles, see their latest reports, and even book appointments for them - all from my phone.",
    name: "Simran K.",
    title: "Working Professional",
    location: "Bengaluru",
    tag: "Caregiver",
  },
];

type TagKey = "Patient" | "Doctor" | "Institution" | "Caregiver";

const tagColors: Record<TagKey, { bg: string; text: string; border: string }> = {
  Patient: { bg: "rgba(15,214,140,0.10)", text: "#0FD68C", border: "rgba(15,214,140,0.2)" },
  Doctor: { bg: "rgba(96,165,250,0.10)", text: "#60A5FA", border: "rgba(96,165,250,0.2)" },
  Institution: { bg: "rgba(251,191,36,0.10)", text: "#FBBF24", border: "rgba(251,191,36,0.2)" },
  Caregiver: { bg: "rgba(192,132,252,0.10)", text: "#C084FC", border: "rgba(192,132,252,0.2)" },
};

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#0FD68C">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
  tag: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [hovered, setHovered] = useState(false);
  const colors = tagColors[testimonial.tag as TagKey] || tagColors.Patient;
  const initials = testimonial.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#161616" : "#0d0d0d",
        border: `1px solid ${hovered ? "#2a2a2a" : "#1a1a1a"}`,
        borderRadius: 14,
        padding: "22px 22px 18px",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: colors.text,
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRadius: 5,
            padding: "3px 9px",
          }}
        >
          {testimonial.tag}
        </span>
        <div style={{ display: "flex", gap: 2 }}>
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>

      <p
        style={{
          fontSize: 13.5,
          color: "#999",
          lineHeight: 1.75,
          margin: "0 0 18px",
        }}
      >
        &quot;{testimonial.quote}&quot;
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          borderTop: "1px solid #1a1a1a",
          paddingTop: 14,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: `linear-gradient(135deg, ${colors.bg}, ${colors.border})`,
            border: `1px solid ${colors.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 700,
            color: colors.text,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#e0e0e0", margin: 0 }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: 11.5, color: "#555", margin: "2px 0 0" }}>
            {testimonial.title} | {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({
  items,
  direction = "up",
  speed = 30,
}: {
  items: Testimonial[];
  direction?: "up" | "down";
  speed?: number;
}) {
  const colRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animRef = useRef<number>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let start: number | null = null;
    const totalHeight = colRef.current ? colRef.current.scrollHeight / 2 : 1000;

    const animate = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      if (!paused) {
        const delta = (timestamp - start) * (speed / 1000);
        start = timestamp;
        setOffset((prev) => {
          const next = prev + (direction === "up" ? delta : -delta);
          if (direction === "up" && next >= totalHeight) {
            return next - totalHeight;
          }
          if (direction === "down" && Math.abs(next) >= totalHeight) {
            return next + totalHeight;
          }
          return next;
        });
      } else {
        start = timestamp;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [direction, paused, speed]);

  const translateY = direction === "up" ? -offset : offset;

  return (
    <div
      style={{ overflow: "hidden", height: "100%", position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(to bottom, #000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(to top, #000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        ref={colRef}
        style={{
          transform: `translateY(${translateY}px)`,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const col1 = [testimonials[0], testimonials[1]];
  const col2 = [testimonials[2], testimonials[3]];
  const col3 = [testimonials[4], testimonials[0]];

  return (
    <section
      className="testimonials-section"
      style={{
        position: "relative",
        background: "#000",
        fontFamily:
          "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        .testimonials-section {
          padding: clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px);
        }

        .testimonials-columns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
          height: 680px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .testimonials-columns {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            height: 560px;
          }

          .testimonial-column-3 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .testimonials-columns {
            grid-template-columns: 1fr;
            max-width: 420px;
            height: 480px;
          }

          .testimonial-column-2,
          .testimonial-column-3 {
            display: none;
          }
        }
      `}</style>

      <div style={{ position: "absolute", inset: 0, opacity: 0.18, zIndex: 0 }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,214,140,0.025) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ textAlign: "center", marginBottom: 72, position: "relative", zIndex: 3 }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#0FD68C",
            background: "rgba(15,214,140,0.07)",
            border: "1px solid rgba(15,214,140,0.15)",
            borderRadius: 6,
            padding: "6px 14px",
            marginBottom: 28,
          }}
        >
          What People Are Saying
        </span>

        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 16px",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Trusted by patients,
          <br />
          <span style={{ color: "#0FD68C" }}>recognized by institutions.</span>
        </h2>

        <p
          style={{
            fontSize: 17,
            color: "#555",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          From chronic patients and physicians to incubators and families
          managing care across cities.
        </p>
      </div>

      <div className="testimonials-columns">
        <div className="testimonial-column testimonial-column-1">
          <MarqueeColumn items={col1} direction="up" speed={16} />
        </div>
        <div className="testimonial-column testimonial-column-2">
          <MarqueeColumn items={col2} direction="down" speed={18} />
        </div>
        <div className="testimonial-column testimonial-column-3">
          <MarqueeColumn items={col3} direction="up" speed={14} />
        </div>
      </div>
    </section>
  );
}
