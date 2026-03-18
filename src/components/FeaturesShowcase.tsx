import { useEffect, useRef, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    id: "ai-health-score",
    category: "AI DIAGNOSTICS",
    title: "AI Health Score",
    description:
      "Upload any blood report and our AI extracts 80+ physiological parameters — thyroid, kidney, liver, vitamins, cholesterol, and more — scoring each against clinical ranges to produce a single Health Score out of 100.",
    tags: ["Deep Learning", "OCR", "Clinical AI", "Blood Analysis", "FHIR"],
    color: "#0a1628",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    href: "#health-score",
  },
  {
    id: "doseguard",
    category: "WEARABLE HARDWARE",
    title: "DoseGuard",
    description:
      "A wearable micro-dosing patch that monitors vitals in real-time via bio-sensors and delivers medication only when your body's signals indicate a need — replacing fixed-schedule dosing with intelligent, body-responsive drug delivery.",
    tags: ["IoT", "Embedded Systems", "Bio-Sensors", "React Native", "Edge AI"],
    color: "#0d1f0f",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    href: "#doseguard",
  },
  {
    id: "ai-doctor",
    category: "MEDICAL LLM",
    title: "AI Doctor",
    description:
      "An AI-first triage layer powered by a fusion of open-source medical LLMs. Delivers structured triage outputs — risk level, likely causes, and next steps — and escalates to verified human doctors for real-time consultation.",
    tags: ["GenAI", "LLM Fusion", "RAG", "Medical NLP", "Python"],
    color: "#160d25",
    image: "https://images.unsplash.com/photo-1677442135968-6db3b0025e95?w=800&q=80",
    href: "#ai-doctor",
  },
  {
    id: "medical-repository",
    category: "UNIFIED RECORDS",
    title: "Medical Repository",
    description:
      "One encrypted vault for your entire medical history — reports, prescriptions, imaging, and consultations. ABDM/FHIR compliant, AES-256 encrypted, accessible anywhere while keeping you in full control of your data.",
    tags: ["ABDM", "FHIR R4", "AES-256", "Cloud Sync", "Full-Stack"],
    color: "#1a1000",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    href: "#repository",
  },
  {
    id: "family-health",
    category: "FAMILY CARE",
    title: "Family Health Management",
    description:
      "Manage medical records, Health Scores, appointments, and reminders for up to 5 family members from a single account. Switch between profiles in one tap — built for India's multi-generational families.",
    tags: ["React Native", "Multi-Profile", "Notifications", "Healthcare", "Mobile"],
    color: "#0f1a22",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    href: "#family",
  },
  {
    id: "research",
    category: "IEEE PUBLISHED",
    title: "Research & Innovation",
    description:
      'Our work is published in IEEE ACROSET 2025 and indexed in Scopus — "Swasth AI: Unifying India\'s Fragmented Healthcare System Through AI-Powered Diagnostics and Model Fusion." Patent pending on DoseGuard\'s adaptive dosing algorithm.',
    tags: ["IEEE", "Scopus", "Patent Pending", "Model Fusion", "Research"],
    color: "#1a0d0d",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
    href: "https://ieeexplore.ieee.org/document/11280738",
  },
]

// ─── Punch-hole card shell ────────────────────────────────────────────────────
// 14 radial-gradient holes on the left edge, mask-composite:intersect
function PunchedCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-r-2xl shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl"
      style={{
        background: "#0c0c0c",
        border: "1px solid rgba(255,255,255,0.08)",
        maskImage: `
          radial-gradient(circle at 0% 3.7%,  transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 11.1%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 18.5%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 25.9%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 33.3%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 40.7%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 48.1%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 55.6%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 63%,   transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 70.4%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 77.8%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 85.2%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 92.6%, transparent 5.5px, black 5.5px),
          radial-gradient(circle at 0% 100%,  transparent 5.5px, black 5.5px)
        `,
        WebkitMaskComposite: "source-in",
        maskComposite: "intersect",
      }}
    >
      {/* Top gloss shimmer */}
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />
      {children}
    </div>
  )
}

// ─── Individual card with its own IntersectionObserver ────────────────────────
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 } // fires when 20% of card is in view
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    /*
     * STICKY WRAPPER
     * ─────────────
     * top = 80 + 24×index   →  each card sticks 24 px lower than the previous
     * zIndex = index + 1     →  newer card always renders on top of the old one
     * NO overflow:hidden on any ancestor — that breaks position:sticky!
     */
    <div
      ref={cardRef}
      className="sticky will-change-transform"
      style={{
        top: `${80 + index * 24}px`,
        zIndex: index + 1,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/*
       * ENTRANCE ANIMATION (Tailwind class toggling)
       * ─────────────────────────────────────────────
       * Hidden  → opacity-0 translate-y-12 scale-[0.97]
       * Visible → opacity-100 translate-y-0 scale-100
       * Duration 700 ms, easing easeOutExpo, staggered 100ms × index
       */}
      <a
        href={feature.href}
        target={feature.href.startsWith("http") ? "_blank" : undefined}
        rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`block group transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-[0.97]"
        }`}
        style={{
          transitionDelay: `${index * 100}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Punch-hole card — hover: scale-[1.02] + shadow-2xl via group-hover */}
        <PunchedCard>
          <div className="flex flex-col md:flex-row">

            {/* ── Left: coloured image panel ── */}
            <div
              className="relative w-full md:w-[45%] aspect-[4/3] md:aspect-auto md:min-h-[320px]"
              style={{ backgroundColor: feature.color }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.8,
                  mixBlendMode: "overlay",
                }}
              />

              {/* Italic serif title overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3
                  className="text-white text-center leading-snug"
                  style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    fontSize: "clamp(1.4rem, 3vw, 2.1rem)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                  }}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Right-edge blend into card body */}
              <div
                className="absolute inset-y-0 right-0 w-14 hidden md:block"
                style={{ background: "linear-gradient(to right, transparent, #0c0c0c)" }}
              />
            </div>

            {/* ── Right: content ── */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <span
                className="mb-2 block"
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {feature.category}
              </span>

              <h4
                className="mb-3"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  margin: "0 0 12px",
                }}
              >
                {feature.title}
              </h4>

              <p
                className="mb-4 leading-relaxed"
                style={{
                  fontSize: "clamp(0.82rem, 1.2vw, 0.9375rem)",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 480,
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {feature.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 999,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/*
               * CTA row
               * gap-2 → gap-3  on group-hover  (Tailwind)
               * chevron translate-x-1           on group-hover  (Tailwind)
               */}
              <div className="mt-auto flex items-center gap-2 group-hover:gap-3 transition-all">
                <span
                  style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {feature.href.startsWith("http") ? "Read Paper" : "Learn More"}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </PunchedCard>
      </a>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function FeaturesShowcase() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    /*
     * CRITICAL: Do NOT put overflow:hidden here.
     * overflow:hidden on any ancestor prevents position:sticky from working.
     * Ambient orbs are clipped via a separate absolutely-positioned layer
     * that has its own overflow:hidden so it doesn't affect sticky children.
     */
    <section
      className="w-full relative"
      style={{
        background: "linear-gradient(to bottom, #000 0%, #060606 6%, #060606 94%, #000 100%)",
        paddingTop: "clamp(5rem, 8vw, 8rem)",
        paddingBottom: "clamp(5rem, 8vw, 8rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)",
        paddingRight: "clamp(1.5rem, 4vw, 2.5rem)",
      }}
    >
      {/* Ambient orbs — clipped in their OWN overflow:hidden layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ overflow: "hidden", zIndex: 0 }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "5%", left: "50%", transform: "translateX(-50%)",
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)",
            filter: "blur(4px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "10%", right: "5%",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto" style={{ maxWidth: 1200, zIndex: 1 }}>

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center mb-5 rounded-full"
            style={{
              padding: "6px 16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <span
              className="mr-2 inline-block rounded-full"
              style={{
                width: 7, height: 7,
                background: "#fff",
                boxShadow: "0 0 10px rgba(255,255,255,0.8)",
              }}
            />
            <span
              style={{
                fontSize: 11, fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Platform
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Everything health,{" "}
            <span
              style={{
                background: "linear-gradient(to bottom, #fff, rgba(255,255,255,0.55))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              unified.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            From AI diagnostics and wearable hardware to a unified medical repository
            — built from the ground up for India's next billion.
          </p>
        </div>

        {/*
         * CARD STACK CONTAINER
         * ─────────────────────
         * gap-6 md:gap-8 between sticky wrappers creates the spacing that lets
         * each card's min-height fill enough scroll room for the sticky to work.
         * The sticky + zIndex + top formula creates the deck-of-cards overlap.
         */}
        <div
          className="flex flex-col gap-6 md:gap-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 text-center">
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-full transition-all duration-200 hover:scale-[1.03]"
            style={{
              padding: "12px 28px",
              background: "#fff",
              color: "#000",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)")
            }
          >
            Explore all features
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
