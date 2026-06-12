import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "annoviant_cookie_consent_v1";
type Consent = "accepted" | "declined" | null;

const readConsent = (): Consent => {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
};

const writeConsent = (value: Exclude<Consent, null>) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // ignore
  }
  // Let other components (GoogleAnalytics) react to the change.
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
};

/** Public helper: returns true only when the user has explicitly accepted. */
export const hasAnalyticsConsent = () => readConsent() === "accepted";

export const CookieConsent = () => {
  const [decided, setDecided] = useState<Consent>(null);

  useEffect(() => {
    setDecided(readConsent());
  }, []);

  if (decided !== null) return null;

  const accept = () => {
    writeConsent("accepted");
    setDecided("accepted");
  };
  const decline = () => {
    writeConsent("declined");
    setDecided("declined");
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/95 backdrop-blur-lg shadow-elegant p-5 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex items-start gap-3 flex-1">
          <span className="inline-flex h-9 w-9 rounded-md bg-primary/10 items-center justify-center flex-shrink-0">
            <Cookie className="h-4 w-4 text-primary" aria-hidden />
          </span>
          <div className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to understand how visitors use the site (Google Analytics). You can
            accept analytics cookies or decline. Either way, the site works the same.{" "}
            <Link to="/legal/privacy" className="text-primary hover:underline">
              Privacy policy
            </Link>
            .
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={decline}
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-smooth"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center rounded-md gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-glow"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
