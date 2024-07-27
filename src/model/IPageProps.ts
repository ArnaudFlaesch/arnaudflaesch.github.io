export interface IPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        rss: string;
        socials: Socials;
      };
    };
    allMarkdownRemark: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      nodes: any[];
    };
  };
  location: Location;
  pageContext: {
    language?: string;
  };
}

interface Socials {
  scrumOrg: string;
}
