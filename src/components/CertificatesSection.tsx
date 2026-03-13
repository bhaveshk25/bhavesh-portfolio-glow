import { Award } from "lucide-react";

const certs = [
  "C Programming",
  "C++ Programming",
  "Python",
  "Data Structures & Algorithms",
  "DBMS",
];

const CertificatesSection = () => (
  <section id="certificates" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-heading"><span className="gradient-text">Certificates</span></h2>
        <p className="section-subtitle">Credentials that validate my expertise</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((c) => (
          <div key={c} className="card-portfolio flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors shrink-0">
              <Award size={24} className="text-accent" />
            </div>
            <span className="font-medium text-card-foreground">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
