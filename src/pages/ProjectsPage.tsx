import { ArrowUpRight, BookOpen } from "lucide-react";
import PageShell from "@/components/PageShell";
import { cvProjects, cvTraining } from "@/data/portfolio";
import { usePortfolioContent } from "@/lib/portfolio-store";

const ProjectsPage = () => {
  const { content } = usePortfolioContent();
  const projectItems = content.projects.length ? content.projects : cvProjects;

  return (
    <PageShell
      eyebrow="Project / Training"
      title="Work and learning that reflect how skills are applied."
      description="This section brings together practical projects and focused training, highlighting both execution and the learning process behind continued technical growth."
    >
      <div>
        <article className="glass-panel overflow-hidden rounded-[2rem] p-0">
          <div className="grid lg:grid-cols-[320px_1fr]">
            <div className="relative min-h-[220px] overflow-hidden border-b border-border/70 lg:min-h-full lg:border-b-0 lg:border-r">
              <img
                src={cvTraining.image}
                alt={cvTraining.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 lg:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-primary">
                    <BookOpen size={16} />
                    Training
                  </p>
                  <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-foreground">
                    {cvTraining.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {cvTraining.duration}
                  </span>
                  <a
                    href={cvTraining.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground"
                    aria-label="Open training certificate"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <p className="mt-4 line-clamp-2 max-w-4xl text-sm leading-7 text-muted-foreground">
                {cvTraining.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cvTraining.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {cvTraining.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition hover:border-primary/45 hover:bg-primary hover:text-primary-foreground"
                  >
                    {link.label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-10 grid gap-6">
        {projectItems.map((project, index) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="project-card group overflow-hidden rounded-[2rem] p-0"
        >
          <div className="grid lg:grid-cols-[320px_1fr]">
            <div className="relative min-h-[220px] overflow-hidden border-b border-border/70 lg:min-h-full lg:border-b-0 lg:border-r">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-6 lg:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary">
                    Project 0{index + 1}
                  </p>
                  <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {project.duration}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>

              <p className="mt-4 line-clamp-2 max-w-4xl text-sm leading-7 text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
        ))}
      </div>
    </PageShell>
  );
};

export default ProjectsPage;
