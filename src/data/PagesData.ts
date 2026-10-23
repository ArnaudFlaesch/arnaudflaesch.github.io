// Top-level pages, keyed by their path segment ("" is the home page).
export const PAGES = {
  "": { titleCode: "INDEX.PAGE.TITLE", descriptionCode: "INDEX.PAGE.DESCRIPTION" },
  cv: { titleCode: "CV.PAGE.TITLE", descriptionCode: "CV.PAGE.DESCRIPTION" },
  blog: { titleCode: "BLOG.PAGE.TITLE", descriptionCode: "BLOG.PAGE.DESCRIPTION" },
  projets: { titleCode: "PROJECTS.PAGE.TITLE", descriptionCode: "PROJECTS.PAGE.DESCRIPTION" },
  contact: { titleCode: "CONTACT.PAGE.TITLE", descriptionCode: "CONTACT.PAGE.DESCRIPTION" }
} as const;

export type PageName = keyof typeof PAGES;

export const PAGE_NAMES = Object.keys(PAGES) as PageName[];
