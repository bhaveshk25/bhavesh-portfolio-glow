import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#home", type: "anchor" },
  { label: "About", href: "/#about", type: "anchor" },
  { label: "Skills", href: "/skills", type: "route" },
  { label: "Project / Training", href: "/projects", type: "route" },
  { label: "Journey", href: "/journey", type: "route" },
  { label: "Certificates", href: "/certificates", type: "route" },
  { label: "CV", href: "/cv", type: "route" },
  { label: "Education", href: "/education", type: "route" },
  { label: "Contact", href: "/contact", type: "route" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState("home");
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== "/") {
        return;
      }

      const aboutSection = document.getElementById("about");
      if (!aboutSection) {
        setActiveHomeSection("home");
        return;
      }

      const aboutStart = aboutSection.offsetTop - 140;
      setActiveHomeSection(window.scrollY >= aboutStart ? "about" : "home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    setActiveHomeSection(location.hash === "#about" ? "about" : "home");
  }, [location.hash, location.pathname]);

  const isAnchorActive = (href: string) => {
    if (location.pathname !== "/") {
      return false;
    }

    if (href.endsWith("#about")) {
      return activeHomeSection === "about";
    }

    if (href.endsWith("#home")) {
      return activeHomeSection === "home";
    }

    return false;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to={location.pathname === "/admin" ? "/" : "/admin"}
          aria-label={location.pathname === "/admin" ? "Back to homepage" : "Open admin panel"}
          className="text-xl font-bold gradient-text transition-opacity hover:opacity-80"
        >
          BK
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            l.type === "route" ? (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `group relative overflow-hidden pb-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                <span>{l.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"
                />
              </NavLink>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActiveHomeSection(l.href.endsWith("#about") ? "about" : "home")}
                className={`group relative overflow-hidden pb-1 text-sm font-medium transition-colors hover:text-primary ${
                  isAnchorActive(l.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span>{l.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"
                />
              </a>
            )
          ))}
        </div>

        <div className="flex items-center gap-3">
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
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              l.type === "route" ? (
                <NavLink
                  key={l.href}
                  to={l.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group relative w-fit overflow-hidden py-1 pr-1 text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  <span>{l.label}</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </NavLink>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    setActiveHomeSection(l.href.endsWith("#about") ? "about" : "home");
                    setIsOpen(false);
                  }}
                  className={`group relative w-fit overflow-hidden py-1 pr-1 text-sm font-medium transition-colors hover:text-primary ${
                    isAnchorActive(l.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span>{l.label}</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
