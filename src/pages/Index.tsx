import { lazy, Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Technology } from "@/components/site/Technology";
import { RegenerationTimeline } from "@/components/site/RegenerationTimeline";
import { Explainer } from "@/components/site/Explainer";
import { Evidence } from "@/components/site/Evidence";
import { Partners } from "@/components/site/Partners";
import { PersonaSelector } from "@/components/site/PersonaSelector";
import { Pipeline } from "@/components/site/Pipeline";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";

// Defer the Contact form (Radix Select etc.) below the fold,
// it isn't visible until the user scrolls past Pipeline.
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));

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
    <main id="main">
      <Seo
        title="Annoviant | Regenerative Medical Devices &amp; TxGuard® Technology"
        description="Annoviant develops TxGuard®, a patented regenerative tissue technology for cardiovascular and pediatric heart disease, designed to reduce repeat surgeries."
        canonical="https://annoviant.com/"
        jsonLd={ld}
      />
      <Nav />
      <Hero />
      <Explainer />
      <Problem />
      <Technology />
      <RegenerationTimeline />
      <Evidence />
      <Partners />
      <PersonaSelector />
      <Pipeline />
      <Suspense fallback={<div className="py-32" aria-hidden />}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Index;
