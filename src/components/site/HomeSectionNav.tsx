import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "audiences", label: "Your path" },
  { id: "clinical-need", label: "Clinical need" },
  { id: "technology", label: "Technology" },
  { id: "mechanism", label: "How it works" },
  { id: "differentiation", label: "Differentiation" },
  { id: "pipeline", label: "Pipeline" },
  { id: "evidence", label: "Evidence" },
  { id: "investors", label: "Investors" },
  { id: "contact", label: "Contact" },
];

export const HomeSectionNav = () => {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);

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

  if (!visible) return null;

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-16 md:top-20 inset-x-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-lg"
    >
      <div className="container mx-auto">
        <ul className="flex gap-1 overflow-x-auto py-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map(({ id, label }) => (
            <li key={id} className="shrink-0">
              <a
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
