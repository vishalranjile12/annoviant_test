import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "So what is TxGuard®, in one sentence?",
    a: "It's a tissue scaffold that the body recognizes as its own. We strip the cells out of starting tissue, keep the structure intact, and the body moves in to remodel it. The hope is a heart implant that lasts, integrates, and (in children) grows.",
  },
  {
    q: "Where does the starting tissue come from?",
    a: "From bovine and porcine sources, processed through our own platform. We say so plainly, because patients have a right to know what's being implanted, including for ethical or religious reasons.",
  },
  {
    q: "Has it been used in people yet?",
    a: "Not in any approved indication. The Pulmonary Valved Graft has an FDA Humanitarian Use Device designation (2020), but the broader platform is still investigational. The evidence we have is from animal studies, lamb-to-sheep models, run under ISO 5840 and 10993, and animal results don't always carry over to humans.",
  },
  {
    q: "How is this different from a regular bioprosthetic?",
    a: "Most bioprosthetics get fixed with glutaraldehyde, which is part of why they calcify and break down. TxGuard® doesn't use glutaraldehyde. The scaffold keeps its native ECM structure, which is what lets the body remodel it instead of treating it as a foreign object.",
  },
  {
    q: "Can it really grow with a child?",
    a: "In animal models, yes, it appears to. The scaffold remodels into the host's own tissue and adapts as the animal grows. We're working to confirm what happens in human pediatric patients, that's exactly what the clinical work ahead is for.",
  },
  {
    q: "What about regulation? What's actually in hand?",
    a: "The Pulmonary Valved Graft holds an FDA HUD designation from 2020. Everything else on the platform is investigational, no FDA approval for human use, and we won't pretend otherwise.",
  },
  {
    q: "Has the science been peer-reviewed?",
    a: "Yes. The work behind TxGuard® is in 14 peer-reviewed papers, plus 4 issued U.S. patents and 2 pending U.S./PCT applications.",
  },
  {
    q: "Who actually makes it?",
    a: "We do, at an ISO 13485-certified facility that meets GMP and eDQM standards. Reaching that level of manufacturing readiness this early is unusual, and a big part of why we can move forward at all.",
  },
  {
    q: "How can I see the full data?",
    a: "If you're a clinician, researcher, or investor, ask. We share publications, study protocols, and regulatory documents with qualified partners. The contact form has a role dropdown, pick yours, and we'll route the right materials within two business days.",
  },
  {
    q: "I'm a parent. Is this available for my child today?",
    a: "Not today. The work is still investigational. We'll share what we know, and what we don't, as honestly as we can. If you'd like to follow what's happening, the contact form has a 'Patient or family member' option, and we'll send updates when there's something real to report.",
  },
];

const FaqPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageShell
      eyebrow="Clinical FAQ"
      title={<>The questions <span className="text-gradient">we get asked the most</span></>}
      intro="Surgeons, researchers, partners, and parents tend to ask the same things. We&rsquo;ve gathered the most common questions here, with the answers as plainly as we can give them."
      heroImage="/hero/microscope.jpg"
    >
      <Seo
        title="Clinical FAQ , TxGuard® | Annoviant"
        description="Answers to the most common clinical, regulatory, and patient-facing questions about Annoviant's TxGuard® regenerative tissue platform."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card shadow-card overflow-hidden px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pt-0">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <p className="text-xs text-muted-foreground mt-10 text-center">
            Animal data only takes us so far, human results may differ. What you read here is for
            clinicians, researchers, and investors, it isn&rsquo;t medical advice.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default FaqPage;
