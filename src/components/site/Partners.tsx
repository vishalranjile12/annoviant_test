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
            Backed by a robust ecosystem
          </p>
          <h2 id="partners-heading" className="mb-4">
            Trusted by leading healthcare organizations &amp; collaborators
          </h2>
          <p className="text-muted-foreground medical-body mx-auto">
            Annoviant&rsquo;s research, pre-clinical, and translational work is supported by leading
            pediatric hospitals, top-tier academic medical centers, FDA-funded device consortia,
            and the National Institutes of Health.
          </p>
        </div>
      </Reveal>

      <ul
        aria-label="Partner organizations and collaborators"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-x-8 gap-y-10"
      >
        {partners.map((p, i) => {
          const Tag = p.href ? "a" : "div";
          const tagProps = p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Reveal key={p.name} as="li" delay={i * 50} className="flex items-center justify-center">
              <Tag
                {...tagProps}
                title={p.name}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-smooth focus-visible:opacity-100 focus-visible:grayscale-0 inline-block"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  width={200}
                  height={70}
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </Tag>
            </Reveal>
          );
        })}
      </ul>

      <p className="text-xs text-muted-foreground mt-10 text-center max-w-3xl mx-auto">
        Logos and named institutions reflect collaborators across Annoviant&rsquo;s research,
        pre-clinical validation, and grant-funded programs. Affiliations do not imply endorsement
        of investigational TxGuard® products.
      </p>
    </div>
  </section>
);
