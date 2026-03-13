import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.85 }} />
      </div>

      <div className="container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <p className="text-primary font-mono text-sm mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Bhavesh <span className="gradient-text">Kumawat</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: "hsl(210 20% 80%)" }}>
            A Computer Science student passionate about{" "}
            <span className="text-primary font-semibold">Data Science</span>,{" "}
            <span className="text-accent font-semibold">Machine Learning</span>, and{" "}
            <span className="gradient-text font-semibold">DevOps</span>.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="gradient-btn inline-flex items-center gap-2">
              <ArrowDown size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              <Send size={18} /> Contact Me
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="animate-fade-up-delay-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img src={profilePhoto} alt="Bhavesh Kumawat" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
