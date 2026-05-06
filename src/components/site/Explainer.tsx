import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Reveal } from "./Reveal";

// Replace with the actual YouTube ID when available
const YT_ID = "";

export const Explainer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="explainer" className="py-20 md:py-28" aria-labelledby="explainer-heading">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Two minutes
            </p>
            <h2 id="explainer-heading" className="mb-4">
              The whole idea, in <span className="text-gradient">two minutes</span>
            </h2>
            <p className="text-muted-foreground medical-body">
              If you'd rather watch than read, this is the short version. The biology, the
              mechanism, and where we're aiming to use it, no jargon required.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant border border-border bg-surface-deep">
            {playing && YT_ID ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&rel=0`}
                title="Annoviant TxGuard explainer video"
                className="w-full h-full"
                allow="accelerated-2d-canvas; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => YT_ID && setPlaying(true)}
                aria-label={YT_ID ? "Play explainer video" : "Explainer video, coming soon"}
                className="group relative w-full h-full grid place-items-center text-white"
              >
                <img
                  src="/hero/clinical-hero.jpeg"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-surface-deep/80 via-surface-deep/50 to-secondary/30" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="h-20 w-20 rounded-full gradient-primary grid place-items-center shadow-glow group-hover:scale-105 transition-smooth">
                    <PlayCircle className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-white/90">
                    {YT_ID ? "Play (≈2 min)" : "Explainer video, coming soon"}
                  </span>
                </div>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
