import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}

export const PageShell = ({ eyebrow, title, intro, children }: Props) => (
  <main>
    <Nav />
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 gradient-deep text-white overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[140px]" />
      <div aria-hidden className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />
      <div className="container mx-auto relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-white max-w-4xl mb-6">{title}</h1>
        {intro && <p className="text-lg text-white/75 medical-body max-w-3xl">{intro}</p>}
      </div>
    </section>
    {children}
    <Footer />
  </main>
);