import { BrainCircuit, Cpu, Server, Cloud } from "lucide-react";

const trainings = [
  { title: "Data Science", desc: "Statistical analysis, data wrangling, and visualization with Python.", icon: BrainCircuit },
  { title: "Machine Learning", desc: "Supervised & unsupervised models, neural networks, and model evaluation.", icon: Cpu },
  { title: "DevOps Fundamentals", desc: "CI/CD pipelines, containerization with Docker, and version control.", icon: Server },
  { title: "Cloud Computing Basics", desc: "Cloud infrastructure, services, and deployment strategies.", icon: Cloud },
];

const TrainingSection = () => (
  <section id="training" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-heading">Training & <span className="gradient-text">Learning</span></h2>
        <p className="section-subtitle">Areas I'm actively upskilling in</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainings.map((t) => (
          <div key={t.title} className="card-portfolio text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <t.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-card-foreground mb-2">{t.title}</h3>
            <p className="text-muted-foreground text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
