import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Linkedin, Instagram, Mail, ShieldCheck, Lock } from "lucide-react";

type LinkItem = { to: string; label: string };
type Group = { title: string; links: LinkItem[] };

const groups: Group[] = [
  {
    title: "For…",
    links: [
      { to: "/for-investors", label: "Investors & Partners" },
      { to: "/for-clinicians", label: "Clinicians & Surgeons" },
      { to: "/for-patients", label: "Patients & Families" },
    ],
  },
  {
    title: "Platform & Pipeline",
    links: [
      { to: "/technology", label: "About TxGuard®" },
      { to: "/applications", label: "Applications" },
      { to: "/solutions/pediatric", label: "Pediatric" },
      { to: "/solutions/cardiovascular", label: "Cardiovascular" },
      { to: "/#pipeline", label: "Pipeline" },
    ],
  },
  {
    title: "Evidence",
    links: [
      { to: "/clinical-evidence", label: "Evidence Hub" },
      { to: "/publications", label: "Publications & Patents" },
      { to: "/faq", label: "Clinical FAQ" },
      { to: "/answers", label: "TxGuard® Answers" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/founder-story", label: "Founders' Story" },
      { to: "/team", label: "Team" },
      { to: "/news", label: "News & Press" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-surface-deep text-white/70 pt-16 pb-10 border-t border-white/5">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="text-sm mt-4 text-white/55 max-w-sm">
            We&rsquo;re Annoviant. We&rsquo;re building TxGuard®, a tissue platform that the body
            recognizes as its own and remakes into living tissue, for heart valves, vascular
            grafts, and soft-tissue repair.
          </p>
          <p className="text-xs uppercase tracking-widest text-secondary mt-5 font-semibold">
            Enabling healthier lives.
          </p>

          {/* Investor entry — promoted to logo column so it sits high in the footer */}
          <div className="mt-7 flex flex-wrap gap-2">
            <Link
              to="/investors"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85 hover:bg-white/10 hover:text-white transition-smooth"
            >
              Investor view
            </Link>
            <Link
              to="/investor-briefing"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85 hover:bg-white/10 hover:text-white transition-smooth"
            >
              <Lock className="h-3 w-3 text-secondary" aria-hidden />
              Briefing room
            </Link>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://www.linkedin.com/company/annoviant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Annoviant on LinkedIn for clinical updates"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-smooth"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/annovianthealth/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Annoviant on Instagram"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-smooth"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="mailto:partnerships@annoviant.com"
              aria-label="Email Annoviant"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-smooth"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm" aria-label="Footer">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">
                {g.title}
              </div>
              <ul className="space-y-1">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="block py-1 hover:text-secondary transition-smooth">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/45 space-y-3">
        <p className="flex items-start gap-2">
          <ShieldCheck className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-secondary" />
          <span>
            <strong className="text-white/70 font-semibold">A few honest words.</strong> TxGuard® is investigational
            for most indications, still working through pre-clinical and IND-enabling development. The Pulmonary Valved
            Graft has an FDA Humanitarian Use Device designation (2020). Everything you&rsquo;ll read here is meant for
            clinicians, researchers, and investors who want to dig in. Our scaffolds are made from bovine and porcine
            tissue, decellularized through our own platform, and we say so because patients have a right to know.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Annoviant, Inc. All rights reserved. TxGuard® is a registered trademark of Annoviant.</span>
          <div className="flex gap-5">
            <Link to="/legal/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-white">Terms</Link>
            <Link to="/legal/fcoi" className="hover:text-white">FCOI Policy</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
