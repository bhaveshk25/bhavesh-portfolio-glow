import { Trophy, Rocket, BookOpen } from "lucide-react";

const achievements = [
  { text: "Participated in tech hackathons and coding competitions", icon: Trophy },
  { text: "Built AI and Data Science projects with real-world impact", icon: Rocket },
  { text: "Active learner in Data Science, ML & DevOps ecosystems", icon: BookOpen },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-heading"><span className="gradient-text">Achievements</span></h2>
        <p className="section-subtitle">Milestones on my journey</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {achievements.map((a) => (
          <div key={a.text} className="card-portfolio text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <a.icon size={28} className="text-primary" />
            </div>
            <p className="text-card-foreground font-medium text-sm">{a.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
