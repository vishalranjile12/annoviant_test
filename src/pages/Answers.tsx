import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, HelpCircle } from "lucide-react";
import { answers } from "@/data/answers";

const SITE = "https://annoviant.com";

const AnswersIndex = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "TxGuard® Answers, Annoviant knowledge base",
      description:
        "Plain-language answers about TxGuard®, pulmonary valved conduits, calcification in bioprosthetic valves, pediatric repeat heart surgery, and regenerative heart-valve technologies.",
      url: `${SITE}/answers`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: answers.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.question,
        url: `${SITE}/answers/${a.slug}`,
      })),
    },
  ];

  return (
    <PageShell
      eyebrow="Knowledge base"
      title={
        <>
          TxGuard® <span className="text-gradient">answers</span>
        </>
      }
      intro="Plain-language answers to the questions clinicians, investors, and families ask most, about the technology, the conditions it targets, and how regenerative tissue differs from conventional prosthetics."
      heroImage="/hero/microscope.jpg"
    >
      <Seo
        title="TxGuard® Answers, Knowledge Base | Annoviant"
        description="Plain-language answers about TxGuard®, pulmonary valved conduits, bioprosthetic valve calcification, pediatric repeat heart surgery, and regenerative heart-valve technologies."
        canonical={`${SITE}/answers`}
        jsonLd={ld}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <ul className="grid sm:grid-cols-2 gap-5">
            {answers.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 60} className="h-full">
                <Link
                  to={`/answers/${a.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth"
                >
                  <HelpCircle className="h-5 w-5 text-primary mb-3" aria-hidden />
                  <h2 className="text-lg md:text-xl mb-2 group-hover:text-primary transition-smooth">{a.question}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.shortAnswer.slice(0, 170)}…</p>
                  <span className="mt-4 text-sm font-semibold text-secondary inline-flex items-center gap-1.5">
                    Read the answer <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-smooth" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
};

export default AnswersIndex;
