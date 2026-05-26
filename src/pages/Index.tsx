import { lazy, Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Explainer } from "@/components/site/Explainer";
import { CredentialsStrip } from "@/components/site/CredentialsStrip";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { StickyEngagement } from "@/components/site/StickyEngagement";

// Defer the Contact form (Radix Select etc.); it sits near the bottom of the page.
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));

// Frontend: trimmed home page. Detailed narrative lives on dedicated pages:
//   /technology   — clinical need, mechanism, differentiation
//   /applications — pipeline programs by development stage
//   /investors    — public investor summary
//   /for-...      — audience routing
const Index = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://annoviant.com/#organization",
      name: "Annoviant, Inc.",
      url: "https://annoviant.com/",
      logo: "https://annoviant.com/brand/annoviant-logo-color.png",
      foundingDate: "2018",
      foundingLocation: { "@type": "Place", name: "Alpharetta, Georgia, USA" },
      description: "Annoviant develops TxGuard®, a patented regenerative tissue platform for cardiovascular and soft-tissue applications.",
      sameAs: [
        "https://www.linkedin.com/company/annoviant",
        "https://www.instagram.com/annovianthealth/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "partnerships@annoviant.com",
        areaServed: "US",
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "Regenerative medicine",
        "Decellularized tissue",
        "Pediatric cardiac surgery",
        "Bioprosthetic alternatives",
        "Pulmonary valved graft",
        "Heart valve replacement",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://annoviant.com/#website",
      url: "https://annoviant.com/",
      name: "Annoviant",
      description: "Annoviant develops TxGuard®, a patented regenerative tissue platform.",
      publisher: { "@id": "https://annoviant.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "@id": "https://annoviant.com/#txguard",
      name: "TxGuard®",
      alternateName: "TxGuard regenerative tissue platform",
      manufacturer: { "@id": "https://annoviant.com/#organization" },
      description: "A patented regenerative tissue platform. Decellularized extracellular-matrix scaffold processed through Annoviant's proprietary stabilization platform, designed to integrate with host tissue, resist calcification, and support host-mediated remodeling.",
      purpose: "Cardiovascular and soft-tissue surgical repair",
      medicalSpecialty: ["Cardiology", "CardiothoracicSurgery", "Pediatrics"],
    },
  ];

  return (
    <main id="main" className="pb-20">
      <Seo
        title="Annoviant | Regenerative Tissue Technology for Pediatric & Cardiovascular Repair"
        description="Annoviant develops TxGuard®, a patented biological tissue platform for pediatric and cardiovascular repair, designed to resist calcification and thrombosis, support host-mediated remodeling, and reduce repeat interventions."
        canonical="https://annoviant.com/"
        jsonLd={ld}
      />
      <Nav />
      <Hero />
      <Explainer />
      <CredentialsStrip />
      <Partners />
      <Suspense fallback={<div className="py-32" aria-hidden />}>
        <Contact />
      </Suspense>
      <Footer />
      <StickyEngagement />
    </main>
  );
};

export default Index;
