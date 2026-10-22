const SITE_URL = "https://arnaudflaesch.github.io";
const AUTHOR = "Arnaud Flaesch";

interface ExpectedSeo {
  title: string;
  description: string;
  /** Page path, e.g. "/en/cv". */
  path: string;
  locale?: "fr" | "en";
  /** Image path relative to the site root. */
  image?: string;
  /** Publication date, for blog articles. */
  publishedTime?: string;
}

function checkMeta(attribute: string, content: string) {
  cy.get(`meta[${attribute}]`).should("have.attr", "content", content);
}

/** Checks the title and the meta tags of the current page. */
export function checkSeo({
  title,
  description,
  path,
  locale = "fr",
  image = "/profile-picture.jpg",
  publishedTime
}: ExpectedSeo) {
  cy.title().should("equal", title);
  checkMeta('name="description"', description);
  checkMeta('name="author"', AUTHOR);
  checkMeta('name="creator"', AUTHOR);
  checkMeta('property="og:title"', title);
  checkMeta('property="og:description"', description);
  checkMeta('property="og:url"', `${SITE_URL}${path}`);
  checkMeta('property="og:image"', `${SITE_URL}${image}`);
  checkMeta('property="og:site_name"', "arnaudflaesch.github.io");
  checkMeta('property="og:locale"', locale);

  if (publishedTime) {
    checkMeta('property="og:type"', "article");
    checkMeta('property="article:author"', AUTHOR);
    checkMeta('property="article:published_time"', publishedTime);
    checkMeta('property="article:modified_time"', publishedTime);
  } else {
    checkMeta('property="og:type"', "website");
  }
}
