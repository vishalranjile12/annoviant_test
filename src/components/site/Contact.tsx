import { useEffect, useId, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { strapiConfigured, submitContactForm } from "@/lib/strapi";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const PATHWAYS = ["clinician", "procurement", "partner"] as const;
type Pathway = (typeof PATHWAYS)[number];

const pathwayContent: Record<Pathway, {
  label: string;
  shortLabel: string;
  description: string;
  interestLabel: string;
  interests: string[];
  icon: typeof Stethoscope;
}> = {
  clinician: {
    label: "Cardiac Surgeons & Clinicians",
    shortLabel: "Clinical",
    description: "Review mechanism, preclinical evidence, publications, or discuss a research collaboration.",
    interestLabel: "Clinical interest",
    interests: ["Pediatric cardiac surgery", "Adult cardiovascular surgery", "Preclinical evidence", "Research collaboration"],
    icon: Stethoscope,
  },
  procurement: {
    label: "Hospital Procurement",
    shortLabel: "Procurement",
    description: "Discuss product readiness, institutional evaluation, supply planning, and future access.",
    interestLabel: "Procurement priority",
    interests: ["Institutional evaluation", "Product availability", "Supply and implementation", "Health economics"],
    icon: Building2,
  },
  partner: {
    label: "Strategic Partners",
    shortLabel: "Partnerships",
    description: "Explore development, manufacturing, licensing, investment, or commercialization opportunities.",
    interestLabel: "Partnership focus",
    interests: ["Strategic collaboration", "Manufacturing and scale-up", "Licensing and commercialization", "Investment"],
    icon: Handshake,
  },
};

const queryRole = (value: string | null): Pathway | null => {
  if (value === "clinician") return "clinician";
  if (value === "procurement" || value === "hospital") return "procurement";
  if (value === "partner" || value === "investor") return "partner";
  return null;
};

export const Contact = ({ pageHeading = false }: { pageHeading?: boolean }) => {
  const [params] = useSearchParams();
  const initialPathway = queryRole(params.get("role"));
  const [pathway, setPathway] = useState<Pathway | null>(initialPathway);
  const [step, setStep] = useState<1 | 2>(initialPathway ? 2 : 1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const headingId = useId();
  const Heading = pageHeading ? "h1" : "h2";
  const Subheading = pageHeading ? "h2" : "h3";

  useEffect(() => {
    const next = queryRole(params.get("role"));
    if (next) {
      setPathway(next);
      setStep(2);
    }
  }, [params]);

  const choosePathway = (next: Pathway) => {
    setPathway(next);
    setError("");
  };

  const continueToDetails = () => {
    if (!pathway) {
      setError("Choose the pathway that best matches your role.");
      return;
    }
    setStep(2);
    setError("");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pathway) return;
    setSubmitting(true);
    setError("");

    const form = new FormData(event.currentTarget);
    const interest = String(form.get("interest") ?? "");
    const title = String(form.get("title") ?? "");
    const context = String(form.get("message") ?? "");

    try {
      if (strapiConfigured) {
        await submitContactForm({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          organization: String(form.get("organization") ?? ""),
          inquiryType: pathway,
          message: [title && `Title or specialty: ${title}`, interest && `${pathwayContent[pathway].interestLabel}: ${interest}`, context].filter(Boolean).join("\n\n"),
        });
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 500));
      }
      setSubmitted(true);
      toast.success("Request received. Our team will respond within two business days.");
    } catch {
      setError("We couldn’t send your request. Please email contact@annoviant.com and our team will help.");
    } finally {
      setSubmitting(false);
    }
  };

  const active = pathway ? pathwayContent[pathway] : null;

  return (
    <section id="contact" className="relative overflow-hidden py-24 text-white gradient-deep md:py-32" aria-labelledby={headingId}>
      <div aria-hidden className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[140px]" />
      <div className="container relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Medical affairs</p>
            <Heading id={headingId} className="mb-5 text-white">Start with the team that knows your work</Heading>
            <p className="medical-body mb-8 text-white/75">
              Choose your role first. We’ll ask only for the context needed to route your request to the right clinical, procurement, or partnership lead.
            </p>

            <ol className="mb-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider" aria-label="Contact form progress">
              <li className={`flex items-center gap-2 ${step === 1 ? "text-white" : "text-white/55"}`} aria-current={step === 1 ? "step" : undefined}>
                <span className={`grid h-7 w-7 place-items-center rounded-full border ${step > 1 ? "border-secondary bg-secondary text-secondary-foreground" : "border-white/35"}`}>
                  {step > 1 ? <Check className="h-3.5 w-3.5" aria-hidden /> : "1"}
                </span>
                Choose role
              </li>
              <span aria-hidden className="h-px w-8 bg-white/20" />
              <li className={`flex items-center gap-2 ${step === 2 ? "text-white" : "text-white/45"}`} aria-current={step === 2 ? "step" : undefined}>
                <span className="grid h-7 w-7 place-items-center rounded-full border border-white/35">2</span>
                Your request
              </li>
            </ol>

            <div className="space-y-5 border-t border-white/10 pt-7 text-sm text-white/75">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-secondary" aria-hidden />
                <a href="mailto:contact@annoviant.com" className="hover:text-white">contact@annoviant.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-secondary" aria-hidden />
                <a href="tel:+16783573812" className="hover:text-white">(678) 357-3812</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden />
                <span>Alpharetta, Georgia · Greenville, South Carolina</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a href="https://www.linkedin.com/company/annoviant" target="_blank" rel="noopener noreferrer" aria-label="Annoviant on LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 hover:text-white"><Linkedin className="h-4 w-4" /></a>
                <a href="https://www.instagram.com/annovianthealth/" target="_blank" rel="noopener noreferrer" aria-label="Annoviant on Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 hover:text-white"><Instagram className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted && active ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10" aria-live="polite">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-success/20"><CheckCircle2 className="h-6 w-6 text-success" aria-hidden /></div>
                <Subheading className="mb-3 text-xl text-white">Your request is with the right team</Subheading>
                <p className="mb-6 max-w-xl text-sm text-white/75">
                  A member of our {active.shortLabel.toLowerCase()} team will reply within two business days with information matched to your request.
                </p>
                <Button onClick={() => { setSubmitted(false); setStep(1); setPathway(null); }} variant="secondary" size="sm">Start another request</Button>
              </div>
            ) : step === 1 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9">
                <Subheading className="mb-2 text-2xl text-white">What brings you to Annoviant?</Subheading>
                <p className="mb-7 text-sm text-white/65">Select one pathway to personalize the next step.</p>
                <div className="grid gap-3" role="radiogroup" aria-label="Choose your role">
                  {PATHWAYS.map((key) => {
                    const item = pathwayContent[key];
                    const Icon = item.icon;
                    const selected = pathway === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => choosePathway(key)}
                        className={`group flex min-h-[116px] w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--surface-deep))] ${selected ? "border-secondary bg-secondary/10" : "border-white/10 bg-white/[0.025] hover:border-white/30 hover:bg-white/[0.06]"}`}
                      >
                        <span className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${selected ? "bg-secondary text-secondary-foreground" : "bg-white/10 text-white/75"}`}><Icon className="h-5 w-5" aria-hidden /></span>
                        <span className="flex-1">
                          <span className="mb-1 block font-semibold text-white">{item.label}</span>
                          <span className="block text-sm leading-relaxed text-white/65">{item.description}</span>
                        </span>
                        <span className={`mt-1 grid h-5 w-5 flex-none place-items-center rounded-full border ${selected ? "border-secondary bg-secondary text-secondary-foreground" : "border-white/30"}`}>{selected && <Check className="h-3 w-3" aria-hidden />}</span>
                      </button>
                    );
                  })}
                </div>
                {error && <p className="mt-4 text-sm text-red-200" role="alert">{error}</p>}
                <Button type="button" size="lg" onClick={continueToDetails} className="mt-7 w-full border-0 gradient-primary sm:w-auto">
                  Continue <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            ) : active && pathway ? (
              <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9" aria-describedby="contact-help">
                <button type="button" onClick={() => setStep(1)} className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-white/65 hover:text-white">
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Change pathway
                </button>
                <div className="mb-7 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-secondary-foreground"><active.icon className="h-5 w-5" aria-hidden /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary">Selected pathway</p>
                    <Subheading className="text-xl text-white">{active.label}</Subheading>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-white/85">Full name <span className="text-secondary">*</span></Label>
                    <Input id="contact-name" name="name" required autoComplete="name" className="border-white/15 bg-white/5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-white/85">Professional email <span className="text-secondary">*</span></Label>
                    <Input id="contact-email" name="email" type="email" required autoComplete="email" className="border-white/15 bg-white/5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-organization" className="text-white/85">Hospital or organization <span className="text-secondary">*</span></Label>
                    <Input id="contact-organization" name="organization" required autoComplete="organization" className="border-white/15 bg-white/5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-title" className="text-white/85">Title or specialty</Label>
                    <Input id="contact-title" name="title" autoComplete="organization-title" className="border-white/15 bg-white/5 text-white" />
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <Label htmlFor="contact-interest" className="text-white/85">{active.interestLabel} <span className="text-secondary">*</span></Label>
                  <Select name="interest" required>
                    <SelectTrigger id="contact-interest" className="border-white/15 bg-white/5 text-white"><SelectValue placeholder="Select an area" /></SelectTrigger>
                    <SelectContent>{active.interests.map((interest) => <SelectItem key={interest} value={interest}>{interest}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="mt-5 space-y-2">
                  <Label htmlFor="contact-message" className="text-white/85">What would make this conversation useful?</Label>
                  <Textarea id="contact-message" name="message" rows={4} className="border-white/15 bg-white/5 text-white placeholder:text-white/40" placeholder="Share the indication, program, timeline, or question you would like us to prepare for." />
                </div>
                {error && <p className="mt-4 text-sm text-red-200" role="alert">{error}</p>}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg" disabled={submitting} className="w-full border-0 gradient-primary sm:w-auto">{submitting ? "Sending request…" : "Connect with Medical Affairs"}</Button>
                  <p id="contact-help" className="inline-flex items-center gap-2 text-xs text-white/55"><ShieldCheck className="h-3.5 w-3.5 flex-none text-secondary" aria-hidden />Handled under our privacy policy. Response within two business days.</p>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
