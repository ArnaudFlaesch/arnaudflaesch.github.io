import React from 'react';
import { IPost } from '../../../model/IPost';

import { format } from 'date-fns/format';
import { Link } from 'gatsby';
import './Post.scss';
import { useTranslation } from 'react-i18next';
import { getLocaleFromLanguage } from '../../../utils/DateUtils';
import { getUrlPath } from '../../../utils/TranslationUtils';

export default function Post(post: Readonly<IPost>): React.ReactElement {
  const { i18n } = useTranslation();

  const title = post.frontmatter.title || post.fields.slug;
  const publicationDate = format(post.frontmatter.date, 'dd MMMM, yyyy', {
    locale: getLocaleFromLanguage(i18n.language)
  });

  return (
    <article className="post-list-item" itemScope itemType="https://schema.org/Article">
      <Link to={getUrlPath(post.fields.slug, i18n.language)} itemProp="url">
        <header>
          <h3>
            <span itemProp="headline">{title}</span>
          </h3>
          <small>{publicationDate}</small>
        </header>
        <div className="article-preview">
          <img src={`/blog/${post.frontmatter.image}`} className="blog-thumbnail" alt="Illustration article" />
          <section>
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt
              }}
              itemProp="description"
            />
          </section>
        </div>
      </Link>
    </article>
  );
}
