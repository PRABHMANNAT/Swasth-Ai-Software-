import { useState } from "react";
import { Ripple } from "./ui/ripple";

interface ResearchItem {
  title: string;
  description: string;
  provider: string;
  link: string | null;
  previewImg: string | null;
  meta: string;
}

const researchItems: ResearchItem[] = [
  {
    title:
      "Swasth AI: Unifying India's Fragmented Healthcare System Through AI-Powered Diagnostics and Model Fusion",
    description:
      "Multi-model architecture — CNNs, LSTMs, and Transformers — achieving 90%+ disease detection accuracy for tuberculosis, diabetes, cancer, and cardiac anomalies. Tested and validated on Indian health data.",
    provider: "IEEE · Scopus",
    link: "https://ieeexplore.ieee.org/document/11280738",
    previewImg: "https://ieeexplore.ieee.org/assets/img/ieee_logo_smedia_200X200.png",
    meta: "Published · ACROSET 2025 · Scopus-Indexed",
  },
  {
    title:
      "DoseGuard Closed-Loop Micro-Dosing System — Commercial Patent Filed",
    description:
      "Covers the multi-sensor fusion algorithm, safety envelope logic, and on-demand drug delivery mechanism powering body-responsive micro-dosing.",
    provider: "Patent Office",
    link: null,
    previewImg: null,
    meta: "Patent Pending · Hardware IP · Filed 2025",
  },
  {
    title: "Featured Startup — CU Technology Business Incubator",
    description:
      "Officially recognized by Chandigarh University's Technology Business Incubator as a trailblazing student startup with a functional app and working hardware prototype.",
    provider: "Chandigarh University",
    link: "https://www.cuchd.in/technology-business-incubator/tbi-startup.php",
    previewImg: "https://www.cuchd.in/includes/assets/images/logo-color.png",
    meta: "Incubated · TBI Featured · Verified",
  },
  {
    title: "Strategic Partnership with PharmEasy",
    description:
      "India's leading digital pharmacy platform — enabling seamless medicine delivery, prescription management, and e-pharmacy integration within the Swasth AI ecosystem.",
    provider: "PharmEasy",
    link: null,
    previewImg: null,
    meta: "Partnership Signed · E-Pharmacy · Distribution",
  },
];

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const ResearchCard = ({ item }: { item: ResearchItem }) => {
  const [hovered, setHovered] = useState(false);
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setArrowHovered(false);
      }}
      style={{
        background: hovered ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.018)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: 14,
        padding: "20px 26px",
        display: "flex",
        alignItems: "center",
        gap: 24,
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: hovered ? "translateY(-1px)" : "none",
        cursor: item.link ? "pointer" : "default",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => item.link && window.open(item.link, "_blank")}
    >
      {/* Subtle hover glow — top edge only */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background: hovered
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"
            : "transparent",
          transition: "all 0.6s ease",
        }}
      />

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.88)",
            margin: "0 0 6px",
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            transition: "color 0.4s ease",
            fontFamily: "'SF Pro Display', 'DM Sans', -apple-system, sans-serif",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
            margin: "0 0 10px",
            lineHeight: 1.6,
            transition: "color 0.4s ease",
            maxWidth: 660,
            fontWeight: 400,
          }}
        >
          {item.description}
        </p>
        {/* Meta line */}
        <p
          style={{
            fontSize: 11,
            color: hovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)",
            margin: 0,
            letterSpacing: "0.03em",
            fontWeight: 500,
            transition: "color 0.4s ease",
          }}
        >
          {item.meta}
        </p>
      </div>

      {/* Right side: Provider pill + Action */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexShrink: 0,
        }}
      >
        {/* Provider pill */}
        <div
          style={{
            padding: "7px 18px",
            borderRadius: 100,
            background: hovered
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.04)",
            border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
            fontSize: 12,
            fontWeight: 500,
            color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
            whiteSpace: "nowrap",
            transition: "all 0.4s ease",
            letterSpacing: "-0.01em",
          }}
        >
          {item.provider}
        </div>

        {/* Arrow / Shield */}
        {item.link ? (
          <div
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: arrowHovered
                ? "rgba(255,255,255,0.95)"
                : hovered
                ? "rgba(255,255,255,0.07)"
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${
                arrowHovered
                  ? "rgba(255,255,255,0.9)"
                  : hovered
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.05)"
              }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: arrowHovered
                ? "#0E0E0E"
                : hovered
                ? "rgba(255,255,255,0.7)"
                : "rgba(255,255,255,0.3)",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              cursor: "pointer",
              position: "relative",
              transform: arrowHovered ? "scale(1.04)" : "scale(1)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (item.link) window.open(item.link, "_blank");
            }}
          >
            <ArrowIcon />

            {/* Tooltip on arrow hover */}
            {arrowHovered && item.previewImg && item.link && (
              <div
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 16px)",
                  right: -4,
                  width: 220,
                  background: "rgba(28,28,30,0.96)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: 14,
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
                  zIndex: 100,
                  pointerEvents: "none",
                  animation: "tooltipIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 100,
                    borderRadius: 8,
                    background: `rgba(255,255,255,0.04) url(${item.previewImg}) center/contain no-repeat`,
                    marginBottom: 10,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.7)",
                    margin: "0 0 2px",
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.link.replace("https://", "").replace("www.", "")}
                </p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", margin: 0 }}>
                  Open in new tab ↗
                </p>
                {/* Caret */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -5,
                    right: 18,
                    width: 10,
                    height: 10,
                    background: "rgba(28,28,30,0.96)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderTop: "none",
                    borderLeft: "none",
                    transform: "rotate(45deg)",
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: hovered
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.02)",
              border: `1px solid ${hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: hovered
                ? "rgba(255,255,255,0.4)"
                : "rgba(255,255,255,0.15)",
              transition: "all 0.4s ease",
            }}
          >
            <ShieldIcon />
          </div>
        )}
      </div>
    </div>
  );
};

const ResearchSection = () => {
  return (
    <section
      style={{
        background: "#0A0A0A",
        fontFamily:
          "'SF Pro Display', 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Ripple background */}
      <Ripple mainCircleSize={180} mainCircleOpacity={0.06} numCircles={10} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section label with line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 56,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Research & Validation
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03), transparent)",
            }}
          />
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {researchItems.map((item, i) => (
            <ResearchCard key={i} item={item} />
          ))}
        </div>

        {/* Bottom stat bar */}
        <div
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 56,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "90%+", label: "Detection Accuracy" },
            { value: "5+", label: "Research Papers" },
            { value: "1", label: "Patent Filed" },
            { value: "32+", label: "Live Features" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                  margin: "0 0 4px",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.25)",
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
