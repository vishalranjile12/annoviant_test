import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "audiences", label: "Your path" },
  { id: "clinical-need", label: "Clinical need" },
  { id: "technology", label: "Technology" },
  { id: "differentiation", label: "Differentiation" },
  { id: "pipeline", label: "Pipeline" },
];

export const HomeSectionNav = () => {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]?.target.id) {
          setActive(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Auto-scroll the active chip into view inside the horizontally-scrolling row.
  useEffect(() => {
    if (!active) return;
    const el = itemRefs.current[active];
    const container = listRef.current;
    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const isOutOfView = elRect.left < containerRect.left || elRect.right > containerRect.right;
    if (isOutOfView) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [active]);

  if (!visible) return null;

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-16 md:top-20 inset-x-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-lg"
    >
      {/* Subtle right-edge fade to signal that the row is scrollable. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background/95 to-transparent"
      />
      <div className="container mx-auto relative">
        <ul
          ref={listRef}
          className="flex gap-1 overflow-x-auto py-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map(({ id, label }) => (
            <li key={id} className="shrink-0">
              <a
                ref={(el) => {
                  itemRefs.current[id] = el;
                }}
                href={`#${id}`}
                className={cn(
                  "inline-block rounded-full px-3 py-1.5 text-xs font-medium transition-smooth whitespace-nowrap",
                  active === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
