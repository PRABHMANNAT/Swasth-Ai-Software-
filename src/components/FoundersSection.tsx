import ProfileCard from './ProfileCard';
import DotPattern from './DotPattern';
import './FoundersSection.css';

const FoundersSection = () => {
  return (
    <section className="fs-section" id="founders">
      {/* Dot pattern background */}
      <DotPattern className="fs-dot-pattern" />

      {/* Ambient background glow */}
      <div className="fs-bg-glow fs-bg-glow-left" />
      <div className="fs-bg-glow fs-bg-glow-right" />

      <div className="fs-container">
        {/* Eyebrow */}
        <div className="fs-eyebrow-wrap">
          <span className="fs-eyebrow">LEADERSHIP</span>
        </div>

        {/* Headline */}
        <h2 className="fs-headline">Meet the founders.</h2>
        <p className="fs-subheadline">
          Two builders on a mission to make personalized, data-driven healthcare accessible to every Indian.
        </p>

        {/* Cards Grid */}
        <div className="fs-grid">
          {/* Adhiraj */}
          <ProfileCard
            name="Adhiraj Dogra"
            title="Co-Founder & CEO"
            handle="adhiraj-dogra"
            status="Building"
            contactText="LinkedIn"
            avatarUrl="/founder-image/adhiraj.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.open('https://linkedin.com/in/adhiraj-dogra', '_blank')}
            behindGlowColor="rgba(15, 214, 140, 0.4)"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)"
          />

          {/* Prabhmannat */}
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
            onContactClick={() => window.open('https://linkedin.com/in/prabhmannat', '_blank')}
            behindGlowColor="rgba(15, 214, 140, 0.4)"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)"
          />
        </div>

        {/* Trust bar */}
        <div className="fs-trust-bar">
          {['IEEE Published', 'Patent Pending', 'INCUBATE (USyd)', 'CU TBI', 'PharmEasy Partner'].map((item, i, arr) => (
            <span key={item} className="fs-trust-item">
              {item}
              {i < arr.length - 1 && <span className="fs-trust-sep">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
