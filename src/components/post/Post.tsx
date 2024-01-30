import { Link } from 'gatsby';
import React from 'react';
import { IPost } from '../../model/IPost';

import './Post.scss';

export default function Post(post: Readonly<IPost>): React.ReactElement {
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <li key={post.fields.slug}>
      <article className="post-list-item" itemScope itemType="https://schema.org/Article">
        <header>
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <img src={`/blog/${post.frontmatter.image}`} className="blog-thumbnail" alt="Illustration article" />
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  );
}
