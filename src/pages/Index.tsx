import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Technology } from "@/components/site/Technology";
import { Evidence } from "@/components/site/Evidence";
import { Audiences } from "@/components/site/Audiences";
import { Pipeline } from "@/components/site/Pipeline";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Annoviant",
    url: "https://annoviant.com/",
    description:
      "Annoviant develops TxGuard™, a patented regenerative tissue platform for cardiovascular and soft-tissue applications.",
    sameAs: [],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav />
      <Hero />
      <Problem />
      <Technology />
      <Evidence />
      <Audiences />
      <Pipeline />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
