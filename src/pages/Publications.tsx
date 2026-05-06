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
      title={<>The <span className="text-gradient">paper trail</span></>}
      intro="Peer-reviewed papers, U.S. patents, PCT applications, and NIH grants behind the TxGuard® platform, all in one place. Filter, search, and dig as deep as you want."
      heroImage="/hero/microscope.jpg"
    >
      <Seo
        title="Publications &amp; Patents, TxGuard® | Annoviant"
        description="14 peer-reviewed publications, 4 issued U.S. patents, 2 PCT applications, and $5.7M in NIH funding supporting the TxGuard® regenerative tissue platform."
        jsonLd={ld}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto">
          {/* Compact stat strip, only inner dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-10">
            {[
              { v: "14", l: "peer-reviewed papers" },
              { v: "4", l: "U.S. patents issued" },
              { v: "2", l: "U.S. & PCT applications" },
              { v: "$5.7M", l: "NIH funding to date" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`py-5 lg:py-6 px-5 lg:px-6
                  ${i === 0 ? "border-r border-border lg:border-r" : ""}
                  ${i === 1 ? "lg:border-r border-border" : ""}
                  ${i === 2 ? "border-r border-border lg:border-r" : ""}
                  ${i < 2 ? "border-b border-border lg:border-b-0" : ""}
                `}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary tabular-nums">{s.v}</div>
                <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
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

          <ul aria-live="polite">
            {filtered.map((i, idx) => {
              const Icon = i.type === "Patent" ? Award : i.type === "Grant" ? Award : FileText;
              const Tag: "a" | "div" = i.href ? "a" : "div";
              const tagProps = i.href ? { href: i.href, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <li
                  key={i.title}
                  className={idx < filtered.length - 1 ? "border-b border-border" : ""}
                >
                  <Tag
                    {...tagProps}
                    className="group block px-5 md:px-6 py-4 md:py-5 hover:bg-muted/40 transition-smooth"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Year, fixed-width left rail */}
                      <span className="hidden sm:block text-sm font-semibold text-muted-foreground tabular-nums w-12 flex-shrink-0">
                        {i.year}
                      </span>

                      {/* Type pill */}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-secondary w-24 flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {i.type}
                      </span>

                      {/* Title + source */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-smooth leading-snug">
                          {i.title}
                        </div>
                        {i.source && (
                          <div className="text-xs text-muted-foreground mt-0.5 truncate">{i.source}</div>
                        )}
                        {/* mobile-only meta */}
                        <div className="sm:hidden text-[11px] uppercase tracking-wider text-muted-foreground mt-1.5 font-semibold">
                          {i.year}
                        </div>
                      </div>

                      {i.href && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0" aria-hidden />
                      )}
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
            What&rsquo;s shown here is a sample. The complete bibliography is available to qualified
            clinical and investor partners, just ask.
          </p>
        </div>
      </section>
    </PageShell>
  );
};
export default PublicationsPage;
