import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Partners } from "@/components/site/Partners";

type Person = {
  name: string;
  role: string;
  credentials?: string;
  photo?: string;
  /** Internal link to a profile page. */
  href?: string;
  /** External LinkedIn URL. */
  linkedin?: string;
};
type Group = { title: string; people: Person[] };

const groups: Group[] = [
  {
    title: "Executive Leadership",
    people: [
      { name: "Ajay Houde", role: "CEO & Co-founder", credentials: "PhD, MBA", photo: "/team/ajay-houde.jpg", href: "/founder-story", linkedin: "https://www.linkedin.com/in/ajayhoude/" },
      { name: "Naren Vyavahare", role: "CTO & Co-founder", credentials: "PhD", photo: "/team/naren-vyavahare.jpg", href: "/founder-story#naren", linkedin: "https://www.linkedin.com/in/narendra-vyavahare-147a4213/" },
      { name: "Jeremy Ollerenshaw", role: "Pre-clinical Director", credentials: "PhD", photo: "/team/jeremy-ollerenshaw.png" },
      { name: "Lisa Peacock", role: "Regulatory Director", photo: "/team/lisa-peacock.png" },
      { name: "Patrice Gerard", role: "Strategy Officer", photo: "/team/patrice-gerard.jpg", linkedin: "https://www.linkedin.com/in/patrice-gerard-1a48928/" },
      { name: "Pramod Sathe", role: "Accounting & Finance Officer", credentials: "MBA", photo: "/team/pramod-sathe.jpg", linkedin: "https://www.linkedin.com/in/pramod-sathe-77711411/" },
      { name: "Brit Young", role: "Legal Counsel", photo: "/team/brit-young.jpg", linkedin: "https://www.linkedin.com/in/brityoung/" },
      { name: "Dipasha Sinha", role: "Research Associate", credentials: "PhD", photo: "/team/dipasha-sinha.jpg", linkedin: "https://www.linkedin.com/in/dipasha-sinha-279a6b87/" },
    ],
  },
  {
    title: "Clinical Advisory Board & Collaborators",
    people: [
      { name: "John E. Mayer", role: "Clinical Advisor", credentials: "MD", photo: "/team/john-mayer.jpg", linkedin: "https://www.linkedin.com/in/john-e-mayer-62772834/" },
      { name: "Robert J. Levy", role: "Clinical Advisor", credentials: "MD", photo: "/team/robert-levy.jpg" },
      { name: "Holly Bauser-Heaton", role: "Clinical Collaborator", credentials: "MD, PhD, FSCAI, FACC", photo: "/team/holly-bauser-heaton.jpg", linkedin: "https://www.linkedin.com/in/holly-bauser-heaton-39138019a/" },
      { name: "Kevin Maher", role: "Scientific Advisor", credentials: "MD", photo: "/team/kevin-maher.jpg" },
      { name: "Lakshmi Dasi", role: "Scientific Collaborator", credentials: "PhD, FACC, FAIMBE", photo: "/team/lakshmi-dasi.jpg", linkedin: "https://www.linkedin.com/in/lakshmi-dasi-2613659/" },
      { name: "Richard Bianco", role: "Pre-clinical Advisor", credentials: "PhD", photo: "/team/richard-bianco.jpg", linkedin: "https://www.linkedin.com/in/richard-bianco-2876491/" },
      { name: "Robert Storey", role: "Business Advisor", photo: "/team/robert-storey.jpg", linkedin: "https://www.linkedin.com/in/bobstorey/" },
      { name: "Gregg Tobin", role: "Business Advisor", photo: "/team/gregg-tobin.jpg", linkedin: "https://www.linkedin.com/in/greggtobin/" },
    ],
  },
];

const TeamPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Annoviant, Inc.",
    foundingDate: "2018",
    description: "Annoviant is a regenerative medicine company developing TxGuard®, a patented regenerative tissue platform.",
    employee: groups[0].people.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      ...(p.linkedin ? { sameAs: [p.linkedin] } : {}),
    })),
  };

  return (
    <PageShell
      eyebrow="Our Team"
      title={<>The people, <span className="text-gradient">and the people behind the people</span></>}
      intro="Annoviant is a small team carrying a lot of work, and a much larger circle of advisors, clinicians, scientists, and partners who help us carry it. Below is who we are, and who keeps us honest."
      heroImage="/hero/heart-bg.jpg"
    >
      <Seo
        title="Team &amp; Advisors, Annoviant"
        description="Annoviant's executive leadership, clinical advisory board, and scientific collaborators driving the TxGuard® regenerative tissue platform forward."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="mb-8">{g.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {g.people.map((p) => (
                  <div key={p.name} className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-smooth flex flex-col">
                    <div className="aspect-[4/5] bg-muted overflow-hidden relative">
                      {p.photo ? (
                        <img
                          src={p.photo}
                          alt={`${p.name}, ${p.role}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full grid place-items-center gradient-primary text-primary-foreground text-2xl font-semibold">
                          {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </div>
                      )}
                      {p.linkedin && (
                        <a
                          href={p.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} on LinkedIn`}
                          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-surface-deep/85 backdrop-blur text-white grid place-items-center hover:bg-primary transition-smooth shadow-card"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base mb-1">{p.name}</h3>
                      {p.credentials && (
                        <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1.5">{p.credentials}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{p.role}</p>
                      <div className="mt-3 flex items-center gap-4 flex-wrap">
                        {p.href && (
                          <Link
                            to={p.href}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-smooth"
                          >
                            Read story <ArrowUpRight className="h-3 w-3" />
                          </Link>
                        )}
                        {p.linkedin && (
                          <a
                            href={p.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-smooth"
                          >
                            <Linkedin className="h-3 w-3" /> LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Partners />
    </PageShell>
  );
};
export default TeamPage;
