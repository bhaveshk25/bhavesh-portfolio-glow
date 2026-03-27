import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { aboutItems, certificates, cvProjects, cvSkillSections, profile } from "@/data/portfolio";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export type EditableProject = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  tech: string[];
  image: string;
  href: string;
};

export type EditableCertificate = {
  id: string;
  title: string;
  issuer: string;
  note: string;
  image: string;
  date: string;
  href: string;
};

export type EditableSkillSection = {
  id: string;
  title: string;
  items: string[];
};

export type PortfolioContent = {
  profile: typeof profile;
  aboutItems: string[];
  availabilityOpen: boolean;
  projects: EditableProject[];
  certificates: EditableCertificate[];
  skillSections: EditableSkillSection[];
};

type SaveResult = {
  ok: boolean;
  error?: string;
};

type PortfolioContextValue = {
  content: PortfolioContent;
  isHydrated: boolean;
  isSyncing: boolean;
  lastSyncError: string;
  isRemoteConfigured: boolean;
  authMode: "local" | "supabase";
  isAuthenticated: boolean;
  authEmail: string;
  updateAvailability: (isOpen: boolean) => Promise<SaveResult>;
  saveProject: (project: EditableProject) => Promise<SaveResult>;
  deleteProject: (id: string) => Promise<SaveResult>;
  moveProject: (id: string, direction: "up" | "down") => Promise<SaveResult>;
  saveCertificate: (certificate: EditableCertificate) => Promise<SaveResult>;
  deleteCertificate: (id: string) => Promise<SaveResult>;
  moveCertificate: (id: string, direction: "up" | "down") => Promise<SaveResult>;
  saveSkillSection: (section: EditableSkillSection) => Promise<SaveResult>;
  deleteSkillSection: (id: string) => Promise<SaveResult>;
  moveSkillSection: (id: string, direction: "up" | "down") => Promise<SaveResult>;
  resetContent: () => Promise<SaveResult>;
  signIn: (email: string, password: string) => Promise<SaveResult>;
  signOut: () => Promise<void>;
};

type PortfolioRow = {
  id: string;
  profile: typeof profile;
  about_items: string[];
  availability_open: boolean;
  projects: EditableProject[];
  certificates: EditableCertificate[];
  skill_sections?: EditableSkillSection[];
};

const STORAGE_KEY = "bhavesh-portfolio-admin-content";
const REMOTE_ROW_ID = "main";
const LOCAL_ADMIN_USER = import.meta.env.VITE_ADMIN_USER ?? "bhavesh-admin";
const LOCAL_ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS ?? "bk-portfolio-2026";
const legacyAboutItems = [
  "A strong interest lies in building interfaces that feel modern, polished, and easy to use.",
  "Particular interest is drawn to data-heavy problems that combine logic, experimentation, and storytelling.",
  "The most effective learning comes through shipping projects, reviewing outcomes, and refining rough edges.",
  "This portfolio is intended to reflect not only technical skills, but also the kind of thoughtful builder being developed.",
];

const withIds = <T extends Record<string, unknown>>(items: T[], key: keyof T) =>
  items.map((item) => ({
    ...item,
    id: String(item[key]).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  }));

const moveItem = <T extends { id: string }>(items: T[], id: string, direction: "up" | "down") => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return items;
  }

  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= items.length) {
    return items;
  }

  const nextItems = [...items];
  [nextItems[index], nextItems[targetIndex]] = [nextItems[targetIndex], nextItems[index]];
  return nextItems;
};

const defaultContent: PortfolioContent = {
  profile,
  aboutItems,
  availabilityOpen: true,
  projects: withIds(
    cvProjects.map((project) => ({
      title: project.title,
      duration: project.duration,
      summary: project.summary,
      tech: project.tech,
      image: project.image,
      href: project.href,
    })),
    "title",
  ),
  certificates: withIds(
    certificates.map((certificate) => ({
      title: certificate.title,
      issuer: certificate.issuer,
      note: certificate.note,
      image: certificate.image,
      date: certificate.date,
      href: certificate.href,
    })),
    "title",
  ),
  skillSections: withIds(
    cvSkillSections.map((section) => ({
      title: section.title,
      items: section.items,
    })),
    "title",
  ),
};

const shouldReplaceLegacyAbout = (items?: string[]) =>
  Array.isArray(items) &&
  items.length === legacyAboutItems.length &&
  items.every((item, index) => item === legacyAboutItems[index]);

const normalizeContent = (source?: Partial<PortfolioContent> | null): Partial<PortfolioContent> | undefined => {
  if (!source) {
    return source ?? undefined;
  }

  if (!shouldReplaceLegacyAbout(source.aboutItems)) {
    return source;
  }

  return {
    ...source,
    aboutItems,
  };
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

const mergeContent = (source?: Partial<PortfolioContent> | null): PortfolioContent => {
  const normalizedSource = normalizeContent(source);

  return {
    ...defaultContent,
    ...normalizedSource,
    profile: {
      ...defaultContent.profile,
      ...normalizedSource?.profile,
    },
    aboutItems: normalizedSource?.aboutItems?.length ? normalizedSource.aboutItems : defaultContent.aboutItems,
    projects: normalizedSource?.projects?.length ? normalizedSource.projects : defaultContent.projects,
    certificates: normalizedSource?.certificates?.length ? normalizedSource.certificates : defaultContent.certificates,
    skillSections: normalizedSource?.skillSections?.length ? normalizedSource.skillSections : defaultContent.skillSections,
  };
};

const readStoredContent = (): PortfolioContent => {
  if (typeof window === "undefined") {
    return defaultContent;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultContent;
  }

  try {
    return mergeContent(JSON.parse(raw) as Partial<PortfolioContent>);
  } catch {
    return defaultContent;
  }
};

const writeStoredContent = (content: PortfolioContent) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
};

const portfolioRowToContent = (row?: PortfolioRow | null): PortfolioContent =>
  mergeContent(
    row
      ? {
          profile: row.profile,
          aboutItems: row.about_items,
          availabilityOpen: row.availability_open,
          projects: row.projects,
          certificates: row.certificates,
          skillSections: row.skill_sections,
        }
      : undefined,
  );

const contentToPortfolioRow = (content: PortfolioContent): PortfolioRow => ({
  id: REMOTE_ROW_ID,
  profile: content.profile,
  about_items: content.aboutItems,
  availability_open: content.availabilityOpen,
  projects: content.projects,
  certificates: content.certificates,
  skill_sections: content.skillSections,
});

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<PortfolioContent>(defaultContent);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncError, setLastSyncError] = useState("");
  const [localAdminAuthenticated, setLocalAdminAuthenticated] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const authMode = isSupabaseConfigured ? "supabase" : "local";
  const isAuthenticated = authMode === "supabase" ? Boolean(session?.user) : localAdminAuthenticated;
  const authEmail =
    authMode === "supabase" ? session?.user?.email ?? "" : localAdminAuthenticated ? LOCAL_ADMIN_USER : "";

  const loadRemoteContent = useCallback(async () => {
    if (!supabase) {
      return;
    }

    setIsSyncing(true);

    const { data, error } = await supabase
      .from("portfolio_content")
      .select("*")
      .eq("id", REMOTE_ROW_ID)
      .maybeSingle<PortfolioRow>();

    if (error) {
      setLastSyncError(error.message);
      setContent(readStoredContent());
      setIsHydrated(true);
      setIsSyncing(false);
      return;
    }

    const nextContent = portfolioRowToContent(data);
    setContent(nextContent);
    writeStoredContent(nextContent);
    setLastSyncError("");
    setIsHydrated(true);
    setIsSyncing(false);
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setContent(readStoredContent());
      setIsHydrated(true);
      if (typeof window !== "undefined") {
        setLocalAdminAuthenticated(window.sessionStorage.getItem("bhavesh-portfolio-admin-session") === "true");
      }
      return;
    }

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) {
        return;
      }

      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    loadRemoteContent();

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [loadRemoteContent]);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      writeStoredContent(content);
    }
  }, [content]);

  const persistContent = useCallback(
    async (nextContent: PortfolioContent): Promise<SaveResult> => {
      setContent(nextContent);

      if (!isSupabaseConfigured || !supabase) {
        writeStoredContent(nextContent);
        setLastSyncError("");
        return { ok: true };
      }

      if (!session?.user) {
        const error = "Admin login is required before publishing remote updates.";
        setLastSyncError(error);
        return { ok: false, error };
      }

      setIsSyncing(true);
      const { error } = await supabase.from("portfolio_content").upsert(contentToPortfolioRow(nextContent));

      setIsSyncing(false);

      if (error) {
        setLastSyncError(error.message);
        return { ok: false, error: error.message };
      }

      writeStoredContent(nextContent);
      setLastSyncError("");
      return { ok: true };
    },
    [session],
  );

  const updateAvailability = useCallback(
    async (isOpen: boolean) => persistContent({ ...content, availabilityOpen: isOpen }),
    [content, persistContent],
  );

  const saveProject = useCallback(
    async (project: EditableProject) => {
      const exists = content.projects.some((item) => item.id === project.id);
      const nextContent = {
        ...content,
        projects: exists
          ? content.projects.map((item) => (item.id === project.id ? project : item))
          : [project, ...content.projects],
      };

      return persistContent(nextContent);
    },
    [content, persistContent],
  );

  const deleteProject = useCallback(
    async (id: string) =>
      persistContent({
        ...content,
        projects: content.projects.filter((item) => item.id !== id),
      }),
    [content, persistContent],
  );

  const moveProject = useCallback(
    async (id: string, direction: "up" | "down") =>
      persistContent({
        ...content,
        projects: moveItem(content.projects, id, direction),
      }),
    [content, persistContent],
  );

  const saveCertificate = useCallback(
    async (certificate: EditableCertificate) => {
      const exists = content.certificates.some((item) => item.id === certificate.id);
      const nextContent = {
        ...content,
        certificates: exists
          ? content.certificates.map((item) => (item.id === certificate.id ? certificate : item))
          : [certificate, ...content.certificates],
      };

      return persistContent(nextContent);
    },
    [content, persistContent],
  );

  const deleteCertificate = useCallback(
    async (id: string) =>
      persistContent({
        ...content,
        certificates: content.certificates.filter((item) => item.id !== id),
      }),
    [content, persistContent],
  );

  const moveCertificate = useCallback(
    async (id: string, direction: "up" | "down") =>
      persistContent({
        ...content,
        certificates: moveItem(content.certificates, id, direction),
      }),
    [content, persistContent],
  );

  const saveSkillSection = useCallback(
    async (section: EditableSkillSection) => {
      const exists = content.skillSections.some((item) => item.id === section.id);
      const nextContent = {
        ...content,
        skillSections: exists
          ? content.skillSections.map((item) => (item.id === section.id ? section : item))
          : [section, ...content.skillSections],
      };

      return persistContent(nextContent);
    },
    [content, persistContent],
  );

  const deleteSkillSection = useCallback(
    async (id: string) =>
      persistContent({
        ...content,
        skillSections: content.skillSections.filter((item) => item.id !== id),
      }),
    [content, persistContent],
  );

  const moveSkillSection = useCallback(
    async (id: string, direction: "up" | "down") =>
      persistContent({
        ...content,
        skillSections: moveItem(content.skillSections, id, direction),
      }),
    [content, persistContent],
  );

  const resetContent = useCallback(async () => persistContent(defaultContent), [persistContent]);

  const signIn = useCallback(
    async (email: string, password: string): Promise<SaveResult> => {
      if (!isSupabaseConfigured || !supabase) {
        if (email === LOCAL_ADMIN_USER && password === LOCAL_ADMIN_PASS) {
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem("bhavesh-portfolio-admin-session", "true");
          }
          setLocalAdminAuthenticated(true);
          return { ok: true };
        }

        return { ok: false, error: "Invalid admin credentials." };
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { ok: false, error: error.message };
      }

      await loadRemoteContent();
      return { ok: true };
    },
    [loadRemoteContent],
  );

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem("bhavesh-portfolio-admin-session");
      }
      setLocalAdminAuthenticated(false);
      return;
    }

    await supabase.auth.signOut();
  }, []);

  const value = useMemo(
    () => ({
      content,
      isHydrated,
      isSyncing,
      lastSyncError,
      isRemoteConfigured: isSupabaseConfigured,
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
    }),
    [
      authEmail,
      authMode,
      content,
      deleteCertificate,
      deleteProject,
      deleteSkillSection,
      moveCertificate,
      moveProject,
      moveSkillSection,
      isAuthenticated,
      isHydrated,
      isSyncing,
      lastSyncError,
      resetContent,
      saveCertificate,
      saveProject,
      saveSkillSection,
      signIn,
      signOut,
      updateAvailability,
    ],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

export const usePortfolioContent = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolioContent must be used within PortfolioProvider");
  }

  return context;
};

export const getHeroStats = (content: PortfolioContent) => [
  { value: "7.91", label: "Current CGPA" },
  { value: `${content.projects.length}+`, label: "Projects completed" },
  { value: `${content.certificates.length}+`, label: "Total certifications" },
];
