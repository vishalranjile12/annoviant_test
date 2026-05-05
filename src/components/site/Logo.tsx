import { Link } from "react-router-dom";
import logoKO from "@/assets/annoviant-logo.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group" aria-label="Annoviant home">
    {light ? (
      <img src={logoKO} alt="Annoviant — Innovations for Healthier Lives" className="h-9 md:h-10 w-auto" />
    ) : (
      <img
        src={logoKO}
        alt="Annoviant — Innovations for Healthier Lives"
        className="h-9 md:h-10 w-auto"
        style={{ filter: "invert(18%) sepia(96%) saturate(2200%) hue-rotate(202deg) brightness(85%) contrast(105%)" }}
      />
    )}
  </Link>
);
