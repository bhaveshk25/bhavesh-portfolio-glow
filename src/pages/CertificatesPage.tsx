import PageShell from "@/components/PageShell";
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

const getCertificateValue = (date: string) => {
  const [month, year] = date.split(" ");
  return Number(`20${year}`) * 100 + (monthOrder[month] ?? 0);
};

const CertificatesPage = () => {
  const { content } = usePortfolioContent();
  const sortedCertificates = [...content.certificates].sort(
    (a, b) => getCertificateValue(b.date) - getCertificateValue(a.date),
  );

  return (
    <PageShell
      eyebrow="Certificates"
      title="Credentials that support the work behind the portfolio."
      description="These certificates represent structured learning efforts that strengthened practical confidence across machine learning, analytics, and frontend development."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sortedCertificates.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="project-card overflow-hidden rounded-[1.6rem] p-0"
        >
          <div className="flex h-full flex-col">
            <div className="relative h-52 overflow-hidden border-b border-border/70">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-primary/10" />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-primary">
                  {item.issuer}
                </p>
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.note}
              </p>
            </div>
          </div>
        </a>
        ))}
      </div>
    </PageShell>
  );
};

export default CertificatesPage;
