import { useEffect, useRef, useState } from "react"
import { FlickeringGrid } from "./FlickeringGrid"

const CheckIcon = ({ accent = false }: { accent?: boolean }) => (
  <div
    style={{
      marginTop: 2,
      width: 16,
      height: 16,
      flexShrink: 0,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: accent ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
      border: `1px solid ${accent ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.12)"}`,
    }}
  >
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent ? "#000" : "rgba(255,255,255,0.55)"}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5l10-10" />
    </svg>
  </div>
)

const PlusDivider = () => (
  <div style={{ position: "relative", margin: "20px 0" }}>
    <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        margin: "auto",
        width: 22,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        background: "#111",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>
  </div>
)

const Feature = ({ text, accent = false }: { text: string; accent?: boolean }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, margin: "14px 0" }}>
    <CheckIcon accent={accent} />
    <span
      style={{
        fontSize: 13.5,
        lineHeight: 1.5,
        color: accent ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.42)",
        fontWeight: 400,
      }}
    >
      {text}
    </span>
  </div>
)

interface CardProps {
  title: string
  subtitle: string
  price: string
  priceSuffix: string
  ctaText: string
  features: string[]
  extraFeatures?: string[]
  badge?: string
  featured?: boolean
  delay?: number
  visible?: boolean
}

const PricingCard = ({
  title,
  subtitle,
  price,
  priceSuffix,
  ctaText,
  features,
  extraFeatures,
  badge,
  featured = false,
  delay = 0,
  visible = false,
}: CardProps) => {
  const font = "'Inter','SF Pro Display','Helvetica Neue',sans-serif"

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        padding: featured ? 1 : 0,
        background: featured
          ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 100%)"
          : "transparent",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        flex: "1 1 320px",
        minWidth: 0,
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: 21,
            background: "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04))",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: featured ? 19 : 18,
          background: featured ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
          border: `1px solid ${featured ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)"}`,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "28px 26px",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          fontFamily: font,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            right: "15%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            borderRadius: 1,
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <p style={{ margin: 0, fontSize: 17, fontWeight: 650, color: "#fff", letterSpacing: "-0.02em" }}>
            {title}
          </p>
          {badge && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: 999,
                background: "#fff",
                color: "#000",
                boxShadow: "0 0 16px rgba(255,255,255,0.2)",
              }}
            >
              {badge}
            </span>
          )}
        </div>

        <p style={{ margin: "0 0 22px", fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>
          {subtitle}
        </p>

        <div style={{ marginBottom: 22 }}>
          <span style={{ fontSize: price === "Custom" ? 32 : 38, fontWeight: 700, color: "#fff", letterSpacing: "-0.03em" }}>
            {price}
          </span>
          <span style={{ display: "block", marginTop: 3, fontSize: 12.5, color: "rgba(255,255,255,0.3)" }}>
            {priceSuffix}
          </span>
        </div>

        <button
          style={{
            width: "100%",
            padding: "11px 18px",
            borderRadius: 12,
            border: featured ? "none" : "1px solid rgba(255,255,255,0.15)",
            background: featured
              ? "linear-gradient(180deg, #fff 0%, #ddd 100%)"
              : "rgba(255,255,255,0.07)",
            color: featured ? "#000" : "rgba(255,255,255,0.75)",
            fontSize: 13.5,
            fontWeight: featured ? 650 : 500,
            cursor: "pointer",
            fontFamily: font,
            letterSpacing: "-0.01em",
            boxShadow: featured
              ? "inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 18px rgba(0,0,0,0.5)"
              : "none",
            transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
            marginBottom: 8,
          }}
          onMouseEnter={(event) => {
            const button = event.currentTarget
            button.style.transform = "translateY(-1px)"
            button.style.boxShadow = featured
              ? "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 28px rgba(0,0,0,0.6)"
              : "0 4px 16px rgba(0,0,0,0.4)"
          }}
          onMouseLeave={(event) => {
            const button = event.currentTarget
            button.style.transform = ""
            button.style.boxShadow = featured
              ? "inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 18px rgba(0,0,0,0.5)"
              : "none"
          }}
        >
          {ctaText}
        </button>

        <div style={{ marginTop: 8 }}>
          {features.map((feature, index) => (
            <Feature key={index} text={feature} />
          ))}
        </div>

        {extraFeatures && extraFeatures.length > 0 && (
          <>
            <PlusDivider />
            <div>
              {extraFeatures.map((feature, index) => (
                <Feature key={index} text={feature} accent />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const font = "'Inter','SF Pro Display','Helvetica Neue',sans-serif"

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(to bottom, #000 0%, #050505 5%, #050505 95%, #000 100%)",
        paddingTop: "clamp(5rem,8vw,8rem)",
        paddingBottom: "clamp(5rem,8vw,8rem)",
        paddingLeft: "clamp(1.5rem,4vw,2.5rem)",
        paddingRight: "clamp(1.5rem,4vw,2.5rem)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: font,
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#ffffff"
          maxOpacity={0.07}
          flickerChance={0.09}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, #050505 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 65%)",
            filter: "blur(6px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginBottom: 20,
              borderRadius: 999,
              padding: "6px 16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                marginRight: 8,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Pricing
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.9rem,5vw,3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.12,
              color: "#fff",
              margin: "0 0 14px",
            }}
          >
            Healthcare intelligence{" "}
            <span
              style={{
                background: "linear-gradient(to bottom, #fff, rgba(255,255,255,0.5))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              that fits your life.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
              color: "rgba(255,255,255,0.4)",
              maxWidth: 420,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Start free, upgrade for deeper insights, or scale to remote monitoring for clinics.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          <PricingCard
            title="Swasth Basic"
            subtitle="Medical document repository and essential health tools for everyone"
            price="₹0"
            priceSuffix="/ forever"
            ctaText="Get Started Free"
            visible={visible}
            delay={0}
            features={[
              "Medical document repository",
              "AI Health Score (basic)",
              "AI Doctor chat (limited queries/day)",
              "One-tap doctor booking",
              "Medicine reminders",
              "Medical checkup notifications",
              "5 core health tools (BMI, BP, glucose, sleep, water)",
            ]}
          />

          <PricingCard
            title="Swasth Pro"
            subtitle="Complete healthcare intelligence for you and your family"
            price="₹199"
            priceSuffix="/month · ₹1,499/year"
            ctaText="Start 14-Day Free Trial"
            badge="Popular"
            featured
            visible={visible}
            delay={100}
            features={[
              "Everything in Free",
              "Full AI Health Score with trend analysis",
              "Unlimited AI Doctor consultations",
              "Chat with uploaded PDFs",
              "Personalized diet & workout plans",
            ]}
            extraFeatures={[
              "All 32+ health tools unlocked",
              "Family account management (up to 5 members)",
              "Priority video consultations",
              "Advanced health analytics dashboard",
              "Wearable device sync",
            ]}
          />

          <PricingCard
            title="Swasth for Clinics"
            subtitle="Enterprise-grade remote patient monitoring"
            price="Custom"
            priceSuffix="pricing"
            ctaText="Contact Sales"
            visible={visible}
            delay={200}
            features={[
              "Provider dashboard for remote patient monitoring",
              "Live vitals feed from DoseGuard devices",
              "Patient cohort analytics",
              "API access for EHR/EMR integration",
            ]}
            extraFeatures={["Dedicated support", "Custom deployment"]}
          />
        </div>

        <p
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 12.5,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.01em",
            opacity: visible ? 1 : 0,
            transition: "opacity 700ms ease 400ms",
          }}
        >
          No credit card required · Cancel anytime · ABDM and AES-256 compliant
        </p>
      </div>
    </section>
  )
}
