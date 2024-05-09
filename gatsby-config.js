require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const fullName = 'Arnaud Flaesch';
const pwaShortName = 'AF';
const company = 'Publicis Sapient France';
const siteName = 'arnaudflaesch.github.io';
const siteUrl = `https://${siteName}`;
const defaultImageUrl = '/profile-picture.jpg';
const jobName = 'Développeur logiciel';
const city = 'Paris';
const title = `${fullName}, ${jobName}`;

const linkedinLink = 'https://www.linkedin.com/in/arnaudflaesch/';
const githubLink = 'https://github.com/ArnaudFlaesch';
const scrumOrgLink = 'https://www.scrum.org/user/1355891';
const credlyLink = 'https://www.credly.com/users/arnaud-flaesch/badges';
const mediumLink = 'https://medium.com/@arnaudflaesch';
const stackOverflowLink = 'https://stackoverflow.com/users/12927815/arnaud-flaesch';
const welovedevsLink = 'https://arnaud-flaesch.welovedevs.com/';

const rssFeedFile = '/rss.xml';

module.exports = {
  siteMetadata: {
    author: fullName,
    imageUrl: `${siteUrl}${defaultImageUrl}`,
    job: jobName,
    company: company,
    city: city,
    keywords: 'arnaud flaesch, web developer, fullstack developer, software engineer',
    siteName: siteName,
    siteUrl: siteUrl,
    socials: {
      linkedin: linkedinLink,
      github: githubLink,
      scrumOrg: scrumOrgLink,
      credly: credlyLink,
      weLoveDevs: welovedevsLink,
      stackOverflow: stackOverflowLink,
      medium: mediumLink
    },
    rss: rssFeedFile
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale'
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to `gatsby-source-filesystem` plugin.
        languages: ['en', 'fr'],
        defaultLanguage: 'fr',
        siteUrl: siteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/404',
            getLanguageFromPath: false
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: pwaShortName,
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#1976d2',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return {
                  ...node.frontmatter,
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }]
                };
              });
            },
            query: `
              {
                allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            `,
            match: '^/blog/',
            output: rssFeedFile,
            title: 'Flux RSS - Arnaud Flaesch'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/index', '/cv', '/projets', '/contact']
      }
    }
  ]
};
