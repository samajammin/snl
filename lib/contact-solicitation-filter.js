const SOLICITATION_THRESHOLD = 4;

const SIGNALS = [
  {
    label: "lead generation or traffic pitch",
    weight: 3,
    patterns: [
      /\blead generation\b/,
      /\bgenerate more leads?\b/,
      /\bcapture leads?\b/,
      /\bcapture any visitors?\b/,
      /\bconvert(?:ing)?(?:\s+\w+){0,4}\s+visitors?(?:\s+\w+){0,4}\s+leads?\b/,
      /\bweb visitors? into leads?\b/,
      /\bmore eyeballs into leads?\b/,
      /\bvisitor'?s name, email address, and phone number\b/,
      /\bfollow up(?:\s+\w+){0,4}\s+new offers?\b/,
    ],
  },
  {
    label: "marketing or advertising offer",
    weight: 3,
    patterns: [
      /\bseo\b/,
      /\bbacklinks?\b/,
      /\brankings?\b/,
      /\bboost (?:your )?(?:rankings|traffic|revenue)\b/,
      /\bcompetitor ads?\b/,
      /\bready-to-use ads?\b/,
      /\bproduct pages? into\b/,
      /\bwoocommerce\b/,
      /\bshopify\b/,
      /\bcreatives?\b/,
      /\bmarketing outreach\b/,
      /\bdigital marketing\b/,
      /\bcontent marketing\b/,
      /\bemail marketing\b/,
      /\bsocial media marketing\b/,
      /\bgoogle ads?\b/,
      /\bppc\b/,
      /\bbrand awareness\b/,
    ],
  },
  {
    label: "guest post or link-building pitch",
    weight: 3,
    patterns: [
      /\bguest posts?\b/,
      /\bguest articles?\b/,
      /\bcontributor posts?\b/,
      /\bsponsored posts?\b/,
      /\bpartner posts?\b/,
      /\blink building\b/,
      /\blink insertion\b/,
      /\bniche edits?\b/,
      /\bcontextual backlinks?\b/,
      /\bauthority backlinks?\b/,
      /\bdofollow\b/,
      /\bdomain authority\b/,
      /\bda\s?\/\s?dr\b/,
      /\bdr\s?\d{2,3}\+?\b/,
      /\bda\s?\d{2,3}\+?\b/,
      /\banchor text\b/,
      /\bwhite[-\s]?hat\b/,
      /\bpublisher list\b/,
      /\bpress release distribution\b/,
      /\borganic traffic\b/,
      /\blink exchange\b/,
    ],
  },
  {
    label: "website or AI service pitch",
    weight: 3,
    patterns: [
      /\bsample websites?\b/,
      /\bwebsite redesign\b/,
      /\bweb design\b/,
      /\bai employee\b/,
      /\bai agent\b/,
      /\bai chatbot\b/,
      /\bchatbot\b/,
      /\bautomation system\b/,
      /\bcustom ai system\b/,
      /\btrained on(?:\s+\w+){0,5}\s+publicly available data\b/,
      /\bgoogle business profile\b/,
      /\banswer customer questions\b/,
      /\b20-minute demo\b/,
      /\bquick walkthrough\b/,
    ],
  },
  {
    label: "outsourced operations offer",
    weight: 3,
    patterns: [
      /\bvirtual assistants?\b/,
      /\bvas 4 hire\b/,
      /\bbookkeeping\b/,
      /\bpayroll services?\b/,
      /\bpersonal tax returns?:?\s*\$/,
      /\bbusiness tax returns?:?\s*\$/,
      /\boutsource[-\s]?bookkeeper\b/,
      /\badmin, marketing, design, accounting, and prospecting\b/,
    ],
  },
  {
    label: "financial or high-risk offer",
    weight: 2,
    patterns: [
      /\bmake money\b/,
      /\bextra income\b/,
      /\bearn extra cash\b/,
      /\bfast cash\b/,
      /\bfinancial freedom\b/,
      /\binvestment opportunity\b/,
      /\bdouble your income\b/,
      /\bno credit check\b/,
      /\bloan approved\b/,
      /\bconsolidate debt\b/,
      /\bcrypto\b/,
      /\bforex\b/,
      /\bcasino\b/,
      /\blottery\b/,
      /\bgift card\b/,
      /\bcbd\b/,
    ],
  },
  {
    label: "promotion or giveaway language",
    weight: 2,
    patterns: [
      /\bfree giveaway\b/,
      /\bfree offer\b/,
      /\bfree trial\b/,
      /\bfree gift\b/,
      /\bfree bonus\b/,
      /\bsaved you a spot\b/,
      /\bfirst month free\b/,
      /\bspecial offer\b/,
      /\bspecial promotion\b/,
      /\blimited-time offer\b/,
      /\blimited time\b/,
      /\bcomplimentary (?:\d+-day )?trial\b/,
      /\bno strings attached\b/,
      /\bno obligation\b/,
      /\brisk[-\s]?free\b/,
      /\bguaranteed\b/,
      /\bsatisfaction guaranteed\b/,
      /\bwithout any risk or commitment\b/,
      /\bdone in \d+ seconds\b/,
    ],
  },
  {
    label: "sales call or demo CTA",
    weight: 2,
    patterns: [
      /\bstart here\b/,
      /\benter here\b/,
      /\btry (?:it|out|a live demo)\b/,
      /\blive demo\b/,
      /\bclick here\b/,
      /\bclick below\b/,
      /\bact now\b/,
      /\bapply now\b/,
      /\bcall now\b/,
      /\border now\b/,
      /\bbuy now\b/,
      /\bsign up free\b/,
      /\bclaim your\b/,
      /\bvisit our website\b/,
      /\bschedule a time\b/,
      /\bon my calendar\b/,
      /\bwould today or tomorrow work\b/,
      /\bok to send\b/,
      /\bcontact us today\b/,
    ],
  },
  {
    label: "vendor-style intro",
    weight: 2,
    patterns: [
      /\bwe provide\b/,
      /\bwe specialize\b/,
      /\bwhat we offer\b/,
      /\bhere'?s what we offer\b/,
      /\bour services?\b/,
      /\bwe handle the execution\b/,
      /\bwe'?re building\b/,
    ],
  },
  {
    label: "known solicitation domain or product",
    weight: 3,
    patterns: [
      /\bletstok ai\b/,
      /\bletstalkugc\.com\b/,
      /\bsysteme\.io\b/,
      /\bgetdandy\.com\b/,
      /\bblastleadgeneration\.com\b/,
      /\bweb visitors into leads\b/,
      /\bbit\.ly\b/,
      /\btinyurl\.com\b/,
      /\bt\.co\b/,
      /\brebrand\.ly\b/,
    ],
  },
];

const URL_PATTERN =
  /\bhttps?:\/\/[^\s<>()]+|\b[a-z0-9-]+(?:\.[a-z0-9-]+)+\/[^\s<>()]*/gi;

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function countUrls(text) {
  return text.match(URL_PATTERN)?.length || 0;
}

export function analyzeContactSolicitation({ name, replyTo, message }) {
  const normalized = normalizeText([name, replyTo, message].join("\n"));
  const matches = [];
  let score = 0;

  for (const signal of SIGNALS) {
    if (signal.patterns.some((pattern) => pattern.test(normalized))) {
      score += signal.weight;
      matches.push(signal.label);
    }
  }

  const urlCount = countUrls(normalized);
  if (urlCount >= 3) {
    score += 3;
    matches.push("multiple links");
  } else if (urlCount >= 1) {
    score += 1;
    matches.push("external link");
  }

  const dollarOfferCount = normalized.match(/\$\s?\d+/g)?.length || 0;
  if (dollarOfferCount >= 2) {
    score += 2;
    matches.push("priced service offer");
  }

  const isLikelySolicitation = score >= SOLICITATION_THRESHOLD;

  return {
    isLikelySolicitation,
    score,
    matches,
  };
}
