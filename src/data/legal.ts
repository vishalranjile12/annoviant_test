/**
 * Legal documents for annoviant.com.
 *
 * These templates are written to align with prevailing healthcare-industry
 * standards, including:
 *   - Privacy Policy:   HIPAA, GDPR, CCPA/CPRA, COPPA principles
 *   - Terms of Use:     FDA medical-device disclosure standards, PSLRA-style
 *                       safe-harbor language for forward-looking statements
 *   - FCOI Policy:      NIH/PHS regulation 42 CFR Part 50 Subpart F (the
 *                       Federal regulation governing financial conflict of
 *                       interest for PHS-funded research)
 *
 * They are templates. Annoviant counsel should review and adopt before
 * publication as the company's binding policy.
 */

export type LegalSection = {
  heading: string;
  /** One or more paragraphs of plain prose. */
  paragraphs: string[];
  /** Optional bulleted list rendered after the paragraphs. */
  list?: string[];
  /** When true, the list renders as an ordered (numbered) list. */
  listOrdered?: boolean;
};

export type LegalDoc = {
  slug: "privacy" | "terms" | "fcoi";
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
};

const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro:
    "Annoviant, Inc. (“Annoviant,” “we,” “us”) takes your privacy seriously. This policy explains what information we collect when you visit annoviant.com or contact us, how we use it, the legal bases we rely on, and the rights you have.",
  effectiveDate: "May 6, 2026",
  sections: [
    {
      heading: "1. Scope",
      paragraphs: [
        "This Privacy Policy applies to information collected through annoviant.com, related sub-domains, and direct communications with Annoviant about our investigational TxGuard® regenerative tissue platform. It does not cover protected health information governed by the U.S. Health Insurance Portability and Accountability Act of 1996 (HIPAA), as Annoviant does not knowingly collect such information through this website.",
      ],
    },
    {
      heading: "2. Information we collect",
      paragraphs: [
        "We collect two categories of information.",
      ],
      list: [
        "Information you provide. When you submit an inquiry, sign up for updates, or otherwise contact us, you may provide your name, professional email address, organization or hospital affiliation, professional role, country of residence, and any free-text content you choose to include in your message.",
        "Information collected automatically. When you visit our site, our hosting and infrastructure providers automatically log standard server data such as your IP address, browser type, operating system, referring page, the pages you view, and timestamps. We use a minimal set of strictly necessary first-party cookies to operate the site (for example, to remember session state).",
      ],
      listOrdered: true,
    },
    {
      heading: "3. How we use information",
      paragraphs: [
        "We use the information we collect for the following limited purposes.",
      ],
      list: [
        "To respond to your inquiries with materials and information matched to your stated role (clinician, investor, partner, patient, or media).",
        "To send updates about Annoviant programs only when you have explicitly opted in.",
        "To operate, secure, and improve the website and underlying infrastructure.",
        "To comply with applicable laws, respond to lawful requests from public authorities, and enforce our Terms of Use.",
      ],
    },
    {
      heading: "4. Legal bases for processing (EU/UK visitors)",
      paragraphs: [
        "If you are in the European Economic Area, the United Kingdom, or Switzerland, we process your personal data on one or more of the following legal bases under the General Data Protection Regulation (Regulation (EU) 2016/679) and the UK GDPR.",
      ],
      list: [
        "Consent: where you have explicitly opted in to receive program updates.",
        "Contract: where processing is necessary to respond to a request you have made.",
        "Legitimate interests: where the processing is necessary for our legitimate interests in operating, securing, and improving our website and business, balanced against your rights.",
        "Legal obligation: where processing is required to comply with applicable laws, including healthcare and life-sciences regulation.",
      ],
    },
    {
      heading: "5. How we share information",
      paragraphs: [
        "We do not sell, rent, or trade your personal information. We share information only in the following limited circumstances.",
      ],
      list: [
        "Service providers acting on our behalf, including hosting, email infrastructure, analytics minimally configured for first-party use, and CRM tools. These providers are contractually bound to use information only as Annoviant directs and to maintain reasonable safeguards.",
        "Legal and safety obligations, including responding to subpoenas, court orders, or other lawful requests; cooperating with regulators, including the U.S. Food and Drug Administration (FDA) and the National Institutes of Health (NIH); investigating fraud or security incidents; and protecting the rights, property, or safety of Annoviant, our partners, or the public.",
        "Corporate transactions, in connection with a financing, acquisition, merger, reorganization, or sale of assets, in which case any successor will continue to honor commitments made in this policy.",
      ],
    },
    {
      heading: "6. Cookies and similar technologies",
      paragraphs: [
        "We use only strictly necessary, first-party cookies that support core site operation. We do not use third-party advertising cookies and do not engage in cross-site tracking. Browsers can be configured to block or warn about cookies; doing so may limit certain functions of the site.",
      ],
    },
    {
      heading: "7. HIPAA and protected health information",
      paragraphs: [
        "Annoviant is not a HIPAA-covered entity. Our website is not designed to receive or transmit Protected Health Information (PHI) as defined under 45 CFR §160.103. We ask that you do not submit PHI through forms, email, or chat. If you do, we will not use the information for any purpose other than to delete or return it and will treat it consistent with this policy until then.",
      ],
    },
    {
      heading: "8. Data retention",
      paragraphs: [
        "We retain personal information only for as long as needed for the purposes described in this policy and to comply with our legal, financial, and regulatory obligations. Inquiry information is generally retained for the duration of any active engagement plus a reasonable period thereafter for record-keeping; server logs are retained for short, security-driven windows. Where research-grant records implicate federal regulation (for example, 42 CFR Part 50 Subpart F record-keeping), we retain those records for the periods required by the applicable regulation.",
      ],
    },
    {
      heading: "9. Security",
      paragraphs: [
        "Annoviant maintains administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or destruction. These include TLS encryption in transit, access controls, principle-of-least-privilege provisioning, vendor risk review, and incident-response procedures. No system is perfectly secure; we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "10. Your rights",
      paragraphs: [
        "Depending on where you reside, you may have the rights below. To exercise any of them, contact privacy@annoviant.com. We will respond within the timeframes required by applicable law, typically within 30 days.",
      ],
      list: [
        "Right of access: to know what personal information we hold about you and how we use it.",
        "Right of rectification: to ask us to correct inaccurate or incomplete information.",
        "Right to erasure: to ask us to delete your personal information, subject to legal exceptions.",
        "Right to restrict or object to processing, including the right to opt out of program updates at any time.",
        "Right to data portability: to receive your information in a structured, commonly used, machine-readable format.",
        "California (CCPA/CPRA): the rights to know, to delete, to correct, to limit use of sensitive personal information, and to be free from discrimination for exercising these rights. We do not sell or share personal information for cross-context behavioral advertising.",
        "Right to lodge a complaint with a supervisory authority, including the relevant EU data protection authority or the UK Information Commissioner’s Office.",
      ],
    },
    {
      heading: "11. Children’s privacy",
      paragraphs: [
        "Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13 in violation of the Children’s Online Privacy Protection Act (COPPA). If we learn that we have inadvertently collected such information, we will delete it.",
      ],
    },
    {
      heading: "12. International transfers",
      paragraphs: [
        "Annoviant is based in the United States. If you are accessing the site from outside the United States, please be aware that information collected through this site may be transferred to, stored in, and processed in the United States or other jurisdictions where our service providers operate. Where required by applicable law, we use Standard Contractual Clauses or other approved transfer mechanisms.",
      ],
    },
    {
      heading: "13. Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time to reflect changes in our practices, technology, or applicable law. The effective date at the top of this page indicates when the policy was last revised. Material changes will be communicated through a prominent notice on the site.",
      ],
    },
    {
      heading: "14. Contact",
      paragraphs: [
        "If you have any questions about this policy, your rights, or our privacy practices, please contact us at privacy@annoviant.com or by mail at: Annoviant, Inc., Attn: Privacy Officer, Alpharetta, Georgia, USA.",
      ],
    },
  ],
};

const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms of Use",
  intro:
    "These Terms of Use govern your access to and use of annoviant.com and related content (the “Site”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
  effectiveDate: "May 6, 2026",
  sections: [
    {
      heading: "1. Investigational status (FDA disclosure)",
      paragraphs: [
        "Information on this Site describes the TxGuard® regenerative tissue platform and related programs of Annoviant, Inc. The TxGuard® Pulmonary Valved Graft holds a U.S. Food and Drug Administration (FDA) Humanitarian Use Device (HUD) designation, granted in 2020. Other Annoviant indications described on the Site are investigational and have not been approved or cleared by the FDA or any other regulatory authority for use in humans. The Site is not intended as promotion, advertising, or solicitation for any unapproved use.",
      ],
    },
    {
      heading: "2. Audience and intended use",
      paragraphs: [
        "Content on the Site is intended for U.S. medical, scientific, regulatory, investor, and partnership audiences. It is not intended as medical advice or as a substitute for the medical advice of your own qualified healthcare professional. Access from outside the United States is at your own risk; some content may not be appropriate or available in all jurisdictions.",
      ],
    },
    {
      heading: "3. No medical advice",
      paragraphs: [
        "Nothing on the Site constitutes medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician or other healthcare provider with any questions about a medical condition or treatment, and never disregard or delay obtaining professional medical advice because of something you have read on the Site. If you believe you are experiencing a medical emergency, call your local emergency number immediately.",
      ],
    },
    {
      heading: "4. Forward-looking statements",
      paragraphs: [
        "The Site contains forward-looking statements that reflect Annoviant’s current expectations regarding future events, including statements about pipeline programs, regulatory milestones, pre-clinical and clinical results, market opportunities, financing plans, and strategic interest. These statements are based on assumptions and are subject to risks and uncertainties, including risks inherent in regulatory review, clinical development, manufacturing, intellectual property, competition, and capital markets. Actual results may differ materially. Annoviant undertakes no obligation to update any forward-looking statement except as required by law.",
      ],
    },
    {
      heading: "5. Pre-clinical data limitations",
      paragraphs: [
        "Pre-clinical data described on the Site reflects studies conducted under ISO 5840 (cardiovascular implants – heart valve substitutes) and ISO 10993 (biological evaluation of medical devices) guidance in animal models, including aggressive lamb-to-sheep models. Animal-model data does not necessarily predict outcomes in humans, and study endpoints, populations, and conditions may differ materially from those in any future human clinical investigation.",
      ],
    },
    {
      heading: "6. Intellectual property",
      paragraphs: [
        "The Site and all content on it, including text, graphics, logos, illustrations, photographs, animations, video, audio, and software, are owned by Annoviant or its licensors and are protected by U.S. and international copyright, trademark, patent, and other intellectual property laws. “Annoviant®” and “TxGuard®” are registered trademarks of Annoviant, Inc. All other marks are the property of their respective owners.",
        "Annoviant grants you a limited, revocable, non-exclusive, non-transferable license to access and view the Site for personal, non-commercial informational purposes, and where applicable, professional purposes within your role. Any other use, including reproduction, distribution, modification, public performance or display, framing, scraping, or commercial exploitation, is prohibited without Annoviant’s prior written consent.",
      ],
    },
    {
      heading: "7. Permitted and prohibited use",
      paragraphs: [
        "You agree not to:",
      ],
      list: [
        "Use the Site in any manner that violates applicable law or regulation, including U.S. healthcare and life-sciences laws.",
        "Submit content that is unlawful, infringing, defamatory, harassing, or that violates the rights of any third party.",
        "Submit Protected Health Information (PHI) as defined under HIPAA through forms, chat, or email.",
        "Probe, scan, or test the vulnerability of the Site or any related infrastructure, or breach or circumvent any security or authentication measures.",
        "Use any automated means to scrape or extract content from the Site, including for training a machine-learning model, except where expressly permitted by Annoviant via robots.txt or llms.txt.",
        "Reverse engineer or attempt to derive source code from any portion of the Site except to the extent permitted by applicable law.",
      ],
    },
    {
      heading: "8. Third-party links",
      paragraphs: [
        "The Site may include links to third-party websites and resources. Such links are provided for convenience only. Annoviant has no control over and is not responsible for the content, privacy practices, or accuracy of any linked third-party site, and the inclusion of a link does not imply endorsement.",
      ],
    },
    {
      heading: "9. Disclaimers",
      paragraphs: [
        "THE SITE AND ITS CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING, PERFORMANCE, OR USAGE OF TRADE. ANNOVIANT DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE OR THAT ANY DEFECTS WILL BE CORRECTED.",
      ],
    },
    {
      heading: "10. Limitation of liability",
      paragraphs: [
        "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL ANNOVIANT, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, OR DATA, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR ITS CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY CASE, ANNOVIANT’S AGGREGATE LIABILITY UNDER OR IN CONNECTION WITH THESE TERMS WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US$100).",
      ],
    },
    {
      heading: "11. Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless Annoviant, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys’ fees, arising out of or in any way connected with your access to or use of the Site, your violation of these Terms, or your violation of any rights of another.",
      ],
    },
    {
      heading: "12. Governing law and venue",
      paragraphs: [
        "These Terms are governed by and construed in accordance with the laws of the State of Georgia, USA, without regard to its conflict-of-laws principles. You agree to the exclusive jurisdiction and venue of the state and federal courts located in Fulton County, Georgia for any dispute arising out of or relating to these Terms, except where mandatory law requires otherwise.",
      ],
    },
    {
      heading: "13. Severability and waiver",
      paragraphs: [
        "If any provision of these Terms is held unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect. Annoviant’s failure to enforce any provision is not a waiver of its right to do so later.",
      ],
    },
    {
      heading: "14. Changes",
      paragraphs: [
        "We may revise these Terms from time to time. The effective date at the top of this page indicates when the Terms were last updated. Continued use of the Site after the effective date of an update constitutes acceptance of the revised Terms.",
      ],
    },
    {
      heading: "15. Contact",
      paragraphs: [
        "Questions about these Terms may be sent to legal@annoviant.com or by mail to: Annoviant, Inc., Attn: Legal, Alpharetta, Georgia, USA.",
      ],
    },
  ],
};

const FCOI: LegalDoc = {
  slug: "fcoi",
  title: "Financial Conflict of Interest (FCOI) Policy",
  intro:
    "Annoviant maintains this Financial Conflict of Interest Policy in accordance with U.S. Public Health Service (PHS) regulations at 42 CFR Part 50, Subpart F, which apply to small-business grantees receiving research funding from the National Institutes of Health (NIH) and other PHS Awarding Components. The policy is designed to promote objectivity in research by ensuring that the design, conduct, and reporting of PHS-funded research is free from bias resulting from financial conflicts of interest.",
  effectiveDate: "May 6, 2026",
  sections: [
    {
      heading: "1. Purpose and authority",
      paragraphs: [
        "Annoviant has adopted this Policy to comply with the PHS regulations governing the responsibility of applicants for promoting objectivity in research, as set forth in 42 CFR Part 50, Subpart F (“the Regulation”). The Policy applies to all PHS-funded research conducted at or under the auspices of Annoviant, including research conducted by or under subrecipient agreements.",
      ],
    },
    {
      heading: "2. Scope",
      paragraphs: [
        "This Policy applies to every Investigator (as defined below) who is planning to participate in, or who is participating in, PHS-funded research conducted at or under the auspices of Annoviant, including the principal investigator, co-investigators, and any other person at Annoviant or a subrecipient who is responsible for the design, conduct, or reporting of the research.",
      ],
    },
    {
      heading: "3. Definitions",
      paragraphs: [
        "For purposes of this Policy, the following definitions, derived from 42 CFR §50.603, apply.",
      ],
      list: [
        "“Investigator” means the project director or principal investigator and any other person, regardless of title or position, who is responsible for the design, conduct, or reporting of research funded by the PHS, or proposed for such funding, which may include collaborators or consultants.",
        "“Institutional Responsibilities” means an Investigator’s professional responsibilities on behalf of Annoviant, including activities such as research, research consultation, teaching, professional practice, institutional committee memberships, and service on panels, such as Institutional Review Boards or Data and Safety Monitoring Boards.",
        "“Significant Financial Interest” (SFI) means a financial interest consisting of one or more of: (i) with regard to any publicly traded entity, remuneration plus the value of equity interests received in the 12 months preceding the disclosure that, when aggregated, exceeds US$5,000; (ii) with regard to any non-publicly traded entity, remuneration in the 12 months preceding the disclosure that exceeds US$5,000, or any equity interest of any value; or (iii) intellectual property rights and interests upon receipt of income related to such rights and interests. SFI does not include the categories of exclusions listed at 42 CFR §50.603.",
        "“Financial Conflict of Interest” (FCOI) means an SFI that the institution’s Designated Official(s) reasonably determine could directly and significantly affect the design, conduct, or reporting of PHS-funded research.",
      ],
    },
    {
      heading: "4. Investigator training",
      paragraphs: [
        "Each Investigator must complete training regarding this Policy, the Investigator’s responsibilities under it, and the Regulation prior to engaging in PHS-funded research, and at least every four years thereafter. Training must also be completed promptly when (i) this Policy is substantively revised in a manner that affects Investigator requirements, (ii) the Investigator is new to Annoviant, or (iii) Annoviant determines that an Investigator is not in compliance with this Policy or with a management plan.",
      ],
    },
    {
      heading: "5. Disclosure of Significant Financial Interests",
      paragraphs: [
        "Each Investigator must disclose to the Designated Official all of the Investigator’s SFIs (and those of the Investigator’s spouse and dependent children) that reasonably appear to be related to the Investigator’s Institutional Responsibilities.",
        "Disclosures must be made:",
      ],
      list: [
        "No later than the time of application for PHS-funded research.",
        "At least annually during the period of the award.",
        "Within thirty (30) days of discovering or acquiring (e.g., through purchase, marriage, or inheritance) any new SFI.",
      ],
      listOrdered: true,
    },
    {
      heading: "6. Reimbursed or sponsored travel",
      paragraphs: [
        "Investigators must also disclose the occurrence of any reimbursed or sponsored travel related to their Institutional Responsibilities, with the exceptions specified at 42 CFR §50.604(d). Such disclosures must include, at a minimum, the purpose of the trip, the identity of the sponsor or organizer, the destination, and the duration. The Designated Official will determine if further information, including the monetary value, is needed to evaluate whether the travel constitutes an FCOI.",
      ],
    },
    {
      heading: "7. Review and determination of FCOI",
      paragraphs: [
        "The Designated Official will review each disclosure of an SFI and determine whether it is related to PHS-funded research and, if so, whether it is an FCOI. An SFI is related to PHS-funded research when the Designated Official reasonably determines that the SFI could be affected by the research, or is in an entity whose financial interest could be affected by the research. An SFI is an FCOI when the Designated Official reasonably determines that it could directly and significantly affect the design, conduct, or reporting of the research.",
      ],
    },
    {
      heading: "8. Management of FCOI",
      paragraphs: [
        "If the Designated Official identifies an FCOI, Annoviant will develop and implement a management plan before any PHS funding is expended (or, in the case of a newly disclosed SFI, within 60 days of the determination). Examples of conditions or restrictions that may be imposed include public disclosure of the FCOI, monitoring of research by independent reviewers, modification of the research plan, change of personnel or personnel responsibilities, reduction or elimination of the financial interest, or severance of relationships that create the FCOI.",
      ],
    },
    {
      heading: "9. Reporting to the PHS Awarding Component",
      paragraphs: [
        "Annoviant will submit FCOI reports to the PHS Awarding Component (e.g., NIH) prior to expenditure of any funds, within 60 days of identifying a new or newly identified FCOI for an existing PHS-funded project, and at least annually thereafter for the duration of the project. Reports will contain the elements required by 42 CFR §50.605(b).",
      ],
    },
    {
      heading: "10. Retrospective review",
      paragraphs: [
        "If Annoviant fails to identify or manage an FCOI in a timely manner, including failure by an Investigator to disclose an SFI in a timely manner, Annoviant will, within 120 days of the determination of non-compliance, complete a retrospective review of the Investigator’s activities and the PHS-funded research project to determine whether any PHS-funded research conducted during the period of non-compliance was biased in the design, conduct, or reporting of such research. A mitigation report will be submitted to the PHS Awarding Component if bias is found.",
      ],
    },
    {
      heading: "11. Public accessibility",
      paragraphs: [
        "Consistent with 42 CFR §50.605(a)(5), prior to Annoviant’s expenditure of any PHS funds, Annoviant will ensure that information concerning identified FCOIs held by senior or key personnel is publicly accessible. Such information will be made available either via a publicly accessible Web site or by a written response to a request received within five (5) business days of the request, and will be updated at least annually.",
      ],
    },
    {
      heading: "12. Records retention",
      paragraphs: [
        "Annoviant will maintain records of all Investigator disclosures of financial interests, and Annoviant’s review of, and response to, such disclosures, for a period of at least three (3) years from the date the final expenditures report is submitted to the PHS Awarding Component, or otherwise as specified by the applicable record retention requirements of 45 CFR §75.361.",
      ],
    },
    {
      heading: "13. Subrecipient compliance",
      paragraphs: [
        "Where Annoviant carries out PHS-funded research through a subrecipient, the subrecipient agreement will incorporate terms requiring compliance with this Policy or with the subrecipient’s own FCOI policy that satisfies the Regulation, and will set out time periods for the subrecipient to report identified FCOIs to Annoviant in time for Annoviant to provide timely reports to the PHS Awarding Component.",
      ],
    },
    {
      heading: "14. Enforcement",
      paragraphs: [
        "Annoviant may impose sanctions on Investigators who fail to comply with this Policy or with a management plan, including up to and including suspension of research activity and other consequences as permitted under Annoviant’s personnel and research policies. The Designated Official may also direct additional review of any potentially affected research.",
      ],
    },
    {
      heading: "15. Designated Official and contact",
      paragraphs: [
        "Annoviant’s Designated Official for purposes of this Policy is the Chief Executive Officer (or such other officer as the CEO may designate in writing). Questions regarding this Policy, or requests for information about identified FCOIs that are publicly accessible under 42 CFR §50.605(a)(5), may be directed to fcoi@annoviant.com or by mail to: Annoviant, Inc., Attn: FCOI Designated Official, Alpharetta, Georgia, USA.",
      ],
    },
  ],
};

export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  privacy: PRIVACY,
  terms: TERMS,
  fcoi: FCOI,
};
