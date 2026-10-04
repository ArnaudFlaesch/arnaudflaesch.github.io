import type { IRepository } from "~/model/IRepository";

const fallbackData: Record<string, IRepository> = {
  "Dash-Web": {
    name: "Dash-Web",
    url: "https://github.com/ArnaudFlaesch/Dash-Web",
    createdAt: new Date(),
    pushedAt: new Date(),
    description: "Frontend for Dash application",
    languages: {
      totalSize: 100000,
      edges: [
        { node: { name: "TypeScript", color: "#3178c6" }, size: 70000 },
        { node: { name: "HTML", color: "#e34c26" }, size: 20000 },
        { node: { name: "SCSS", color: "#c6538c" }, size: 10000 }
      ]
    }
  },
  "Dash-WebServices": {
    name: "Dash-WebServices",
    url: "https://github.com/ArnaudFlaesch/Dash-WebServices",
    createdAt: new Date(),
    pushedAt: new Date(),
    description: "Backend web services for Dash application",
    languages: {
      totalSize: 100000,
      edges: [
        { node: { name: "Kotlin", color: "#A97BFF" }, size: 85000 },
        { node: { name: "Java", color: "#b07219" }, size: 15000 }
      ]
    }
  },
  CashManager: {
    name: "CashManager",
    url: "https://github.com/ArnaudFlaesch/CashManager",
    createdAt: new Date(),
    pushedAt: new Date(),
    description: "Personal finances management application",
    languages: {
      totalSize: 100000,
      edges: [
        { node: { name: "TypeScript", color: "#3178c6" }, size: 75000 },
        { node: { name: "HTML", color: "#e34c26" }, size: 15000 },
        { node: { name: "SCSS", color: "#c6538c" }, size: 10000 }
      ]
    }
  },
  "arnaudflaesch.github.io": {
    name: "arnaudflaesch.github.io",
    url: "https://github.com/ArnaudFlaesch/arnaudflaesch.github.io",
    createdAt: new Date(),
    pushedAt: new Date(),
    description: "Personal website & blog",
    languages: {
      totalSize: 100000,
      edges: [
        { node: { name: "TypeScript", color: "#3178c6" }, size: 60000 },
        { node: { name: "SCSS", color: "#c6538c" }, size: 25000 },
        { node: { name: "HTML", color: "#e34c26" }, size: 15000 }
      ]
    }
  }
};

export async function fetchProjectData(projectName: string): Promise<IRepository> {
  const token = process.env.NUXT_GQL_GITHUB_REPO_QUERY_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) {
    return fallbackData[projectName] || {
      name: projectName,
      url: `https://github.com/ArnaudFlaesch/${projectName}`,
      createdAt: new Date(),
      pushedAt: new Date(),
      description: "",
      languages: { totalSize: 0, edges: [] }
    };
  }

  const query = `
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

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "arnaudflaesch-portfolio"
      },
      body: JSON.stringify({
        query,
        variables: { repository: projectName, owner: "ArnaudFlaesch" }
      }),
      next: { revalidate: 3600 }
    });

    const data = await res.json();
    if (data?.data?.repository) {
      return data.data.repository as IRepository;
    }
  } catch (error) {
    console.error(`Failed to fetch GitHub repository data for ${projectName}:`, error);
  }

  return fallbackData[projectName] || {
    name: projectName,
    url: `https://github.com/ArnaudFlaesch/${projectName}`,
    createdAt: new Date(),
    pushedAt: new Date(),
    description: "",
    languages: { totalSize: 0, edges: [] }
  };
}
