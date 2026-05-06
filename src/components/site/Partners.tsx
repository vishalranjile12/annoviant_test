import { Reveal } from "./Reveal";

type Partner = { name: string; logo: string; href?: string };

const partners: Partner[] = [
  { name: "Boston Children's Hospital", logo: "/partners/boston-childrens.png", href: "https://www.childrenshospital.org/" },
  { name: "Children's Hospital of Philadelphia (CHOP)", logo: "/partners/childrens-philadelphia.png", href: "https://www.chop.edu/" },
  { name: "Children's Healthcare of Atlanta", logo: "/partners/choa.png", href: "https://www.choa.org/" },
  { name: "Georgia Tech, Coulter BME", logo: "/partners/georgia-tech.png", href: "https://bme.gatech.edu/" },
  { name: "Clemson University, SC BioCRAFT", logo: "/partners/clemson.png", href: "https://www.clemson.edu/" },
  { name: "University of Minnesota Medical School", logo: "/partners/university-minnesota.png", href: "https://med.umn.edu/" },
  { name: "Pediatric Device Consortium (PPDC)", logo: "/partners/ppdc.png" },
  { name: "West Coast Consortium for Tech & Innovation in Pediatrics (CTIP)", logo: "/partners/ctip.png" },
  { name: "UCSF", logo: "/partners/ucsf.png", href: "https://www.ucsf.edu/" },
];

export const Partners = () => (
  <section id="partners" className="py-20 md:py-24 border-t border-border" aria-labelledby="partners-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            We don't do this alone
          </p>
          <h2 id="partners-heading" className="mb-4">
            The hospitals, universities, and consortia who&rsquo;ve joined us
          </h2>
          <p className="text-muted-foreground medical-body mx-auto">
            Pediatric hospitals you&rsquo;ve heard of, academic medical centers running our pre-clinical
            studies, and FDA-funded device consortia helping us navigate regulation. Listing them
            below isn&rsquo;t just polite, it&rsquo;s the truth about how this work gets done.
          </p>
        </div>
      </Reveal>

      <ul
        aria-label="Partner organizations and collaborators"
        className="grid grid-cols-2 sm:grid-cols-3 max-w-5xl mx-auto items-center gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16"
      >
        {partners.map((p, i) => {
          const Tag = p.href ? "a" : "div";
          const tagProps = p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Reveal key={p.name} as="li" delay={i * 50} className="flex items-center justify-center">
              <Tag
                {...tagProps}
                title={p.name}
                className="hover:scale-105 transition-smooth focus-visible:scale-105 inline-block"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  width={300}
                  height={105}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                />
              </Tag>
            </Reveal>
          );
        })}
      </ul>

      <p className="text-xs text-muted-foreground mt-10 text-center max-w-3xl mx-auto">
        Each of these institutions has worked with us in some way: research, pre-clinical studies,
        or grant-funded programs. Their logos here are gratitude, not endorsement, of any
        investigational TxGuard® product.
      </p>
    </div>
  </section>
);
