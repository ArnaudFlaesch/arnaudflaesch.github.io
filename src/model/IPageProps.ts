export interface IPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        rss: string;
      };
    };
    allMarkdownRemark: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      nodes: any[];
    };
  };
  location: Location;
}
