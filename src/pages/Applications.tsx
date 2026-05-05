import { useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Heart, Activity, Droplet, Bandage, Stethoscope } from "lucide-react";

const apps = [
  { icon: Heart, name: "Cardiovascular", body: "Pulmonary-valved conduits and heart valves designed to grow with pediatric patients and last in adults — addressing the dominant failure modes of bioprosthetic valves." },
  { icon: Activity, name: "Vascular Grafts", body: "Regenerative vascular conduits for bypass and reconstruction with potential to remodel into living vessel." },
  { icon: Droplet, name: "Urology", body: "Tissue scaffolds for urological reconstruction where regenerative integration is critical for long-term function." },
  { icon: Stethoscope, name: "Gastrointestinal", body: "Soft-tissue applications across the GI tract — supporting repair, reconstruction, and regeneration." },
  { icon: Bandage, name: "Wound & Soft Tissue", body: "Advanced regenerative tissue solutions for complex wound, hernia, and soft-tissue repair." },
];

const ApplicationsPage = () => {
  useEffect(() => { document.title = "Applications — Annoviant TxGuard™"; }, []);
  return (
    <PageShell
      eyebrow="Applications"
      title={<>One platform. <span className="text-gradient">Many lives</span>.</>}
      intro="The TxGuard™ regenerative tissue platform is being developed across a broad range of cardiovascular and soft-tissue indications — wherever conventional materials fail patients."
    >
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map(({ icon: Icon, name, body }) => (
            <div key={name} className="rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1">
              <div className="h-11 w-11 rounded-lg gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mb-3">{name}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
export default ApplicationsPage;