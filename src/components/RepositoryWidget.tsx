import Tooltip from "@mui/material/Tooltip";
import TechIcon from "~/components/TechIcon";
import type { IProjectData } from "~/data/ProjectsData";
import type { Locale } from "~/data/SiteData";
import type { IRepository } from "~/model/IRepository";
import { t } from "~/utils/i18n";

interface RepositoryWidgetProps {
  project: IProjectData;
  repository: IRepository;
  locale: Locale;
}

export default function RepositoryWidget({ project, repository, locale }: RepositoryWidgetProps) {
  const { name, url, languages } = repository;
  const edges = languages.edges.toSorted((a, b) => b.size - a.size);
  const totalSize = languages.totalSize || 1;

  return (
    <div className="repository-widget-container">
      <div className="repository-widget-title">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Tooltip title={t("GITHUB.LINK", locale)}>
            <img src="/icons/tools/github.png" width={40} height={40} alt={t("GITHUB.LINK", locale)} />
          </Tooltip>
        </a>
      </div>

      <div>{t(project.description, locale)}</div>

      <div className="technical-stack">
        <div>{t("TECHNICAL.STACK", locale)} :</div>
        <div className="repository-icons">
          {project.repoIcons.map((icon) => (
            <TechIcon key={icon.name} category={icon.label} skill={icon} />
          ))}
        </div>

        <div>{t("LANGUAGES.USED", locale)} :</div>
        <div className="languages-container">
          {edges.map(({ node, size }) => (
            <div
              key={node.name}
              className="language-edge"
              title={node.name}
              style={{ backgroundColor: node.color, width: `${(size / totalSize) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
