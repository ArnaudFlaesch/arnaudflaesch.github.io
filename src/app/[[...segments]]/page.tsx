import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import BlogPage from "~/components/BlogPage";
import BlogPost from "~/components/BlogPost";
import ContactForm from "~/components/ContactForm";
import CvPage from "~/components/CvPage";
import HomePage from "~/components/HomePage";
import PageIntro from "~/components/PageIntro";
import ProjectsPage from "~/components/ProjectsPage";
import { PAGE_NAMES, PAGES, type PageName } from "~/data/PagesData";
import { LOCALES, type Locale } from "~/data/SiteData";
import { getAllPosts, getPostBySlug } from "~/utils/content";
import { getLocalePath, parsePath, t } from "~/utils/i18n";
import { buildMetadata } from "~/utils/seo";

type PageProps = { params: Promise<{ segments?: string[] }> };

const PAGE_COMPONENTS: Record<PageName, ComponentType<{ locale: Locale }>> = {
  "": HomePage,
  cv: CvPage,
  blog: BlogPage,
  projets: ProjectsPage,
  contact: ContactForm
};

function resolveRoute(segments: string[] = []) {
  const {
    locale,
    segments: [page = "", slug, ...extra]
  } = parsePath(segments.join("/"));
  if (extra.length > 0 || !Object.hasOwn(PAGES, page) || (slug !== undefined && page !== "blog")) {
    return undefined;
  }
  return { locale, page: page as PageName, slug };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const paths = [...PAGE_NAMES.map((page) => `/${page}`), ...getAllPosts().map((post) => post.path)];
  return LOCALES.flatMap((locale) =>
    paths.map((path) => ({ segments: getLocalePath(path, locale).split("/").filter(Boolean) }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const route = resolveRoute((await params).segments);
  if (!route) {
    return {};
  }
  const { locale, page, slug } = route;

  if (slug) {
    const post = getPostBySlug(slug)?.post;
    if (!post) {
      return {};
    }
    return buildMetadata({
      title: post.title,
      description: post.description,
      path: getLocalePath(post.path, locale),
      locale,
      image: `/blog/${post.image}`,
      article: { publishedTime: post.date, modifiedTime: post.date }
    });
  }

  const { titleCode, descriptionCode } = PAGES[page];
  return buildMetadata({
    // The home page only uses the site title
    title: page === "" ? undefined : t(titleCode, locale),
    description: t(descriptionCode, locale),
    path: getLocalePath(`/${page}`, locale),
    locale
  });
}

export default async function Page({ params }: PageProps) {
  const route = resolveRoute((await params).segments);
  if (!route) {
    notFound();
  }
  const { locale, page, slug } = route;

  if (slug) {
    const result = getPostBySlug(slug);
    if (!result) {
      notFound();
    }
    return <BlogPost {...result} locale={locale} />;
  }

  const { titleCode, descriptionCode } = PAGES[page];
  const Content = PAGE_COMPONENTS[page];
  return (
    <>
      <PageIntro title={t(titleCode, locale)} description={t(descriptionCode, locale)} />
      <Content locale={locale} />
    </>
  );
}
