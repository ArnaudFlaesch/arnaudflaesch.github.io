import { githubLink } from "~/data/SiteData";
import type { IEdge, IRepository } from "~/model/IRepository";

const OWNER = "ArnaudFlaesch";

const QUERY = `
  query GetGitHubRepositoryDataQuery($repository: String!, $owner: String!) {
    repository(name: $repository, owner: $owner) {
      name
      url
      languages(first: 5) {
        edges {
          node {
            name
            color
          }
          size
        }
        totalSize
      }
    }
  }
`;

const LANGUAGE_COLORS = {
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  SCSS: "#c6538c",
  CSS: "#663399",
  Kotlin: "#A97BFF",
  Java: "#b07219"
};

// Used when no token is configured or the GitHub API call fails.
const fallbackLanguages: Record<string, [keyof typeof LANGUAGE_COLORS, number][]> = {
  "Dash-Web": [
    ["TypeScript", 70000],
    ["HTML", 20000],
    ["SCSS", 10000]
  ],
  "Dash-WebServices": [
    ["Kotlin", 85000],
    ["Java", 15000]
  ],
  CashManager: [
    ["TypeScript", 75000],
    ["HTML", 15000],
    ["SCSS", 10000]
  ],
  "arnaudflaesch.github.io": [
    ["TypeScript", 75000],
    ["CSS", 15000],
    ["HTML", 10000]
  ]
};

function getFallbackData(name: string): IRepository {
  const edges: IEdge[] = (fallbackLanguages[name] ?? []).map(([language, size]) => ({
    node: { name: language, color: LANGUAGE_COLORS[language] },
    size
  }));
  return {
    name,
    url: `${githubLink}/${name}`,
    languages: { edges, totalSize: edges.reduce((total, edge) => total + edge.size, 0) }
  };
}

export async function fetchProjectData(name: string): Promise<IRepository> {
  const token = process.env.PORTFOLIO_GITHUB_TOKEN;
  if (!token) {
    return getFallbackData(name);
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "arnaudflaesch-portfolio"
      },
      body: JSON.stringify({ query: QUERY, variables: { repository: name, owner: OWNER } })
    });
    const { data } = await response.json();
    if (data?.repository) {
      return data.repository;
    }
  } catch (error) {
    console.error("Failed to fetch GitHub repository data for %s:", name, error);
  }
  return getFallbackData(name);
}
