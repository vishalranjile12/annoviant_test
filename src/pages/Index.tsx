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
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";

const Index = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Annoviant, Inc.",
      url: "https://annoviant.com/",
      foundingDate: "2018",
      description: "Annoviant develops TxGuard®, a patented regenerative tissue platform for cardiovascular and soft-tissue applications.",
      sameAs: [
        "https://www.linkedin.com/company/annoviant",
        "https://www.instagram.com/annovianthealth/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      name: "TxGuard®",
      manufacturer: { "@type": "Organization", name: "Annoviant, Inc." },
      description: "Patented regenerative tissue platform engineered to integrate, adapt, and endure for cardiovascular and soft-tissue applications.",
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
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
