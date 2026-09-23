import { ArrowUpRight, BookOpen, ExternalLink, Github } from "lucide-react";
import { cvTraining } from "@/data/portfolio";

const featuredProjects = [
  {
    title: "VisionType — macOS OCR & Automation Tool",
    desc: "A native macOS menu bar utility that automates OCR screen capture, clipboard streaming, and human-like typing injection with Quartz Unicode support.",
    tags: ["macOS", "Python", "OCR", "rumps", "Quartz"],
    image: "/project-covers/macos-automation.svg",
    codeUrl: "https://github.com/bhaveshk25/macOS-copy-paste-tool",
    demoUrl: "https://github.com/bhaveshk25/macOS-copy-paste-tool#readme",
  },
  {
    title: "House Price Prediction (Dual ML Pipeline)",
    desc: "End-to-end regression system predicting property values, benchmarking Linear Regression against TensorFlow Decision Forests (TF-DF).",
    tags: ["Python", "TensorFlow", "TF-DF", "Scikit-Learn", "Pandas"],
    image: "/project-covers/house-price-prediction.svg",
    codeUrl: "https://github.com/bhaveshk25/House-Price-Prediction",
    demoUrl: "https://colab.research.google.com/drive/1Fa-akm1iOLfrpO3xWASI7YgKEo2yGI2t?usp=sharing",
  },
  {
    title: "EcoCityIQ — Urban Air Quality Forecasting",
    desc: "Air Quality Patterns and Pollution Forecasting using real-time data analytics, time-series feature engineering, and predictive ML models.",
    tags: ["Python", "Data Science", "ML", "Analytics"],
    image: "/project-covers/ecocityiq.svg",
    codeUrl: "https://github.com/bhaveshk25/ECOCITYIQ-",
    demoUrl: "https://github.com/bhaveshk25/ECOCITYIQ-#readme",
  },
  {
    title: "DevOps CI/CD Portfolio Pipeline",
    desc: "An end-to-end CI/CD delivery pipeline automating build, test, and Docker container deployment with Jenkins and Maven.",
    tags: ["DevOps", "Docker", "Jenkins", "Git", "Maven"],
    image: "/project-covers/devops-pipeline.svg",
    codeUrl: "https://github.com/bhaveshk25/devops-portfolio-project",
    demoUrl: "https://github.com/bhaveshk25/devops-portfolio-project#readme",
  },
  {
    title: "India Stock Market Analysis Dashboard",
    desc: "Interactive Power BI analytics platform tracking Indian market performance, trading volumes, and sector-wise KPIs using DAX measures.",
    tags: ["Power BI", "DAX", "Data Analysis", "KPIs"],
    image: "/project-covers/stock-dashboard.svg",
    codeUrl: "https://www.linkedin.com/posts/bhaveshkumar07_indian-stock-market-analytics-dashboard-activity-7408913075929640960-TcK5",
    demoUrl: "https://www.linkedin.com/posts/bhaveshkumar07_indian-stock-market-analytics-dashboard-activity-7408913075929640960-TcK5",
  },
  {
    title: "DriveSense — Traffic Accident Analysis",
    desc: "Global Traffic Accident Analysis platform with interactive dashboards, pattern discovery, and predictive accident severity insights.",
    tags: ["Data Analysis", "Visualization", "Python"],
    image: "/project-covers/data-science-training.svg",
    codeUrl: "https://github.com/bhaveshk25",
    demoUrl: "https://github.com/bhaveshk25",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="section-kicker">Featured Work & Training</p>
        <h2 className="section-heading max-w-2xl">
          Selected engineering & <span className="gradient-text">ML projects</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          A showcase of native utilities, machine learning pipelines, and analytics platforms built with focus on utility and execution.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p) => (
          <div
            key={p.title}
            className="glass-panel group flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div>
              <div className="mb-5 h-44 overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-3">
                {p.desc}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github size={15} /> Code
                </a>
                <span className="text-border/70">•</span>
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink size={15} /> Demo
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Summer Training Showcase */}
      <div className="mt-12">
        <article className="glass-panel overflow-hidden rounded-[2rem] p-0 transition duration-300 hover:border-primary/35">
          <div className="grid lg:grid-cols-[300px_1fr]">
            <div className="relative min-h-[200px] overflow-hidden border-b border-border/70 lg:min-h-full lg:border-b-0 lg:border-r">
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
                    Summer Training Highlight
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {cvTraining.title}
                  </h3>
                </div>

                <span className="rounded-full border border-border/70 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground w-fit">
                  {cvTraining.duration}
                </span>
              </div>

              <p className="mt-3 line-clamp-2 max-w-4xl text-sm leading-6 text-muted-foreground">
                {cvTraining.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {cvTraining.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {cvTraining.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition hover:border-primary/45 hover:bg-primary hover:text-primary-foreground"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
