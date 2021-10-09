export interface IPost {
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
  excerpt: string;
  fields: {
    slug: string;
  };
}
