import { GraduationCap } from "lucide-react";
import { cvEducation } from "@/data/portfolio";

const EducationSection = () => (
  <section id="education" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="section-kicker">Academic Track</p>
        <h2 className="section-heading max-w-2xl">
          Educational <span className="gradient-text">foundations</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Academic coursework, university milestones, and foundational schooling that shaped my technical thinking.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cvEducation.map((item) => (
          <article
            key={item.institution}
            className="glass-panel group flex flex-col justify-between rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <GraduationCap size={22} />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {item.date}
                </p>
                <span className="text-right text-xs font-mono uppercase tracking-[0.18em] text-primary">
                  {item.location}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.institution}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.detail}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-xs font-medium text-foreground font-mono">
                {item.meta}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
