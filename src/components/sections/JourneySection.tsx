import { journey } from "@/data/portfolio";

const JourneySection = () => (
  <section id="journey" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="section-kicker">Roadmap & Milestones</p>
        <h2 className="section-heading max-w-2xl">
          Growth so far, and the <span className="gradient-text">direction ahead</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          The progression of learning, current engineering focus, and upcoming career horizons.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journey.map((item) => (
          <div
            key={item.title}
            className="glass-panel group flex flex-col justify-between rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <item.icon size={22} />
              </div>
              <p className="mt-6 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                {item.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
