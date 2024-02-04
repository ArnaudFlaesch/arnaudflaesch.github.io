require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const siteUrl = 'https://arnaudflaesch.github.io/';
const defaultImageUrl = 'profile-picture.jpg';
const linkedinLink = 'https://www.linkedin.com/in/arnaudflaesch/';
const githubLink = 'https://github.com/ArnaudFlaesch';
const scrumOrgLink = 'https://www.scrum.org/user/1355891';
const welovedevsLink = 'https://arnaud-flaesch.welovedevs.com/';

module.exports = {
  siteMetadata: {
    title: 'Arnaud Flaesch, Développeur Web',
    description: 'Site web, CV et blog.',
    author: 'Arnaud Flaesch',
    imageUrl: `${siteUrl}${defaultImageUrl}`,
    job: 'Développeur Web',
    company: 'Publicis Sapient France',
    keywords: `arnaud flaesch, frontend, backend portfolio, web portfolio, gatsby portfolio, web developer, fullstack developer, software engineer`,
    siteName: 'arnaudflaesch.github.io',
    siteUrl: siteUrl,
    socials: {
      linkedin: linkedinLink,
      github: githubLink,
      scrumOrg: scrumOrgLink,
      weLoveDevs: welovedevsLink
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Blog d'Arnaud Flaesch",
        short_name: "Blog d'Arnaud Flaesch",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/blog/*']
      }
    }
  ]
};
