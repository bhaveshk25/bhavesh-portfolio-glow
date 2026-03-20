import PageShell from "@/components/PageShell";
import { usePortfolioContent } from "@/lib/portfolio-store";

const SkillsPage = () => {
  const { content } = usePortfolioContent();

  return (
    <PageShell
      eyebrow="Skills"
      title="Skills across software, data, and product."
      description="These skill groups reflect the technical foundations, tools, and working strengths that support how ideas are designed, built, and shipped."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {content.skillSections.map((group) => (
        <div key={group.title} className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-sm font-mono uppercase tracking-[0.25em] text-primary">
            {group.title}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        ))}
      </div>
    </PageShell>
  );
};

export default SkillsPage;
