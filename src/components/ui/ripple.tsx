import type { CSSProperties } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple = ({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 90;
        const opacity = mainCircleOpacity - i * 0.02;
        const animationDelay = `${i * 0.06}s`;
        const style: CSSProperties = {
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          border: `1px solid rgba(255,255,255,${Math.max(opacity, 0.01)})`,
          background: `radial-gradient(circle, rgba(255,255,255,${Math.max(opacity * 0.08, 0.002)}) 0%, transparent 70%)`,
          animation: `ripple-pulse 4s ease-in-out ${animationDelay} infinite`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
        return <div key={i} style={style} />;
      })}
      <style>{`
        @keyframes ripple-pulse {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%,-50%) scale(1.05); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default Ripple;
