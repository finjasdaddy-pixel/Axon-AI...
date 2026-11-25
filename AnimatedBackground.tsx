export function AnimatedBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="ambient ambient-purple" />
      <div className="ambient ambient-blue" />
      <div className="ambient ambient-pink" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
    </div>
  );
}
