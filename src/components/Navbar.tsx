import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Journey", href: "/#journey" },
  { label: "Education", href: "/#education" },
  { label: "CV", href: "/#cv" },
  { label: "Contact", href: "/#contact" },
];

const sectionIds = [
  "contact",
  "cv",
  "education",
  "journey",
  "certificates",
  "projects",
  "skills",
  "about",
  "home",
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState("home");
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = window.localStorage?.getItem("theme");
        if (stored) return stored === "dark";
        return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches);
      } catch {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 120) {
        setActiveHomeSection("home");
        return;
      }

      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveHomeSection(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      if (sectionIds.includes(id)) {
        setActiveHomeSection(id);
      }
    }
  }, [location.hash]);

  const scrollTo = (href: string) => {
    const id = href.replace("/#", "").replace("#", "");
    setActiveHomeSection(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const isAnchorActive = (href: string) => {
    const id = href.replace("/#", "").replace("#", "");
    return activeHomeSection === id;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      window.localStorage?.setItem("theme", dark ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 max-w-7xl">
        <Link
          to={location.pathname === "/admin" ? "/" : "/admin"}
          aria-label={location.pathname === "/admin" ? "Back to homepage" : "Open admin panel"}
          className="text-xl font-bold gradient-text transition-opacity hover:opacity-80"
        >
          BK
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              className={`group relative overflow-hidden pb-1 text-xs xl:text-sm font-medium transition-colors hover:text-primary ${
                isAnchorActive(l.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span>{l.label}</span>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-300 ease-out ${
                  isAnchorActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-background/75 p-2 text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border border-border bg-background/75 p-2 text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-border bg-background/75 p-2 text-secondary-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-up">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className={`group relative w-fit overflow-hidden py-1.5 pr-2 text-base font-medium transition-colors hover:text-primary ${
                  isAnchorActive(l.href) ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                <span>{l.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-300 ease-out ${
                    isAnchorActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
            <div className="pt-3 border-t border-border/60">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
