import { useEffect, useState } from "react";
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
import { toast } from "sonner";
import { Mail, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

const ROLES = ["clinician", "investor", "partner", "patient", "media", "other"] as const;
type Role = (typeof ROLES)[number];

const ROLE_LABEL: Record<Role, string> = {
  clinician: "Surgeon / Clinician / Researcher",
  investor: "Investor",
  partner: "Healthcare partner / Strategic",
  patient: "Patient or family member",
  media: "Media",
  other: "Other",
};

export const Contact = () => {
  const [params] = useSearchParams();
  const initialRole = (params.get("role") as Role) || "clinician";
  const [role, setRole] = useState<Role>(ROLES.includes(initialRole) ? initialRole : "clinician");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const r = params.get("role") as Role;
    if (r && ROLES.includes(r)) setRole(r);
  }, [params]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      toast.success("Inquiry received, our team will respond within two business days.");
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 gradient-deep text-white relative overflow-hidden" aria-labelledby="contact-heading">
      <div aria-hidden className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[140px]" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Get in touch
            </p>
            <h2 id="contact-heading" className="text-white mb-5">Tell us why you&rsquo;re here. We&rsquo;ll meet you there</h2>
            <p className="text-white/75 medical-body mb-8">
              Surgeon, investor, partner, parent, whoever you are, send us a note. We&rsquo;ll
              answer with materials and a real person, not a form letter.
            </p>
            <ul className="space-y-3 text-white/80 text-sm" aria-label="Direct contact">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="mailto:partnerships@annoviant.com" className="hover:text-white">partnerships@annoviant.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0" /> Alpharetta, Georgia · United States
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-secondary flex-shrink-0" /> Inquiries handled per our privacy policy
              </li>
            </ul>
          </div>

          {submitted ? (
            <div className="lg:col-span-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-8 md:p-10 flex flex-col items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-success/20 grid place-items-center"><CheckCircle2 className="h-6 w-6 text-success" /></div>
              <h3 className="text-white text-xl">Thanks, we&rsquo;ve got it</h3>
              <p className="text-white/75 text-sm">
                {role === "investor"
                  ? "We'll respond within two business days with diligence materials and access to the data room. Most calls start with a 30-minute walk-through of where the platform is, what de-risks it today, and what's coming next."
                  : role === "clinician"
                  ? "Someone on our clinical team will reply within two business days with pre-clinical data, the comparator analysis, and a path into the program."
                  : role === "patient"
                  ? "We'll add you to program updates and reach out personally when there's something real to share. We won't waste your inbox."
                  : "Someone on our partnerships team will reply within two business days with the materials that actually fit your role."}
              </p>
              <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">Send another</Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="lg:col-span-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-7 md:p-9 space-y-5"
              aria-describedby="contact-help"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/85">Full name <span className="text-secondary">*</span></Label>
                  <Input id="name" name="name" required autoComplete="name" className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/85">Professional email <span className="text-secondary">*</span></Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="org" className="text-white/85">Organization / Hospital</Label>
                  <Input id="org" name="org" autoComplete="organization" className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-white/85">I am a… <span className="text-secondary">*</span></Label>
                  <Select value={role} onValueChange={(v) => setRole(v as Role)} name="role">
                    <SelectTrigger id="role" className="bg-white/5 border-white/15 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((r) => (
                        <SelectItem key={r} value={r}>{ROLE_LABEL[r]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-white/85">Reason for inquiry</Label>
                  <Select name="reason" defaultValue="clinical">
                    <SelectTrigger id="reason" className="bg-white/5 border-white/15 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical">Clinical data / collaboration</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                      <SelectItem value="patient">Patient / family update</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="msg" className="text-white/85">How can we help?</Label>
                <Textarea id="msg" name="msg" rows={4} className="bg-white/5 border-white/15 text-white placeholder:text-white/40" placeholder="Optional context, clinical area, fund focus, or specific question." />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button type="submit" size="lg" disabled={submitting} className="gradient-primary border-0 shadow-glow w-full sm:w-auto">
                  {submitting ? "Sending…" : "Send inquiry"}
                </Button>
                <p id="contact-help" className="text-xs text-white/55 inline-flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  Secure transmission. We respond within two business days.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
