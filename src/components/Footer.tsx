import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bhavesh Kumawat. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/bhaveshkumar07" target="_blank" rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="mailto:kumawatbhav001@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
