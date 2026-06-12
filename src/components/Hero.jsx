import HeroStats from "./HeroStats";

export default function Hero() {
  const stacks = [
    "React",
    "Node.js",
    "Express.js",
    "Python",
    "Azure",
    "OpenAi API",
    "MongoDB",
    "SQL",
    "Oracle",
    "Git",
  ];
  return (
    <section className="hero h-140 grid grid-cols-2 border-b px-10 py-20 border-border-default text-white">
      {/* first grid column */}
      <div className="hero-left py-5">
        <p className="text-sm border inline px-3 py-1.5 rounded-full text-text-accent">
          <span className="h-2 w-2 bg-green inline-block rounded-full mr-2"></span>
          Based in Sydney, Australia
        </p>
        <h1 className="text-5xl my-5">
          Full Stack <br />
          <span className="text-accent-primary">Developer</span>
        </h1>
        <p className="text-lg text-text-secondary">
          I build fast, modern web applications using React and nodejs.
          Currently Seeking junior developer roles in Sydney
        </p>
        <div className="btns my-8 flex gap-4">
          <button className="px-5 py-2 rounded-md bg-accent-primary border border-accent-dark">
            View my work
          </button>
          <button
            className="px-5 py-2 rounded-md border border-border-accent"
            type="button"
          >
            Resume
          </button>
        </div>

        <HeroStats />
      </div>

      {/* second grid column */}
      <div className="hero-right px-4 py-3 flex flex-col justify-center gap-6">
        {/* code card */}
        <div className="code-card bg-bg-secondary border border-border-default rounded-xl font-mono text-sm px-4 py-4">
          <div className="code-header flex gap-2">
            <div className="code-dot size-2.5 bg-red rounded-full"></div>
            <div className="code-dot size-2.5 bg-orange-400 rounded-full"></div>
            <div className="code-dot size-2.5 bg-green rounded-full"></div>
          </div>
          <div className="code-text my-3">
            <p>
              <span className="text-code-purple">const</span>{" "}
              <span className="text-code-teal"> developer</span> = {"{"}
            </p>
            <p>
              <span className="text-code-teal pl-4">name</span>: 'Dip Rai',
            </p>
            <p>
              <span className="text-code-teal pl-4">location</span>: 'Sydney,
              Au',
            </p>
            <p>
              <span className="text-code-teal pl-4">stack</span>: ['React',
              'Node.js', 'Python'],
            </p>
            <p>
              <span className="text-code-teal pl-4">openToWork</span>:{" "}
              <span className="text-code-purple">'true'</span>
            </p>
            <p>{"}"}</p>
          </div>
        </div>

        <div className="stack flex flex-wrap gap-2 text-sm">
          {stacks.map((stack, index) => (
            <span
              className=" py-1 px-2 rounded-full border border-border-accent bg-bg-card text-text-accent"
              key={index}
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
