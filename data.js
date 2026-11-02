window.BOARD = {
  updated: "2026-11-02",
  timezone: "Africa/Lagos",
  profile: "Nigerian Mechanical Engineering undergraduate, 300 level, aerospace / space focus",
  summary: "INTERNATIONAL: AIAA scholarships open until 31 Jan 2027 (Denise Ponchak for non-US). KAUST VSRP year-round fully funded. IAESTE ongoing. Faculty outreach peak Oct–Jan. EPFL/Open Doors closed. Carewave local closes 9 Nov. Forecasts: GE UK autumn, Dawn Aerospace June, RAeS May–June, Caltech SURF. Citizenship-restricted (NSF REU, NASA OSTEM, Mitacs, Australian local) excluded. LOCAL: Carewave urgent bridge. Cumulative board maintained.",
  stats: { urgent: 3, open: 6, forecast: 9, excluded: 7 },
  deadlines: [
    { date: "2026-11-01", label: "EPFL E3 + Open Doors close", hint: "Two international deadlines", status: "urgent" },
    { date: "2026-11-09", label: "Carewave Aspire closes", hint: "Local ₦500k bridge", status: "urgent" },
    { date: "2026-11-30", label: "SAE Aero Design registration closes", hint: "Team competition", status: "open" },
    { date: "2026-12-16", label: "EAA Post-Secondary scholarships close", hint: "US/Canada study support", status: "open" },
    { date: "2027-01-31", label: "AIAA scholarships close", hint: "Yearly cycle", status: "open" },
    { date: "2027-05-06", label: "RAeS Futures Scholarship opens (typical)", hint: "Forecast", status: "forecast" },
    { date: "2027-06-30", label: "Dawn Aerospace NZ summer internships (typical)", hint: "Forecast cycle", status: "forecast" }
  ],
  opportunities: [
    {
      id: "epfl-e3",
      name: "EPFL E3 Excellence in Engineering Summer Research 2027",
      status: "urgent",
      type: "International summer research internship",
      destination: "Switzerland (EPFL Lausanne and partner sites)",
      level: "BSc (after 2 years) or MSc in engineering, science or technology",
      covers: "Monthly stipend (CHF 1,800 typical; higher at some sites) for housing and living; travel reimbursement on lab approval; 8–12 weeks research placement.",
      eligibility: "All nationalities. Mechanical engineering explicitly listed. Completed at least second year of Bachelor at application. Strong academic record (top of class expected). English proficiency.",
      deadline: "Portal open; closes 1 November 2026 (Summer 2027) — CLOSES TODAY",
      link: "https://eee.epfl.ch/",
      linkLabel: "Official EPFL E3 page",
      aerospace: "Direct research experience in mechanical, materials, microengineering or related labs at a top European engineering school — strong aerospace skill and network bridge.",
      next: "Prepare CV, transcript, statement of purpose, preferred lab areas and reference. Submit before end of day 1 Nov."
    },
    {
      id: "kaust-vsrp",
      name: "KAUST Visiting Student Research Program (VSRP)",
      status: "open",
      type: "International research internship",
      destination: "Saudi Arabia (KAUST)",
      level: "3rd-year+ BSc or Master’s in STEM (Mechanical Engineering eligible)",
      covers: "USD 1,000 monthly stipend, private room, return airfare, health insurance, lab access. 3–6 months.",
      eligibility: "All nationalities. GPA ≥3.5/4.0 or equivalent. English proficiency. Open year-round. Arrival minimum 6 weeks after submission.",
      deadline: "Open all year (apply anytime)",
      link: "https://admissions.kaust.edu.sa/study/internships",
      linkLabel: "Official KAUST internships page",
      aerospace: "Mechanical engineering and related research projects available; strong research experience bridge into aerospace skills.",
      next: "Browse available projects, prepare transcripts, CV, statement of purpose, recommendation and passport. Apply early."
    },
    {
      id: "aiaa-scholarships",
      name: "AIAA Foundation Undergraduate Scholarships (Denise Ponchak Digital Avionics)",
      status: "open",
      type: "International scholarship",
      destination: "Cash award (any location; non-US students eligible for Denise Ponchak)",
      level: "Undergraduate (sophomore/junior/senior), AIAA student member",
      covers: "Denise Ponchak $3,000 for non-U.S. students at non-U.S. universities; other awards up to $10,000 mostly require US enrolment.",
      eligibility: "AIAA student member. Completed at least one semester. Relevant GPA (typically 3.3/4.0). Denise Ponchak open to non-US students at non-US universities (no embargoed countries). Aerospace-relevant plan.",
      deadline: "Opens 15 October 2026; closes 31 January 2027 (yearly)",
      link: "https://aiaa.org/get-involved/university-students/undergraduate-scholarships-graduate-awards/",
      linkLabel: "AIAA scholarships page",
      aerospace: "Direct aerospace society support; Denise Ponchak targets digital avionics.",
      next: "Join AIAA as student member now. Prepare essay and recommendation for the open window. Prioritize Denise Ponchak."
    },
    {
      id: "iaeste",
      name: "IAESTE Nigeria paid internships",
      status: "open",
      type: "International paid internship / exchange",
      destination: "80+ countries (offer-dependent)",
      level: "Enrolled Nigerian university undergrad, age 19-30, usually after 4 semesters",
      covers: "Local living-cost stipend; support with visa, accommodation, and pre-departure. National participation fee applies.",
      eligibility: "Nigerian university students via IAESTE Nigeria. Mechanical Engineering is a core field; aerospace offers appear periodically.",
      deadline: "Offer-driven / rolling via national committee",
      link: "https://iaeste.ng/",
      linkLabel: "IAESTE Nigeria",
      aerospace: "Filter for aerospace, aeronautical, automotive, or manufacturing offers that build relevant skills.",
      next: "Email nigeria@iaeste.org with English CV, subject list, and contact details. Monitor global portal for offers."
    },
    {
      id: "faculty-outreach",
      name: "University Faculty Research Outreach (US / UK / Canada / Australia / New Zealand)",
      status: "open",
      type: "International direct-contact research internship / visitor",
      destination: "Major AE/ME departments worldwide",
      level: "Enrolled undergraduate (300-level suitable)",
      covers: "Varies: some labs offer stipend/housing; many accept self-funded or unpaid research visitors. Duration typically 8–12 weeks summer.",
      eligibility: "All nationalities. Strong academic record, relevant projects (CAD, CFD, structures, propulsion), English proficiency. Visa required (J-1 or visitor). Direct faculty match essential.",
      deadline: "Ongoing; peak outreach window October–January for northern-hemisphere summer",
      link: "https://www.pathwaystoscience.org/",
      linkLabel: "PathwaysToScience + individual university AE/ME pages",
      aerospace: "Highest-probability realistic path for international mechanical/aerospace undergrads. Labs in propulsion, structures, manufacturing, space systems often open to motivated visitors.",
      next: "Identify 20–40 faculty whose research matches your interests. Send tailored CV + transcript + short research interest email. Start immediately for 2027 summer."
    }
  ],
  excluded: [
    {
      id: "nsf-reu",
      name: "Most NSF REU Sites",
      status: "excluded",
      type: "Research internship",
      destination: "US universities",
      level: "Undergraduate",
      covers: "Stipend + housing often",
      eligibility: "US citizenship or permanent residency required for vast majority of NSF REU Sites.",
      deadline: "Typically Feb",
      link: "https://www.nsf.gov/crssprgm/reu/",
      linkLabel: "NSF REU",
      aerospace: "Strong research experience when eligible.",
      next: "Excluded for Nigerian citizens. Use faculty outreach instead."
    }
  ],
  nextSteps: [
    { when: "Immediate", what: "Join AIAA student membership and prepare materials for 31 Jan scholarship deadline (prioritize Denise Ponchak). Review KAUST VSRP projects and prepare application package." },
    { when: "By 9 Nov", what: "Submit Carewave ASPIRE application." },
    { when: "Ongoing / this week", what: "Begin systematic faculty outreach emails for 2027 summer research. Contact IAESTE Nigeria. Keep passport ready." },
    { when: "Autumn 2027", what: "Monitor GE Aerospace UK placements opening." },
    { when: "May–June 2027", what: "Watch for RAeS Futures and Dawn Aerospace NZ summer internship call." }
  ]
};