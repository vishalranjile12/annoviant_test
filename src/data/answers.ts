// Answer-focused (AEO/GEO) knowledge-base content. Each entry renders a page with a
// direct-answer block, structured body, FAQ, citations, and JSON-LD schema.
// Language is intentionally hedged ("designed to", "intended to", "investigational") so
// nothing here overclaims clinical benefit.

export type AnswerSection = { heading?: string; paragraphs: string[]; list?: string[] };
export type Faq = { q: string; a: string };
export type Citation = { label: string; href?: string };

export type Answer = {
  slug: string;
  /** The question, used as the H1 and the FAQ/voice query. */
  question: string;
  /** Concise, quotable direct answer shown in the answer block at the top. */
  shortAnswer: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Year the page was last reviewed, for schema + visible "reviewed" line. */
  updated: string;
  sections: AnswerSection[];
  faqs: Faq[];
  citations: Citation[];
  related: string[];
  cta?: { label: string; href: string };
};

export const answers: Answer[] = [
  {
    slug: "what-is-txguard",
    question: "What is TxGuard®?",
    shortAnswer:
      "TxGuard® is Annoviant's patented regenerative biological tissue platform: a decellularized extracellular-matrix scaffold processed through a proprietary stabilization method, designed to resist calcification and thrombosis, support host-mediated remodeling, and be remade into the patient's own living tissue for heart-valve and soft-tissue repair. TxGuard® is investigational; its pediatric pulmonary valved conduit holds an FDA Humanitarian Use Device (HUD) designation granted in 2020.",
    metaTitle: "What is TxGuard®? | Annoviant Regenerative Tissue Platform",
    metaDescription:
      "TxGuard® is Annoviant's patented regenerative cardiovascular tissue platform, a decellularized, stabilized ECM scaffold designed to resist calcification, support host remodeling, and grow with the patient.",
    keywords: [
      "what is TxGuard",
      "regenerative cardiovascular tissue platform",
      "decellularized tissue scaffold",
      "anti-calcification tissue technology",
      "pediatric heart valve startup",
    ],
    updated: "2026",
    sections: [
      {
        heading: "How TxGuard® works",
        paragraphs: [
          "TxGuard® starts with biological tissue and ends with biological tissue. The process gently removes the cells that would trigger an immune response (decellularization) while preserving the native extracellular-matrix structure, then stabilizes that scaffold through Annoviant's proprietary platform.",
          "Once implanted, the scaffold is designed to be repopulated by the patient's own cells and gradually remodeled into living tissue, rather than remaining permanent foreign material the way a conventional prosthesis does.",
        ],
      },
      {
        heading: "What it is designed to solve",
        paragraphs: [
          "Conventional bioprosthetic valves are typically fixed with glutaraldehyde, which leaves cellular debris that binds calcium and drives calcification, stiffening and failure over time. They are also a fixed size, so a growing child outgrows them.",
        ],
        list: [
          "Designed to resist calcification and thrombosis",
          "Intended to support host-mediated remodeling into living tissue",
          "Intended to grow with the patient",
          "One platform across heart valves, vascular grafts, and soft-tissue repair",
        ],
      },
      {
        heading: "Where it applies",
        paragraphs: [
          "The lead program is the TxGuard® Pulmonary Valved Conduit for pediatric congenital heart disease. The same platform is being explored for adult heart valves (aortic, mitral/tricuspid), vascular grafts, and cardiac patches.",
        ],
      },
      {
        heading: "Status and validation",
        paragraphs: [
          "TxGuard® is investigational and not approved for general use. Supporting validation to date includes an FDA Humanitarian Use Device designation (2020) for the pediatric pulmonary valved conduit, $5.7M in NIH grant funding, 14 peer-reviewed publications, and 4 issued U.S. patents with pending PCT applications.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is TxGuard® FDA approved?",
        a: "No. TxGuard® is investigational. The pediatric pulmonary valved conduit holds an FDA Humanitarian Use Device designation (2020), which is a regulatory milestone, not a marketing approval.",
      },
      {
        q: "Is TxGuard® made from animal tissue?",
        a: "TxGuard® scaffolds are derived from bovine and porcine tissue and then decellularized through Annoviant's platform so the patient's body is intended to recognize and remodel the scaffold rather than reject it.",
      },
      {
        q: "How is TxGuard® different from a standard bioprosthetic valve?",
        a: "Standard bioprosthetic valves are glutaraldehyde-fixed, fixed-size, and calcify over time. TxGuard® is a decellularized, stabilized scaffold designed to resist calcification, remodel into the patient's own tissue, and grow with the patient.",
      },
    ],
    citations: [
      { label: "Annoviant publications, patents & NIH grants", href: "/publications" },
      { label: "TxGuard® technology overview", href: "/technology" },
    ],
    related: ["pulmonary-valved-conduit", "regenerative-heart-valve-technologies", "what-causes-calcification-in-bioprosthetic-valves"],
    cta: { label: "Explore TxGuard® technology", href: "/technology" },
  },

  {
    slug: "pulmonary-valved-conduit",
    question: "What is a pulmonary valved conduit?",
    shortAnswer:
      "A pulmonary valved conduit is a tube containing a one-way valve that surgeons implant to connect the right ventricle to the pulmonary artery (the RV-to-PA connection) when a child's own connection is missing, malformed, or obstructed by congenital heart disease. Conventional conduits are a fixed size and degrade over time, so children usually need one or more replacement operations as they grow. Annoviant's TxGuard® pulmonary valved conduit is an investigational regenerative alternative designed to resist calcification and grow with the patient (FDA HUD designation, 2020).",
    metaTitle: "What is a Pulmonary Valved Conduit? | Annoviant",
    metaDescription:
      "A pulmonary valved conduit reconstructs the right-ventricle-to-pulmonary-artery connection in congenital heart disease. Learn how it works, why replacements are needed, and how regenerative conduit technology aims to help.",
    keywords: [
      "pulmonary valved conduit",
      "pulmonary valved conduit technology",
      "RV-PA conduit",
      "congenital heart disease medical device innovation",
      "pediatric heart valve",
    ],
    updated: "2026",
    sections: [
      {
        heading: "When it is used",
        paragraphs: [
          "A pulmonary valved conduit is used in congenital heart conditions where the path from the heart to the lungs must be rebuilt, including tetralogy of Fallot with pulmonary atresia, truncus arteriosus, and certain cases after the Ross procedure.",
        ],
      },
      {
        heading: "Today's options and their limits",
        paragraphs: [
          "Current conduits include cryopreserved human homografts and animal-derived options such as bovine jugular vein conduits. They restore blood flow effectively, but they are a fixed size and the tissue tends to calcify, narrow, and lose valve function over time.",
        ],
      },
      {
        heading: "Why replacements are needed",
        paragraphs: [
          "Because a child keeps growing while the conduit does not, and because conventional conduit tissue degenerates, most pediatric patients need the conduit replaced one or more times during childhood and adolescence. Each reoperation carries surgical risk and burden.",
        ],
      },
      {
        heading: "How TxGuard®'s approach differs",
        paragraphs: [
          "The TxGuard® pulmonary valved conduit is a decellularized, stabilized scaffold designed to resist calcification and to be remodeled by the patient's own cells, with the intent of growing with the child and reducing the number of replacement surgeries. It is investigational and holds an FDA Humanitarian Use Device designation (2020).",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do pulmonary valved conduits need to be replaced?",
        a: "Conventional conduits are a fixed size and their tissue calcifies and degenerates, so a child outgrows the conduit and the valve eventually fails, requiring replacement.",
      },
      {
        q: "What conditions require a pulmonary valved conduit?",
        a: "Conditions that disrupt the right-ventricle-to-pulmonary-artery connection, such as tetralogy of Fallot with pulmonary atresia, truncus arteriosus, and some post-Ross-procedure cases.",
      },
      {
        q: "Is Annoviant's pulmonary valved conduit available now?",
        a: "No. It is investigational and not approved for general use; it holds an FDA Humanitarian Use Device designation (2020).",
      },
    ],
    citations: [
      { label: "Annoviant pediatric program", href: "/solutions/pediatric" },
      { label: "Clinical evidence & comparison", href: "/clinical-evidence" },
    ],
    related: ["why-do-pediatric-patients-need-repeat-heart-surgery", "what-is-txguard", "regenerative-heart-valve-technologies"],
    cta: { label: "See the pediatric program", href: "/solutions/pediatric" },
  },

  {
    slug: "why-do-pediatric-patients-need-repeat-heart-surgery",
    question: "Why do pediatric heart-valve patients need repeat surgeries?",
    shortAnswer:
      "Children need repeat heart-valve surgeries for two main reasons: their hearts keep growing while implants are a fixed size, so a device sized for a small child must be replaced as they grow; and conventional bioprosthetic tissue calcifies and degenerates faster in younger patients. As a result, a child with complex congenital heart disease can face several open-heart operations before adulthood. Regenerative implants designed to grow with the patient aim to reduce that number.",
    metaTitle: "Why Pediatric Heart-Valve Patients Need Repeat Surgeries | Annoviant",
    metaDescription:
      "Children outgrow fixed-size heart implants and bioprosthetic tissue calcifies faster in young patients, leading to multiple reoperations. Learn why, and how growing regenerative implants aim to reduce repeat surgery.",
    keywords: [
      "pediatric repeat heart surgery",
      "congenital heart disease repeat surgery",
      "why children need multiple heart surgeries",
      "growing heart valve",
      "congenital heart disease medical device innovation",
    ],
    updated: "2026",
    sections: [
      {
        heading: "Reason 1: children outgrow fixed-size implants",
        paragraphs: [
          "A valve or conduit sized for an infant or toddler cannot enlarge as the child grows. Conventional implants are a fixed size, so they are eventually outgrown and must be replaced with a larger device, sometimes more than once.",
        ],
      },
      {
        heading: "Reason 2: faster calcification in young patients",
        paragraphs: [
          "Calcification of bioprosthetic tissue tends to progress faster in children and young adults than in older patients. The same glutaraldehyde-fixed tissue that may last many years in an elderly patient can fail much sooner in a child.",
        ],
      },
      {
        heading: "Reason 3: structural degeneration",
        paragraphs: [
          "Over time, conventional valve and conduit tissue stiffens, narrows, or leaks (structural valve deterioration). When valve function is lost, another operation is needed regardless of the patient's size.",
        ],
      },
      {
        heading: "What would change it",
        paragraphs: [
          "An implant that grows with the patient and resists calcification could, in principle, reduce the number of reoperations a child needs. That is the design intent behind regenerative platforms such as TxGuard®, which remains investigational.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many heart surgeries might a child with complex CHD need?",
        a: "It varies by condition, but children with complex congenital heart disease can face several open-heart operations through childhood and adolescence, in part because implants must be replaced as they grow.",
      },
      {
        q: "Why does bioprosthetic tissue calcify faster in children?",
        a: "Younger patients have more active calcium and phosphate metabolism and higher cardiac activity, which accelerates mineral deposition on glutaraldehyde-fixed tissue.",
      },
      {
        q: "Can any heart implant grow with a child?",
        a: "Standard prosthetics cannot. Regenerative approaches are being developed with the intent that the patient's own cells remodel the implant so it can grow, but these remain investigational.",
      },
    ],
    citations: [
      { label: "Annoviant pediatric program", href: "/solutions/pediatric" },
      { label: "What is a pulmonary valved conduit?", href: "/answers/pulmonary-valved-conduit" },
    ],
    related: ["pulmonary-valved-conduit", "what-causes-calcification-in-bioprosthetic-valves", "what-is-txguard"],
    cta: { label: "See the pediatric program", href: "/solutions/pediatric" },
  },

  {
    slug: "what-causes-calcification-in-bioprosthetic-valves",
    question: "What causes calcification in biological prosthetic heart valves?",
    shortAnswer:
      "Calcification in bioprosthetic heart valves is driven largely by glutaraldehyde fixation. Glutaraldehyde cross-links the donor tissue to reduce immune rejection, but it leaves behind devitalized cells and residual chemical groups that bind calcium and phosphate, nucleating mineral deposits. Mechanical stress on the leaflets and the patient's age accelerate the process. Over time the leaflets stiffen and fail, called structural valve deterioration. Approaches to reduce it include anti-calcification treatments and decellularization that removes the cellular debris calcium binds to.",
    metaTitle: "What Causes Calcification in Bioprosthetic Heart Valves? | Annoviant",
    metaDescription:
      "Calcification of bioprosthetic valves is driven by glutaraldehyde fixation, residual cells, phosphate binding, and mechanical stress. Learn the mechanism and how anti-calcification and decellularization approaches address it.",
    keywords: [
      "bioprosthetic valve calcification",
      "what causes calcification in heart valves",
      "glutaraldehyde calcification",
      "anti-calcification tissue technology",
      "structural valve deterioration",
    ],
    updated: "2026",
    sections: [
      {
        heading: "The role of glutaraldehyde",
        paragraphs: [
          "Most bioprosthetic valves are preserved with glutaraldehyde, which cross-links proteins to make the tissue durable and less immunogenic. The trade-off is that glutaraldehyde fixation devitalizes the tissue and leaves residual aldehyde groups that promote calcium binding.",
        ],
      },
      {
        heading: "Cellular remnants and phosphate",
        paragraphs: [
          "Fixed tissue retains cellular debris, including membranes rich in phosphorus. Calcium from the blood binds to these phosphate-rich remnants, nucleating and growing calcium-phosphate (hydroxyapatite) crystals within the leaflets.",
        ],
      },
      {
        heading: "Mechanical stress and patient age",
        paragraphs: [
          "Repeated flexing of the valve leaflets concentrates mechanical stress and micro-damage where calcification preferentially forms. Calcification also progresses faster in younger patients, which is why pediatric bioprosthetic valves tend to fail sooner.",
        ],
      },
      {
        heading: "How it leads to valve failure",
        paragraphs: [
          "As mineral accumulates, the leaflets stiffen, narrow, or tear. This loss of function is called structural valve deterioration and is a leading reason bioprosthetic valves eventually need replacement.",
        ],
      },
      {
        heading: "Approaches to reduce it",
        paragraphs: [
          "Strategies include chemical anti-calcification treatments and decellularization, which removes the cells and debris that calcium binds to. Annoviant's TxGuard® platform is a decellularized, stabilized scaffold designed to resist calcification; this is a design goal supported by pre-clinical work, not a proven clinical outcome.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do mechanical heart valves calcify?",
        a: "Mechanical valves do not calcify the way tissue valves do, but they require lifelong anticoagulation to prevent clotting, which carries its own risks.",
      },
      {
        q: "Why do pediatric bioprosthetic valves calcify faster?",
        a: "Calcium and phosphate metabolism is more active in younger patients, and higher heart rates add mechanical stress, so calcification and failure occur sooner than in older adults.",
      },
      {
        q: "Can calcification be prevented?",
        a: "It cannot be fully prevented today, but anti-calcification treatments and decellularization aim to slow it. Regenerative platforms are designed to resist it, though clinical benefit remains under investigation.",
      },
    ],
    citations: [
      { label: "TxGuard® mechanism of action", href: "/technology#mechanism" },
      { label: "Publications on calcification resistance", href: "/publications" },
    ],
    related: ["what-is-txguard", "regenerative-heart-valve-technologies", "why-do-pediatric-patients-need-repeat-heart-surgery"],
    cta: { label: "See how the mechanism works", href: "/technology#mechanism" },
  },

  {
    slug: "regenerative-heart-valve-technologies",
    question: "What are regenerative heart-valve technologies?",
    shortAnswer:
      "Regenerative heart-valve technologies (also called restorative or tissue-engineered valves) are implants designed to be gradually replaced by the patient's own living tissue instead of remaining permanent foreign material. The main approaches are decellularized extracellular-matrix scaffolds, in-situ tissue engineering using bioresorbable polymers, and cell-seeded constructs. The shared goal is a valve that resists calcification and thrombosis, avoids lifelong anticoagulation, and can remodel and grow, potentially reducing reinterventions. Annoviant's TxGuard® is a decellularized, stabilized ECM platform in this category, and is investigational.",
    metaTitle: "What Are Regenerative Heart-Valve Technologies? | Annoviant",
    metaDescription:
      "Regenerative, restorative, and tissue-engineered heart valves are designed to be replaced by the patient's own living tissue. Compare decellularized ECM, in-situ polymer, and cell-seeded approaches.",
    keywords: [
      "regenerative heart valve technologies",
      "tissue engineered heart valve",
      "restorative heart valve",
      "regenerative cardiovascular tissue platform",
      "decellularized heart valve",
    ],
    updated: "2026",
    sections: [
      {
        heading: "The main approaches",
        paragraphs: [
          "Regenerative valve technologies fall into a few broad categories, each with the same underlying aim: to harness the body's own healing so the implant becomes living, functional tissue.",
        ],
        list: [
          "Decellularized extracellular-matrix (ECM) scaffolds, where donor tissue is stripped of cells and repopulated by the patient's own cells",
          "In-situ (endogenous) tissue engineering, where a bioresorbable polymer scaffold is gradually replaced by new tissue",
          "Cell-seeded constructs, where cells are added to a scaffold before or after implantation",
        ],
      },
      {
        heading: "What they aim to solve",
        paragraphs: [
          "The targets are the well-known failure modes of conventional valves: calcification, thrombosis, infection, structural degeneration, the need for lifelong anticoagulation with mechanical valves, and, for children, the inability of fixed-size implants to grow.",
        ],
      },
      {
        heading: "Where the field stands",
        paragraphs: [
          "Most regenerative valve technologies are investigational or in early clinical evaluation. They represent an active area of cardiovascular device innovation rather than established standard of care.",
        ],
      },
      {
        heading: "How TxGuard® fits",
        paragraphs: [
          "TxGuard® is a decellularized, stabilized ECM platform. It is designed to resist calcification, support host-mediated remodeling into living tissue, and grow with the patient, spanning pediatric and adult heart valves, vascular grafts, and soft-tissue repair. It is investigational.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are regenerative heart valves approved?",
        a: "Most are investigational or in early clinical study. They are an emerging category, not yet established standard of care.",
      },
      {
        q: "How are they different from standard bioprosthetic valves?",
        a: "Standard bioprosthetic valves are glutaraldehyde-fixed, permanent, fixed-size, and calcify over time. Regenerative valves are designed to be remodeled into the patient's own living tissue and to resist calcification.",
      },
      {
        q: "Where does TxGuard® fit in this category?",
        a: "TxGuard® is a decellularized, stabilized ECM platform designed for host-mediated remodeling, calcification resistance, and growth with the patient. It is investigational.",
      },
    ],
    citations: [
      { label: "TxGuard® technology overview", href: "/technology" },
      { label: "Clinical evidence & comparison", href: "/clinical-evidence" },
    ],
    related: ["what-is-txguard", "what-causes-calcification-in-bioprosthetic-valves", "pulmonary-valved-conduit"],
    cta: { label: "Compare the evidence", href: "/clinical-evidence" },
  },
];

export const getAnswer = (slug?: string) => answers.find((a) => a.slug === slug);
