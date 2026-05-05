import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-surface-deep text-white/70 py-12 border-t border-white/5">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        <div className="max-w-sm">
          <Logo light />
          <p className="text-sm mt-4 text-white/55">
            Annoviant develops TxGuard™, a patented regenerative tissue platform for
            cardiovascular and soft-tissue applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold text-white mb-3">Platform</div>
            <a href="/technology" className="block py-1 hover:text-secondary">Technology</a>
            <a href="/applications" className="block py-1 hover:text-secondary">Applications</a>
            <a href="/#pipeline" className="block py-1 hover:text-secondary">Pipeline</a>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Engage</div>
            <a href="/#audiences" className="block py-1 hover:text-secondary">For Clinicians</a>
            <a href="/#audiences" className="block py-1 hover:text-secondary">For Investors</a>
            <a href="/contact" className="block py-1 hover:text-secondary">Contact</a>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <a href="/about" className="block py-1 hover:text-secondary">About</a>
            <a href="/news" className="block py-1 hover:text-secondary">News</a>
            <a href="/contact" className="block py-1 hover:text-secondary">Contact</a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/45">
        <span>© {new Date().getFullYear()} Annoviant, Inc. All rights reserved. TxGuard™ is a trademark of Annoviant.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
