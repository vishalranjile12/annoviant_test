import { Check, Minus, X, ShieldCheck } from "lucide-react";

export type Verdict = "strong" | "ok" | "weak" | "varies";

export type StorytellerColumn = {
  key: string;
  label: string;
  sublabel?: string;
  highlight?: boolean;
};

export type StorytellerRow = {
  attribute: string;
  story: string;
  values: Record<string, { verdict: Verdict; note?: string }>;
};

const verdictMeta: Record<Verdict, { Icon: typeof Check; tone: string; label: string }> = {
  strong: { Icon: Check, tone: "text-success bg-success/10 border-success/30", label: "Strong" },
  ok: { Icon: ShieldCheck, tone: "text-primary bg-primary/10 border-primary/30", label: "Engineered for" },
  weak: { Icon: X, tone: "text-destructive bg-destructive/10 border-destructive/30", label: "Reported issues" },
  varies: { Icon: Minus, tone: "text-muted-foreground bg-muted border-border", label: "Varies" },
};

interface Props {
  caption: string;
  columns: StorytellerColumn[];
  rows: StorytellerRow[];
}

export const StorytellerTable = ({ caption, columns, rows }: Props) => {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <table className="w-full" role="table">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/60 hidden md:table-header-group">
          <tr>
            <th scope="col" className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-2/5">
              Attribute
            </th>
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                className={`text-center px-4 py-4 text-xs font-semibold uppercase tracking-wider ${
                  c.highlight ? "text-primary bg-primary/5" : "text-muted-foreground"
                }`}
              >
                <div>{c.label}</div>
                {c.sublabel && <div className="text-[10px] font-normal mt-1 text-muted-foreground">{c.sublabel}</div>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={r.attribute} className={idx !== 0 ? "border-t border-border" : ""}>
              <th scope="row" className="px-6 py-5 text-left align-top">
                <div className="font-semibold text-foreground">{r.attribute}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-md">{r.story}</div>
              </th>
              {columns.map((c) => {
                const cell = r.values[c.key];
                if (!cell) return <td key={c.key} className="px-4 py-5 text-center" />;
                const meta = verdictMeta[cell.verdict];
                const Icon = meta.Icon;
                return (
                  <td
                    key={c.key}
                    className={`px-4 py-5 text-center align-top ${c.highlight ? "bg-primary/5" : ""}`}
                  >
                    <div className="md:hidden text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                      {c.label}
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${meta.tone}`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                      {cell.note || meta.label}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
