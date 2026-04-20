export function getAttorneyBioParagraphs(slug) {
  return attorneys[slug].bioParagraphs;
}

export const homeFeatureCards = [
  {
    title: "About Us",
    href: "/about",
    iconClass: "fa-university",
    body: "Whether your problem is complex or simple, we have the experience and expertise to find workable solutions at a reasonable cost.",
  },
  {
    title: "Areas of Practice",
    href: "/areas-of-practice",
    iconClass: "fa-gavel",
    body: "Each attorney specializes in his or her expertise. Together we offer services in domestic relations, estate planning, real estate, probate, tax law and more.",
    delayClass: "delay-05s",
  },
  {
    title: "Resources",
    href: "/contact",
    iconClass: "fa-book",
    body: "Looking to learn more about your needs before speaking with us? Find legal news and advice straight from our attorneys.",
    delayClass: "delay-1s",
  },
];

export const homeAttorneyCards = [
  {
    slug: "george-richards",
    name: "George Richards III",
    role: "Principal",
    image: "/assets/img/richards_full.jpg",
    imageAlt: "George Richards",
    href: "/george-richards",
    ctaLabel: "Meet George",
    practices: ["Real Estate", "Estate Planning and Probate", "Small Business Law"],
    delayClass: "delay-05s",
  },
  {
    slug: "richard-biller",
    name: "Richard Biller",
    role: "Principal",
    image: "/assets/img/biller_full.jpg",
    imageAlt: "Richard Biller",
    href: "/richard-biller",
    ctaLabel: "Meet Richard",
    practices: ["Domestic Relations", "Employment Law"],
    delayClass: "delay-1s",
  },
  {
    slug: "caren-schindel",
    name: "Caren Schindel",
    role: "Principal",
    image: "/assets/img/schindel_full.jpg",
    imageAlt: "Caren Schindel",
    href: "/caren-schindel",
    ctaLabel: "Meet Caren",
    practices: ["Elder Law", "Estate Planning", "Domestic Relations"],
    delayClass: "delay-15s",
    centerImage: true,
  },
];

export const homeValues = [
  {
    numeral: "I",
    body: "We adhere to the highest level of integrity and ethics, both professionally and personally.",
  },
  {
    numeral: "II",
    body: "We provide sophisticated advice and planning while maintaining the warm, personal touch of a small firm.",
  },
  {
    numeral: "III",
    body: "We break every problem down into its simplest elements to explain issues and solutions in a simple, straight forward manner.",
  },
  {
    numeral: "IV",
    body: "We stay current in our areas of expertise. We attend conferences and study new developments and trends in the law.",
  },
];

export const aboutPage = {
  title: "WE'RE A TEAM THAT LOVES WHAT WE DO",
  intro:
    "Our firm presently consists of five full time in-house attorneys: four shareholders and one associate. The firm maintains e-mail access, state-of-the-art computerized word processing, legal research and conveyancing systems with computerized access to all the Registries of Deeds in Barnstable, Bristol, Worcester, Middlesex, Suffolk, Norfolk, Plymouth and Essex Counties. Each attorney has their own areas of specialization and all attorneys maintain and expand their areas of expertise by attending frequent continuing legal education courses and keeping active in various bar associations. As each advances within one's field, additional staff is employed to handle the case load as needed.",
};

export const aboutTeamCards = [
  [
    {
      name: "George Richards III",
      href: "/george-richards",
      image: "/assets/img/richards_full.jpg",
      imageAlt: "George L Richards III",
      summary:
        "George joined the firm in 1992 concentrating in commercial and residential real estate law, estate planning, probate law and small business law.",
      delayClass: "delay-05s",
      socials: [
        {
          href: "https://www.linkedin.com/in/george-richards-139ba974/",
          iconClass: "fa-linkedin",
          external: true,
        },
        {
          href: "https://www.facebook.com/george.richards.7509",
          iconClass: "fa-facebook",
          external: true,
        },
        {
          href: "mailto:grichards@southnaticklaw.com",
          iconClass: "fa-envelope",
        },
      ],
    },
    {
      name: "Richard Biller",
      href: "/richard-biller",
      image: "/assets/img/biller_full.jpg",
      imageAlt: "Richard Biller",
      summary:
        "Richard joined the firm in 1995 and has been an attorney for 25 years. His practice focuses on domestic relations and employment law.",
      socials: [
        {
          href: "#",
          iconClass: "fa-linkedin",
        },
        {
          href: "#",
          iconClass: "fa-facebook",
        },
        {
          href: "mailto:rbiller@southnaticklaw.com",
          iconClass: "fa-envelope",
        },
      ],
    },
  ],
  [
    {
      name: "Caren Schindel",
      href: "/caren-schindel",
      image: "/assets/img/schindel_full.jpg",
      imageAlt: "Caren Schindel",
      summary:
        "Caren has been with the firm since 2008 and brings 30 years of experience as a family law and probate attorney.",
      delayClass: "delay-05s",
      socials: [
        {
          href: "https://www.linkedin.com/in/caren-z-schindel-esq-0b1534a3/",
          iconClass: "fa-linkedin",
          external: true,
        },
        {
          href: "#",
          iconClass: "fa-facebook",
        },
        {
          href: "mailto:cschindel@southnaticklaw.com",
          iconClass: "fa-envelope",
        },
      ],
    },
    {
      name: "Kimberly Winter",
      href: "/kimberly-winter",
      image: "/assets/img/winter_full.jpg",
      imageAlt: "Kimberly Winter",
      summary:
        "Kimberly joined the firm in 2018 but has been practicing law for 25 years. As a lawyer and a nurse she concentrates her practice in Health Care Law including medical malpractice, health care professional licensure and health care regulation. She also represents persons who have been seriously injured by the negligence of others.",
      delayClass: "delay-1s",
      socials: [
        {
          href: "#",
          iconClass: "fa-linkedin",
        },
        {
          href: "#",
          iconClass: "fa-facebook",
        },
        {
          href: "mailto:kwinter@southnaticklaw.com",
          iconClass: "fa-envelope",
        },
      ],
    },
  ],
  [
    {
      name: "Alex Mulcahy",
      image: "/assets/img/mulcahy_full.jpg",
      imageAlt: "Alex Mulcahy",
      summary:
        "Alex joined the firm in 2017. Alex has extensive experience in residential real estate transactions and the title curative process. He focuses on representing buyers and sellers in purchase and sale negotiations, and representing lenders in the closing process.",
      delayClass: "delay-1s",
      socials: [
        {
          href: "#",
          iconClass: "fa-linkedin",
        },
        {
          href: "#",
          iconClass: "fa-facebook",
        },
        {
          href: "mailto:amulcahy@southnaticklaw.com",
          iconClass: "fa-envelope",
        },
      ],
    },
  ],
];

export const practiceAreasPage = {
  title: "AREAS OF PRACTICE",
  intro: "",
  rows: [
    [
      {
        title: "Elder Law",
        iconClass: "fa-heart",
        items: ["Long-Term Care", "End of Life Planning", "Medicaid"],
      },
      {
        title: "Probate",
        iconClass: "fa-file-text-o",
        items: ["Will Contests", "Probate Litigation", "Guardianships"],
        delayClass: "delay-05s",
      },
      {
        title: "Bankruptcy",
        iconClass: "fa-bank",
        items: [
          "Restructuring",
          "Debtor & Creditor Practices",
          "Consumer & Commercial",
        ],
        delayClass: "delay-1s",
      },
    ],
    [
      {
        title: "Taxation",
        iconClass: "fa-money",
        items: [
          "Personal Income Tax",
          "Corporate Income Tax",
          "Estate Taxation",
          "Estate Planning",
          "Estate Income Tax",
        ],
      },
      {
        title: "Real Estate",
        iconClass: "fa-home",
        items: [
          "Purchase & Sales Agreements",
          "Residential Real Estate",
          "Commercial Real Estate",
          "Zoning",
          "Conveyancing",
        ],
        delayClass: "delay-05s",
      },
      {
        title: "Criminal Law",
        iconClass: "fa-user-secret",
        items: [
          "Traffic Violations",
          "Expongements",
          "Parole & Probation",
          "Juvenile Law",
          "Criminal Law Process",
        ],
        delayClass: "delay-1s",
      },
    ],
    [
      {
        title: "Domestic Relations",
        iconClass: "fa-users",
        items: [
          "Divorce",
          "Child Custody",
          "Paternity",
          "Pre-Nuptial Agreements",
          "Adoption",
          "Modifications",
          "Contempts",
          "Guardian Ad Litem",
          "Mediation",
        ],
      },
      {
        title: "Employment Law",
        iconClass: "fa-briefcase",
        items: [
          "Severance & Severance Agreements",
          "Non-Compete Agreements",
          "Employment Contracts",
          "Wage & Hour Claims",
          "Wrongful Termination",
          "MCAD Proceedings",
          "Litigation",
        ],
        delayClass: "delay-05s",
      },
      {
        title: "Civil Litigation",
        iconClass: "fa-legal",
        items: [
          "Intellectual Property",
          "Environmental Law",
          "Personal Injury",
          "Medical Malpractice",
          "Construction",
          "Landlord & Tenants",
        ],
        delayClass: "delay-1s",
      },
    ],
    [
      {
        title: "Estate Administration",
        iconClass: "fa-archive",
        items: [
          "Appointment of Executor/Administrator",
          "Inventories",
          "Accounts",
          "Wills & Trusts",
          "Durable Powers of Attorney",
          "Gifting",
        ],
      },
      {
        title: "Health Care Law",
        iconClass: "fa-medkit",
        items: [
          "Health Care Regulation",
          "Personal Injury",
          "Medical Malpractice",
          "Health Care Professional Licensure",
        ],
        delayClass: "delay-05s",
      },
    ],
  ],
};

export const attorneys = {
  "george-richards": {
    slug: "george-richards",
    pageTitle: "George Richards III",
    subtitle: "Real Estate Attorney",
    image: "/assets/img/richards_full.jpg",
    imageAlt: "George L. Richards III",
    phone: "(508) 655-1660",
    email: "grichards@southnaticklaw.com",
    bioParagraphs: [
      "GEORGE L. RICHARDS III, Esq. joined the firm in 1992 concentrating in commercial and residential real estate law, estate planning/probate law and small business law as he had done since being admitted to the Massachusetts Bar in 1985. He received his law degree from Vermont Law School, Cum Laude in 1985 and has been practicing law in Massachusetts since that time.",
      "He served as an elected member of the Natick Planning Board for 10 years from 1998-2008 and now also concentrates a portion of his practice on municipal permitting. He is currently a member of the Massachusetts Bar Association (Real Estate and Business Law Sections), the Real Estate Bar Association (REBA) and is an agent for several title insurance companies. He has been a member of the Natick Rotary Club since 1998, serving as President in 2004-2005 and on the Board of Directors for many years. In 2009, he was also elected to serve a 10 year term as a Corporator of Middlesex Savings Bank.",
    ],
    profileSocials: [
      {
        href: "https://www.facebook.com/george.richards.7509",
        iconClass: "fa-facebook-square fa-2x",
      },
      {
        href: "https://www.linkedin.com/in/george-richards-139ba974/",
        iconClass: "fa-linkedin-square fa-2x",
      },
    ],
  },
  "richard-biller": {
    slug: "richard-biller",
    pageTitle: "Richard Biller",
    subtitle: "Domestic Relations Attorney",
    image: "/assets/img/biller_full.jpg",
    imageAlt: "Richard Biller",
    phone: "(508) 650-1550",
    email: "rbiller@southnaticklaw.com",
    bioParagraphs: [
      "RICHARD C. BILLER, Esq. has been a member of the firm since 1995. He is a graduate of the University of Virginia School of Law and Sarah Lawrence College. Mr. Biller is a member of the Massachusetts Bar and is admitted to practice in the U.S. District Court of Massachusetts, the First Circuit Court of Appeals and The Supreme Court.",
      "Mr. Biller is a member of the Family Law Section of the Massachusetts Bar Association, has been a frequent lecturer on Domestic Relations law for Massachusetts Legal Education and serves on the Board of Metrowest Legal Services. Mr. Biller has been an attorney for 25 years and his practice focuses on domestic relations and employment law.",
    ],
    profileSocials: [
      {
        href: "#",
        iconClass: "fa-facebook-square fa-2x",
      },
      {
        href: "#",
        iconClass: "fa-linkedin-square fa-2x",
      },
    ],
  },
  "caren-schindel": {
    slug: "caren-schindel",
    pageTitle: "Caren Schindel",
    subtitle: "Elder Law Attorney",
    image: "/assets/img/schindel_full.jpg",
    imageAlt: "Caren Schindel",
    phone: "(508) 655-1707",
    email: "cschindel@southnaticklaw.com",
    bioParagraphs: [
      "CAREN Z. SCHINDEL, Esq. has been a principal with the firm since 2008. Prior to joining the firm she was the owner of the Law Offices of Caren Z. Schindel in Framingham, MA. Attorney Schindel graduated from Buffalo Law School in 1982. In 2004, she went back to law school to obtain a Masters' degree in Taxation, and in 2009 she graduated from Boston University Law School with an LLM in taxation.",
      "She is a member of the Massachusetts Bar Association Family Law and Probate Section, the Women's Bar Association, Senior Practice Committee, the Boston Estate Planning Council (BEPC) and the National Association of Elder Law Attorneys (NAELA). Attorney Schindel is a frequent speaker on topics related to elder, estate planning and domestic relations law. Each year, she prepares income tax returns for low income seniors through the AARP Volunteer Income Tax Advocate (VITA) program.",
      "What sets Attorney Schindel apart from other attorneys is her desire to help families handle the most emotionally complex, conflict ridden situations. She is able to use her undergraduate degree in psychology, her master's in tax law and her understanding of legal and financial issues to resolve complicated family problems. With thirty years of experience as a family law and probate attorney, she is able to help clients through the process of divorce. She also handles post-divorce issues such as revising parenting plans, increasing and decreasing support and alimony obligations and allocating college costs.",
      "Another family journey Attorney Schindel handles is establishing plans for transferring assets from the older generation to the younger generation. This process involves elder law, tax planning, government benefits planning and document preparation. Attorney Schindel's ability to facilitate a family consensus allows her to help families discuss options and select the most beneficial plan. If court involvement is required, Attorney Schindel handles all probate matters, including guardianships, conservatorships and probate litigation. When tax issues arise, Attorney Schindel works to resolve the issues with the IRS, DOR or other taxing authority.",
      "Patience, attention to detail and a zealous pursuit of her client's goals ensure successful results for Attorney Schindel's clients.",
    ],
    profileSocials: [
      {
        href: "#",
        iconClass: "fa-facebook-square fa-2x",
      },
      {
        href: "#",
        iconClass: "fa-linkedin-square fa-2x",
      },
    ],
  },
  "kimberly-winter": {
    slug: "kimberly-winter",
    pageTitle: "Kimberly E. Winter",
    subtitle: "Health Care Attorney",
    image: "/assets/img/winter_full.jpg",
    imageAlt: "Kimberly E. Winter",
    phone: "(508) 651-1570",
    email: "kwinter@southnaticklaw.com",
    bioParagraphs: [
      "KIMBERLY E. WINTER, Esq. has been a member of the firm since 2018. Prior to that she was a partner in the law firm of White, Freeman & Winter, LLP in Weston after coming to that firm from Sugarman & Sugarman, PC in Boston. Kim concentrates her practice in healthcare law and civil litigation - primarily medical malpractice and other types of serious injuries caused by negligence. Kim is a graduate of Wheaton College (Illinois), Northwestern University and Suffolk University Law School. Kim is also a Registered Nurse with a current specialty certification in Neonatal Intensive Care. Kim is Past President of the Massachusetts Academy of Trial Attorneys and a current member of their Board of Governors. Kim is also on the Emeritus Board of Directors of the Women's Bar Association and is an active member of the Massachusetts Bar Association (former chair of the Health Law Section Council and a member and past chair of the Lawyer Referral Service Committee). Kim has been named a Massachusetts Super Lawyer in Boston magazine yearly since 2005. In 2012 Kim was honored by Massachusetts Lawyer's Weekly as one of the \"Top Women of Law\" in the state and, in 2014, was honored again by Lawyer's Weekly by induction into the \"Circle of Excellence\". Kim presently serves as a Hearing Officer for the Board of Bar Overseers. She lectures frequently on liability issues affecting health care professionals and has lectured and authored material for numerous educational programs and publications related to civil practice in her area of concentration. Kim believes strongly in forming a bond with her clients and in vigorously and zealously representing their interests in the litigation process.",
    ],
    profileSocials: [],
  },
};
