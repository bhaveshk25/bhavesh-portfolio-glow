import { usePortfolioContent } from "@/lib/portfolio-store";

const SkillsSection = () => {
  const { content } = usePortfolioContent();

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="section-kicker">Technical Matrix</p>
          <h2 className="section-heading max-w-2xl">
            Skills across <span className="gradient-text">software, data & product</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            The core technical foundations, development tools, and engineering proficiencies that power my builds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.skillSections.map((group) => (
            <div
              key={group.title}
              className="glass-panel rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary font-semibold">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
