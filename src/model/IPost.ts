export interface IPost {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    image: string;
  };
  excerpt: string;
  fields: {
    slug: string;
  };
}
