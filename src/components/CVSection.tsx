import { Eye, Download } from "lucide-react";

const CVSection = () => (
  <section id="cv" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-heading">My <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle">Get a detailed overview of my experience</p>
      </div>
      <div className="max-w-md mx-auto card-portfolio text-center">
        <p className="text-muted-foreground mb-6">
          Download my resume to learn more about my skills, projects, and education.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="gradient-btn inline-flex items-center gap-2">
            <Eye size={18} /> View CV
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-medium hover:bg-primary/10 transition-colors"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CVSection;
