import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is TxGuard®?",
    a: "TxGuard® is a patented regenerative tissue platform developed by Annoviant. It is a decellularized extracellular-matrix (ECM) scaffold processed through Annoviant's proprietary stabilization platform, designed to integrate with host tissue, resist calcification, and support host-mediated remodeling.",
  },
  {
    q: "What tissue source does TxGuard® use?",
    a: "TxGuard® scaffolds are produced from xenogeneic (bovine and porcine) tissue, decellularized through Annoviant's proprietary platform. We disclose source materials transparently to support informed clinical, ethical, and religious decision-making.",
  },
  {
    q: "Has TxGuard® been tested in humans?",
    a: "TxGuard® indications are investigational. The TxGuard® Pulmonary Valved Graft holds an FDA Humanitarian Use Device designation (2020). Pre-clinical evidence to date is from animal studies (lamb-to-sheep models, ISO 5840 / 10993 guidance). Pre-clinical animal results may not predict outcomes in humans.",
  },
  {
    q: "How does TxGuard® differ from glutaraldehyde-treated bioprosthetics?",
    a: "Conventional bioprosthetics are typically fixed with glutaraldehyde, which is associated with calcification, accelerated structural degeneration, and re-intervention over time. TxGuard® is engineered to address those failure modes through preserved ECM architecture and host-mediated remodeling, without glutaraldehyde fixation.",
  },
  {
    q: "Does TxGuard® grow with the patient?",
    a: "In pre-clinical animal models, the TxGuard® scaffold has been characterized as supporting host-mediated remodeling and somatic adaptation. Translation to human pediatric patients remains an active area of research and clinical investigation.",
  },
  {
    q: "What regulatory milestones have been achieved?",
    a: "The TxGuard® Pulmonary Valved Graft received an FDA Humanitarian Use Device (HUD) designation in 2020. Other indications remain investigational and have not received FDA approval for human use.",
  },
  {
    q: "Has the platform been peer-reviewed?",
    a: "The core technology underlying TxGuard® is supported by 14 peer-reviewed scientific publications and protected by 4 issued U.S. patents and 2 pending U.S. / PCT applications.",
  },
  {
    q: "Where is TxGuard® manufactured?",
    a: "TxGuard® is manufactured at an ISO 13485-certified facility, supporting GMP and eDQM standards. Reaching manufacturing readiness at this stage of clinical development is a rare milestone for a regenerative-medicine platform.",
  },
  {
    q: "How can clinicians or investigators access more detailed data?",
    a: "Detailed publications, study protocols, and regulatory documentation are available on request to qualified clinical and investor partners. Use the contact form and select your role for a routed response within two business days.",
  },
  {
    q: "I am the parent of a child with congenital heart disease. Is TxGuard® available for my child?",
    a: "TxGuard® is investigational and not yet broadly available. We share what we know, and what we do not yet know, transparently. If you would like to be notified of program milestones and clinical trial updates, you can sign up via the contact form (select 'Patient or family member').",
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
      title={<>Frequently asked <span className="text-gradient">clinical questions</span></>}
      intro="Answers to the questions surgeons, researchers, partners, and families most commonly ask about TxGuard® and the Annoviant regenerative tissue platform."
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
            Pre-clinical animal data may not predict outcomes in humans. Information on this page is
            for medical, scientific, and investor audiences and does not constitute medical advice.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default FaqPage;
