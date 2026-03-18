import { Terminal } from './ui/terminal';
import './AboutSection.css';

const AboutSection = () => {
  const executionCommands = [
    "git checkout production",
    "analyze --vitals --india-records",
    "deploy --doseguard-v1 --wearable-patch",
    "publish --ieee-scopus --accuracy-90plus",
    "status Swasth AI",
  ];

  const executionOutputs: Record<number, string[]> = {
    0: ["Switched to branch 'production'"],
    1: ["✔ Connected to 1.4B records.", "✔ Processing clinical data.", "✔ Model fusion: CNN + LSTM + Transformer."],
    2: ["✔ Hardware sync: 3D printed.", "✔ Micro-pump verified.", "✔ Sensor tested.", "✔ DoseGuard Active."],
    3: ["✔ IEEE Published.", "✔ Scopus Indexed.", "✔ Patent Filed.", "✔ Partnership: PharmEasy."],
    4: ["✔ Live features: 32+", "✔ Users satisfied.", "✔ Relentless execution."],
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* About Info Label/Tag */}
        <div className="about-tag-wrap">
          <span className="about-tag">About Swasth AI</span>
        </div>

        <div className="about-layout">
          {/* Main Content Side */}
          <div className="about-content">
            <h2 className="about-headline">
              We don’t build health apps. We build the <span className="text-glow">infrastructure</span> for intelligent healthcare.
            </h2>
            
            <div className="about-description">
              <p>
                India’s healthcare system does not fail because medicine is ineffective. It fails because the system is fragmented. 
                Medical records are scattered across hospitals and clinics, prescriptions are often based on brief, one-time consultations, 
                and early warning signs from the body go unnoticed until intervention becomes urgent.
              </p>
              <p>
                <strong>Swasth AI is built to change that.</strong>
              </p>
              <p>
                We are creating a unified intelligence layer for healthcare — one that brings together fragmented records, real-time vitals, 
                medication delivery, and clinical decision-making into a seamless, closed-loop system.
              </p>
              <p>
                Our platform combines a full-stack digital health ecosystem with breakthrough biomedical innovation. On one side, 
                we offer a comprehensive health management app with 32+ live features, including AI-driven health scoring based on 
                80+ blood parameters, an AI doctor, and family health management. On the other, we are building <strong>DoseGuard</strong> — 
                a wearable micro-dosing patch designed to read the body’s signals and deliver medication only when it is needed.
              </p>
              <p>
                This is not a marginal improvement to existing healthcare. It is a fundamental shift — from reactive treatment to proactive, 
                body-responsive care.
              </p>
            </div>

            <div className="about-pillars">
              <div className="about-pillar">
                <h3 className="pillar-title">Mission</h3>
                <p>
                  To make personalized, intelligence-driven healthcare accessible to every Indian — from South Mumbai to rural Punjab. 
                  We aim to replace guesswork with data and fragmented records with a single, intelligent source of truth.
                </p>
              </div>
              <div className="about-pillar">
                <h3 className="pillar-title">Vision</h3>
                <p>
                  A future where your body’s real-time signals shape your treatment, and where no chronic patient is ever left 
                  taking the wrong dose at the wrong time without support or oversight.
                </p>
              </div>
            </div>
          </div>

          {/* Execution/Terminal Side */}
          <div className="about-sidebar">
            <div className="about-today-card">
              <h3 className="sidebar-title">Where We Are Today</h3>
              <p className="sidebar-text">
                Incubated at Chandigarh University’s TBI and backed by USyd’s INCUBATE accelerator. 
                Our research is published in IEEE, patent filed, and hardware prototype verified. 
                App already used by real users every day.
              </p>
              <p className="sidebar-execution-quote">
                Two co-founders. Zero noise. Relentless execution.
              </p>
            </div>

            <div className="about-terminal-wrap">
              <Terminal 
                commands={executionCommands} 
                outputs={executionOutputs} 
                delayBetweenCommands={800}
                typingSpeed={35}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
