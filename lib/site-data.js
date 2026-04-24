export const firmInfo = {
  addressLine: "8E Pleasant Street",
  addressCity: "Natick",
  addressState: "MA",
  addressZip: "01760",
  phoneDisplay: "(508) 651-1000",
  phoneTel: "+15086511000",
  email: "info@southnaticklaw.com",
  hours: "Monday – Friday · 9:00 AM – 5:00 PM",
};

export const homeStats = [
  { big: "100+", lbl: "Years combined" },
  { big: "5", lbl: "Attorneys" },
  { big: "12", lbl: "Practice areas" },
];

export const homeQuickCards = [
  {
    num: "01",
    title: "About Us",
    body: "Whether your problem is complex or simple, we have the experience and expertise to find workable solutions at a reasonable cost.",
    href: "/about",
  },
  {
    num: "02",
    title: "Areas of Practice",
    body: "Domestic relations, estate planning, real estate, probate, elder law, tax law, and more — each attorney specializes in their area.",
    href: "/areas-of-practice",
  },
  {
    num: "03",
    title: "Schedule a Consultation",
    body: "Ready to talk? Call us or send a note — one of our attorneys will get back to you within one business day.",
    href: "/contact",
  },
];

export const homeAttorneySlugs = [
  "george-richards",
  "richard-biller",
  "caren-schindel",
];

export const homeValues = [
  {
    numeral: "I",
    title: "Integrity",
    body: "We adhere to the highest level of integrity and ethics, both professionally and personally.",
  },
  {
    numeral: "II",
    title: "Sophistication",
    body: "We provide sophisticated advice while maintaining the warm, personal touch of a small firm.",
  },
  {
    numeral: "III",
    title: "Clarity",
    body: "We break every problem down into its simplest elements to explain issues and solutions clearly.",
  },
  {
    numeral: "IV",
    title: "Currency",
    body: "We stay current in our areas of expertise, attending conferences and studying new developments in the law.",
  },
];

export const aboutPage = {
  eyebrow: "About the firm",
  title: "We're a team that loves what we do.",
  emphasis: "loves",
  intro:
    "Our firm presently consists of five full time in-house attorneys: four shareholders and one associate. Each attorney has their own areas of specialization and maintains their expertise by attending frequent continuing legal education courses and keeping active in various bar associations. The firm maintains state-of-the-art research and conveyancing systems with access to every Registry of Deeds in Barnstable, Bristol, Worcester, Middlesex, Suffolk, Norfolk, Plymouth and Essex Counties.",
  meta: [
    { big: "5", lbl: "Attorneys" },
    { big: "100+", lbl: "Years combined" },
    { big: "8", lbl: "Counties served" },
    { big: "12", lbl: "Practice areas" },
  ],
  office: {
    eyebrow: "Our Office",
    title: "8E Pleasant Street.",
    body: "Our office sits in the heart of South Natick's historic village — a short walk from the river, the library, and the shops that have anchored this MetroWest community for generations.",
    photo: "/assets/img/south-natick-law-office.jpg",
    photoAlt: "Exterior of the South Natick Law office at 8E Pleasant Street",
  },
};


export const aopPage = {
  eyebrow: "Eleven areas of practice",
  title: "Areas of practice.",
  intro:
    "Each attorney specializes in his or her expertise. Together we offer services across estate planning, real estate, family, elder, and business law.",
};

export const aopAreas = [
  {
    slug: "elder-law",
    title: "Elder Law",
    items: ["Long-Term Care", "End of Life Planning", "Medicaid"],
  },
  {
    slug: "probate",
    title: "Probate",
    items: ["Will Contests", "Probate Litigation", "Guardianships"],
  },
  {
    slug: "bankruptcy",
    title: "Bankruptcy",
    items: [
      "Restructuring",
      "Debtor & Creditor Practices",
      "Consumer & Commercial",
    ],
  },
  {
    slug: "taxation",
    title: "Taxation",
    items: [
      "Personal Income Tax",
      "Corporate Income Tax",
      "Estate Taxation",
      "Estate Planning",
      "Estate Income Tax",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    items: [
      "Purchase & Sales Agreements",
      "Residential Real Estate",
      "Commercial Real Estate",
      "Zoning",
      "Conveyancing",
    ],
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    items: [
      "Traffic Violations",
      "Expungements",
      "Parole & Probation",
      "Juvenile Law",
      "Criminal Law Process",
    ],
  },
  {
    slug: "domestic-relations",
    title: "Domestic Relations",
    items: [
      "Divorce",
      "Child Custody",
      "Paternity",
      "Pre-Nuptial Agreements",
      "Adoption",
      "Modifications",
      "Mediation",
    ],
  },
  {
    slug: "employment-law",
    title: "Employment Law",
    items: [
      "Severance Agreements",
      "Non-Compete Agreements",
      "Employment Contracts",
      "Wage & Hour Claims",
      "Wrongful Termination",
      "Litigation",
    ],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    items: [
      "Intellectual Property",
      "Environmental Law",
      "Personal Injury",
      "Medical Malpractice",
      "Construction",
      "Landlord & Tenants",
    ],
  },
  {
    slug: "estate-administration",
    title: "Estate Administration",
    items: [
      "Executor & Administrator",
      "Inventories",
      "Accounts",
      "Wills & Trusts",
      "Powers of Attorney",
      "Gifting",
    ],
  },
  {
    slug: "health-care-law",
    title: "Health Care Law",
    items: [
      "Health Care Regulation",
      "Personal Injury",
      "Medical Malpractice",
      "Professional Licensure",
    ],
  },
];

export function findAopArea(slug) {
  return aopAreas.find((a) => a.slug === slug) || null;
}

export const attorneys = {
  "george-richards": {
    slug: "george-richards",
    name: "George Richards III",
    firstName: "George",
    role: "Principal",
    roleEyebrow: "Principal · Real Estate & Estate Planning",
    pageTitle: "George Richards III",
    subtitle: "Real Estate Attorney",
    image: "/assets/img/richards_full.jpg",
    imageAlt: "George L. Richards III",
    phone: "(508) 655-1660",
    email: "grichards@southnaticklaw.com",
    summary:
      "George joined the firm in 1992 concentrating in commercial and residential real estate law, estate planning, probate law and small business law.",
    practices: ["Real Estate", "Estate Planning & Probate", "Small Business Law"],
    metaDescription:
      "George Richards III is a principal attorney at South Natick Law specializing in commercial and residential real estate, estate planning, probate, and small business law in MetroWest MA.",
    meta: [
      { lbl: "At the firm", val: "Since 1992" },
      { lbl: "Education", val: "Vermont Law School, J.D. (Cum Laude) · 1985" },
      { lbl: "Bar", val: "Massachusetts · admitted 1985" },
    ],
    bioParagraphs: [
      "GEORGE L. RICHARDS III, Esq. joined the firm in 1992 concentrating in commercial and residential real estate law, estate planning/probate law and small business law as he had done since being admitted to the Massachusetts Bar in 1985. He received his law degree from Vermont Law School, Cum Laude in 1985 and has been practicing law in Massachusetts since that time.",
      "He served as an elected member of the Natick Planning Board for 10 years from 1998-2008 and now also concentrates a portion of his practice on municipal permitting. He is currently a member of the Massachusetts Bar Association (Real Estate and Business Law Sections), the Real Estate Bar Association (REBA) and is an agent for several title insurance companies.",
      "He has been a member of the Natick Rotary Club since 1998, serving as President in 2004-2005 and on the Board of Directors for many years. In 2009, he was also elected to serve a 10 year term as a Corporator of Middlesex Savings Bank.",
    ],
    practiceAreas: [
      "Commercial Real Estate",
      "Residential Real Estate",
      "Estate Planning & Probate",
      "Small Business Law",
      "Municipal Permitting",
    ],
    education: ["Vermont Law School, J.D. · 1985"],
    memberships: [
      "Massachusetts Bar Association",
      "Real Estate Bar Association (REBA)",
      "Natick Rotary Club · Past President",
    ],
  },
  "richard-biller": {
    slug: "richard-biller",
    name: "Richard Biller",
    firstName: "Richard",
    role: "Principal",
    roleEyebrow: "Principal · Domestic Relations & Employment Law",
    pageTitle: "Richard Biller",
    subtitle: "Domestic Relations Attorney",
    image: "/assets/img/biller_full.jpg",
    imageAlt: "Richard Biller",
    phone: "(508) 650-1550",
    email: "rbiller@southnaticklaw.com",
    summary:
      "Richard joined the firm in 1995 and has been an attorney for 25 years. His practice focuses on domestic relations and employment law.",
    practices: ["Domestic Relations", "Employment Law"],
    metaDescription:
      "Richard Biller is a principal attorney at South Natick Law with 25+ years of experience in domestic relations and employment law, serving the MetroWest Massachusetts area.",
    meta: [
      { lbl: "At the firm", val: "Since 1995" },
      { lbl: "Education", val: "University of Virginia School of Law · Sarah Lawrence College" },
      { lbl: "Bar", val: "Massachusetts · U.S. District Court · First Circuit · Supreme Court" },
    ],
    bioParagraphs: [
      "RICHARD C. BILLER, Esq. has been a member of the firm since 1995. He is a graduate of the University of Virginia School of Law and Sarah Lawrence College. Mr. Biller is a member of the Massachusetts Bar and is admitted to practice in the U.S. District Court of Massachusetts, the First Circuit Court of Appeals and The Supreme Court.",
      "Mr. Biller is a member of the Family Law Section of the Massachusetts Bar Association, has been a frequent lecturer on Domestic Relations law for Massachusetts Legal Education and serves on the Board of Metrowest Legal Services. Mr. Biller has been an attorney for 25 years and his practice focuses on domestic relations and employment law.",
    ],
    practiceAreas: [
      "Domestic Relations",
      "Divorce & Custody",
      "Employment Law",
      "Mediation",
    ],
    education: [
      "University of Virginia School of Law, J.D.",
      "Sarah Lawrence College, B.A.",
    ],
    memberships: [
      "Massachusetts Bar Association · Family Law Section",
      "Metrowest Legal Services · Board member",
    ],
  },
  "caren-schindel": {
    slug: "caren-schindel",
    name: "Caren Schindel",
    firstName: "Caren",
    role: "Principal",
    roleEyebrow: "Principal · Elder Law & Estate Planning",
    pageTitle: "Caren Schindel",
    subtitle: "Elder Law Attorney",
    image: "/assets/img/schindel_full.jpg",
    imageAlt: "Caren Schindel",
    phone: "(508) 655-1707",
    email: "cschindel@southnaticklaw.com",
    summary:
      "Caren has been with the firm since 2008 and brings 30 years of experience as a family law and probate attorney.",
    practices: ["Elder Law", "Estate Planning", "Domestic Relations"],
    metaDescription:
      "Caren Schindel is a principal attorney at South Natick Law with 30+ years of experience in elder law, estate planning, domestic relations, and probate in MetroWest Massachusetts.",
    meta: [
      { lbl: "At the firm", val: "Since 2008" },
      { lbl: "Education", val: "Boston University LLM (Taxation) · Buffalo Law School, J.D." },
      { lbl: "Bar", val: "Massachusetts" },
    ],
    bioParagraphs: [
      "CAREN Z. SCHINDEL, Esq. has been a principal with the firm since 2008. Prior to joining the firm she was the owner of the Law Offices of Caren Z. Schindel in Framingham, MA. Attorney Schindel graduated from Buffalo Law School in 1982. In 2004, she went back to law school to obtain a Masters' degree in Taxation, and in 2009 she graduated from Boston University Law School with an LLM in taxation.",
      "She is a member of the Massachusetts Bar Association Family Law and Probate Section, the Women's Bar Association, Senior Practice Committee, the Boston Estate Planning Council (BEPC) and the National Association of Elder Law Attorneys (NAELA). Attorney Schindel is a frequent speaker on topics related to elder, estate planning and domestic relations law. Each year, she prepares income tax returns for low income seniors through the AARP Volunteer Income Tax Advocate (VITA) program.",
      "What sets Attorney Schindel apart from other attorneys is her desire to help families handle the most emotionally complex, conflict-ridden situations. She uses her undergraduate degree in psychology, her master's in tax law and her understanding of legal and financial issues to resolve complicated family problems. With thirty years of experience as a family law and probate attorney, she helps clients through divorce and post-divorce issues such as revising parenting plans, adjusting support and alimony obligations, and allocating college costs.",
      "Patience, attention to detail and a zealous pursuit of her clients' goals ensure successful results for Attorney Schindel's clients.",
    ],
    practiceAreas: [
      "Elder Law",
      "Estate Planning & Probate",
      "Family Law",
      "Tax Planning",
      "Guardianships & Conservatorships",
    ],
    education: [
      "Boston University School of Law, LLM in Taxation · 2009",
      "Buffalo Law School, J.D. · 1982",
    ],
    memberships: [
      "Massachusetts Bar Association · Family Law & Probate",
      "Boston Estate Planning Council (BEPC)",
      "National Association of Elder Law Attorneys (NAELA)",
      "Women's Bar Association · Senior Practice Committee",
    ],
  },
  "kimberly-winter": {
    slug: "kimberly-winter",
    name: "Kimberly E. Winter",
    firstName: "Kim",
    role: "Principal",
    roleEyebrow: "Principal · Health Care Law & Civil Litigation",
    pageTitle: "Kimberly E. Winter",
    subtitle: "Health Care Attorney",
    image: "/assets/img/winter_full.jpg",
    imageAlt: "Kimberly E. Winter",
    phone: "(508) 651-1570",
    email: "kwinter@southnaticklaw.com",
    summary:
      "Kimberly joined the firm in 2018 but has been practicing law for 25 years. As a lawyer and a nurse she concentrates her practice in Health Care Law.",
    practices: ["Health Care Law", "Medical Malpractice", "Civil Litigation"],
    metaDescription:
      "Kimberly E. Winter is an attorney at South Natick Law concentrating in health care law, medical malpractice, and personal injury, serving clients throughout Massachusetts.",
    meta: [
      { lbl: "At the firm", val: "Since 2018" },
      { lbl: "Education", val: "Suffolk University Law School · Northwestern University · Wheaton College" },
      { lbl: "Bar", val: "Massachusetts · Registered Nurse (NICU)" },
    ],
    bioParagraphs: [
      "KIMBERLY E. WINTER, Esq. has been a member of the firm since 2018. Prior to that she was a partner in the law firm of White, Freeman & Winter, LLP in Weston after coming to that firm from Sugarman & Sugarman, PC in Boston. Kim concentrates her practice in healthcare law and civil litigation — primarily medical malpractice and other types of serious injuries caused by negligence.",
      "Kim is a graduate of Wheaton College (Illinois), Northwestern University and Suffolk University Law School. Kim is also a Registered Nurse with a current specialty certification in Neonatal Intensive Care. Kim is Past President of the Massachusetts Academy of Trial Attorneys and a current member of their Board of Governors. Kim is also on the Emeritus Board of Directors of the Women's Bar Association and is an active member of the Massachusetts Bar Association.",
      "Kim has been named a Massachusetts Super Lawyer in Boston magazine yearly since 2005. In 2012 Kim was honored by Massachusetts Lawyer's Weekly as one of the \"Top Women of Law\" in the state and, in 2014, was honored again by induction into the \"Circle of Excellence.\" Kim presently serves as a Hearing Officer for the Board of Bar Overseers and lectures frequently on liability issues affecting health care professionals.",
    ],
    practiceAreas: [
      "Health Care Law",
      "Medical Malpractice",
      "Personal Injury",
      "Civil Litigation",
      "Professional Licensure",
    ],
    education: [
      "Suffolk University Law School, J.D.",
      "Northwestern University",
      "Wheaton College (Illinois)",
    ],
    memberships: [
      "Massachusetts Academy of Trial Attorneys · Past President",
      "Massachusetts Bar Association · Health Law Section",
      "Women's Bar Association · Emeritus Board",
      "Board of Bar Overseers · Hearing Officer",
    ],
  },
  "alex-mulcahy": {
    slug: "alex-mulcahy",
    name: "Alex Mulcahy",
    firstName: "Alex",
    role: "Associate",
    roleEyebrow: "Associate · Real Estate",
    pageTitle: "Alex Mulcahy",
    subtitle: "Real Estate Attorney",
    image: "/assets/img/mulcahy_full.jpg",
    imageAlt: "Alex Mulcahy",
    phone: "(508) 651-1000",
    email: "amulcahy@southnaticklaw.com",
    summary:
      "Alex joined the firm in 2017. He has extensive experience in residential real estate transactions and the title curative process, representing buyers, sellers, and lenders through closing.",
    practices: ["Residential Real Estate", "Title Curative", "Conveyancing"],
    metaDescription:
      "Alex Mulcahy is an associate attorney at South Natick Law focused on residential real estate, title curative, and lender representation in MetroWest Massachusetts.",
    meta: [
      { lbl: "At the firm", val: "Since 2017" },
      { lbl: "Focus", val: "Residential Real Estate · Title Curative" },
      { lbl: "Bar", val: "Massachusetts" },
    ],
    bioParagraphs: [
      "Alex joined the firm in 2017. He has extensive experience in residential real estate transactions and the title curative process, focusing on representing buyers and sellers in purchase and sale negotiations, and representing lenders in the closing process.",
      "Alex works closely with the firm's real estate and estate planning practices, supporting clients through complex conveyancing and resolving title defects that arise during the closing process.",
    ],
    practiceAreas: [
      "Residential Real Estate",
      "Title Curative",
      "Conveyancing",
      "Lender Representation",
    ],
    education: ["Juris Doctor"],
    memberships: ["Massachusetts Bar Association"],
  },
};

export function getAttorney(slug) {
  return attorneys[slug];
}
