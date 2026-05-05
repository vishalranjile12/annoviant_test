import { Link } from "react-router-dom";
import logoKO from "@/assets/annoviant-logo.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group" aria-label="Annoviant home">
    <img
      src={logoKO}
      alt="Annoviant — Innovations for Healthier Lives"
      className={`h-9 md:h-10 w-auto ${light ? "" : "[filter:brightness(0)_saturate(100%)_invert(15%)_sepia(95%)_saturate(2400%)_hue-rotate(202deg)_brightness(90%)_contrast(105%)]"}`}
    />
  </Link>
);
