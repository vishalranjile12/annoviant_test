import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center group" aria-label="Annoviant home">
    <img
      src={light ? "/brand/annoviant-logo-ko.png" : "/brand/annoviant-logo-color.png"}
      alt="Annoviant, Innovations for Healthier Lives"
      width={180}
      height={50}
      className="h-9 md:h-10 w-auto"
    />
  </Link>
);
