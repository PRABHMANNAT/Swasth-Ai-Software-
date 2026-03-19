import CardSwap, { Card } from "./ui/CardSwap";
import "./SystemFlowSection.css";

const specs = [
  ["Microcontroller", "ESP32 with FreeRTOS"],
  ["Sensors", "PPG (HR/SpO2) + Thermistor + IMU (6-axis)"],
  ["Drug Delivery", "Micro-pump + normally-closed valve + drug cartridge"],
  ["Connectivity", "BLE 5.2 to Swasth AI app"],
  ["Battery", "400mAh Li-Po with 48-hour life"],
  ["Enclosure", "3D-printed Fusion 360 design"],
  ["Safety", "Max dose limit, cooldown windows, and fault = pump OFF"],
  ["Dose Accuracy", "Within 10%"],
  ["Response Time", "Trigger-to-dose under 5 seconds"],
];

const flowSteps = [
  ["Sense", "Bio-sensors read HR, SpO2, temperature, and motion every few seconds."],
  ["Clean", "Signal processing filters noise, rejects motion artifacts, and learns your baseline."],
  ["Score", "Need Score Engine analyzes deviation and rate of change via multi-sensor fusion."],
  ["Check", "Safety Envelope enforces max dose per hour, cooldown periods, and pump shutdown on any sensor fault."],
  ["Dose", "The micro-pump releases a precise micro-dose from the drug cartridge."],
  ["Log", "Every dose is timestamped with a reason and sent to the patient dashboard and doctor portal."],
  ["Loop", "The system keeps monitoring and adjusts based on the body's real-time response."],
];

export default function SystemFlowSection() {
  return (
    <section className="system-flow-section" id="doseguard">
      <div className="system-flow-container">
        <div className="flow-left">
          <div>
            <span className="flow-tag">DoseGuard</span>
            <h2 className="flow-headline">
              The world&apos;s first closed-loop wearable micro-dosing system.
            </h2>
            <p className="flow-lead">
              DoseGuard is a 3D-printed ESP32-based wearable patch that combines
              continuous bio-sensing with on-demand micro-dosing. It reads heart
              rate, blood oxygen, temperature, and motion, then releases
              medication only when physiological thresholds are met. Every dose
              is logged with a reason. Every sensor fault shuts the pump off.
            </p>
          </div>

          <div>
            <h3 className="flow-section-title">Specification Snapshot</h3>
            <div className="flow-specs">
              {specs.map(([title, value]) => (
                <div key={title} className="arch-tier">
                  <div className="arch-tier-header">
                    <span className="arch-tier-badge">Spec</span>
                    <h4 className="arch-tier-name">{title}</h4>
                  </div>
                  <p className="arch-tier-text">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flow-section-title">Closed-Loop Flow</h3>
            <div className="flow-steps">
              {flowSteps.map(([label, description]) => (
                <div key={label} className="flow-step">
                  <span className="flow-step-name">{label}</span>
                  <p className="flow-step-desc">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flow-section-title">Key Differentiator</h3>
            <div className="diff-grid">
              <div className="diff-card">
                <h4 className="diff-title">Old Way: Fixed Dosing</h4>
                <ul className="diff-list">
                  <li>Same dose for everyone, all day.</li>
                  <li>High peaks cause side effects.</li>
                  <li>Low later means symptoms return.</li>
                  <li>No visibility for doctors.</li>
                </ul>
              </div>
              <div className="diff-card active">
                <h4 className="diff-title">DoseGuard: Adaptive Micro-Dosing</h4>
                <ul className="diff-list">
                  <li>Personalized to your body&apos;s real-time signals.</li>
                  <li>Tiny micro-doses keep therapeutic levels smooth.</li>
                  <li>Continuous sensing enables proactive delivery.</li>
                  <li>Doctors get full dose and vitals history.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flow-right">
          <div className="card-swap-wrapper">
            <CardSwap
              width="100%"
              height="100%"
              cardDistance={40}
              verticalDistance={45}
              delay={4000}
              pauseOnHover
              skewAmount={8}
            >
              <Card>
                <img
                  src="/assets/arch/card1.png"
                  alt="DoseGuard wearable device"
                  className="swap-image"
                />
              </Card>
              <Card>
                <img
                  src="/assets/arch/card2.png"
                  alt="Cloud analytics and neural networks"
                  className="swap-image"
                />
              </Card>
              <Card>
                <img
                  src="/assets/arch/card3.png"
                  alt="Secure data lake architecture"
                  className="swap-image"
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
