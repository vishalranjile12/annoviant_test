import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const YT_ID = "h8u6cgM4toE";

export const Explainer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="explainer" className="py-20 md:py-28" aria-labelledby="explainer-heading">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Idea and Vision
            </p>
            <h2 id="explainer-heading" className="mb-4">
              Founder&rsquo;s notes on <span className="text-gradient">innovation</span>
            </h2>
            <p className="text-muted-foreground medical-body">
              A few minutes from our founders on why we started Annoviant, what TxGuard® is
              built to do, and the future of regenerative tissue in surgical care.
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
                aria-label={YT_ID ? "Play founder's notes video" : "Video, coming soon"}
                className="group relative w-full h-full grid place-items-center text-white"
              >
                {/* YouTube's own thumbnail for the video. maxresdefault is
                    1280x720 and not always available; fall back to hqdefault
                    (always present) on error. */}
                <img
                  src={`https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.src = `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`;
                    }
                  }}
                />
                {/* Subtle vignette so the play button stays legible. */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40 group-hover:from-black/15 group-hover:via-black/30 group-hover:to-black/50 transition-all duration-300" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="h-20 w-20 rounded-full gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-white drop-shadow-lg">
                    {YT_ID ? "Play (≈2 min)" : "Video, coming soon"}
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
