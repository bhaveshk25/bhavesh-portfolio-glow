import { ArrowUpRight } from "lucide-react";
import { usePortfolioContent } from "@/lib/portfolio-store";

const monthOrder: Record<string, number> = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

const getCertificateValue = (date?: string) => {
  if (!date || typeof date !== "string") {
    return 0;
  }
  const parts = date.trim().split(/\s+/);
  if (parts.length < 2) {
    return 0;
  }
  const [month, year] = parts;
  const numericYear = Number(year.length === 2 ? `20${year}` : year);
  if (Number.isNaN(numericYear)) {
    return 0;
  }
  const monthNum = monthOrder[month.toUpperCase()] ?? 0;
  return numericYear * 100 + monthNum;
};

const CertificatesSection = () => {
  const { content } = usePortfolioContent();
  const sortedCertificates = [...content.certificates].sort((a, b) => {
    const valA = getCertificateValue(a.date);
    const valB = getCertificateValue(b.date);
    if (valA !== valB) {
      return valB - valA;
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <section id="certificates" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="section-kicker">Verified Credentials</p>
          <h2 className="section-heading max-w-2xl">
            Certifications & <span className="gradient-text">learning programs</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Structured coursework and professional skill milestones across Data Structures & Algorithms, Machine Learning, Cloud, and Networking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedCertificates.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="glass-panel group flex flex-col justify-between overflow-hidden rounded-[2rem] p-0 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex h-full flex-col">
                <div className="relative h-48 overflow-hidden border-b border-border/70 bg-muted/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-primary/10" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary font-semibold">
                        {item.issuer}
                      </p>
                      <span className="rounded-full border border-border/70 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground transition-colors group-hover:text-primary line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-3">
                      {item.note}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary pt-3 border-t border-border/50">
                    <span>View verified certificate</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
