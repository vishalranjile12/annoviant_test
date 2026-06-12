import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Stethoscope, Lock, ArrowRight } from "lucide-react";

const DISMISSED_KEY = "annoviant_briefing_prompt_dismissed_v1";
const SCROLL_TRIGGER_RATIO = 0.55; // show after 55% scrolled
const MIN_TIME_ON_PAGE_MS = 8000; // require at least 8s before triggering

/**
 * Floating briefing prompt. Slides in from the bottom-right once the visitor
 * has shown some intent (scrolled past mid-page or moved toward the address
 * bar). Dismissible, and it stays dismissed for the rest of the session.
 *
 * Mount once on whichever page should host the prompt — typically the
 * homepage and maybe a couple of long content pages. Not on /investor-
 * briefing (would be redundant) or short utility pages like /contact.
 */
export const BriefingPromptCard = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // sessionStorage unavailable; not worth crashing the page over
    }
    setDismissed(true);
  }, []);

  // Initial dismissal check
  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) {
        setDismissed(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Trigger: scroll past threshold OR exit-intent (mouseleave to the top)
  useEffect(() => {
    if (dismissed || visible) return;

    const mountedAt = Date.now();

    const onScroll = () => {
      if (Date.now() - mountedAt < MIN_TIME_ON_PAGE_MS) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      if (window.scrollY / max > SCROLL_TRIGGER_RATIO) {
        setVisible(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (Date.now() - mountedAt < MIN_TIME_ON_PAGE_MS) return;
      // Mouse left through the top of the viewport — exit-intent signal.
      // `relatedTarget` is null when leaving the document.
      if (!e.relatedTarget && e.clientY <= 0) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [dismissed, visible]);

  // Esc dismisses
  useEffect(() => {
    if (!visible || dismissed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, dismissed, dismiss]);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Briefing options"
      aria-hidden={!visible}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 max-w-sm w-[calc(100%-2rem)] sm:w-80 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative rounded-2xl border border-border bg-card/95 backdrop-blur-lg shadow-elegant p-5">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss briefing prompt"
          className="absolute top-2 right-2 h-7 w-7 rounded-full grid place-items-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
          Ready to go deeper?
        </p>
        <h3 className="text-base font-semibold text-foreground mb-4 pr-6 leading-snug">
          Choose the briefing path that fits your role.
        </h3>

        <div className="flex flex-col gap-2">
          <Link
            to="/for-clinicians"
            onClick={dismiss}
            className="group inline-flex items-center justify-between gap-2 rounded-md border border-border bg-card hover:border-primary/40 hover:bg-muted/50 px-3 py-2.5 text-sm font-medium text-foreground transition-smooth"
          >
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-primary" aria-hidden />
              Clinicians
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" aria-hidden />
          </Link>

          <Link
            to="/investor-briefing"
            onClick={dismiss}
            className="group inline-flex items-center justify-between gap-2 rounded-md gradient-primary text-primary-foreground hover:shadow-glow px-3 py-2.5 text-sm font-semibold transition-all"
          >
            <span className="inline-flex items-center gap-2">
              <Lock className="h-4 w-4" aria-hidden />
              Investor briefing
            </span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
};
