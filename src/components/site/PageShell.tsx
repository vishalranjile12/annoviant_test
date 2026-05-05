import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  /** Optional background image for the hero band. Defaults to the heart background. */
  heroImage?: string;
  /** Optional alt text for the hero background. Empty string = decorative. */
  heroImageAlt?: string;
}

export const PageShell = ({
  eyebrow,
  title,
  intro,
  children,
  heroImage = "/hero/heart-bg.jpg",
  heroImageAlt = "",
}: Props) => (
  <main id="main">
    <Nav />
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 gradient-hero text-white overflow-hidden">
      {heroImage && (
        <img
          src={heroImage}
          alt={heroImageAlt}
          aria-hidden={heroImageAlt ? undefined : true}
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-deep/95 via-surface-deep/70 to-transparent" />
      <div aria-hidden className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[140px]" />
      <div aria-hidden className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />
      <div className="container mx-auto relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4 animate-fade-up">
            {eyebrow}
          </p>
        )}
        <h1 className="text-white max-w-4xl mb-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        {intro && (
          <p className="text-lg text-white/80 medical-body max-w-3xl animate-fade-up" style={{ animationDelay: "160ms" }}>
            {intro}
          </p>
        )}
      </div>
    </section>
    {children}
    <Footer />
  </main>
);
