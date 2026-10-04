import React from "react";
import Tooltip from "@mui/material/Tooltip";
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
          <Tooltip title="LinkedIn">
            <img src="/icons/socials/linkedin-icon.png" alt="linkedin" width={40} height={40} />
          </Tooltip>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Tooltip title="Github">
            <img src="/icons/socials/github-icon.png" alt="github" width={40} height={40} />
          </Tooltip>
        </a>
      </div>
    </div>
  );
}
