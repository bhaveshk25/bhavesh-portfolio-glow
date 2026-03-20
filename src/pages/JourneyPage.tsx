import PageShell from "@/components/PageShell";
import { journey } from "@/data/portfolio";

const JourneyPage = () => (
  <PageShell
    eyebrow="Journey"
    title="Growth so far, and the direction ahead."
    description="This section highlights the current stage of growth, the kind of work being pursued, and the direction shaping the next chapter."
  >
    <div className="grid gap-5 lg:grid-cols-3">
      {journey.map((item) => (
        <div key={item.title} className="glass-panel journey-card rounded-[1.75rem] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <item.icon size={22} />
          </div>
          <p className="mt-6 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
            {item.label}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default JourneyPage;
