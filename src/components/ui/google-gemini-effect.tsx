"use client";
import { motion, type MotionValue } from "framer-motion";

/* ── helper: generate a smooth wave path ────────────────────── */
function wavePath(
  w: number,
  h: number,
  seed: number,
  amplitude: number
): string {
  const mid = h / 2;
  const points: string[] = [];
  const segments = 12;
  const step = w / segments;

  points.push(`M 0 ${mid}`);
  for (let i = 1; i <= segments; i++) {
    const x = i * step;
    const dir = i % 2 === 0 ? 1 : -1;
    const cy = mid + dir * amplitude * Math.sin(seed + i * 0.8);
    const cx = x - step / 2;
    points.push(`Q ${cx} ${cy} ${x} ${mid + (dir * amplitude * 0.15)}`);
  }
  return points.join(" ");
}

/* ── colour palette for the five strokes ────────────────────── */
const COLORS = [
  { start: "#0FD68C", end: "#10B981" }, // Green
  { start: "#3B82F6", end: "#60A5FA" }, // Blue
  { start: "#8B5CF6", end: "#A78BFA" }, // Purple
  { start: "#EC4899", end: "#F472B6" }, // Pink
  { start: "#F59E0B", end: "#FBBF24" }, // Amber
];

interface GoogleGeminiEffectProps {
  pathLengths: MotionValue<number>[];
  title?: string;
  description?: string;
}

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
}: GoogleGeminiEffectProps) => {
  const W = 1440;
  const H = 900;

  const paths = [
    wavePath(W, H, 0.0, 120),
    wavePath(W, H, 1.2, 100),
    wavePath(W, H, 2.4, 140),
    wavePath(W, H, 3.6, 90),
    wavePath(W, H, 4.8, 110),
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Text overlay */}
      {(title || description) && (
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          {title && (
            <p
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: "0 0 16px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {title}
            </p>
          )}
          {description && (
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* SVG layer */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <defs>
          {COLORS.map((c, i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`gemini-grad-${i}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={c.start} stopOpacity="0" />
              <stop offset="5%" stopColor={c.start} stopOpacity="0.6" />
              <stop offset="50%" stopColor={c.end} stopOpacity="1" />
              <stop offset="95%" stopColor={c.start} stopOpacity="0.6" />
              <stop offset="100%" stopColor={c.start} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={`url(#gemini-grad-${i})`}
            strokeWidth={1.8}
            strokeLinecap="round"
            style={{
              pathLength: pathLengths[i],
              filter: `drop-shadow(0 0 8px ${COLORS[i].start}44)`,
              opacity: 0.7,
            }}
          />
        ))}
      </svg>

      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse 60% 50% at center, transparent 30%, #000 80%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
