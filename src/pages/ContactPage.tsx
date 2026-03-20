import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, Phone, Send } from "lucide-react";
import PageShell from "@/components/PageShell";
import { profile } from "@/data/portfolio";

const ContactPage = () => {
  const formspreeEndpoint =
    (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined) ??
    "https://formspree.io/f/xqeynoan";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setStatus("error");
      setStatusMessage("Formspree is not configured yet. Add your Formspree endpoint to enable direct delivery.");
      return;
    }

    try {
      setStatus("submitting");
      setStatusMessage("");

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio inquiry from ${name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully. Thanks for reaching out.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong while sending the message. Please try again.");
    }
  };

  return (
    <PageShell>
      <div className="grid gap-6">
        <div className="contact-shell rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker text-primary-foreground/70">Contact</p>
              <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
                Let&apos;s build something thoughtful and ambitious.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-primary-foreground/75">
                Open to internships, collaborations, and meaningful conversations around
                frontend engineering, data work, machine learning, and product-focused development.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 text-primary-foreground transition hover:bg-white/14"
              >
                <Mail size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  Email
                </p>
                <p className="mt-2 text-sm font-medium">{profile.email}</p>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 text-primary-foreground transition hover:bg-white/14"
              >
                <Phone size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  Phone
                </p>
                <p className="mt-2 text-sm font-medium">{profile.phone}</p>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 text-primary-foreground transition hover:bg-white/14 sm:col-span-2"
              >
                <Linkedin size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  LinkedIn
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium">
                  Connect on LinkedIn
                  <ArrowUpRight size={16} />
                </p>
              </a>
            </div>
          </div>
        </div>

        <section className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Send a Message</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Reach out directly from the portfolio.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Fill out the form and your mail app will open with the message prefilled for sending.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/45"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  required
                  className="rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/45"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                Message
              </span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message here..."
                required
                rows={6}
                className="rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/45"
              />
            </label>

            <div className="flex justify-start">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="gradient-btn inline-flex items-center gap-2 disabled:pointer-events-none disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
                <Send size={16} />
              </button>
            </div>

            {statusMessage ? (
              <p
                className={`text-sm leading-6 ${
                  status === "success" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </section>
      </div>
    </PageShell>
  );
};

export default ContactPage;
