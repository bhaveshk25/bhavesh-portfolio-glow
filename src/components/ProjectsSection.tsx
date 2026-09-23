import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Featured Work</p>
          <h2 className="section-heading max-w-xl">
            Selected engineering & <span className="gradient-text">ML projects</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            A showcase of native utilities, machine learning pipelines, and analytics platforms built with focus on utility and execution.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:underline"
        >
          View all projects & training
          <ArrowUpRight size={16} />
        </Link>
      </div>

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

      <div className="mt-14 text-center">
        <Link
          to="/projects"
          className="gradient-btn inline-flex items-center justify-center gap-2 text-sm font-medium"
        >
          View all projects & summer training
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
