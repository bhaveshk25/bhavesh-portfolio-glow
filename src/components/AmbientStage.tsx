import type { CSSProperties } from "react";

const particles = Array.from({ length: 16 }, (_, index) => index);

const AmbientStage = () => (
  <div className="ambient-stage" aria-hidden="true">
    <div className="ambient-orb ambient-orb-primary" />
    <div className="ambient-orb ambient-orb-accent" />
    <div className="ambient-orb ambient-orb-glow" />
    <div className="ambient-beam ambient-beam-left" />
    <div className="ambient-beam ambient-beam-right" />
    <div className="ambient-particles">
      {particles.map((particle) => (
        <span
          key={particle}
          className="ambient-particle"
          style={
            {
              "--particle-delay": `${particle * 0.6}s`,
              "--particle-duration": `${10 + (particle % 6) * 2}s`,
              "--particle-left": `${(particle * 13) % 100}%`,
              "--particle-size": `${8 + (particle % 5) * 6}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  </div>
);

export default AmbientStage;
