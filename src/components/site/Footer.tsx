import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Linkedin, Instagram, Mail, ShieldCheck } from "lucide-react";

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

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Technology</div>
            <Link to="/technology" className="block py-1 hover:text-secondary">About TxGuard®</Link>
            <Link to="/applications" className="block py-1 hover:text-secondary">Applications</Link>
            <Link to="/#pipeline" className="block py-1 hover:text-secondary">Pipeline</Link>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Solutions</div>
            <Link to="/solutions/pediatric" className="block py-1 hover:text-secondary">Pediatric</Link>
            <Link to="/solutions/cardiovascular" className="block py-1 hover:text-secondary">Cardiovascular</Link>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Evidence</div>
            <Link to="/clinical-evidence" className="block py-1 hover:text-secondary">Evidence Hub</Link>
            <Link to="/publications" className="block py-1 hover:text-secondary">Publications &amp; Patents</Link>
            <Link to="/faq" className="block py-1 hover:text-secondary">Clinical FAQ</Link>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Company</div>
            <Link to="/about" className="block py-1 hover:text-secondary">About</Link>
            <Link to="/founder-story" className="block py-1 hover:text-secondary">Founders Story</Link>
            <Link to="/team" className="block py-1 hover:text-secondary">Team</Link>
            <Link to="/news" className="block py-1 hover:text-secondary">News &amp; Press</Link>
            <Link to="/contact" className="block py-1 hover:text-secondary">Contact</Link>
          </div>
        </div>
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
