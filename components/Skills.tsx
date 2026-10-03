import React from "react";
import DetailBlock from "~/components/DetailBlock";
import TooltipIcon from "~/components/TooltipIcon";
import { skills } from "~/data/SkillsData";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

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
                <TooltipIcon
                  key={skill.name}
                  tooltip={skill.name}
                  iconPath={getSkillIconPath(
                    block.label.toLowerCase(),
                    skill.path ?? skill.name.replace(/\s/g, "").toLowerCase(),
                    skill.extension ? skill.extension : "svg"
                  )}
                  alt={skill.name}
                />
              ))}
            </>
          }
        />
      ))}
    </div>
  );
}
