import { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder - integrate with backend later
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's connect and build something great</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="card-portfolio flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 shrink-0">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:kumawatbhav001@gmail.com" className="font-medium text-card-foreground hover:text-primary transition-colors text-sm">
                  kumawatbhav001@gmail.com
                </a>
              </div>
            </div>
            <div className="card-portfolio flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:9660975486" className="font-medium text-card-foreground hover:text-primary transition-colors text-sm">
                  9660975486
                </a>
              </div>
            </div>
            <div className="card-portfolio flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 shrink-0">
                <Linkedin size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/bhaveshkumar07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-card-foreground hover:text-primary transition-colors text-sm"
                >
                  bhaveshkumar07
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-portfolio flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-sm"
            />
            <button type="submit" className="gradient-btn inline-flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
