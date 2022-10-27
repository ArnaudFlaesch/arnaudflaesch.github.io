# Portfolio

[![CI](https://github.com/ArnaudFlaesch/arnaudflaesch.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/ArnaudFlaesch/arnaudflaesch.github.io/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ArnaudFlaesch_arnaudflaesch.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ArnaudFlaesch_arnaudflaesch.github.io)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/92532453d7fd4c58ba8a659c4f9133d4)](https://www.codacy.com/gh/ArnaudFlaesch/arnaudflaesch.github.io/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ArnaudFlaesch/arnaudflaesch.github.io&utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/ArnaudFlaesch/arnaudflaesch.github.io/badge.svg)](https://snyk.io/test/github/ArnaudFlaesch/arnaudflaesch.github.io)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- One click deployment to Vercel

## Structure

"""bash
.
├── data
│ └── config # SEO related tags
├── src
│ └── assets # Assets
│ │ │── icons # icons
│ │ │── illustrations # illustrations from (undraw.co)
│ │ └── thumbnail # cover of your website when it's shared to social media
│ ├── components # Components
│ │ │── common # Common components
│ │ │── landing # Components used on the landing page
│ │ └── theme # Header & Footer
│ └── pages # Pages
└── static # favicon & Netlify redirects
"""
