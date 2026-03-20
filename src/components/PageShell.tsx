import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

type PageShellProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

const PageShell = ({ eyebrow, title, description, children }: PageShellProps) => (
  <div className="relative z-10 min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="hero-backdrop absolute inset-0 -z-20" />
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-10"
      />
      <div className="hero-grid absolute inset-0 -z-10" />
      <section className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="animate-page-enter mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
              {title ? <h1 className="section-heading max-w-2xl">{title}</h1> : null}
            </div>
            {description ? (
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        )}
        <div className="animate-page-enter-delay">{children}</div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PageShell;
