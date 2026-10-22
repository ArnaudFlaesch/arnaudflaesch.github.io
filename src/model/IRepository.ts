export type IEdge = {
  node: {
    name: string;
    color: string;
  };
  size: number;
};

export type IRepository = {
  name: string;
  url: string;
  languages: {
    edges: IEdge[];
    totalSize: number;
  };
};
