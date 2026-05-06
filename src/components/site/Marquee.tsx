import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Duration in seconds for one full loop. Lower = faster. Default 40s. */
  durationSec?: number;
  /** ARIA label describing the marquee for screen readers. */
  ariaLabel?: string;
  className?: string;
}

/**
 * Infinite continuous-scroll marquee. Renders the children twice for a seamless loop,
 * pauses on hover, fades the edges with a CSS mask, and respects prefers-reduced-motion
 * (animation is disabled, content laid out static).
 */
export const Marquee = ({ children, durationSec = 40, ariaLabel, className = "" }: Props) => (
  <div
    className={`marquee group ${className}`}
    aria-label={ariaLabel}
    role={ariaLabel ? "region" : undefined}
  >
    <div
      className="marquee__track"
      style={{ animationDuration: `${durationSec}s` }}
    >
      <div className="marquee__group">{children}</div>
      <div className="marquee__group" aria-hidden>
        {children}
      </div>
    </div>
  </div>
);
