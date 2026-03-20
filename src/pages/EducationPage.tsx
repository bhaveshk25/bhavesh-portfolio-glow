import { GraduationCap } from "lucide-react";
import PageShell from "@/components/PageShell";
import { cvEducation } from "@/data/portfolio";

const EducationPage = () => (
  <PageShell
    eyebrow="Education"
    title="Academic foundations that shaped the way I learn and build."
    description="A snapshot of the schools, coursework, and milestones that supported continued growth across computer science, engineering, and practical problem solving."
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {cvEducation.map((item) => (
        <article key={item.institution} className="glass-panel rounded-[1.75rem] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <GraduationCap size={22} />
          </div>
          <div className="mt-6 flex items-start justify-between gap-4">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              {item.date}
            </p>
            <p className="text-right text-xs font-mono uppercase tracking-[0.18em] text-primary">
              {item.location}
            </p>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-foreground">{item.institution}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.detail}</p>
          <p className="mt-4 text-sm font-medium text-foreground">{item.meta}</p>
        </article>
      ))}
    </div>
  </PageShell>
);

export default EducationPage;
