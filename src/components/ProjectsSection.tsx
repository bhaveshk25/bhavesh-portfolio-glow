import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VisionType — macOS OCR & Automation Tool",
    desc: "A native macOS menu bar tool that automates OCR screen capture, clipboard streaming, and human-like typing injection with Quartz Unicode support.",
    tags: ["macOS", "Python", "OCR", "rumps", "Quartz"],
    codeUrl: "https://github.com/bhaveshk25/macOS-copy-paste-tool",
    demoUrl: "https://github.com/bhaveshk25/macOS-copy-paste-tool#readme",
  },
  {
    title: "House Price Prediction (Dual ML Pipeline)",
    desc: "End-to-end regression system predicting property values, benchmarking Linear Regression against TensorFlow Decision Forests (TF-DF).",
    tags: ["Python", "TensorFlow", "TF-DF", "Scikit-Learn", "Pandas"],
    codeUrl: "https://github.com/bhaveshk25/House-Price-Prediction",
    demoUrl: "https://colab.research.google.com/drive/1Fa-akm1iOLfrpO3xWASI7YgKEo2yGI2t?usp=sharing",
  },
  {
    title: "EcoCityIQ — Urban Air Quality Forecasting",
    desc: "Air Quality Patterns and Pollution Forecasting using real-time data analytics and ML models.",
    tags: ["Python", "Data Science", "ML", "Analytics"],
    codeUrl: "https://github.com/bhaveshk25/ECOCITYIQ-",
    demoUrl: "https://github.com/bhaveshk25/ECOCITYIQ-#readme",
  },
  {
    title: "DevOps CI/CD Portfolio Pipeline",
    desc: "An end-to-end CI/CD delivery pipeline automating build, test, and Docker container deployment with Jenkins and Maven.",
    tags: ["DevOps", "Docker", "Jenkins", "Git", "Maven"],
    codeUrl: "https://github.com/bhaveshk25/devops-portfolio-project",
    demoUrl: "https://github.com/bhaveshk25/devops-portfolio-project#readme",
  },
  {
    title: "India Stock Market Analysis Dashboard",
    desc: "Interactive Power BI analytics platform tracking Indian market performance, trading volumes, and sector-wise KPIs using DAX measures.",
    tags: ["Power BI", "DAX", "Data Analysis", "KPIs"],
    codeUrl: "https://www.linkedin.com/posts/bhaveshkumar07_indian-stock-market-analytics-dashboard-activity-7408913075929640960-TcK5",
    demoUrl: "https://www.linkedin.com/posts/bhaveshkumar07_indian-stock-market-analytics-dashboard-activity-7408913075929640960-TcK5",
  },
  {
    title: "DriveSense",
    desc: "Global Traffic Accident Analysis platform with interactive dashboards and insights.",
    tags: ["Data Analysis", "Visualization", "Python"],
    codeUrl: "https://github.com/bhaveshk25",
    demoUrl: "https://github.com/bhaveshk25",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Some things I've built</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="card-portfolio group">
            <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
