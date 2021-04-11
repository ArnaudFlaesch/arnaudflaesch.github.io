# Portfolio

[![Build Status](https://www.travis-ci.com/ArnaudFlaesch/arnaudflaesch.github.io.svg?branch=ft_gatsby)](https://www.travis-ci.com/ArnaudFlaesch/arnaudflaesch.github.io)
[![Coverage Status](https://coveralls.io/repos/github/ArnaudFlaesch/arnaudflaesch.github.io/badge.svg?branch=ft_gatsby)](https://coveralls.io/github/ArnaudFlaesch/arnaudflaesch.github.io?branch=ft_gatsby)
[![codecov](https://codecov.io/gh/ArnaudFlaesch/arnaudflaesch.github.io/branch/master/graph/badge.svg)](https://codecov.io/gh/ArnaudFlaesch/arnaudflaesch.github.io)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/92532453d7fd4c58ba8a659c4f9133d4)](https://www.codacy.com/gh/ArnaudFlaesch/arnaudflaesch.github.io/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ArnaudFlaesch/arnaudflaesch.github.io&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/92532453d7fd4c58ba8a659c4f9133d4)](https://www.codacy.com/gh/ArnaudFlaesch/arnaudflaesch.github.io/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ArnaudFlaesch/arnaudflaesch.github.io&utm_campaign=Badge_Coverage)
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

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```