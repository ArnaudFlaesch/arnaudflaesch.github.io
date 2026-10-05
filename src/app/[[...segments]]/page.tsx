import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPage from "~/components/BlogPage/BlogPage";
import BlogPostPage from "~/components/BlogPostPage";
import ContactPage from "~/components/ContactPage";
import CvPage from "~/components/CvPage";
import HomePage from "~/components/HomePage/HomePage";
import ProjectsPage from "~/components/ProjectsPage/ProjectsPage";
import { projectsInfo } from "~/data/ProjectsData";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { getAllPosts, getPostBySlug } from "~/utils/content";
import { fetchProjectData } from "~/utils/github";
import { buildMetadata } from "~/utils/seo";

type PageParams = { segments?: string[] };

const LOCALES = ["fr", "en"];
const NON_DEFAULT_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

const STATIC_PAGES = {
  "": { titleCode: "INDEX.PAGE.TITLE", descriptionCode: "INDEX.PAGE.DESCRIPTION" },
  blog: { titleCode: "BLOG.PAGE.TITLE", descriptionCode: "BLOG.PAGE.DESCRIPTION" },
  contact: { titleCode: "CONTACT.PAGE.TITLE", descriptionCode: "CONTACT.PAGE.DESCRIPTION" },
  cv: { titleCode: "CV.PAGE.TITLE", descriptionCode: "CV.PAGE.DESCRIPTION" },
  projets: { titleCode: "PROJECTS.PAGE.TITLE", descriptionCode: "PROJECTS.PAGE.DESCRIPTION" }
} as const;

type PageName = keyof typeof STATIC_PAGES;

interface ResolvedRoute {
  locale: string;
  page: PageName;
  slug?: string;
}

function resolveRoute(segments: string[] = []): ResolvedRoute | undefined {
  const rest = [...segments];
  let locale = DEFAULT_LOCALE;
  if (rest.length > 0 && NON_DEFAULT_LOCALES.includes(rest[0])) {
    locale = rest.shift() as string;
  }

  const [page = "", slug, ...extra] = rest;
  if (extra.length > 0 || !(page in STATIC_PAGES)) {
    return undefined;
  }
  if (slug !== undefined && page !== "blog") {
    return undefined;
  }
  return { locale, page: page as PageName, slug };
}

function buildPath(route: ResolvedRoute): string {
  const prefix = route.locale === DEFAULT_LOCALE ? "" : `/${route.locale}`;
  const pagePath = route.page ? `/${route.page}` : "";
  if (route.slug) {
    return `${prefix}${pagePath}/${route.slug}/`;
  }
  return `${prefix}${pagePath}` || "/";
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs = getAllPosts().map((post) => post.slug);
  return LOCALES.flatMap((locale) => {
    const prefix = locale === DEFAULT_LOCALE ? [] : [locale];
    const pages = (Object.keys(STATIC_PAGES) as PageName[]).map((page) => ({
      segments: page ? [...prefix, page] : prefix
    }));
    const posts = slugs.map((slug) => ({ segments: [...prefix, "blog", slug] }));
    return [...pages, ...posts];
  });
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { segments } = await params;
  const route = resolveRoute(segments);
  if (!route) {
    return {};
  }

  const path = buildPath(route);
  if (route.slug) {
    const { post } = getPostBySlug(route.slug);
    if (!post) {
      return {};
    }
    return buildMetadata({
      customTitle: post.title,
      customDescription: post.description,
      path,
      locale: route.locale,
      type: "article",
      image: `/blog/${post.image}`,
      publishedTime: post.date,
      modifiedTime: post.date
    });
  }

  return buildMetadata({ ...STATIC_PAGES[route.page], path, locale: route.locale });
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const { segments } = await params;
  const route = resolveRoute(segments);
  if (!route) {
    notFound();
  }
  const { locale, page, slug } = route;

  if (slug) {
    const { post, previous, next } = getPostBySlug(slug);
    if (!post) {
      notFound();
    }
    return <BlogPostPage doc={post} previous={previous} next={next} locale={locale} />;
  }

  switch (page) {
    case "blog":
      return <BlogPage locale={locale} />;
    case "contact":
      return <ContactPage locale={locale} />;
    case "cv":
      return <CvPage locale={locale} />;
    case "projets": {
      const projectsData = await Promise.all(projectsInfo.map((projectInfo) => fetchProjectData(projectInfo.name)));
      return <ProjectsPage projectsData={projectsData} locale={locale} />;
    }
    default:
      return <HomePage locale={locale} />;
  }
}
