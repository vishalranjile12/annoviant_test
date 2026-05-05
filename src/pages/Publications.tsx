import { useMemo, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { FileText, Award, Search, ExternalLink } from "lucide-react";

type Item = {
  type: "Publication" | "Patent" | "Grant";
  year: number;
  title: string;
  source?: string;
  href?: string;
};

const items: Item[] = [
  { type: "Grant", year: 2024, title: "$2.99M NIH grant, TxGuard® Pulmonary Valved Conduit for Pediatric Heart Disease", source: "NIH / NHLBI", href: "https://reporter.nih.gov/" },
  { type: "Grant", year: 2024, title: "$5.7M cumulative NIH seed funding (2018–2024) advancing the TxGuard® regenerative tissue platform", source: "NIH" },
  { type: "Patent", year: 2026, title: "Methods and compositions for stabilized regenerative tissue scaffolds", source: "U.S. Patent (issued 2026)" },
  { type: "Patent", year: 2017, title: "Decellularized tissue construct and methods of preparation", source: "U.S. Patent (issued 2016–2017)" },
  { type: "Patent", year: 2025, title: "Pulmonary valved graft and methods (PCT application)", source: "U.S. & PCT applications (2025–2026)" },
  { type: "Publication", year: 2024, title: "Pre-clinical evaluation of regenerative pulmonary valved conduits in an aggressive juvenile sheep model", source: "Peer-reviewed (sample listing, 14 publications total)" },
  { type: "Publication", year: 2023, title: "Endogenous tissue regeneration with stabilized decellularized scaffolds: a comparative review", source: "Peer-reviewed" },
  { type: "Publication", year: 2022, title: "Calcification resistance in stabilized ECM scaffolds, mechanism and characterization", source: "Peer-reviewed" },
];

const categories = ["All", "Publication", "Patent", "Grant"] as const;

const PublicationsPage = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items.filter((i) => (filter === "All" || i.type === filter) && i.title.toLowerCase().includes(query.toLowerCase()));
  }, [filter, query]);

  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "TxGuard® Publications, Patents & Grants",
    description: "Peer-reviewed publications, U.S. patents, PCT applications, and NIH grants supporting Annoviant's TxGuard® regenerative tissue platform.",
  };

  return (
    <PageShell
      eyebrow="Publications &amp; Patents"
      title={<>The <span className="text-gradient">scientific record</span></>}
      intro="Peer-reviewed publications, granted U.S. patents, PCT applications, and NIH grants supporting the TxGuard® regenerative tissue platform."
      heroImage="/hero/microscope.jpg"
    >
      <Seo
        title="Publications &amp; Patents, TxGuard® | Annoviant"
        description="14 peer-reviewed publications, 4 issued U.S. patents, 2 PCT applications, and $5.7M in NIH funding supporting the TxGuard® regenerative tissue platform."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { v: "14", l: "Peer-reviewed publications" },
              { v: "4", l: "U.S. patents issued" },
              { v: "2", l: "U.S. & PCT applications filed" },
              { v: "$5.7M", l: "NIH grant funding to date" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="text-3xl font-bold text-primary">{s.v}</div>
                <p className="text-sm text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publications, patents, grants…"
                aria-label="Search publications, patents, and grants"
                className="w-full pl-10 pr-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div role="group" aria-label="Filter by type" className="flex gap-2 overflow-x-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth border ${
                    filter === c
                      ? "gradient-primary text-primary-foreground border-transparent"
                      : "bg-card text-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <ul className="space-y-3" aria-live="polite">
            {filtered.map((i) => {
              const Icon = i.type === "Patent" ? Award : i.type === "Grant" ? Award : FileText;
              const Tag: "a" | "div" = i.href ? "a" : "div";
              const tagProps = i.href ? { href: i.href, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <li key={i.title}>
                  <Tag
                    {...tagProps}
                    className="block rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                          <span className="font-semibold text-secondary">{i.type}</span>
                          <span>·</span>
                          <span>{i.year}</span>
                        </div>
                        <h3 className="text-base mb-1 group-hover:text-primary transition-smooth">{i.title}</h3>
                        {i.source && <p className="text-xs text-muted-foreground">{i.source}</p>}
                      </div>
                      {i.href && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary mt-1" />}
                    </div>
                  </Tag>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="text-center py-12 text-muted-foreground text-sm">No items match your search.</li>
            )}
          </ul>

          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            Sample listing of publications shown for illustration. Full bibliography available
            to qualified clinical and investor partners on request.
          </p>
        </div>
      </section>
    </PageShell>
  );
};
export default PublicationsPage;
