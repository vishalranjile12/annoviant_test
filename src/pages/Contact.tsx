import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { Contact as ContactSection } from "@/components/site/Contact";

const ContactPage = () => (
  <main id="main">
    <Seo
      title="Contact Annoviant, Request a Briefing"
      description="Connect with the Annoviant team. Surgeons, investors, healthcare partners, and families can request a briefing matched to their context."
    />
    <Nav />
    <div className="pt-20"><ContactSection /></div>
    <Footer />
  </main>
);

export default ContactPage;
