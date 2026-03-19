import CardSwap, { Card } from "./ui/CardSwap";
import "./SystemFlowSection.css";

const SystemFlowSection = () => {
  return (
    <section className="system-flow-section" id="architecture">
      <div className="system-flow-container">
        
        {/* ━━━ Left Column: Text Content ━━━ */}
        <div className="flow-left">
          
          {/* Header */}
          <div>
            <span className="flow-tag">Architecture</span>
            <h2 className="flow-headline">
              Enterprise-grade infrastructure.{" "}
              <span className="flow-headline-accent">Built for scale.</span>
            </h2>
          </div>

          {/* 1. Closed-Loop Flow */}
          <div>
            <h3 className="flow-section-title">Closed-Loop Flow</h3>
            <div className="flow-steps">
              <div className="flow-step">
                <span className="flow-step-name">Sense</span>
                <p className="flow-step-desc">Bio-sensors read HR, SpO₂, Temp, and Motion every few seconds.</p>
              </div>
              <div className="flow-step">
                <span className="flow-step-name">Clean</span>
                <p className="flow-step-desc">Signal processing filters noise, rejects motion artifacts, and learns your baseline.</p>
              </div>
              <div className="flow-step">
                <span className="flow-step-name">Score</span>
                <p className="flow-step-desc">Need Score Engine analyzes deviation and rate of change via multi-sensor fusion.</p>
              </div>
              <div className="flow-step">
                <span className="flow-step-name">Check</span>
                <p className="flow-step-desc">Safety Envelope enforces limits (max dose/hour, cooldown periods, sensor fault = pump OFF).</p>
              </div>
              <div className="flow-step">
                <span className="flow-step-name">Dose</span>
                <p className="flow-step-desc">Micro-pump releases a precise micro-dose from the drug cartridge.</p>
              </div>
              <div className="flow-step">
                <span className="flow-step-name">Log</span>
                <p className="flow-step-desc">Every dose is timestamped with the reasoning, sent to the dashboard and doctor portal.</p>
              </div>
              <div className="flow-step">
                <span className="flow-step-name">Loop</span>
                <p className="flow-step-desc">System keeps monitoring; stops or continues based on the body's real-time response.</p>
              </div>
            </div>
          </div>

          {/* 2. Key Differentiator Block */}
          <div>
            <h3 className="flow-section-title">Key Differentiator</h3>
            <div className="diff-grid">
              <div className="diff-card">
                <h4 className="diff-title">Old Way: Fixed Dosing</h4>
                <ul className="diff-list">
                  <li>Same dose for everyone, all day</li>
                  <li>High peaks → side effects</li>
                  <li>Low later → symptoms return</li>
                  <li>No visibility for doctors</li>
                </ul>
              </div>
              <div className="diff-card active">
                <h4 className="diff-title">DoseGuard: Adaptive Micro-Dosing</h4>
                <ul className="diff-list">
                  <li>Personalized to your body's real-time signals</li>
                  <li>Tiny micro-doses → smooth therapeutic levels</li>
                  <li>Continuous sensing → proactive delivery</li>
                  <li>Full dashboard with dose + vitals history</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. System Architecture */}
          <div>
            <h3 className="flow-section-title">System Architecture Overview</h3>
            
            <div className="arch-tier">
              <div className="arch-tier-header">
                <span className="arch-tier-badge">Tier 1</span>
                <h4 className="arch-tier-name">Edge Devices</h4>
              </div>
              <p className="arch-tier-text">
                DoseGuard wearable (ESP32, BLE 5.2, bio-sensors, micro-pump) + Smart Dispenser with medication reservoir and dispensing log.
              </p>
            </div>

            <div className="arch-tier">
              <div className="arch-tier-header">
                <span className="arch-tier-badge">Tier 2</span>
                <h4 className="arch-tier-name">Cloud Analytics & Core Services</h4>
              </div>
              <p className="arch-tier-text">
                Data ingestion via HL7/FHIR APIs and MQTT. Multimodal feature extraction (physiological, clinical, demographic). Machine learning models (DNNs, Random Forests) for anomaly detection. Health Score inference engine (80+ parameters). Real-time data processing with InfluxDB. Dose optimization module with feedback loop.
              </p>
            </div>

            <div className="arch-tier">
              <div className="arch-tier-header">
                <span className="arch-tier-badge">Tier 3</span>
                <h4 className="arch-tier-name">End-User Applications</h4>
              </div>
              <p className="arch-tier-text">
                <strong>Patient & Family App:</strong> Health Score dashboard, adherence tracking, family account management.<br/>
                <strong>Clinical Provider Portal:</strong> Longitudinal patient view, alert management, clinical decision support tools, configuration updates.
              </p>
            </div>

            {/* Security Bar */}
            <div className="security-bar">
              <span className="security-item">AES-256 encryption</span>
              <span className="security-item">TLS 1.3</span>
              <span className="security-item">OAuth 2.0 / OIDC</span>
              <span className="security-item">ABDM / FHIR compliant</span>
              <span className="security-item">Secure data lake</span>
            </div>
          </div>

        </div>

        {/* ━━━ Right Column: Sticky CardSwap ━━━ */}
        <div className="flow-right">
          <div className="card-swap-wrapper">
            <CardSwap
              width="100%"
              height="100%"
              cardDistance={40}
              verticalDistance={45}
              delay={4000}
              pauseOnHover={true}
              skewAmount={8}
            >
              <Card>
                <img 
                  src="/assets/arch/card1.png" 
                  alt="DoseGuard Wearable Device" 
                  className="swap-image" 
                />
              </Card>
              <Card>
                <img 
                  src="/assets/arch/card2.png" 
                  alt="Cloud Analytics and Neural Networks" 
                  className="swap-image" 
                />
              </Card>
              <Card>
                <img 
                  src="/assets/arch/card3.png" 
                  alt="Secure Data Lake Architecture" 
                  className="swap-image" 
                />
              </Card>
            </CardSwap>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SystemFlowSection;
