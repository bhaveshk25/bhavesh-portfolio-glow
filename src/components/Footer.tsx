import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bhavesh Kumawat. Designed to grow with each project.
      </p>
      <div className="flex gap-4">
        <a href={profile.github} target="_blank" rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub Profile">
          <Github size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn Profile">
          <Linkedin size={20} />
        </a>
        <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Phone">
          <Phone size={20} />
        </a>
        <a href={`mailto:${profile.email}`}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
