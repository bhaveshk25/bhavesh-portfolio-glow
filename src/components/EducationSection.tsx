import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-heading"><span className="gradient-text">Education</span></h2>
        <p className="section-subtitle">My academic journey</p>
      </div>
      <div className="max-w-lg mx-auto card-portfolio flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 shrink-0 mt-1">
          <GraduationCap size={28} className="text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-card-foreground">Lovely Professional University</h3>
          <p className="text-primary font-medium">B.Tech Computer Science Engineering</p>
          <p className="text-muted-foreground text-sm mt-1">Currently in 2nd Year</p>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
