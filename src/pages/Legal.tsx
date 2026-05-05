import { useParams } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";

const docs: Record<string, { title: string; intro: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro: "How Annoviant collects, uses, and protects information from visitors to this site and inquiries from clinical and investor partners.",
    sections: [
      { heading: "Information we collect", body: "We collect contact information you submit through inquiry forms (name, email, organization, role) and standard server logs (IP address, browser, referring page). We do not knowingly collect protected health information through this site." },
      { heading: "How we use information", body: "We use submitted information solely to respond to your inquiry, share materials matched to your role, and meet legal and regulatory obligations. We do not sell personal information." },
      { heading: "Cookies", body: "We use a minimal set of functional cookies necessary for site operation. We do not use third-party advertising trackers." },
      { heading: "Contact", body: "Privacy questions: privacy@annoviant.com." },
    ],
  },
  terms: {
    title: "Terms of Use",
    intro: "These terms govern your use of annoviant.com.",
    sections: [
      { heading: "Investigational status", body: "TxGuard® indications are investigational unless otherwise specified. The TxGuard® Pulmonary Valved Graft holds an FDA Humanitarian Use Device designation (2020). Information on this site is intended for medical, scientific, and investor audiences and does not constitute medical advice." },
      { heading: "No medical advice", body: "Content is informational. Patients should consult their own qualified healthcare professionals for medical decisions." },
      { heading: "Intellectual property", body: "TxGuard® is a registered trademark of Annoviant. Site content is © Annoviant, Inc. All rights reserved." },
      { heading: "Forward-looking statements", body: "Pipeline status, market projections, and pre-clinical findings reflect Annoviant's current view and may change. Forecasts are not guarantees." },
    ],
  },
  fcoi: {
    title: "Financial Conflict of Interest (FCOI) Policy",
    intro: "Annoviant maintains an FCOI policy consistent with NIH grant requirements (42 CFR Part 50, Subpart F).",
    sections: [
      { heading: "Scope", body: "All Annoviant investigators participating in PHS-funded research are subject to FCOI training, disclosure, and management requirements." },
      { heading: "Disclosure", body: "Significant financial interests related to institutional responsibilities must be disclosed annually and within 30 days of acquisition or discovery." },
      { heading: "Management", body: "Identified financial conflicts of interest are reviewed and managed in accordance with NIH guidance prior to expenditure of grant funds." },
      { heading: "Public accessibility", body: "Annoviant maintains procedures to make information about identified FCOIs available to the public upon request, consistent with 42 CFR §50.605(a)(5)." },
    ],
  },
};

const LegalPage = () => {
  const { slug = "" } = useParams();
  const doc = docs[slug];

  if (!doc) {
    return (
      <PageShell eyebrow="Legal" title="Document not found" intro="The legal document you requested is not available.">
        <Seo title="Legal, Annoviant" description="Annoviant legal documents." />
        <section className="py-20 md:py-28" />
      </PageShell>
    );
  }

  return (
    <PageShell eyebrow="Legal" title={doc.title} intro={doc.intro}>
      <Seo
        title={`${doc.title}, Annoviant`}
        description={doc.intro}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          {doc.sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="mb-3 text-xl">{s.heading}</h2>
              <p className="text-muted-foreground medical-body">{s.body}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground border-t border-border pt-6">
            Last updated: {new Date().getFullYear()}. This document is a placeholder for an Annoviant-approved legal version.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default LegalPage;
