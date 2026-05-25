import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";
import { getAnswer } from "@/data/answers";

const SITE = "https://annoviant.com";
const abs = (href: string) => (href.startsWith("http") ? href : SITE + href);

const organization = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": `${SITE}/#organization`,
  name: "Annoviant, Inc.",
  url: `${SITE}/`,
  logo: `${SITE}/brand/annoviant-logo-color.png`,
  description:
    "Annoviant develops TxGuard®, a patented regenerative tissue platform for pediatric and cardiovascular repair.",
  founder: [
    { "@type": "Person", name: "Ajay Houde", jobTitle: "CEO & Co-founder", sameAs: "https://www.linkedin.com/in/ajayhoude/" },
    { "@type": "Person", name: "Naren Vyavahare", jobTitle: "CTO & Co-founder", sameAs: "https://www.linkedin.com/in/narendra-vyavahare-147a4213/" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/annoviant",
    "https://www.instagram.com/annovianthealth/",
  ],
};

const AnswerPage = () => {
  const { slug } = useParams();
  const answer = getAnswer(slug);

  if (!answer) return <Navigate to="/answers" replace />;

  const url = `${SITE}/answers/${answer.slug}`;
  const reviewed = `${answer.updated}-01-01`;
  const related = answer.related.map(getAnswer).filter(Boolean);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      name: answer.metaTitle,
      headline: answer.question,
      description: answer.metaDescription,
      url,
      inLanguage: "en-US",
      datePublished: reviewed,
      dateModified: reviewed,
      lastReviewed: reviewed,
      keywords: answer.keywords.join(", "),
      isPartOf: { "@type": "WebSite", "@id": `${SITE}/#website` },
      publisher: { "@id": `${SITE}/#organization` },
      about: { "@type": "MedicalDevice", name: "TxGuard®", "@id": `${SITE}/#txguard` },
      citation: answer.citations.map((c) => ({
        "@type": "CreativeWork",
        name: c.label,
        ...(c.href ? { url: abs(c.href) } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: answer.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    organization,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE}/answers` },
        { "@type": "ListItem", position: 3, name: answer.question, item: url },
      ],
    },
  ];

  return (
    <PageShell
      eyebrow="Answers · TxGuard® knowledge base"
      title={answer.question}
      intro={`Last reviewed ${answer.updated} · Annoviant`}
      heroImage="/hero/microscope.jpg"
    >
      <Seo title={answer.metaTitle} description={answer.metaDescription} canonical={url} jsonLd={ld} />

      <article className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl">
          {/* Direct-answer block */}
          <Reveal>
            <div className="rounded-2xl border border-primary/25 bg-card shadow-card p-6 md:p-8 mb-12">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                <Sparkles className="h-3.5 w-3.5" aria-hidden /> Direct answer
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed medical-body">
                {answer.shortAnswer}
              </p>
            </div>
          </Reveal>

          {/* Body sections */}
          {answer.sections.map((s, i) => (
            <Reveal key={s.heading ?? i} delay={i * 40}>
              <section className="mb-10">
                {s.heading && <h2 className="text-xl md:text-2xl mb-4">{s.heading}</h2>}
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground medical-body mb-4">{p}</p>
                ))}
                {s.list && (
                  <ul className="mt-2 space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          {/* FAQ */}
          <Reveal>
            <section className="mt-14 pt-10 border-t border-border" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-xl md:text-2xl mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                {answer.faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="font-semibold text-foreground mb-1.5">{f.q}</dt>
                    <dd className="text-muted-foreground medical-body">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </Reveal>

          {/* Citations */}
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              References & further reading
            </h2>
            <ul className="space-y-2">
              {answer.citations.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <Link to={c.href} className="text-primary hover:text-secondary transition-smooth inline-flex items-center gap-1.5">
                      {c.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6">
              TxGuard® is investigational. Educational content describes general medical concepts and
              Annoviant&rsquo;s design intent; it is not medical advice or a claim of proven clinical benefit.
            </p>
          </section>

          {/* CTA */}
          {answer.cta && (
            <div className="mt-12">
              <Link
                to={answer.cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
              >
                {answer.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border">
              <h2 className="text-xl md:text-2xl mb-6">Related questions</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r!.slug}
                    to={`/answers/${r!.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant transition-smooth"
                  >
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-smooth mb-1">
                      {r!.question}
                    </h3>
                    <span className="text-sm text-secondary inline-flex items-center gap-1.5">
                      Read the answer <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-smooth" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </PageShell>
  );
};

export default AnswerPage;
