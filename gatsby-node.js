/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const BLOG_URL_PREFIX = '/blog';

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve('./src/components/blog/templates/TemplateBlogPost.tsx');

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Erreur lors de la récupération des articles de blog.', result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // "context" is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId
        }
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = `${BLOG_URL_PREFIX}${createFilePath({ node, getNode })}`;
    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return "null" even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
     type SiteSiteMetadata {
        title: String
        description: String
        author: String
        job: String
        imageUrl: String
        siteName: String
        siteUrl: String
        keywords: String
        socials: Socials
        rss: String
     }
     type Socials {
      linkedin: String
      github: String
      scrumOrg: String
      credly: String
      weLoveDevs: String
      medium: String
    }
     type MarkdownRemark implements Node {
       frontmatter: Frontmatter
       fields: Fields
     }
     type Frontmatter {
       title: String
       description: String
       date: Date @dateformat
       image: String
       tags: [String]
     }
     type Fields {
       slug: String
     }
   `);
};
