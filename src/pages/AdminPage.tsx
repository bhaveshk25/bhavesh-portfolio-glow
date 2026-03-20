import { useMemo, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUp, LogIn, Save, ShieldCheck, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  usePortfolioContent,
  type EditableCertificate,
  type EditableProject,
  type EditableSkillSection,
} from "@/lib/portfolio-store";

const createSlug = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

const emptyProject = (): EditableProject => ({
  id: "",
  title: "",
  duration: "",
  summary: "",
  tech: [],
  image: "",
  href: "",
});

const emptyCertificate = (): EditableCertificate => ({
  id: "",
  title: "",
  issuer: "",
  note: "",
  image: "",
  date: "",
  href: "",
});

const emptySkillSection = (): EditableSkillSection => ({
  id: "",
  title: "",
  items: [],
});

const AdminPage = () => {
  const {
    content,
    isHydrated,
    isSyncing,
    lastSyncError,
    isRemoteConfigured,
    authMode,
    isAuthenticated,
    authEmail,
    updateAvailability,
    saveProject,
    deleteProject,
    moveProject,
    saveCertificate,
    deleteCertificate,
    moveCertificate,
    saveSkillSection,
    deleteSkillSection,
    moveSkillSection,
    resetContent,
    signIn,
    signOut,
  } = usePortfolioContent();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [projectDraft, setProjectDraft] = useState<EditableProject>(emptyProject());
  const [certificateDraft, setCertificateDraft] = useState<EditableCertificate>(emptyCertificate());
  const [skillDraft, setSkillDraft] = useState<EditableSkillSection>(emptySkillSection());
  const [activeTab, setActiveTab] = useState<"status" | "projects" | "certificates" | "skills">("status");

  const sortedProjects = useMemo(
    () => [...content.projects],
    [content.projects],
  );

  const sortedCertificates = useMemo(
    () => [...content.certificates],
    [content.certificates],
  );
  const sortedSkillSections = useMemo(
    () => [...content.skillSections],
    [content.skillSections],
  );
  const isProjectImageValid = !projectDraft.image || /^https?:\/\/|^\//.test(projectDraft.image);
  const isProjectLinkValid = !projectDraft.href || /^https?:\/\/|^\//.test(projectDraft.href);
  const isCertificateImageValid = !certificateDraft.image || /^https?:\/\/|^\//.test(certificateDraft.image);
  const isCertificateLinkValid = !certificateDraft.href || /^https?:\/\/|^\//.test(certificateDraft.href);
  const isCertificateDateValid = !certificateDraft.date || /^(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\s\d{2}$/.test(certificateDraft.date);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveMessage("");

    void signIn(user, pass).then((result) => {
      if (!result.ok) {
        setLoginError(result.error ?? "Unable to log in.");
        return;
      }

      setLoginError("");
    });
  };

  const handleLogout = () => {
    setSaveMessage("");
    void signOut();
  };

  const submitProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = projectDraft.id || createSlug(projectDraft.title);
    setSaveMessage("");

    if (!isProjectImageValid || !isProjectLinkValid) {
      setSaveMessage("Project image and project link should be full URLs or start with / for local assets.");
      return;
    }

    void saveProject({
      ...projectDraft,
      id,
      tech: projectDraft.tech,
    }).then((result) => {
      if (!result.ok) {
        setSaveMessage(result.error ?? "Project could not be saved.");
        return;
      }

      setProjectDraft(emptyProject());
      setSaveMessage("Project saved successfully.");
    });
  };

  const submitCertificate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = certificateDraft.id || createSlug(certificateDraft.title);
    setSaveMessage("");

    if (!isCertificateImageValid || !isCertificateLinkValid || !isCertificateDateValid) {
      setSaveMessage("Certificate date must be like MAR 26, and links/images should be valid URLs or start with /.");
      return;
    }

    void saveCertificate({
      ...certificateDraft,
      id,
    }).then((result) => {
      if (!result.ok) {
        setSaveMessage(result.error ?? "Certificate could not be saved.");
        return;
      }

      setCertificateDraft(emptyCertificate());
      setSaveMessage("Certificate saved successfully.");
    });
  };

  const submitSkillSection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = skillDraft.id || createSlug(skillDraft.title);
    setSaveMessage("");

    void saveSkillSection({
      ...skillDraft,
      id,
    }).then((result) => {
      if (!result.ok) {
        setSaveMessage(result.error ?? "Skill section could not be saved.");
        return;
      }

      setSkillDraft(emptySkillSection());
      setSaveMessage("Skill section saved successfully.");
    });
  };

  if (!isHydrated) {
    return (
      <div className="relative z-10 min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="hero-backdrop absolute inset-0 -z-20" />
          <div className="hero-grid absolute inset-0 -z-10" />
          <section className="mx-auto max-w-xl">
            <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
              <p className="text-sm text-muted-foreground">Loading admin dashboard...</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="relative z-10 min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="hero-backdrop absolute inset-0 -z-20" />
          <div className="hero-grid absolute inset-0 -z-10" />
          <section className="mx-auto max-w-xl">
            <div className="glass-panel animate-page-enter rounded-[2rem] p-8 sm:p-10">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck size={24} />
                <p className="text-xs font-mono uppercase tracking-[0.24em]">Admin Access</p>
              </div>
              <h1 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl">
                Hidden control panel for portfolio updates.
              </h1>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {isRemoteConfigured
                  ? "Sign in with your Supabase admin account to publish changes for all visitors."
                  : "Supabase is not configured yet, so the dashboard is running in local fallback mode on this browser only."}
              </p>
              <div className="mt-5 rounded-[1.25rem] border border-border/70 bg-background/65 px-4 py-4 text-sm text-muted-foreground">
                <p>
                  Mode: <span className="font-medium text-foreground">{authMode === "supabase" ? "Supabase live mode" : "Local fallback mode"}</span>
                </p>
                {!isRemoteConfigured ? (
                  <p className="mt-2">
                    Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to switch this admin page to real live sync.
                  </p>
                ) : null}
              </div>

              <form onSubmit={handleLogin} className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                    {isRemoteConfigured ? "Admin Email" : "Admin ID"}
                  </span>
                  <input
                    value={user}
                    onChange={(event) => setUser(event.target.value)}
                    className="rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    placeholder="Enter admin id"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                    Password
                  </span>
                  <input
                    type="password"
                    value={pass}
                    onChange={(event) => setPass(event.target.value)}
                    className="rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    placeholder="Enter password"
                  />
                </label>
                {loginError ? <p className="text-sm text-red-500">{loginError}</p> : null}
                <button type="submit" className="gradient-btn inline-flex items-center gap-2">
                  Login
                  <LogIn size={16} />
                </button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="hero-backdrop absolute inset-0 -z-20" />
        <div className="hero-grid absolute inset-0 -z-10" />
        <section className="mx-auto max-w-7xl">
          <div className="animate-page-enter mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Admin</p>
              <h1 className="section-heading max-w-3xl">Manage the live portfolio content from one place.</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                Update internship status, add new projects, and publish new certificates. The public pages read this stored content automatically.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full border border-border/70 px-3 py-1.5">
                  {authMode === "supabase" ? "Supabase live mode" : "Local fallback mode"}
                </span>
                {authEmail ? (
                  <span className="rounded-full border border-border/70 px-3 py-1.5">
                    {authEmail}
                  </span>
                ) : null}
                {isSyncing ? (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary">
                    Syncing
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-border bg-background/75 px-5 py-3 text-sm font-medium transition hover:border-primary/35"
              >
                Logout
              </button>
              <button
                type="button"
                onClick={resetContent}
                className="rounded-full border border-red-500/25 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-500/15"
              >
                Reset to defaults
              </button>
            </div>
          </div>

          {saveMessage ? (
            <div className="animate-page-enter mb-6 rounded-[1.4rem] border border-primary/20 bg-primary/10 px-5 py-4 text-sm text-primary">
              {saveMessage}
            </div>
          ) : null}

          {lastSyncError ? (
            <div className="animate-page-enter mb-6 rounded-[1.4rem] border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-500">
              {lastSyncError}
            </div>
          ) : null}

          <div className="animate-page-enter mb-8 flex flex-wrap gap-3">
            {(["status", "projects", "certificates", "skills"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background/75 text-foreground hover:border-primary/35"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="animate-page-enter-delay">
          {activeTab === "status" ? (
            <section className="glass-panel rounded-[2rem] p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary">Availability Status</p>
                  <h2 className="mt-3 text-2xl font-semibold text-foreground">Control the homepage internship indicator.</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    This updates the status pill on the homepage for all visitors on this browser-stored admin version.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSaveMessage("");
                      void updateAvailability(true).then((result) => {
                        setSaveMessage(result.ok ? "Availability status updated." : result.error ?? "Status update failed.");
                      });
                    }}
                    className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                      content.availabilityOpen
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background/75 hover:border-primary/35"
                    }`}
                  >
                    Open
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSaveMessage("");
                      void updateAvailability(false).then((result) => {
                        setSaveMessage(result.ok ? "Availability status updated." : result.error ?? "Status update failed.");
                      });
                    }}
                    className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                      !content.availabilityOpen
                        ? "bg-red-500 text-white"
                        : "border border-border bg-background/75 hover:border-red-400"
                    }`}
                  >
                    Closed
                  </button>
                </div>
              </div>
            </section>
          ) : null}

          {activeTab === "projects" ? (
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="glass-panel rounded-[2rem] p-8">
                <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary">Add / Edit Project</p>
                <form onSubmit={submitProject} className="mt-6 grid gap-4">
                  <input
                    value={projectDraft.title}
                    onChange={(event) => setProjectDraft((current) => ({ ...current, title: event.target.value }))}
                    placeholder="Project title"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <input
                    value={projectDraft.duration}
                    onChange={(event) => setProjectDraft((current) => ({ ...current, duration: event.target.value }))}
                    placeholder="Duration, for example MAR 26 - APR 26"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <textarea
                    value={projectDraft.summary}
                    onChange={(event) => setProjectDraft((current) => ({ ...current, summary: event.target.value }))}
                    placeholder="Short two-line summary"
                    rows={4}
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <input
                    value={projectDraft.image}
                    onChange={(event) => setProjectDraft((current) => ({ ...current, image: event.target.value }))}
                    placeholder="Cover image URL or local public path"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  {projectDraft.image ? (
                    <div className="overflow-hidden rounded-[1.25rem] border border-border/70 bg-background/60">
                      <img
                        src={projectDraft.image}
                        alt="Project preview"
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ) : null}
                  {!isProjectImageValid ? (
                    <p className="text-sm text-red-500">Use a full image URL or a local public path like `/project-covers/example.png`.</p>
                  ) : null}
                  <input
                    value={projectDraft.href}
                    onChange={(event) => setProjectDraft((current) => ({ ...current, href: event.target.value }))}
                    placeholder="Project link"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  {!isProjectLinkValid ? (
                    <p className="text-sm text-red-500">Use a full URL like `https://...` or a local route/path starting with `/`.</p>
                  ) : null}
                  <input
                    value={projectDraft.tech.join(", ")}
                    onChange={(event) =>
                      setProjectDraft((current) => ({
                        ...current,
                        tech: event.target.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean),
                      }))
                    }
                    placeholder="Tools, comma separated"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <div className="flex flex-wrap gap-3">
                    <button type="submit" className="gradient-btn inline-flex items-center gap-2">
                      Save Project
                      <Save size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectDraft(emptyProject())}
                      className="rounded-full border border-border bg-background/75 px-5 py-3 text-sm font-medium transition hover:border-primary/35"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </section>

              <section className="grid gap-4">
                {sortedProjects.map((project) => (
                  <article key={project.id} className="glass-panel rounded-[1.5rem] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{project.duration}</p>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setProjectDraft(project)}
                          className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm transition hover:border-primary/35"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void moveProject(project.id, "up").then((result) => {
                              setSaveMessage(result.ok ? "Project order updated." : result.error ?? "Project reorder failed.");
                            });
                          }}
                          className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm transition hover:border-primary/35"
                          aria-label="Move project up"
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void moveProject(project.id, "down").then((result) => {
                              setSaveMessage(result.ok ? "Project order updated." : result.error ?? "Project reorder failed.");
                            });
                          }}
                          className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm transition hover:border-primary/35"
                          aria-label="Move project down"
                        >
                          <ArrowDown size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void deleteProject(project.id).then((result) => {
                              setSaveMessage(
                                result.ok ? "Project deleted successfully." : result.error ?? "Project deletion failed.",
                              );
                            });
                          }}
                          className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-500 transition hover:bg-red-500/15"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          ) : null}

          {activeTab === "certificates" ? (
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="glass-panel rounded-[2rem] p-8">
                <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary">Add / Edit Certificate</p>
                <form onSubmit={submitCertificate} className="mt-6 grid gap-4">
                  <input
                    value={certificateDraft.title}
                    onChange={(event) => setCertificateDraft((current) => ({ ...current, title: event.target.value }))}
                    placeholder="Certificate title"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <input
                    value={certificateDraft.issuer}
                    onChange={(event) => setCertificateDraft((current) => ({ ...current, issuer: event.target.value }))}
                    placeholder="Issuer / platform"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <input
                    value={certificateDraft.date}
                    onChange={(event) => setCertificateDraft((current) => ({ ...current, date: event.target.value.toUpperCase() }))}
                    placeholder="Date, for example MAR 26"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  {!isCertificateDateValid ? (
                    <p className="text-sm text-red-500">Use the format `MAR 26`.</p>
                  ) : null}
                  <textarea
                    value={certificateDraft.note}
                    onChange={(event) => setCertificateDraft((current) => ({ ...current, note: event.target.value }))}
                    placeholder="One-line certificate description"
                    rows={3}
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <input
                    value={certificateDraft.image}
                    onChange={(event) => setCertificateDraft((current) => ({ ...current, image: event.target.value }))}
                    placeholder="Preview image URL or public path"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  {certificateDraft.image ? (
                    <div className="overflow-hidden rounded-[1.25rem] border border-border/70 bg-background/60">
                      <img
                        src={certificateDraft.image}
                        alt="Certificate preview"
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ) : null}
                  {!isCertificateImageValid ? (
                    <p className="text-sm text-red-500">Use a full image URL or a local public path like `/certificates/example.png`.</p>
                  ) : null}
                  <input
                    value={certificateDraft.href}
                    onChange={(event) => setCertificateDraft((current) => ({ ...current, href: event.target.value }))}
                    placeholder="Certificate file link"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  {!isCertificateLinkValid ? (
                    <p className="text-sm text-red-500">Use a full file URL like `https://...` or a local path starting with `/`.</p>
                  ) : null}
                  <div className="flex flex-wrap gap-3">
                    <button type="submit" className="gradient-btn inline-flex items-center gap-2">
                      Save Certificate
                      <Save size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCertificateDraft(emptyCertificate())}
                      className="rounded-full border border-border bg-background/75 px-5 py-3 text-sm font-medium transition hover:border-primary/35"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </section>

              <section className="grid gap-4">
                {sortedCertificates.map((certificate) => (
                  <article key={certificate.id} className="glass-panel rounded-[1.5rem] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{certificate.issuer}</p>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">{certificate.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{certificate.note}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setCertificateDraft(certificate)}
                          className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm transition hover:border-primary/35"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void moveCertificate(certificate.id, "up").then((result) => {
                              setSaveMessage(result.ok ? "Certificate order updated." : result.error ?? "Certificate reorder failed.");
                            });
                          }}
                          className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm transition hover:border-primary/35"
                          aria-label="Move certificate up"
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void moveCertificate(certificate.id, "down").then((result) => {
                              setSaveMessage(result.ok ? "Certificate order updated." : result.error ?? "Certificate reorder failed.");
                            });
                          }}
                          className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm transition hover:border-primary/35"
                          aria-label="Move certificate down"
                        >
                          <ArrowDown size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void deleteCertificate(certificate.id).then((result) => {
                              setSaveMessage(
                                result.ok ? "Certificate deleted successfully." : result.error ?? "Certificate deletion failed.",
                              );
                            });
                          }}
                          className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-500 transition hover:bg-red-500/15"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          ) : null}
          {activeTab === "skills" ? (
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="glass-panel rounded-[2rem] p-8">
                <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary">Add / Edit Skill Section</p>
                <form onSubmit={submitSkillSection} className="mt-6 grid gap-4">
                  <input
                    value={skillDraft.title}
                    onChange={(event) => setSkillDraft((current) => ({ ...current, title: event.target.value }))}
                    placeholder="Section title, for example Languages"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <input
                    value={skillDraft.items.join(", ")}
                    onChange={(event) =>
                      setSkillDraft((current) => ({
                        ...current,
                        items: event.target.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean),
                      }))
                    }
                    placeholder="Skills, comma separated"
                    className="rounded-[1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary/45"
                    required
                  />
                  <div className="flex flex-wrap gap-3">
                    <button type="submit" className="gradient-btn inline-flex items-center gap-2">
                      Save Skill Section
                      <Save size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSkillDraft(emptySkillSection())}
                      className="rounded-full border border-border bg-background/75 px-5 py-3 text-sm font-medium transition hover:border-primary/35"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </section>

              <section className="grid gap-4">
                {sortedSkillSections.map((section) => (
                  <article key={section.id} className="glass-panel rounded-[1.5rem] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{section.title}</p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {section.items.join(", ")}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setSkillDraft(section)}
                          className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm transition hover:border-primary/35"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void moveSkillSection(section.id, "up").then((result) => {
                              setSaveMessage(result.ok ? "Skill section order updated." : result.error ?? "Skill section reorder failed.");
                            });
                          }}
                          className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm transition hover:border-primary/35"
                          aria-label="Move skill section up"
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void moveSkillSection(section.id, "down").then((result) => {
                              setSaveMessage(result.ok ? "Skill section order updated." : result.error ?? "Skill section reorder failed.");
                            });
                          }}
                          className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm transition hover:border-primary/35"
                          aria-label="Move skill section down"
                        >
                          <ArrowDown size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSaveMessage("");
                            void deleteSkillSection(section.id).then((result) => {
                              setSaveMessage(
                                result.ok ? "Skill section deleted successfully." : result.error ?? "Skill section deletion failed.",
                              );
                            });
                          }}
                          className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-500 transition hover:bg-red-500/15"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
