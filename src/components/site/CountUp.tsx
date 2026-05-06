import { useEffect, useRef, useState } from "react";

interface Props {
  /** The final formatted value, e.g. "$5.7M", "127M+", "40,000". The component animates the numeric portion. */
  value: string;
  /** Animation duration in milliseconds. Default 1400ms. */
  durationMs?: number;
  className?: string;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const parseValue = (raw: string) => {
  // Pull the first numeric chunk (digits + commas + decimals). Everything before
  // is treated as prefix; everything after as suffix.
  const m = raw.match(/^(\D*?)([\d.,]+)(.*)$/);
  if (!m) return { prefix: "", target: NaN, decimals: 0, hasComma: false, suffix: raw };
  const [, prefix, numStr, suffix] = m;
  const cleanNum = parseFloat(numStr.replace(/,/g, ""));
  const decimals = (numStr.split(".")[1] || "").length;
  const hasComma = /,/.test(numStr);
  return { prefix, target: cleanNum, decimals, hasComma, suffix };
};

const formatNumber = (n: number, decimals: number, hasComma: boolean) => {
  if (decimals > 0) {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return hasComma ? Math.round(n).toLocaleString("en-US") : Math.round(n).toString();
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const CountUp = ({ value, durationMs = 1400, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parseValue(value);
    if (Number.isNaN(parsed.target) || prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    setDisplay(`${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.hasComma)}${parsed.suffix}`);

    const node = ref.current;
    if (!node) return;

    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            obs.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / durationMs, 1);
              const eased = easeOutCubic(t);
              const current = parsed.target * eased;
              setDisplay(`${parsed.prefix}${formatNumber(current, parsed.decimals, parsed.hasComma)}${parsed.suffix}`);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
};
