import {
  Code2, FileCode, Braces, Database, GitBranch, Container,
  BrainCircuit, Layers, Terminal, Globe, Cpu, Binary
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: FileCode },
  { name: "JavaScript", icon: Braces },
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Code2 },
  { name: "C", icon: Binary },
  { name: "C++", icon: Cpu },
  { name: "DSA", icon: Layers },
  { name: "DBMS", icon: Database },
  { name: "Data Science", icon: BrainCircuit },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="card-portfolio flex flex-col items-center gap-3 py-6 group cursor-default"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <skill.icon
                size={32}
                className="text-primary group-hover:text-accent transition-colors group-hover:animate-float"
              />
              <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
