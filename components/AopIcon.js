const icons = {
  "elder-law": (
    <>
      <path d="M12 3v3M7 5l2 2M17 5l-2 2M5 12h3M16 12h3M8 20v-4a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  probate: (
    <>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3M9 10h6M9 14h6M9 18h4" />
    </>
  ),
  bankruptcy: (
    <>
      <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-7h6v7" />
    </>
  ),
  taxation: (
    <>
      <path d="M5 3h14l-1 18H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </>
  ),
  "real-estate": (
    <>
      <path d="M3 10l9-7 9 7v11H3z" />
      <path d="M10 21v-7h4v7" />
    </>
  ),
  "criminal-law": (
    <>
      <path d="M12 2v8M12 14v8M4 12h16M7 8l10 8M17 8L7 16" />
    </>
  ),
  "domestic-relations": (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M3 20c0-3 2-5 5-5s5 2 5 5M11 20c0-3 2-5 5-5s5 2 5 5" />
    </>
  ),
  "employment-law": (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  "civil-litigation": (
    <>
      <path d="M12 3v18M5 7l14 0M5 7l-2 6h6zM19 7l2 6h-6z" />
    </>
  ),
  "estate-administration": (
    <>
      <rect x="4" y="5" width="16" height="15" rx="1" />
      <path d="M9 5V3h6v2M8 10h8M8 14h8M8 18h5" />
    </>
  ),
  "health-care-law": (
    <>
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
};

export default function AopIcon({ slug, size = 22 }) {
  const paths = icons[slug];
  if (!paths) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
