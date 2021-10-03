export interface IRepository {
  createdAt: Date;
  description: string;
  name: string;
  pushedAt: Date;
  url: string;
  primaryLanguage?: {
    name: string;
  };
  languages: ILanguagesData;
}

export interface IEdge {
  node: {
    name: string;
    color: string;
  };
  size: number;
}

interface ILanguagesData {
  edges: IEdge[];
  totalSize: number;
}
