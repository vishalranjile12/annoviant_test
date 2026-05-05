import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — we'll be in touch within two business days.");
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 gradient-deep text-white relative overflow-hidden">
      <div aria-hidden className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[140px]" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Request a briefing
            </p>
            <h2 className="text-white mb-5">Let's advance regenerative medicine — together.</h2>
            <p className="text-white/75 medical-body mb-8">
              Whether you're a surgeon, investor, or healthcare organization, our team will
              respond with materials matched to your context.
            </p>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-secondary" /> partnerships@annoviant.com</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-secondary" /> United States</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-7 md:p-9 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/85">Full name</Label>
                <Input id="name" required className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/85">Email</Label>
                <Input id="email" type="email" required className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="org" className="text-white/85">Organization</Label>
                <Input id="org" className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/85">I am a…</Label>
                <Select defaultValue="surgeon">
                  <SelectTrigger className="bg-white/5 border-white/15 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="surgeon">Surgeon / Clinician</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="partner">Healthcare partner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="msg" className="text-white/85">How can we help?</Label>
              <Textarea id="msg" rows={4} className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="gradient-primary border-0 shadow-glow w-full sm:w-auto">
              {submitting ? "Sending…" : "Request briefing"}
            </Button>
            <p className="text-xs text-white/50">
              By submitting, you agree to be contacted by Annoviant regarding your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
