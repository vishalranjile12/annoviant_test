import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

export const StickyEngagement = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Quick actions"
      className="fixed bottom-0 inset-x-0 z-40 p-3 md:p-4 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-xl border border-border bg-background/95 backdrop-blur-lg shadow-elegant px-4 py-3 md:px-5">
          <p className="text-sm text-foreground/80 flex-1 sm:pr-2">
            <span className="font-semibold text-foreground">Ready to go deeper?</span>{" "}
            Choose the briefing path that fits your role.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild size="sm" variant="outline" className="text-xs">
              <Link to="/contact?role=clinician">Clinicians</Link>
            </Button>
            <Button asChild size="sm" className="gradient-primary border-0 text-primary-foreground text-xs">
              <Link to="/contact?role=investor">
                Investor briefing <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="ml-auto sm:ml-0 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
