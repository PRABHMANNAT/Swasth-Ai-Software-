import { Terminal } from "./ui/terminal";
import "./AboutSection.css";

const executionCommands = [
  "bootstrap --records --history",
  "train --health-score --80-parameters",
  "sync --doseguard --closed-loop",
  "publish --ieee --patent-pending",
  "status --swasth-ai",
];

const executionOutputs: Record<number, string[]> = {
  0: ["Connected patient history layer.", "Records index ready."],
  1: ["Health Score pipeline active.", "80+ biomarkers mapped."],
  2: ["DoseGuard sensors live.", "Micro-dose safety envelope verified."],
  3: ["IEEE paper published.", "Commercial patent filed.", "Partnership stack expanding."],
  4: ["32+ tools live.", "Platform ready for scale."],
};

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-tag-wrap">
          <span className="about-tag">About Swasth AI</span>
        </div>

        <div className="about-layout">
          <div className="about-content">
            <h2 className="about-headline">
              Built by builders. For a <span className="text-glow">healthier India.</span>
            </h2>

            <div className="about-description">
              <p>
                Swasth AI is a health-tech startup on a mission to unify
                India&apos;s fragmented healthcare system through AI-powered
                diagnostics, intelligent health scoring, and closed-loop wearable
                drug delivery.
              </p>
              <p>
                We are not building another health app. We are building the
                infrastructure layer that connects patients, doctors, records,
                and medicine into one seamless system.
              </p>
              <p>
                Founded out of Chandigarh University&apos;s Technology Business
                Incubator, Swasth AI has grown from a student project into a
                patent-pending, IEEE-published, partner-backed healthcare
                platform with 32+ live features and a working hardware
                prototype.
              </p>
              <p>
                We operate at the intersection of AI, biomedical engineering,
                and consumer health - and we are just getting started.
              </p>
            </div>

            <div className="about-pillars">
              <div className="about-pillar">
                <h3 className="pillar-title">Mission</h3>
                <p>
                  To make personalized, data-driven healthcare accessible to
                  every Indian - from metro cities to rural villages - by
                  replacing guesswork with intelligence.
                </p>
              </div>
              <div className="about-pillar">
                <h3 className="pillar-title">Vision</h3>
                <p>
                  A world where your body&apos;s real-time signals drive your
                  treatment, your complete medical history follows you
                  everywhere, and no chronic patient ever takes the wrong dose
                  again.
                </p>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="about-today-card">
              <h3 className="sidebar-title">Organization Snapshot</h3>
              <p className="sidebar-text">
                Incubated at Chandigarh University TBI, backed by research,
                strengthened by real hardware, and focused on one clear goal:
                replacing fragmented healthcare journeys with one intelligent
                care loop.
              </p>
              <p className="sidebar-execution-quote">
                Build fast. Ship faster. Let the product speak.
              </p>
            </div>

            <div className="about-terminal-wrap">
              <Terminal
                commands={executionCommands}
                outputs={executionOutputs}
                delayBetweenCommands={900}
                typingSpeed={28}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
