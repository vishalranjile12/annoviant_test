import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    date: "Aug 2024",
    category: "Media",
    title: "Alpharetta startup's technology could revolutionize cardiac surgeries",
    href: "https://annoviant.com/2024/08/alpharetta-startups-technology-could-revolutionize-cardiac-surgeries/",
  },
  {
    date: "Apr 2024",
    category: "Press Release",
    title: "Annoviant® Awarded $2.99M NIH Grant to Advance TxGuard® Pulmonary-Valved Conduit for Pediatric Heart Disease",
    href: "https://annoviant.com/2024/04/annoviant-awarded-2-99-million-nih-grant-to-advance-txguard-pulmonary-valved-conduit-for-pediatric-heart-disease/",
  },
  {
    date: "Apr 2023",
    category: "Media",
    title: "Alpharetta-Based Annoviant is a Medical Device Startup That Aims to Grow With Patients",
    href: "https://annoviant.com/2023/04/alpharetta-based-annoviant-is-a-medical-device-startup-that-truly-grows-with-patients/",
  },
  {
    date: "2020",
    category: "Regulatory",
    title: "TxGuard® Pulmonary Valved Graft receives FDA Humanitarian Use Device designation",
  },
];

const NewsPage = () => (
  <PageShell
    eyebrow="News &amp; Press"
    title={<>The latest from <span className="text-gradient">Annoviant</span></>}
    intro="Press coverage, grants, and milestones as we advance the TxGuard® regenerative tissue platform."
    heroImage="/hero/heart-bg.jpg"
  >
    <Seo
      title="News &amp; Press, Annoviant"
      description="Press coverage, NIH grants, FDA milestones, and clinical updates from Annoviant and the TxGuard® regenerative tissue platform."
    />
    <section className="py-20 md:py-28">
      <div className="container mx-auto grid gap-5 max-w-4xl">
        {posts.map((p) => {
          const Tag = p.href ? "a" : "div";
          const tagProps = p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Tag
              key={p.title}
              {...tagProps}
              className="group rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth block"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                <Calendar className="h-3.5 w-3.5" /> {p.date} · {p.category}
              </div>
              <h3 className="mb-3 group-hover:text-primary transition-smooth">{p.title}</h3>
              {p.href && (
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </span>
              )}
            </Tag>
          );
        })}
      </div>
    </section>
  </PageShell>
);

export default NewsPage;
