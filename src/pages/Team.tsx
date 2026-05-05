import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Partners } from "@/components/site/Partners";

type Person = { name: string; role: string; credentials?: string; photo?: string; href?: string };
type Group = { title: string; people: Person[] };

const groups: Group[] = [
  {
    title: "Executive Leadership",
    people: [
      { name: "Ajay Houde", role: "CEO & Co-founder", credentials: "PhD, MBA", photo: "/team/ajay-houde.jpg", href: "/founder-story" },
      { name: "Naren Vyavahare", role: "CTO & Co-founder", credentials: "PhD", photo: "/team/naren-vyavahare.jpg" },
      { name: "Jeremy Ollerenshaw", role: "Pre-clinical Director", credentials: "PhD", photo: "/team/jeremy-ollerenshaw.png" },
      { name: "Lisa Peacock", role: "Regulatory Director", photo: "/team/lisa-peacock.png" },
      { name: "Patrice Gerard", role: "Strategy Officer", photo: "/team/patrice-gerard.jpg" },
      { name: "Pramod Sathe", role: "Accounting & Finance Officer", credentials: "MBA", photo: "/team/pramod-sathe.jpg" },
      { name: "Brit Young", role: "Legal Counsel", photo: "/team/brit-young.jpg" },
      { name: "Dipasha Sinha", role: "Research Associate", credentials: "PhD", photo: "/team/dipasha-sinha.jpg" },
    ],
  },
  {
    title: "Clinical Advisory Board & Collaborators",
    people: [
      { name: "John E. Mayer", role: "Clinical Advisor", credentials: "MD", photo: "/team/john-mayer.jpg" },
      { name: "Robert J. Levy", role: "Clinical Advisor", credentials: "MD", photo: "/team/robert-levy.jpg" },
      { name: "Holly Bauser-Heaton", role: "Clinical Collaborator", credentials: "MD, PhD, FSCAI, FACC", photo: "/team/holly-bauser-heaton.jpg" },
      { name: "Kevin Maher", role: "Scientific Advisor", credentials: "MD", photo: "/team/kevin-maher.jpg" },
      { name: "Lakshmi Dasi", role: "Scientific Collaborator", credentials: "PhD, FACC, FAIMBE", photo: "/team/lakshmi-dasi.jpg" },
      { name: "Richard Bianco", role: "Pre-clinical Advisor", credentials: "PhD", photo: "/team/richard-bianco.jpg" },
      { name: "Robert Storey", role: "Business Advisor", photo: "/team/robert-storey.jpg" },
      { name: "Gregg Tobin", role: "Business Advisor", photo: "/team/gregg-tobin.jpg" },
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
    employee: groups[0].people.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
  };

  return (
    <PageShell
      eyebrow="Our Team"
      title={<>Experienced leaders, advisors, <span className="text-gradient">and a robust ecosystem</span></>}
      intro="Annoviant is led by a team with deep experience across regenerative medicine, cardiovascular surgery, regulatory science, and commercial scale-up, supported by a network of clinical, manufacturing, and academic collaborators."
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
                  <div key={p.name} className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
                    <div className="aspect-[4/5] bg-muted overflow-hidden">
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
                    </div>
                    <div className="p-5">
                      <h3 className="text-base mb-1">{p.name}</h3>
                      {p.credentials && (
                        <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1.5">{p.credentials}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{p.role}</p>
                      {p.href && (
                        <Link
                          to={p.href}
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-smooth"
                        >
                          Read founder story <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      )}
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
