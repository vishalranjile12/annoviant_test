import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import {
  Lock,
  ShieldCheck,
  FileText,
  FlaskConical,
  Landmark,
  Scale,
  Layers,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const env = import.meta.env as Record<string, string | undefined>;
const EXPECTED_CODE = env.VITE_BRIEFING_CODE;
const DATAROOM_URL = env.VITE_INVESTOR_DATAROOM_URL;
const BRIEFING_EMAIL = "partnerships@annoviant.com";

// High-level categories only. Nothing here discloses confidential detail; the
// actual materials live behind the secure data room, shared by invitation.
const materials = [
  { icon: FileText, title: "Company overview & deck", body: "The investor narrative: positioning, problem, platform, and the ask." },
  { icon: FlaskConical, title: "Pre-clinical data package", body: "Study summaries run to ISO standards, available under NDA to qualified parties." },
  { icon: ShieldCheck, title: "Regulatory status & strategy", body: "FDA HUD designation, pathway, and the milestones ahead." },
  { icon: Scale, title: "IP & patent portfolio", body: "Issued U.S. patents and pending PCT applications covering the TxGuard® platform." },
  { icon: Layers, title: "Pipeline & platform expansion", body: "Program-by-program detail from pulmonary valved conduit to adjacent indications." },
  { icon: Landmark, title: "Financials & use of funds", body: "Round structure, allocation, and runway, shared with qualified investors." },
  { icon: Users, title: "Team, advisors & collaborators", body: "Leadership, scientific advisors, and the institutions behind the work." },
];

const InvestorBriefing = () => {
  const [code, setCode] = useState("");
  const [granted, setGranted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (EXPECTED_CODE && code.trim() === EXPECTED_CODE) {
      setGranted(true);
      return;
    }
    setError(
      EXPECTED_CODE
        ? "That invitation code wasn't recognized. Check the invite we sent, or request access below."
        : "Briefing access isn't open yet. Request an invitation below and we'll be in touch."
    );
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Investor Briefing | Annoviant",
    description:
      "An invite-only briefing room for qualified investors and strategic partners evaluating Annoviant's TxGuard® regenerative tissue platform.",
    isAccessibleForFree: false,
  };

  return (
    <PageShell
      eyebrow="Investor Briefing · By invitation"
      title={
        <>
          The Annoviant <span className="text-gradient">investor &amp; partner</span> briefing
        </>
      }
      intro="A private briefing room for qualified investors and strategic partners. Diligence materials, the technical data room, and pipeline detail are shared by invitation, not published here."
    >
      <Seo
        title="Investor Briefing | Annoviant"
        description="Invite-only briefing room for qualified investors and strategic partners evaluating Annoviant's TxGuard® regenerative tissue platform."
        jsonLd={ld}
      />

      {/* What's inside */}
      <section className="py-16 md:py-24" aria-labelledby="materials-heading">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              What&rsquo;s inside
            </p>
            <h2 id="materials-heading" className="mb-4">
              The diligence package, at a glance
            </h2>
            <p className="text-muted-foreground medical-body">
              We keep the detail behind an invitation so it reaches the right audience. Here is the
              shape of what qualified investors and strategic partners receive once access is granted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {materials.map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-background px-6 py-7">
                <Icon className="h-5 w-5 text-primary mb-3" aria-hidden />
                <h3 className="text-base md:text-lg mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Access gate */}
      <section className="py-16 md:py-24 gradient-deep text-white relative overflow-hidden" aria-labelledby="access-heading">
        <div aria-hidden className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[160px]" />
        <div aria-hidden className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />

        <div className="container mx-auto relative">
          <div className="max-w-xl mx-auto">
            {granted ? (
              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-8 text-center">
                <ShieldCheck className="h-8 w-8 text-secondary mx-auto mb-4" aria-hidden />
                <h2 id="access-heading" className="text-white mb-3">You&rsquo;re in</h2>
                <p className="text-white/80 medical-body mb-8">
                  Your briefing materials are hosted in our secure data room. Open it below, or reply
                  to your invitation email and we&rsquo;ll walk you through it.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {DATAROOM_URL ? (
                    <a
                      href={DATAROOM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
                    >
                      Open the data room <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={`mailto:${BRIEFING_EMAIL}?subject=Investor%20briefing%20access`}
                      className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
                    >
                      Email us for the materials <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-10 w-10 rounded-xl grid place-items-center gradient-primary text-primary-foreground shadow-glow">
                    <Lock className="h-5 w-5" />
                  </span>
                  <h2 id="access-heading" className="text-white">Enter your invitation code</h2>
                </div>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                  <label htmlFor="briefing-code" className="sr-only">Invitation code</label>
                  <input
                    id="briefing-code"
                    type="text"
                    autoComplete="off"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Invitation code"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary min-h-[44px]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
                  >
                    Unlock the briefing <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                {error && (
                  <p className="text-sm text-empathy mt-3" role="alert">{error}</p>
                )}

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-white/70 mb-3">Don&rsquo;t have an invitation?</p>
                  <Link
                    to="/contact?role=investor"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-smooth"
                  >
                    Request access to the briefing <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}

            <p className="text-xs text-white/50 mt-6 text-center max-w-md mx-auto">
              Access is limited to qualified investors and strategic partners. Materials are
              confidential and shared under NDA. TxGuard® is investigational.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default InvestorBriefing;
