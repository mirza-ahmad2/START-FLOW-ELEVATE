/** Shared site configuration — Strat&Flow */
export const SITE = {
  name: "Strat&Flow",
  legalName: "Strat&Flow",
  tagline: "Innover · Aligner · Transformer",
  description:
    "Cabinet de conseil en stratégie, leadership et transformation organisationnelle. 27 ans d'expérience au service des dirigeants et de leurs organisations.",
  url: "https://www.stratandflow.fr",
  locale: "fr_FR",
  phone: "0627413003",
  phoneDisplay: "06 27 41 30 03",
  email: "Add here",
  linkedin: "https://www.linkedin.com/company/strat-flow/home/",
  socials: {
    linkedin: "https://www.linkedin.com/company/strat-flow/home/",
    other: "Add here",
  },
  keywords: [
    "Strat&Flow",
    "Strat-Flow",
    "conseil stratégie",
    "transformation organisationnelle",
    "leadership",
    "accompagnement dirigeants",
    "COMEX",
    "Murielle Caillau",
    "cabinet de conseil",
    "alignement équipes",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const base = SITE.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p === "/" ? "" : p}`;
}
