import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group" aria-label="Annoviant home">
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md gradient-primary shadow-glow">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h3l2-5 4 10 2-7 2 4h5" />
      </svg>
    </span>
    <span className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
      Annoviant
    </span>
  </Link>
);
