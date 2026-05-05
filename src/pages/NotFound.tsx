import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Microscope, Mail } from "lucide-react";

const suggestions = [
  { icon: Home, label: "Homepage", href: "/" },
  { icon: Microscope, label: "TxGuard® Technology", href: "/technology" },
  { icon: BookOpen, label: "Clinical Evidence", href: "/clinical-evidence" },
  { icon: Mail, label: "Contact us", href: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof console !== "undefined") {
      console.warn("404:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <main id="main">
      <Seo
        title="Page not found , Annoviant"
        description="The page you are looking for could not be found. Explore the TxGuard® regenerative tissue platform, clinical evidence, and team."
      />
      <Nav />
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 gradient-hero text-white overflow-hidden min-h-[80svh] flex items-center">
        <img
          src="/hero/heart-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-deep/95 via-surface-deep/70 to-transparent" />
        <div aria-hidden className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[120px]" />
        <div className="container mx-auto relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4 animate-fade-up">
            Error 404
          </p>
          <h1 className="text-white mb-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
            We could not find that page
          </h1>
          <p className="text-lg text-white/80 medical-body mb-10 animate-fade-up" style={{ animationDelay: "160ms" }}>
            The page may have moved or no longer exists. Try one of the suggestions below or
            return to the homepage.
          </p>
          <div className="flex flex-wrap gap-3 mb-12 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button asChild size="lg" className="gradient-primary border-0 min-h-[44px]">
              <Link to="/">Back to homepage</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-up" style={{ animationDelay: "320ms" }}>
            {suggestions.map(({ icon: Icon, label, href }) => (
              <Link
                key={href}
                to={href}
                className="rounded-lg border border-white/15 bg-white/5 backdrop-blur p-4 hover:bg-white/10 transition-smooth flex items-center gap-3 min-h-[44px]"
              >
                <Icon className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
