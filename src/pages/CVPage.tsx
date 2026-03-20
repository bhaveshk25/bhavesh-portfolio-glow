import { Download, Eye, Github, Linkedin, Mail, Phone } from "lucide-react";
import PageShell from "@/components/PageShell";
import {
  cvActivities,
  cvCertificates,
  cvEducation,
  cvProjects,
  cvSkillSections,
  cvTraining,
  profile,
} from "@/data/portfolio";

const CVPage = () => (
  <PageShell
    eyebrow="CV"
    title="Resume details, project depth, and academic track in one place."
    description="This section brings together the most relevant parts of the resume, from experience and project work to education, skills, and credentials."
  >
    <div className="grid gap-6">
      <section className="glass-panel rounded-[2rem] p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{profile.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Computer Science student building across software, data, machine learning,
              automation, analytics, and frontend development with a strong focus on practical execution.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.35rem] border border-border/70 bg-background/70 p-4 transition hover:border-primary/35"
            >
              <Linkedin size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</p>
              <p className="mt-2 text-sm font-medium text-foreground">bhaveshkumar07</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.35rem] border border-border/70 bg-background/70 p-4 transition hover:border-primary/35"
            >
              <Github size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">GitHub</p>
              <p className="mt-2 text-sm font-medium text-foreground">bhaveshk25</p>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[1.35rem] border border-border/70 bg-background/70 p-4 transition hover:border-primary/35"
            >
              <Mail size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
              <p className="mt-2 text-sm font-medium text-foreground">{profile.email}</p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="rounded-[1.35rem] border border-border/70 bg-background/70 p-4 transition hover:border-primary/35"
            >
              <Phone size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Mobile</p>
              <p className="mt-2 text-sm font-medium text-foreground">{profile.phone}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {cvSkillSections.map((section) => (
          <article key={section.title} className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary">{section.title}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6">
        {cvProjects.map((project) => (
          <article key={project.title} className="project-card rounded-[1.8rem] p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary">Project</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{project.title}</h3>
              </div>
              <span className="rounded-full border border-border/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                {project.date}
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {project.points.map((point) => (
                <p key={point} className="text-sm leading-7 text-muted-foreground">
                  • {point}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-foreground/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="glass-panel rounded-[1.8rem] p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary">Summer Training</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">{cvTraining.title}</h3>
            </div>
            <span className="rounded-full border border-border/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {cvTraining.date}
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {cvTraining.points.map((point) => (
              <p key={point} className="text-sm leading-7 text-muted-foreground">
                • {point}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {cvTraining.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <div className="grid gap-6">
          <article className="glass-panel rounded-[1.8rem] p-7">
            <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary">Certificates</p>
            <div className="mt-5 grid gap-4">
              {cvCertificates.map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-border/70 bg-background/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[1.8rem] p-7">
            <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary">Extra-Curricular Activities</p>
            <div className="mt-5 grid gap-4">
              {cvActivities.map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-border/70 bg-background/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {cvEducation.map((item) => (
          <article key={item.institution} className="glass-panel rounded-[1.8rem] p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">{item.date}</p>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
                {item.location}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{item.institution}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
            <p className="mt-3 text-sm font-medium text-foreground">{item.meta}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <a
          href="/Bhavesh-Kumawat-CV.pdf"
          download="Bhavesh-Kumawat-CV.pdf"
          className="project-card rounded-[2rem] p-8 transition hover:border-primary/40"
        >
          <Download size={28} className="text-primary" />
          <p className="mt-5 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">Download CV</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">Save the PDF offline</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Download the original uploaded CV in PDF format for applications, sharing, and quick reference.
          </p>
        </a>

        <a
          href="/Bhavesh-Kumawat-CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="project-card rounded-[2rem] p-8 transition hover:border-accent/40"
        >
          <Eye size={28} className="text-accent" />
          <p className="mt-5 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">View CV</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">Open the full resume</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Open the uploaded PDF in a new tab and view the original resume exactly as shared.
          </p>
        </a>
      </section>
    </div>
  </PageShell>
);

export default CVPage;
