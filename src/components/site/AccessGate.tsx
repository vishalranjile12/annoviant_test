import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight } from "lucide-react";

// Reusable "behind login" gate. Reuses the existing invitation-code mechanism
// (VITE_BRIEFING_CODE) so there's one credential to manage, and remembers a
// granted session in sessionStorage so a visitor only enters it once.
//
// Which routes are gated is decided in ONE place — GATED_PATHS in App.tsx — so
// the public/gated line can move without touching page code. This is the
// "middle ground": pages stay live (no deletion, no broken links), they're just
// access-controlled.

const env = import.meta.env as Record<string, string | undefined>;
const EXPECTED_CODE = env.VITE_BRIEFING_CODE;
const STORAGE_KEY = "annoviant_access_granted";
const CONTACT_EMAIL = "partnerships@annoviant.com";

const hasAccess = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

export const AccessGate = ({ children, label = "this section" }: { children: ReactNode; label?: string }) => {
  const [granted, setGranted] = useState(hasAccess);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // If no code is configured, fail closed and route people to email rather
    // than silently granting access.
    if (!EXPECTED_CODE) {
      setError("Access is not yet configured. Please contact us for an invitation.");
      return;
    }
    if (code.trim() === EXPECTED_CODE) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* sessionStorage unavailable — still grant for this render */
      }
      setGranted(true);
    } else {
      setError("That invitation code wasn't recognized.");
    }
  };

  if (granted) return <>{children}</>;

  return (
    <main id="main" className="min-h-screen flex flex-col bg-surface-deep text-white">
      <Nav />
      <div className="flex-1 grid place-items-center px-4 py-32">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto h-14 w-14 rounded-2xl bg-white/10 grid place-items-center mb-6">
            <Lock className="h-6 w-6 text-secondary" aria-hidden />
          </div>
          <h1 className="text-white text-2xl md:text-3xl mb-3">Invitation required</h1>
          <p className="text-white/70 mb-8">
            {label[0].toUpperCase() + label.slice(1)} is available to invited partners and
            qualified parties. Enter your invitation code to continue.
          </p>

          <form onSubmit={onSubmit} className="space-y-3 text-left">
            <label htmlFor="access-code" className="sr-only">Invitation code</label>
            <Input
              id="access-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Invitation code"
              autoComplete="off"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              aria-invalid={!!error}
              aria-describedby={error ? "access-error" : undefined}
            />
            {error && (
              <p id="access-error" role="alert" className="text-sm text-destructive-foreground bg-destructive/30 rounded-md px-3 py-2">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full gradient-primary border-0 min-h-[44px]">
              Continue <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>

          <p className="text-sm text-white/50 mt-6">
            Don&rsquo;t have a code?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-secondary hover:underline">
              Request access
            </a>{" "}
            or{" "}
            <Link to="/" className="text-secondary hover:underline">return home</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};
