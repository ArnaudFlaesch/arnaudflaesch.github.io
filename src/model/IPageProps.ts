export interface IPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      nodes: any[];
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}
