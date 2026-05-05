import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/technology", label: "Technology" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        transparent ? "bg-transparent" : "bg-background/85 backdrop-blur-lg border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Logo light={transparent} />
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-smooth hover:text-secondary ${
                transparent ? "text-white/85" : "text-foreground/80"
              } ${pathname === l.href ? "text-secondary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant={transparent ? "secondary" : "outline"} size="sm">
            <Link to="/contact">Request Briefing</Link>
          </Button>
        </div>
        <button
          className={`md:hidden p-2 rounded ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-foreground/80 py-2">
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact">Request Briefing</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
