"use client";

import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Bio from "~/components/Bio";
import MdiIcon, { icons } from "~/components/icons/MdiIcon";
import { getLocaleFromLanguage } from "~/utils/DateUtils";
import { getLocalePath } from "~/utils/i18n";
import type { BlogPost } from "~/utils/content";
import { DEFAULT_LOCALE } from "~/data/SiteData";

interface TemplateBlogPostProps {
  doc: BlogPost;
  previous?: BlogPost | null;
  next?: BlogPost | null;
  locale?: string;
}

export default function TemplateBlogPost({
  doc,
  previous,
  next,
  locale = DEFAULT_LOCALE
}: TemplateBlogPostProps) {
  const blogUrlPrefix = "/blog/";
  const facebookShareUrl = "https://www.facebook.com/sharer.php?u=";
  const twitterShareUrl = "https://twitter.com/share?url=";
  const linkedinShareUrl = "https://www.linkedin.com/shareArticle?url=";

  const handleShare = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(encodeURI(url), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700");
  };

  const formattedDate = doc.date
    ? format(new Date(doc.date), "dd MMMM yyyy", {
        locale: getLocaleFromLanguage(locale)
      })
    : "";

  return (
    <>
      <article className="blog-post" itemScope itemType="https://schema.org/Article">
        <header>
          <h1 itemProp="headline">{doc.title}</h1>
          <p>{formattedDate}</p>
          {doc.description}
        </header>
        <p>
          <img
            className="article-illustration"
            src={`${blogUrlPrefix}${doc.image}`}
            width={600}
            alt="Illustration article"
          />
          {doc.imageSubtitle && <em dangerouslySetInnerHTML={{ __html: doc.imageSubtitle }} />}
        </p>
        <section itemProp="articleBody" dangerouslySetInnerHTML={{ __html: doc.html }} />
        <hr />
        <footer className="blog-post-footer">
          <Bio />
          <div className="share-article-container">
            <span>Partager cet article :</span>
            <div id="share-buttons">
              <a
                href="#"
                title="Partager sur Facebook"
                onClick={(e) => handleShare(`${facebookShareUrl}https://arnaudflaesch.github.io${doc.path}`, e)}
              >
                <MdiIcon path={icons.facebook} />
              </a>

              <a
                href="#"
                title="Partager sur X"
                onClick={(e) => handleShare(`${twitterShareUrl}https://arnaudflaesch.github.io${doc.path}`, e)}
              >
                <MdiIcon path={icons.twitter} />
              </a>

              <a
                href="#"
                title="Partager sur LinkedIn"
                onClick={(e) => handleShare(`${linkedinShareUrl}https://arnaudflaesch.github.io${doc.path}`, e)}
              >
                <MdiIcon path={icons.linkedin} />
              </a>
            </div>
          </div>
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul>
          <li>
            {previous?.path && (
              <Link href={getLocalePath(previous.path, locale)} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next?.path && (
              <Link href={getLocalePath(next.path, locale)} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
