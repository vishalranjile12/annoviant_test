import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

// Flat navigation (Magenta-inspired): one tap to each hub, no taxonomy to
// decode. Deeper pages are reachable from each hub and from the footer, which
// keeps the full sitemap. Audience routing ("For clinicians/investors/...")
// lives in the home chooser + footer rather than a top-level dropdown.
const items: NavItem[] = [
  { href: "/technology", label: "Technology" },
  { href: "/applications", label: "Pipeline" },
  { href: "/clinical-evidence", label: "Evidence" },
  { href: "/about", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        transparent ? "bg-transparent" : "bg-background/90 backdrop-blur-lg border-b border-border"
      }`}
      role="banner"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to main content</a>
      <div className="container mx-auto flex items-center h-20 md:h-24">
        <Logo light={transparent} />

        <nav className="hidden lg:flex items-center gap-1 ml-auto" aria-label="Primary">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-smooth ${
                  transparent
                    ? "text-white/85 hover:text-white"
                    : `text-foreground/80 hover:text-primary ${active ? "text-primary" : ""}`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-4 xl:ml-8">
          <Button asChild variant={transparent ? "secondary" : "default"} size="sm" className={transparent ? "" : "gradient-primary text-primary-foreground border-0"}>
            <Link to="/contact?role=clinician">Connect with Medical Affairs</Link>
          </Button>
        </div>

        <button
          className={`lg:hidden ml-auto p-2 rounded-md ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block w-full px-2 py-3 text-left font-semibold text-foreground border-b border-border/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 gradient-primary border-0">
              <Link to="/contact?role=clinician">Connect with Medical Affairs</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
