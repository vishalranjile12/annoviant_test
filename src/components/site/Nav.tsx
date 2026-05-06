import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = { href: string; label: string; description?: string };
type NavGroup = { label: string; href?: string; children?: NavLink[] };

const groups: NavGroup[] = [
  {
    label: "Technology",
    children: [
      { href: "/technology", label: "About TxGuard®", description: "How the regenerative platform works" },
      { href: "/technology#mechanism", label: "Mechanism of Action", description: "From scaffold to living tissue" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { href: "/solutions/pediatric", label: "Pediatric", description: "Pulmonary-valved conduit for CHD" },
      { href: "/solutions/cardiovascular", label: "Cardiovascular", description: "Adult heart valve & vascular" },
      { href: "/applications", label: "All Applications", description: "Soft-tissue platform indications" },
    ],
  },
  {
    label: "Clinical Evidence",
    children: [
      { href: "/clinical-evidence", label: "Evidence Hub", description: "Pre-clinical data & comparison" },
      { href: "/publications", label: "Publications & Patents", description: "Peer-reviewed papers, IP portfolio" },
      { href: "/faq", label: "Clinical FAQ", description: "Answers for surgeons and partners" },
      { href: "/news", label: "News & Press", description: "Grants, milestones, coverage" },
    ],
  },
  {
    label: "Company",
    children: [
      { href: "/about", label: "About Annoviant", description: "Mission, values, ecosystem" },
      { href: "/founder-story", label: "Founders Story", description: "How Annoviant came to be" },
      { href: "/founder-story#ajay", label: "Ajay", description: "Ajay Houde, CEO & co-founder" },
      { href: "/founder-story#naren", label: "Naren", description: "Naren Vyavahare, CTO & co-founder" },
      { href: "/team", label: "Our Team", description: "Leadership, advisors, collaborators" },
      { href: "/contact", label: "Contact", description: "Request a briefing" },
    ],
  },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        transparent ? "bg-transparent" : "bg-background/90 backdrop-blur-lg border-b border-border"
      }`}
      role="banner"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to main content</a>
      <div className="container mx-auto flex items-center h-16 md:h-20">
        <Logo light={transparent} />

        <nav className="hidden lg:flex items-center gap-1 ml-auto" aria-label="Primary">
          {groups.map((g) => (
            <div key={g.label} className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-smooth ${
                  transparent ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-primary"
                }`}
                aria-haspopup="true"
              >
                {g.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </button>
              {g.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-smooth">
                  <div className="w-72 rounded-xl border border-border bg-popover shadow-elegant p-2">
                    {g.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block rounded-md px-3 py-2.5 hover:bg-muted transition-smooth"
                      >
                        <div className="text-sm font-semibold text-foreground">{c.label}</div>
                        {c.description && (
                          <div className="text-xs text-muted-foreground mt-0.5">{c.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-8 xl:ml-12">
          <Button asChild variant={transparent ? "secondary" : "default"} size="sm" className={transparent ? "" : "gradient-primary text-primary-foreground border-0"}>
            <Link to="/contact">Request a Briefing</Link>
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
        <div className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {groups.map((g) => (
              <div key={g.label} className="border-b border-border/60 last:border-0 py-2">
                <button
                  className="w-full flex items-center justify-between px-2 py-2 text-left font-semibold text-foreground"
                  onClick={() => setMobileExpanded(mobileExpanded === g.label ? null : g.label)}
                  aria-expanded={mobileExpanded === g.label}
                >
                  {g.label}
                  <ChevronDown className={`h-4 w-4 transition-smooth ${mobileExpanded === g.label ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === g.label && g.children && (
                  <div className="pl-3 pb-2 flex flex-col gap-1">
                    {g.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="px-2 py-2 rounded-md text-sm text-foreground/85 hover:bg-muted"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="mt-3 gradient-primary border-0">
              <Link to="/contact">Request a Briefing</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
