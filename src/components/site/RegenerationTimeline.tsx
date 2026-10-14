import { useState } from "react";
import { Layers, Sparkles, HeartPulse, ArrowRight, Check, Download, FileCheck2, LockKeyhole } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { strapiConfigured, submitContactForm } from "@/lib/strapi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const stages = [
  {
    step: "01",
    icon: Layers,
    title: "We implant the scaffold",
    technical: "The TxGuard® scaffold, an acellular extracellular matrix processed through our proprietary stabilization platform, is implanted using the same surgical technique a surgeon already uses for a conventional bioprosthetic.",
    layman: "Surgeons place the scaffold the same way they place a regular heart valve. No new instruments. No new technique to learn.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "The body moves in",
    technical: "The host's immune system recognizes the preserved ECM cues. Endogenous cells migrate into the scaffold, repopulate it, and engage endothelialization and tissue-ingrowth pathways.",
    layman: "The body sees the scaffold as familiar territory and starts moving its own cells into it, the way it would heal any tissue.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "It becomes living tissue",
    technical: "In pre-clinical animal models, the scaffold has progressively remodeled into a host-derived living tissue, with no calcification observed and the apparent capacity to adapt with somatic growth.",
    layman: "Over time, the scaffold becomes the patient's own tissue. In young animals, it has grown with them. We're working to confirm the same in humans.",
  },
];

const grantMilestones = [
  {
    year: "2019",
    title: "NIH Phase I STTR",
    detail: "Early NIH support advanced the TxGuard® pulmonary-valved conduit program from foundational research toward translational development.",
  },
  {
    year: "2021",
    title: "$1.85M NIH SBIR Phase II",
    detail: "A two-year award supported development and commercialization work for the pediatric pulmonary-valved conduit.",
  },
  {
    year: "2024",
    title: "$2.99M NIH SBIR Phase IIb",
    detail: "The multi-year award builds on Phase II work to advance the program toward pediatric congenital-heart-disease patients.",
  },
] as const;

export const RegenerationTimeline = () => {
  const [mode, setMode] = useState<"technical" | "layman">("technical");
  const [milestone, setMilestone] = useState(2);
  const [gateOpen, setGateOpen] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [gateSubmitting, setGateSubmitting] = useState(false);
  const [gateError, setGateError] = useState("");

  const submitDossierGate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGateSubmitting(true);
    setGateError("");
    const form = new FormData(event.currentTarget);
    const role = String(form.get("role") ?? "clinician") as "clinician" | "procurement" | "partner";

    try {
      if (strapiConfigured) {
        await submitContactForm({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          organization: String(form.get("organization") ?? ""),
          inquiryType: role,
          message: "Requested the TxGuard Preclinical Biocompatibility & Durability Dossier.",
        });
      }
      setAccessGranted(true);
    } catch {
      setGateError("We couldn’t unlock the dossier. Please email contact@annoviant.com for access.");
    } finally {
      setGateSubmitting(false);
    }
  };
  return (
    <section id="mechanism" className="py-24 md:py-32 bg-muted/30" aria-labelledby="mechanism-heading">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              How it actually works
            </p>
            <h2 id="mechanism-heading" className="mb-4">
              From scaffold to <span className="text-gradient">living tissue</span>, in three steps
            </h2>
            <p className="text-muted-foreground medical-body">
              The biology behind TxGuard® is straightforward. Most of what we've spent years on is
              making sure each step works the way it's supposed to, in real animals, under the kind
              of stress a heart actually sees. Here's the story in plain language, with a toggle
              if you want the clinical version.
            </p>
          </div>
          <div
            role="group"
            aria-label="Toggle technical detail level"
            className="inline-flex p-1 rounded-full bg-card border border-border shadow-card self-start"
          >
            <button
              onClick={() => setMode("technical")}
              aria-pressed={mode === "technical"}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
                mode === "technical" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Clinical
            </button>
            <button
              onClick={() => setMode("layman")}
              aria-pressed={mode === "layman"}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
                mode === "layman" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Plain language
            </button>
          </div>
        </div>

        <ol className="grid md:grid-cols-3 gap-5 relative" aria-label="Regeneration timeline">
          {stages.map(({ step, icon: Icon, title, technical, layman }, idx) => (
            <Reveal as="li" key={step} delay={idx * 120} className="relative">
              <div className="bg-card rounded-2xl border border-border p-7 h-full shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-secondary">STEP {step}</span>
                </div>
                <h3 className="mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground" aria-live="polite">
                  {mode === "technical" ? technical : layman}
                </p>
              </div>
              {idx < stages.length - 1 && (
                <ArrowRight aria-hidden className="hidden md:block absolute top-1/2 -right-4 h-6 w-6 text-secondary/60 -translate-y-1/2" />
              )}
            </Reveal>
          ))}
        </ol>

        <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
          What we describe here is what we've seen in pre-clinical animal studies (lamb-to-sheep
          models, run under ISO 5840 and 10993 guidelines). Human results may differ. The TxGuard®
          Pulmonary Valved Graft has FDA Humanitarian Use Device designation (2020); the rest of
          the platform is still investigational.
        </p>

        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <h3 className="mb-4 text-2xl">NIH-backed translation milestones</h3>
              <p className="medical-body mb-8 text-muted-foreground">
                Select a milestone to follow how federal support has moved the pulmonary-valved conduit from early translational work into advanced development. Annoviant reports $5.7M in cumulative NIH backing.
              </p>
              <div className="relative grid grid-cols-3 gap-2" role="tablist" aria-label="NIH grant milestones">
                <span aria-hidden className="absolute left-[12%] right-[12%] top-4 h-px bg-border" />
                {grantMilestones.map((item, index) => (
                  <button
                    key={item.year}
                    type="button"
                    role="tab"
                    aria-selected={milestone === index}
                    aria-controls="grant-milestone-panel"
                    onClick={() => setMilestone(index)}
                    className="relative flex min-h-20 flex-col items-center gap-2 rounded-lg px-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <span className={`z-10 grid h-8 w-8 place-items-center rounded-full border-2 text-[10px] font-bold transition-colors ${milestone === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground"}`}>
                      {index + 1}
                    </span>
                    <span className={`text-sm font-bold tabular-nums ${milestone === index ? "text-primary" : "text-muted-foreground"}`}>{item.year}</span>
                  </button>
                ))}
              </div>
              <div id="grant-milestone-panel" role="tabpanel" className="mt-5 min-h-36 rounded-xl bg-background p-6 shadow-card" aria-live="polite">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-secondary">{grantMilestones[milestone].year}</p>
                <h4 className="mb-3 text-lg font-semibold">{grantMilestones[milestone].title}</h4>
                <p className="text-sm text-muted-foreground">{grantMilestones[milestone].detail}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-surface-deep p-7 text-white shadow-elegant md:p-9">
              <div>
                <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                  <FileCheck2 className="h-5 w-5 text-secondary" aria-hidden />
                </div>
                <h3 className="mb-3 text-2xl text-white">TxGuard™ Preclinical Biocompatibility &amp; Durability Dossier</h3>
                <p className="mb-6 text-sm text-white/70">
                  A concise professional summary of the investigational platform, preclinical study framework, mechanism, and development milestones.
                </p>
                <ul className="mb-8 space-y-3 text-sm text-white/75">
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-secondary" aria-hidden />Mechanism and tissue-processing overview</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-secondary" aria-hidden />Biocompatibility and durability study framework</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-secondary" aria-hidden />Regulatory and NIH development milestones</li>
                </ul>
              </div>
              <Dialog open={gateOpen} onOpenChange={setGateOpen}>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg" className="w-full"><LockKeyhole className="h-4 w-4" aria-hidden />Access the dossier</Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
                  {!accessGranted ? (
                    <>
                      <DialogHeader>
                        <DialogTitle>Access the preclinical dossier</DialogTitle>
                        <DialogDescription>For clinicians, researchers, hospital teams, and qualified partners. Complete the form to unlock the download.</DialogDescription>
                      </DialogHeader>
                      <form className="mt-3 space-y-4" onSubmit={submitDossierGate}>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2"><Label htmlFor="dossier-name">Full name</Label><Input id="dossier-name" name="name" required autoComplete="name" /></div>
                          <div className="space-y-2"><Label htmlFor="dossier-email">Professional email</Label><Input id="dossier-email" name="email" type="email" required autoComplete="email" /></div>
                        </div>
                        <div className="space-y-2"><Label htmlFor="dossier-org">Hospital or organization</Label><Input id="dossier-org" name="organization" required autoComplete="organization" /></div>
                        <div className="space-y-2">
                          <Label htmlFor="dossier-role">Professional role</Label>
                          <select id="dossier-role" name="role" required defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="" disabled>Select your role</option>
                            <option value="clinician">Cardiac surgeon, clinician, or researcher</option>
                            <option value="procurement">Hospital procurement</option>
                            <option value="partner">Strategic partner</option>
                          </select>
                        </div>
                        <p className="text-xs text-muted-foreground">By continuing, you agree that Annoviant may contact you about this request. The dossier describes investigational technology and is not promotional material.</p>
                        {gateError && <p className="text-sm text-destructive" role="alert">{gateError}</p>}
                        <Button type="submit" disabled={gateSubmitting} className="w-full">{gateSubmitting ? "Unlocking…" : "Unlock dossier"}</Button>
                      </form>
                    </>
                  ) : (
                    <div className="py-4">
                      <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-success/10"><FileCheck2 className="h-6 w-6 text-success" aria-hidden /></div>
                      <DialogHeader>
                        <DialogTitle>Your dossier is ready</DialogTitle>
                        <DialogDescription>The document opens as a downloadable, print-ready clinical summary.</DialogDescription>
                      </DialogHeader>
                      <Button asChild size="lg" className="mt-6 w-full">
                        <a href="/dossiers/txguard-preclinical-dossier.html" download><Download className="h-4 w-4" aria-hidden />Download dossier</a>
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
