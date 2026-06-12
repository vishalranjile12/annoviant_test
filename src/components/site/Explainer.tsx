import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";

const YT_ID = "h8u6cgM4toE";

export const Explainer = () => {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-start the embed when the player enters the viewport. Muted (browser
  // autoplay policy requires it) — YouTube exposes an unmute button in the
  // chrome once playback begins.
  useEffect(() => {
    if (!containerRef.current || playing || !YT_ID) return;
    const el = containerRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setPlaying(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playing]);

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
          <div
            ref={containerRef}
            className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant border border-border bg-surface-deep"
          >
            {playing && YT_ID ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&rel=0&playsinline=1`}
                title="Annoviant founders' notes on innovation"
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => YT_ID && setPlaying(true)}
                aria-label={YT_ID ? "Play founders' notes video" : "Video, coming soon"}
                className="group relative w-full h-full grid place-items-center"
              >
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
                {/* Minimal play affordance — clean white pill with a single
                    play glyph. No dark gradient. The thumbnail does the work. */}
                <div className="relative h-16 w-16 md:h-[72px] md:w-[72px] rounded-full bg-white grid place-items-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-7 w-7 text-primary fill-primary translate-x-[1px]" aria-hidden />
                </div>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
