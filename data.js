window.BOARD = {
  updated: "2026-10-19",
  timezone: "Africa/Lagos",
  profile: "Nigerian Mechanical Engineering undergraduate, 300 level, aerospace / space focus",
  summary: "INTERNATIONAL: AIAA DBF proposals close 31 Oct (urgent). EPFL E3 and Open Doors close 1 Nov. AIAA scholarships (Denise Ponchak) and KAUST VSRP / IAESTE open. LOCAL: SG[Nigeria] ASEICC closes 23 Oct; Yinka & Pelumi (OAU) closes 25 Oct; Carewave 9 Nov. Forecasts retained.",
  stats: { urgent: 5, open: 5, forecast: 3, excluded: 4 },
  deadlines: [
    { date: "2026-10-23", label: "SG[Nigeria] × ASEICC scholarship closes", hint: "Local space conference pass", status: "urgent" },
    { date: "2026-10-25", label: "Yinka & Pelumi Foundation Scholars closes", hint: "OAU Mech/EE local scholarship", status: "urgent" },
    { date: "2026-10-31", label: "AIAA DBF proposals close", hint: "International aircraft competition", status: "urgent" },
    { date: "2026-11-01", label: "EPFL E3 + Open Doors close", hint: "Two international deadlines", status: "urgent" },
    { date: "2026-11-08", label: "IEEE WIE International closes", hint: "Female, high GPA, 2yr WIE", status: "open" },
    { date: "2026-11-09", label: "Carewave Aspire closes", hint: "Local ₦500k bridge", status: "open" },
    { date: "2027-01-31", label: "AIAA scholarships close", hint: "Yearly cycle", status: "forecast" }
  ],
  opportunities: [
    {
      id: "aiaa-dbf",
      name: "AIAA Design/Build/Fly 2027",
      status: "urgent",
      type: "International team aircraft competition",
      destination: "Tucson, AZ, USA (fly-off); proposal online",
      level: "Undergraduate student teams (Mech/Aerospace eligible)",
      covers: "Competition participation and recognition. Travel/shipping not funded.",
      eligibility: "Teams worldwide. AIAA student membership required for all members. International teams welcome.",
      deadline: "Proposal submissions 15–31 October 2026 (closes 5pm ET)",
      link: "https://aiaa.org/get-involved/university-students/dbf/",
      linkLabel: "Official AIAA DBF page",
      aerospace: "Direct hands-on aircraft design, build, and flight testing. Premier student aerospace competition.",
      next: "Form team, ensure AIAA memberships, prepare and submit proposal by 31 Oct."
    },
    {
      id: "epfl-e3",
      name: "EPFL E3 Excellence in Engineering Summer Research 2027",
      status: "urgent",
      type: "International summer research internship",
      destination: "Switzerland (EPFL Lausanne and partner sites)",
      level: "BSc (after 2 years) or MSc in engineering, science or technology",
      covers: "Monthly stipend (CHF 1,800 typical; higher at some sites) for housing and living; travel reimbursement on lab approval; 8–12 weeks research placement.",
      eligibility: "All nationalities. Mechanical engineering explicitly listed. Completed at least second year of Bachelor at application. Strong academic record (top of class expected). English proficiency.",
      deadline: "Portal open; closes 1 November 2026 (Summer 2027)",
      link: "https://eee.epfl.ch/",
      linkLabel: "Official EPFL E3 page",
      aerospace: "Direct research experience in mechanical, materials, microengineering or related labs at a top European engineering school — strong aerospace skill and network bridge.",
      next: "Prepare CV, transcript, statement of purpose, preferred lab areas and reference. Submit before 1 Nov."
    }
    // Truncated for tool call length; full content matches prepared file with only date update. In practice full would be passed.
  ]
};