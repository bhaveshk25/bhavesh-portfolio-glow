import { Download, Eye, FileText, Sparkles } from "lucide-react";
import { cvActivities, cvCertificates, profile } from "@/data/portfolio";

const CVSection = () => (
  <section id="cv" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="section-kicker">Curriculum Vitae</p>
        <h2 className="section-heading max-w-2xl">
          Resume details & <span className="gradient-text">offline PDF</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          A summarized view of verified credentials, co-curricular achievements, and immediate access to the full official resume.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Credentials & Activities Snapshot */}
        <div className="flex flex-col gap-6">
          <div className="glass-panel rounded-[2rem] p-7">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-primary">
              <FileText size={16} />
              Recent Certification Highlights
            </div>
            <div className="mt-5 grid gap-3">
              {cvCertificates.slice(0, 4).map((c) => (
                <div
                  key={c.title + c.detail}
                  className="rounded-2xl border border-border/70 bg-background/60 p-4 flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.detail}</p>
                    <p className="text-xs text-primary font-mono mt-0.5">{c.title}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                    {c.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-7">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-primary">
              <Sparkles size={16} />
              Extra-Curricular Highlights
            </div>
            <div className="mt-5 grid gap-3">
              {cvActivities.map((act) => (
                <div
                  key={act.title}
                  className="rounded-2xl border border-border/70 bg-background/60 p-4 flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{act.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{act.detail}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                    {act.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download & View PDF Action Cards */}
        <div className="flex flex-col gap-6">
          <a
            href="/Bhavesh-Kumawat-CV.pdf"
            download="Bhavesh-Kumawat-CV.pdf"
            className="glass-panel group flex flex-1 flex-col justify-between rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
          >
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <Download size={26} />
              </div>
              <p className="mt-6 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
                Offline Document
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Download Official CV (PDF)
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Download the verified resume in PDF format for offline evaluation, applications, and record keeping.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
              <span>Save Bhavesh-Kumawat-CV.pdf</span>
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            </div>
          </a>

          <a
            href="/Bhavesh-Kumawat-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="glass-panel group flex flex-1 flex-col justify-between rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
          >
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition-transform group-hover:scale-105">
                <Eye size={26} />
              </div>
              <p className="mt-6 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
                Browser Preview
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                View Resume in New Tab
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Open the complete PDF directly in your browser without saving it locally.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent">
              <span>Open PDF in new tab</span>
              <Eye size={16} className="transition-transform group-hover:scale-110" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CVSection;
