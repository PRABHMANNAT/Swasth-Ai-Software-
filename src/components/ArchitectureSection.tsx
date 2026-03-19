import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import "./ArchitectureSection.css";

const tiers = [
  {
    num: 1,
    title: "Edge Devices",
    chips: ["ESP32", "BLE 5.2", "Bio-sensors", "Micro-pump", "Smart Dispenser"],
    desc:
      "DoseGuard wearable for real-time sensing, micro-dosing actuation, and smart dispensing with a medication reservoir and dose log.",
  },
  {
    num: 2,
    title: "Cloud Analytics & Core Services",
    chips: ["HL7/FHIR", "MQTT", "DNNs", "Random Forests", "InfluxDB"],
    desc:
      "Data ingestion, multimodal feature extraction, anomaly detection, Health Score inference across 80+ parameters, and dose optimization with feedback loops.",
  },
  {
    num: 3,
    title: "End-User Applications",
    chips: ["Patient App", "Family Management", "Clinical Portal", "Decision Support"],
    desc:
      "Patient and family dashboards for adherence and health scoring, plus a clinical provider portal for longitudinal views, alerts, and configuration updates.",
  },
];

const securityItems = [
  "AES-256 Encryption",
  "TLS 1.3",
  "OAuth 2.0 / OIDC",
  "ABDM / FHIR Compliant",
  "Secure Data Lake",
];

export default function ArchitectureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const p1 = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const p2 = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const p3 = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const p4 = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const p5 = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section className="arch-section" id="architecture">
      <div
        ref={scrollRef}
        style={{
          height: "400vh",
          position: "relative",
          overflow: "clip",
          background: "#000",
        }}
      >
        <GoogleGeminiEffect
          pathLengths={[p1, p2, p3, p4, p5]}
          title="Enterprise-grade infrastructure."
          description="Architecture overview"
        />
      </div>

      <div className="arch-content-below">
        <div className="arch-container">
          <span className="arch-tag">Architecture</span>

          <h2 className="arch-headline">
            Three tiers. <span className="arch-headline-accent">Built for scale.</span>
          </h2>

          <p className="arch-overview">
            Swasth AI operates across three tiers - edge devices for real-time
            sensing, a cloud analytics layer for AI-driven health scoring and
            dose optimization, and end-user applications for patients, families,
            and clinicians.
          </p>

          <div className="arch-tiers">
            {tiers.map((tier) => (
              <div key={tier.num} className="arch-tier-card">
                <div className={`arch-tier-badge arch-tier-badge--${tier.num}`}>
                  {tier.num}
                </div>
                <p className={`arch-tier-subtitle arch-tier-subtitle--${tier.num}`}>
                  Tier {tier.num}
                </p>
                <h3 className="arch-tier-title">{tier.title}</h3>
                <p className="arch-tier-desc">{tier.desc}</p>
                <div className="arch-chips">
                  {tier.chips.map((chip) => (
                    <span key={chip} className="arch-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="arch-security-bar">
            {securityItems.map((item) => (
              <div key={item} className="arch-security-item">
                <span className="arch-security-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
