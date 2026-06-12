export default function HeroStats() {
  return (
    <div className="stats flex gap-6">
      <div className="stat flex flex-col">
        <span className="text-2xl">5+</span>
        <span className="text-sm text-text-secondary">Projects Built</span>
      </div>
      <div className="stat flex flex-col">
        <span className="text-2xl">2</span>
        <span className="text-sm text-text-secondary">Degrees</span>
      </div>{" "}
      <div className="stat flex flex-col">
        <span className="text-2xl">5+</span>
        <span className="text-sm text-text-secondary">Years coding</span>
      </div>
    </div>
  );
}
