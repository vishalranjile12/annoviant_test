export type NewsCategory = "Media" | "Press Release" | "Announcement" | "Regulatory";

export type NewsArticle = {
  slug: string;
  date: string;
  isoDate: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  /** Optional source label, e.g. "By the Annoviant team" or "By a contributing journalist". */
  source?: string;
  /** Optional hero image (path under /public). */
  image?: string;
  /** Body, an array of plain-text paragraphs. Pull-quotes use the `quote` field instead. */
  paragraphs: ({ p: string } | { quote: string; cite?: string })[];
};

export const articles: NewsArticle[] = [
  {
    slug: "alpharetta-startups-technology-could-revolutionize-cardiac-surgeries",
    date: "Aug 6, 2024",
    isoDate: "2024-08-06",
    category: "Media",
    title: "Alpharetta startup's technology could revolutionize cardiac surgeries",
    excerpt:
      "A local-paper deep dive on what TxGuard® is, why it&rsquo;s different, and the team behind it.",
    source: "Originally published in local Alpharetta press, August 2024",
    image: "/news/cardio-2024.png",
    paragraphs: [
      { p: "A local startup CEO left the corporate world to pursue a solution for one of the world's most pervasive health problems." },
      { quote: "We can save lives.", cite: "Dr. Ajay Houde, CEO and co-founder, Annoviant" },
      { p: "In 2018, Houde departed from Halyard Health, formerly a subsidiary of Kimberly-Clark, a Fortune 100 company with operations in Alpharetta, to develop a breakthrough technology to help patients with damaged or defective hearts. He and co-founder Dr. Naren Vyavahare, whom Houde described as the “brain behind the technology,” established the Alpharetta-based startup Annoviant and created an innovative process called TxGuard." },
      { p: "TxGuard removes animal cells from an animal's blood vessel using a proprietary process and implants it into a person's heart, functioning as a scaffold for human cells to grow around. The technology's regenerative capacity may prove especially beneficial to children born with heart defects." },
      { p: "Children born with heart defects have limited options for replacing heart valves, Vyavahare said. Annoviant has secured four grants from the National Institutes of Health and approximately $7.5 million in funding." },
      { quote: "We can give a better option, minimize the number of repeat procedures, and save the time in the hospital for people.", cite: "Dr. Naren Vyavahare, co-founder and CTO, Annoviant" },
      { p: "TxGuard has potential to address a significant health challenge. Nearly 400,000 people undergo heart bypass surgery annually in the U.S. Traditional surgery involves taking a blood vessel from another body part to bypass a blocked cardiac artery or defective heart sections. Since the 1970s, methods have remained largely unchanged. Although the surgery saves lives with a high survival rate, patients often require anticoagulant drugs and repeat surgeries as replaced tissues harden." },
      { p: "Developing TxGuard has presented challenges, but Houde's business received support from nonprofit startup incubator Tech Alpharetta. With dozens of startups partnered with Tech Alpharetta, the nonprofit has served as a mentorship hub where Houde can exchange ideas and solve complex problems." },
      { p: "The support was particularly meaningful following personal tragedy. A close relative was recently diagnosed with coronary heart disease. \"So many people are struggling,\" Houde said, noting that there are 20 million people today struggling with coronary heart disease." },
      { p: "Other loved ones have experienced serious health issues. His mother died in 2017 from inadequate diagnosis. His wife required a stent in 2002 for a renal artery defect. His sister has battled breast cancer. These personal experiences motivated Houde's career transition." },
      { quote: "Health care is actually very near and dear to me because I have lost many of my relatives, some close friends. Some family members were impacted by lacking proper diagnostic or treatment.", cite: "Dr. Ajay Houde" },
      { p: "Although TxGuard has not yet been tested in humans, Houde indicated testing could begin relatively soon. Annoviant has collaborated with the FDA throughout development. However, obtaining FDA approval could require several years. Initial TxGuard devices would likely target pediatric patients with limited options." },
      { quote: "Saving lives and making people healthy is a noble cause. And it gives immense inner joy if you even help one patient.", cite: "Dr. Naren Vyavahare" },
    ],
  },

  {
    slug: "annoviant-awarded-2-99-million-nih-grant-pediatric-pulmonary-valved-conduit",
    date: "Apr 16, 2024",
    isoDate: "2024-04-16",
    category: "Press Release",
    title: "Annoviant® Awarded $2.99M NIH Grant to Advance TxGuard® Pulmonary-Valved Conduit for Pediatric Heart Disease",
    excerpt:
      "A multi-year NIH award to accelerate the TxGuard® Pulmonary Valved Graft toward congenital heart disease patients. Cumulative NIH backing of the platform: $5.7M.",
    source: "Atlanta, April 16, 2024",
    image: "/news/nih-grant-2024.jpg",
    paragraphs: [
      { p: "Annoviant®, Inc., a pioneering company with a breakthrough TxGuard® technology platform for soft-tissue healing, currently focused on the cardiovascular field, proudly announces receipt of a $2.99 million grant (SBIR Phase 2b) from the National Institutes of Health (NIH). This grant aims to propel the development and commercialization of its revolutionary TxGuard® pulmonary valved conduit. Building upon the Phase II NIH Grant secured in 2021, this funding represents a significant step forward in Annoviant's mission to transform the landscape of pediatric cardiac care." },
      { p: "Annoviant's patented TxGuard® stands at the forefront of technological innovation in conduit replacements for treating congenital heart disease (CHD), the most prevalent birth defect globally and a leading cause of birth-related mortality. CHD encompasses a spectrum of abnormalities that disrupt blood flow to and from the heart, affecting approximately 40,000 newborns annually in the US and 1.35 million worldwide. With an estimated 2.9 million CHD patients in the US alone, the need for advanced solutions is paramount." },
      { p: "Addressing critical shortcomings observed in current commercial devices, TxGuard® offers unparalleled clinical advantages, notably its resistance to calcification, thrombosis, infection, and host cell integration. This technology heralds a new era in pediatric cardiac interventions, providing durable pulmonary valved grafts that adapt and regenerate alongside patients, minimizing the need for multiple re-operations over their lifetimes." },
      { quote: "We are delighted to receive this additional grant from the NIH, accompanied by matching funds from our esteemed investors. This marks a significant milestone for Annoviant as we accelerate our pursuit of impactful innovation to save lives.", cite: "Ajay Houde, Ph.D., MBA, Co-Founder & CEO, Annoviant" },
      { p: "Pediatric patients with CHD often undergo multiple cardiovascular surgeries throughout their lives, with associated costs totaling billions for the US healthcare industry. TxGuard® offers a transformative solution to this ongoing challenge, promising extended durability and reduced healthcare burden for patients and providers alike." },
      { quote: "Pediatric CHD patients require medical devices that can evolve with them into adulthood. After fifteen years of dedicated research, we have developed TxGuard® technology to address this critical need, resisting thrombosis and calcification while promoting host cell integration and remodeling. With NIH Phase IIb funding, we look forward to further refining pulmonary valved conduits for the benefit of CHD patients.", cite: "Naren Vyavahare, Ph.D., Co-Founder & CTO, Annoviant" },
    ],
  },

  {
    slug: "alpharetta-based-annoviant-medical-device-startup-grows-with-patients",
    date: "Apr 25, 2023",
    isoDate: "2023-04-25",
    category: "Media",
    title: "Alpharetta-Based Annoviant: a Medical Device Startup That Aims to Grow With Patients",
    excerpt:
      "An early profile on how Annoviant is approaching the hardest pediatric problem in heart surgery.",
    source: "Originally published April 2023",
    image: "/news/grows-patients-2023.jpg",
    paragraphs: [
      { p: "Parents of the 1.3 million newborns diagnosed with congenital heart disease annually face a challenging reality: their children require not just initial surgeries, but multiple procedures as they grow. Ajay Houde, a chemistry PhD, recognized this problem and sought to transform pediatric cardiovascular care." },
      { p: "Houde relocated to Atlanta in 1999 to work with Kimberly-Clark Healthcare before transitioning into the startup sector. He observed that major medical device manufacturers largely overlooked the pediatric market, prompting him to pursue his own solution. In 2018, Houde and co-founder Naren Vyavahare established Annoviant, an Alpharetta-based medical device company dedicated to advancing soft-tissue healing technology." },
      { p: "The company's inaugural product, TxGuard®, functions as a Pulmonary Valved Graft employing tissue regeneration for valve replacements and other critical cardiac procedures." },
      { quote: "There is no question about rejection. There's no question about compatibility. We're also addressing some of the clinical challenges. Our technology will allow us to avoid repeat surgeries.", cite: "Ajay Houde, Ph.D., Co-Founder & CEO, Annoviant" },
      { p: "The startup has achieved significant validation. Annoviant secured backing from three of five FDA-funded Pediatric Device Consortiums and partnerships with prominent pediatric hospitals including Children's Healthcare of Atlanta, Boston Children's Hospital, and Children's Hospital of Philadelphia. The company was also selected for Georgia Tech's Center for MedTech Excellence inaugural cohort." },
      { p: "Georgia's medical device sector continues expanding, with over 550 companies operating statewide, supported by organizations including ATDC, Tech Alpharetta, the Center for Global Health Innovation, and Georgia Bio." },
    ],
  },

  {
    slug: "gregg-tobin-joins-as-business-advisor",
    date: "Feb 21, 2023",
    isoDate: "2023-02-21",
    category: "Announcement",
    title: "Gregg Tobin joins the Annoviant team as Business Advisor",
    excerpt:
      "Two decades of medical-device leadership and private-equity experience joining the Annoviant business advisory.",
    source: "Annoviant team announcement, February 21, 2023",
    image: "/team/gregg-tobin.jpg",
    paragraphs: [
      { p: "Gregg Tobin has joined Annoviant in the role of Business Advisor. Currently serving as President and Chief Executive Officer of a medical device manufacturing company, Tobin brings over two decades of progressive professional experience. His career has focused on expanding revenue and profitability for companies valued in the millions of dollars, encompassing both publicly traded and privately held organizations across multiple sectors." },
      { p: "Tobin's background emphasizes the medical device industry specifically. In his capacity as an operating executive and private equity investor, he has directed acquisitions and committed substantial capital to numerous operating enterprises." },
      { quote: "Gregg, and the experience he brings, are welcome additions to the Annoviant team and we look forward to the significant contributions he will make in his role as Business Advisor.", cite: "Ajay Houde, Ph.D., MBA, Co-Founder & CEO, Annoviant" },
    ],
  },

  {
    slug: "17-startups-join-atl-accelerator",
    date: "Dec 12, 2022",
    isoDate: "2022-12-12",
    category: "Media",
    title: "Annoviant among 17 startups joining ATL accelerator for life-science and medical-device founders",
    excerpt:
      "Annoviant joins the inaugural cohort of Georgia Tech's Center for MedTech Excellence, a 16-week mentoring and training program.",
    source: "Originally published December 2022",
    image: "/news/qtq-thumb.jpeg",
    paragraphs: [
      { p: "The Center for MedTech Excellence, housed within Georgia Tech's Enterprise Innovation Institute, has announced its inaugural cohort of 17 early-stage startups. The 16-week mentoring and training program aims to advance medical devices and technologies within Atlanta." },
      { p: "Nakia Melecio, Senior Research Faculty at Georgia Tech, spearheaded the initiative after observing that existing support systems failed to adequately serve medical-device and life-sciences entrepreneurs. He noted that talented founders were departing the region:" },
      { quote: "I saw all these startups leave our ecosystem to go to other places like IndieBio on the West Coast and MassChallenge on the East Coast.", cite: "Nakia Melecio, Senior Research Faculty, Georgia Tech" },
      { p: "After two years of development, Melecio created the program from the ground up, supported by a $2.6 million Economic Development Administration Build to Scale grant. The inaugural class addresses diverse healthcare challenges across medical devices, biomanufacturing, remote patient monitoring, and drug discovery. Notable participants include Dr. Noze Best (a children's healthcare brand), Annoviant (a regenerative-tissue company), and StrideLink (a wearable patient tracking system)." },
      { p: "The Center complements its accelerator with a three-week research-to-market program for scientists and inventors testing early-stage ideas. This support helps address barriers facing biotech and medtech startups, including lengthy R&D timelines, complex regulatory requirements, and challenging grant acquisition processes. Atlanta's growing medtech ecosystem now includes Georgia Tech and Emory's Biolocity program for students, plus the upcoming Science Square development featuring 18 acres dedicated to life-sciences innovation." },
    ],
  },

  {
    slug: "robert-storey-joins-as-business-advisor",
    date: "Dec 5, 2022",
    isoDate: "2022-12-05",
    category: "Announcement",
    title: "Robert Storey joins the Annoviant team as Business Advisor",
    excerpt:
      "Bob Storey, Managing Partner of The LaunchPort and Vapotherm founder, joins as Business Advisor.",
    source: "Annoviant team announcement, December 5, 2022",
    image: "/team/robert-storey.jpg",
    paragraphs: [
      { p: "Annoviant has announced the addition of Robert Storey to its team in the role of Business Advisor." },
      { p: "Storey serves as Managing Partner of The LaunchPort in Baltimore, Maryland, a venture center supporting early-stage medical-device companies navigating regulatory approval and commercial adoption. He holds the position of Vice Chairman on Maryland's Life Sciences Advisory Board and collaborates with the FDA, payors, device manufacturers, and healthcare providers on medical-device initiatives in the Capitol Region." },
      { p: "Currently, Storey works as a Portfolio Executive for the National Institutes of Health's Rapid Acceleration of Diagnostics investment program, focusing on SARS-CoV-2 testing solutions. He also serves as the NIH's Medical Device Expert for the I-Corps @ NIH program and has directed international Lean Start-up cohorts across multiple continents." },
      { p: "At Johns Hopkins University, Storey holds the title of Executive in Residence and participates on numerous advisory boards and committees, including the External Advisory Board for the Center for Biomedical Innovation and Design, and serves as Director of the Evaluation Core for the Neurotech Harbor initiative." },
      { p: "His career began at Exxon Corporation in Houston, where he spent nearly 15 years in technology, business planning, and mergers and acquisitions. He later transitioned to leadership roles at an engineering firm and Clariant Corporation, before founding Vapotherm, Inc., a medical-device company specializing in non-invasive respiratory devices, where he served as President and CEO for over a dozen years." },
      { quote: "We're excited to welcome Bob and the experience he brings to the Annoviant team and look forward to the significant contributions he will make in his role as Business Advisor.", cite: "Ajay Houde, Co-Founder & CEO, Annoviant" },
    ],
  },

  {
    slug: "kevin-maher-md-joins-as-scientific-advisor",
    date: "Nov 21, 2022",
    isoDate: "2022-11-21",
    category: "Announcement",
    title: "Kevin Maher, MD joins the Annoviant team as Scientific Advisor",
    excerpt:
      "Director of the Cardiac ICU at Children's Healthcare of Atlanta and Emory pediatrics professor joins the scientific advisory.",
    source: "Annoviant team announcement, November 21, 2022",
    image: "/team/kevin-maher.jpg",
    paragraphs: [
      { p: "Annoviant announced the addition of Kevin Maher, MD, as a scientific advisor to the organization." },
      { p: "Dr. Maher holds the position of Professor of Pediatrics at Emory University School of Medicine and directs the Cardiac Intensive Care Unit at Children's Healthcare of Atlanta. His medical training includes completion of medical school at the University of Maryland, followed by pediatric residency and chief residency at the same institution. He subsequently completed fellowship training in pediatric cardiology at the University of Michigan and received additional cardiac ICU training at DuPont Children's Hospital." },
      { p: "Since 2004, Dr. Maher has been affiliated with the Division of Pediatric Cardiology at both Children's Healthcare of Atlanta and Emory University. He serves on the Cardiac Executive Leadership Committee and contributes to the strategic direction of the Children's Healthcare of Atlanta Heart Center." },
      { p: "His research focuses on pediatric heart failure, medical-device development for children, data analytics, and technology innovation in pediatric research. He has authored over 75 articles and shared his research internationally. Additionally, Dr. Maher collaborates with Georgia Institute of Technology and serves as Medical Director of the Pediatric Technology Center there, holding an adjunct professorship in Biomedical Engineering." },
      { quote: "We're excited to welcome Dr. Maher to the Annoviant team and look forward to the significant contributions he will make.", cite: "Ajay Houde, Co-Founder & CEO, Annoviant" },
    ],
  },

  {
    slug: "txguard-platform-technology-cardiovascular-pediatric",
    date: "Oct 18, 2022",
    isoDate: "2022-10-18",
    category: "Media",
    title: "TxGuard®: A Platform Technology for Cardiovascular Devices in the Pediatric Patient",
    excerpt:
      "An overview of why pediatric heart valve replacement remains underserved, and how TxGuard® approaches the problem.",
    source: "Originally published October 2022",
    image: "/news/platform-pediatric.jpg",
    paragraphs: [
      { p: "Annoviant is developing next-generation biomaterials to fabricate cardiovascular devices for children with congenital heart disease. Approximately 40,000 newborns in the U.S. annually and 1.3 million children globally are affected by this condition. Young patients requiring valve and conduit replacements face life-threatening complications from absent pulmonary valves, aortic stenosis, and other cardiac abnormalities." },
      { p: "The Centers for Disease Control and Prevention reports roughly 2.9 million Americans currently living with congenital heart disease. Traditional commercial devices present significant challenges, including calcification, thrombosis, and infection. Children need repeated surgeries as they grow, creating substantial healthcare costs estimated at $5.61 billion annually for the U.S. healthcare system." },
      { p: "Annoviant LLC, established in 2018 and formerly known as TGen Tech LLC, collaborates with research institutions and industry partners nationwide. The company's founders were personally motivated to address congenital heart disease treatment. The firm has created a decellularized tissue-based platform called TxGuard® that resists calcification, thrombosis, and infection while allowing tissue remodeling through patient cell infiltration without functional compromise." },
      { p: "The Pennsylvania Pediatric Device Consortium supported earlier company work and facilitated FDA discussions. This assistance helped secure substantial NIH funding. Annoviant has received two Phase I STTR grants and one Phase II SBIR grant to commercialize the TxGuard® pulmonary valve conduit." },
      { p: "Current developmental priorities include translating technology to commercial-scale production, identifying appropriate regulatory pathways, and continuing product development targeting pediatric applications where larger companies hesitate to invest due to substantial upfront expenses and market risks." },
    ],
  },

  {
    slug: "annoviant-awarded-1-85m-sbir-phase-ii-grant",
    date: "Oct 4, 2021",
    isoDate: "2021-10-04",
    category: "Press Release",
    title: "Annoviant awarded $1.85M SBIR Phase II grant from the National Institutes of Health",
    excerpt:
      "An earlier NIH SBIR Phase II grant that helped take TxGuard® from the lab toward IND-enabling work, building the foundation for the 2024 award.",
    source: "October 4, 2021",
    image: "/news/heart-matrix-blue.jpg",
    paragraphs: [
      { p: "Annoviant LLC, formerly TGen Tech LLC, announced it has received a $1.85 million grant for two years from the National Institutes of Health to advance development and commercialization of the TxGuard® pulmonary-valved conduit. This award continues support from a Phase I Small Business Technology Transfer grant the company received in 2019." },
      { p: "The conduit represents innovative technology for treating congenital heart disease in children. Designed primarily for pediatric patients, the device resists early deterioration and allows regeneration with host cells, enabling growth alongside the child. Congenital heart disease affects approximately 40,000 newborns annually in the U.S. Valve and conduit replacements address conditions including absent pulmonary valve, aortic stenosis, double outlet right ventricle, and other structural heart issues." },
      { quote: "We're extremely pleased to receive this grant, and we are grateful for the National Heart, Lung, and Blood Institute's financial support. The grant funding will enable us to address the clinical and cost challenges associated with treating CHD in children.", cite: "Ajay Houde, Ph.D., MBA, Co-Founder & CEO, Annoviant" },
      { p: "Current commercial devices face significant complications: calcification, thrombosis, and infection. Globally, 1.3 million children are born with congenital heart disease annually, contributing to 4–6% of neonatal deaths. The CDC reports approximately 2.9 million CHD patients in the U.S. Pediatric CHD patients typically undergo 3 to 5 cardiovascular surgeries throughout their lifetimes, costing the U.S. healthcare system an estimated $5.61 billion for treatment." },
      { p: "The TxGuard® scaffolding demonstrates clinical advantages over existing products through resistance to calcification, thrombosis, and infection, alongside its regenerative capabilities and growth potential with patients." },
    ],
  },
];

export const articleBySlug = (slug: string): NewsArticle | undefined =>
  articles.find((a) => a.slug === slug);
