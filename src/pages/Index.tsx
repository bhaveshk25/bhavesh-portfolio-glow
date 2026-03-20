import type { CSSProperties } from "react";
import { ArrowUpRight, Download, Mail, MapPin, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { getHeroStats, usePortfolioContent } from "@/lib/portfolio-store";

const Index = () => {
  const { content } = usePortfolioContent();
  const orbitLabels = ["React", "ML", "Data", "DevOps"];
  const heroStats = getHeroStats(content);

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
        >
          <div className="hero-backdrop absolute inset-0 -z-20" />
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 -z-30 h-full w-full object-cover opacity-10"
          />
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8 animate-fade-up">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:border-primary/45 hover:text-foreground"
              >
                <span
                  className={`h-2 w-2 rounded-full shadow-[0_0_14px_currentColor] ${
                    content.availabilityOpen ? "text-accent bg-accent" : "bg-red-500 text-red-500"
                  }`}
                />
                {content.availabilityOpen
                  ? "Open to internships, collaborations, and real product work"
                  : "Now closed for internships and work"}
              </div>

              <div className="space-y-3">
                <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                  {content.profile.name}
                </p>
                <h1 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.8rem]">
                  Building web and data experiences that feel
                  <span className="gradient-text"> thoughtful, useful, and sharp.</span>
                </h1>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/projects"
                  className="gradient-btn inline-flex items-center justify-center gap-2"
                >
                  View projects
                  <ArrowUpRight size={18} />
                </Link>
                <a
                  href={content.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background/75 px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  LinkedIn profile
                </a>
                <a
                  href={`mailto:${content.profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  <Mail size={16} />
                  {content.profile.email}
                </a>
                <a
                  href="/Bhavesh-Kumawat-CV.pdf"
                  download="Bhavesh-Kumawat-CV.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition hover:border-primary/40 hover:bg-primary/15"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              <div className="grid translate-y-4 gap-4 sm:grid-cols-3 lg:translate-y-8">
                {heroStats.map((item) => (
                  <div key={item.label} className="glass-panel rounded-3xl p-5 text-center">
                    <p className="text-2xl font-bold text-foreground">{item.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up-delay-2 lg:-mt-16 lg:self-start">
              <div className="hero-visual relative mx-auto w-full max-w-2xl lg:ml-auto">
                <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-6 right-0 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
                <div className="hero-rings" aria-hidden="true">
                  {orbitLabels.map((label, index) => (
                    <span
                      key={label}
                      className="hero-orbit-chip"
                      style={{ "--orbit-index": index } as CSSProperties}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="hero-photo-echo hero-photo-echo-left" aria-hidden="true">
                  <img src={profilePhoto} alt="" className="hero-echo-photo h-full w-full object-cover" />
                </div>
                <div className="hero-photo-echo hero-photo-echo-right" aria-hidden="true">
                  <img src={profilePhoto} alt="" className="hero-echo-photo h-full w-full object-cover" />
                </div>
                <div className="glass-panel hero-image-panel relative overflow-hidden rounded-[2rem] p-6 shadow-2xl lg:p-7">
                  <div className="hero-image-shine" aria-hidden="true" />
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                    <img
                      src={profilePhoto}
                      alt="Bhavesh Kumawat"
                      className="hero-main-photo h-[400px] w-full object-cover lg:h-[490px]"
                    />
                  </div>
                  <div className="hero-floating-card hero-floating-card-top">
                    <Sparkles size={16} />
                    <span>Designing for delight</span>
                  </div>
                  <div className="hero-floating-card hero-floating-card-bottom">
                    <Star size={16} />
                    <span>Shipping ideas into reality</span>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/70 bg-background/80 p-5 lg:p-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Focus
                      </p>
                      <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                        Data science, ML, DevOps, and frontend craft
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/80 p-5 lg:p-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Based In
                      </p>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <MapPin size={15} className="text-primary" />
                        {content.profile.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="section-kicker">About</p>
              <h2 className="section-heading max-w-md">
                A strong emphasis on clarity in code, design, and communication.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {content.aboutItems.map((item) => (
                <div key={item} className="glass-panel rounded-3xl p-6 text-sm leading-7 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
