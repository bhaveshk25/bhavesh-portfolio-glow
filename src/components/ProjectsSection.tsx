import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EcoCityIQ",
    desc: "Air Quality Patterns and Pollution Forecasting using real-time data analytics and ML models.",
    tags: ["Python", "Data Science", "ML"],
  },
  {
    title: "AI Charity Donation Optimizer",
    desc: "An AI-based chatbot that optimizes charity donations using intelligent matching algorithms.",
    tags: ["AI", "Chatbot", "Python"],
  },
  {
    title: "macOS Menu Bar Automation",
    desc: "A macOS tool for Copy, Type & OCR automation directly from the menu bar.",
    tags: ["macOS", "OCR", "Automation"],
  },
  {
    title: "DriveSense",
    desc: "Global Traffic Accident Analysis platform with interactive dashboards and insights.",
    tags: ["Data Analysis", "Visualization", "Python"],
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
              <a href="#" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} /> Code
              </a>
              <a href="#" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
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
