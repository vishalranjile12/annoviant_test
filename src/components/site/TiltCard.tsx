import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. Default 6. */
  maxTilt?: number;
  /** Hover scale-up. Default 1.02. */
  scale?: number;
  /** Set to false to render an inline element. Default true (block). */
  block?: boolean;
}

/**
 * Subtle 3D tilt on hover. Tracks mouse position over the card and applies a
 * perspective + rotateX/rotateY transform. Disabled on touch devices via CSS.
 */
export const TiltCard = ({ children, className = "", maxTilt = 6, scale = 1.02 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(1000px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale(${scale})`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
};
