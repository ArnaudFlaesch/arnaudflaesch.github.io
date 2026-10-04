import React from "react";
import TooltipIcon from "~/components/TooltipIcon";
import { fullName, linkedinLink, githubLink } from "~/data/SiteData";
import "./Bio.scss";

export default function Bio() {
  const author = fullName;

  return (
    <div id="bio">
      <img className="bio-avatar" width={100} height={100} src="/profile-picture.jpg" alt={author} />
      <span>
        Écrit par <strong>{author}</strong>
      </span>

      <div id="social-links-bio">
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <TooltipIcon tooltip="LinkedIn" iconPath="/icons/socials/linkedin-icon.png" alt="linkedin" />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <TooltipIcon tooltip="Github" iconPath="/icons/socials/github-icon.png" alt="github" />
        </a>
      </div>
    </div>
  );
}
