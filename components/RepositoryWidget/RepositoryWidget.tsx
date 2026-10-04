import React from "react";
import TooltipIcon from "~/components/TooltipIcon";
import type { IRepoIcon } from "~/model/IRepoIcon";
import type { IEdge, IRepository } from "~/model/IRepository";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";
import "./RepositoryWidget.scss";

const ICONS_PATH = "/icons/";

interface RepositoryWidgetProps {
  description: string;
  repoIcons: IRepoIcon[];
  repositoryData: IRepository;
  locale?: string;
}

function sortEdgesBySize(edgeA: IEdge, edgeB: IEdge) {
  if (edgeA.size > edgeB.size) {
    return -1;
  }
  if (edgeA.size < edgeB.size) {
    return 1;
  }
  return 0;
}

export default function RepositoryWidget({
  description,
  repoIcons,
  repositoryData,
  locale = DEFAULT_LOCALE
}: RepositoryWidgetProps) {
  const sortedEdges = [...(repositoryData.languages?.edges || [])].sort(sortEdgesBySize);
  const totalSize = repositoryData.languages?.totalSize || 1;

  return (
    <div className="repository-widget-container">
      <div className="repository-widget-title">
        <h3>
          <a href={repositoryData.url} target="_blank" rel="noopener noreferrer">
            {repositoryData.name}
          </a>
        </h3>
        <a href={repositoryData.url} target="_blank" rel="noopener noreferrer">
          <TooltipIcon tooltip="Lien GitHub" iconPath="/icons/tools/github.png" alt="Lien GitHub" />
        </a>
      </div>

      <div>{t(description, locale)}</div>

      <div className="technical-stack-container">
        <div className="technical-stack">
          <div>{t("TECHNICAL.STACK", locale)} :</div>

          <div className="repository-icons">
            {repoIcons.map((languageIcon, index) => {
              const iconPath = `${ICONS_PATH}${languageIcon.label.toLowerCase()}/${languageIcon.path ? languageIcon.path : languageIcon.name.replace(/\s/g, "").toLowerCase()}.${languageIcon.extension ? languageIcon.extension : "svg"}`;
              return (
                <TooltipIcon key={index} tooltip={languageIcon.name} iconPath={iconPath} alt={languageIcon.name} />
              );
            })}
          </div>

          <div>{t("LANGUAGES.USED", locale)} :</div>

          <div className="languages-container">
            {sortedEdges.map((edge, index) => (
              <div
                key={index}
                className="language-edge"
                title={edge.node.name}
                style={{
                  backgroundColor: edge.node.color,
                  width: `${Math.fround((edge.size / totalSize) * 100)}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
