import React from 'react';
import { IPost } from '../../../model/IPost';

import './Post.scss';
import { format } from 'date-fns/format';
import { fr } from 'date-fns/locale/fr';
import { Link } from 'gatsby-plugin-react-i18next';

export default function Post(post: Readonly<IPost>): React.ReactElement {
  const title = post.frontmatter.title || post.fields.slug;
  const publicationDate = format(post.frontmatter.date, 'dd MMMM, yyyy', { locale: fr });

  return (
    <article className="post-list-item" itemScope itemType="https://schema.org/Article">
      <Link to={post.fields.slug} itemProp="url">
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
