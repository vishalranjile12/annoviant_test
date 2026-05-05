import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact as ContactSection } from "@/components/site/Contact";

const ContactPage = () => {
  useEffect(() => { document.title = "Contact — Annoviant"; }, []);
  return (
    <main>
      <Nav />
      <div className="pt-20"><ContactSection /></div>
      <Footer />
    </main>
  );
};
export default ContactPage;