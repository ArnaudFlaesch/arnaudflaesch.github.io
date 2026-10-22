export const fullName = "Arnaud Flaesch";
export const city = "Paris";
export const jobName = "Développeur d'applications";
export const company = "Institut Pasteur";
export const title = `${fullName} - ${jobName}`;
export const siteName = "arnaudflaesch.github.io";
export const siteUrl = `https://${siteName}`;
export const defaultImageUrl = "/profile-picture.jpg";
export const rssFeedFile = "/rss.xml";
export const rssFeedUrl = `${siteUrl}${rssFeedFile}`;

export const linkedinLink = "https://www.linkedin.com/in/arnaudflaesch/";
export const githubLink = "https://github.com/ArnaudFlaesch";
export const scrumOrgLink = "https://www.scrum.org/user/1355891";
export const credlyLink = "https://www.credly.com/users/arnaud-flaesch";
export const mediumLink = "https://medium.com/@arnaudflaesch";
export const stackOverflowLink = "https://stackoverflow.com/users/12927815/arnaud-flaesch";

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";
