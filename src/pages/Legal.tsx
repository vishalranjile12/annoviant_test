import { useParams, Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { legalDocs } from "@/data/legal";

const LegalPage = () => {
  const { slug = "" } = useParams<{ slug: keyof typeof legalDocs }>();
  const doc = legalDocs[slug as keyof typeof legalDocs];

  if (!doc) {
    return (
      <PageShell
        eyebrow="Legal"
        title="Document not found"
        intro="The legal document you requested is not available."
      >
        <Seo title="Legal, Annoviant" description="Annoviant legal documents." />
        <section className="py-20 md:py-28 container mx-auto">
          <Link to="/legal/privacy" className="text-primary hover:text-secondary">
            View the Privacy Policy
          </Link>
        </section>
      </PageShell>
    );
  }

  // Build a quick table-of-contents anchor map from each section heading.
  const slugifyHeading = (h: string) =>
    h
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <PageShell eyebrow="Legal" title={doc.title} intro={doc.intro}>
      <Seo title={`${doc.title}, Annoviant`} description={doc.intro} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-10">
            Effective {doc.effectiveDate}
          </div>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="mb-12 border-l-2 border-border pl-5">
            <p className="text-[11px] uppercase tracking-widest text-secondary font-semibold mb-3">
              On this page
            </p>
            <ol className="space-y-1.5">
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugifyHeading(s.heading)}`}
                    className="text-sm text-foreground/80 hover:text-primary transition-smooth"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <article className="space-y-12">
            {doc.sections.map((s) => (
              <section key={s.heading} id={slugifyHeading(s.heading)}>
                <h2 className="mb-4 text-xl md:text-2xl scroll-mt-24">{s.heading}</h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-foreground/85 medical-body">
                      {p}
                    </p>
                  ))}
                  {s.list && s.list.length > 0 &&
                    (s.listOrdered ? (
                      <ol className="list-decimal pl-5 space-y-2 text-foreground/85 medical-body marker:text-secondary marker:font-semibold">
                        {s.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="list-disc pl-5 space-y-2 text-foreground/85 medical-body marker:text-secondary">
                        {s.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ))}
                </div>
              </section>
            ))}
          </article>

          {/* Cross-links */}
          <div className="mt-16 pt-8 border-t border-border grid sm:grid-cols-3 gap-3 text-xs">
            {(["privacy", "terms", "fcoi"] as const).map((s) => (
              <Link
                key={s}
                to={`/legal/${s}`}
                className={`block px-4 py-3 rounded-md border transition-smooth ${
                  s === doc.slug
                    ? "border-primary/30 bg-primary/5 text-primary font-semibold"
                    : "border-border hover:border-primary/40 text-foreground/80 hover:text-primary"
                }`}
              >
                <span className="block uppercase tracking-widest text-[10px] text-muted-foreground mb-0.5">
                  Legal
                </span>
                <span className="block">{legalDocs[s].title}</span>
              </Link>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            This document is published in good faith and reflects prevailing healthcare-industry
            standards (HIPAA, GDPR/CCPA, FDA medical-device guidance, and 42 CFR Part 50 Subpart F
            for the FCOI Policy). It is not legal advice. Annoviant counsel reviews this document
            prior to publication and from time to time as regulations evolve.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default LegalPage;
