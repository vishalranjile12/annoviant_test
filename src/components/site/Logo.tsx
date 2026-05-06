import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center group" aria-label="Annoviant home">
    <img
      src={light ? "/brand/annoviant-logo-ko.png" : "/brand/annoviant-logo-color.png"}
      alt="Annoviant, Innovations for Healthier Lives"
      width={260}
      height={72}
      className="h-12 md:h-14 w-auto"
    />
  </Link>
);
