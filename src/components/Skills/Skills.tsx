import React from "react";
import Tooltip from "@mui/material/Tooltip";
import DetailBlock from "~/components/DetailBlock/DetailBlock";
import { skills } from "~/data/SkillsData";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";
import "./Skills.scss";

const ICONS_PATH = "/icons/";

function getSkillIconPath(label: string, path: string, extension: string): string {
  return `${ICONS_PATH}${label}/${path}.${extension}`;
}

export default function Skills({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  return (
    <div id="skills-list">
      {skills.map((block, index) => (
        <DetailBlock
          key={index}
          titleComponent={<h3 className="skill-category-title">{t(block.label, locale)}</h3>}
          detailComponent={
            <>
              {block.skills.map((skill) => (
                <Tooltip key={skill.name} title={skill.name}>
                  <img
                    src={getSkillIconPath(
                      block.label.toLowerCase(),
                      skill.path ?? skill.name.replace(/\s/g, "").toLowerCase(),
                      skill.extension ? skill.extension : "svg"
                    )}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                </Tooltip>
              ))}
            </>
          }
        />
      ))}
    </div>
  );
}
