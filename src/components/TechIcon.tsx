import Tooltip from "@mui/material/Tooltip";
import type { ISkill } from "~/model/ISkill";
import { getIconPath } from "~/utils/icons";

export default function TechIcon({ category, skill }: { category: string; skill: ISkill }) {
  return (
    <Tooltip title={skill.name}>
      <img src={getIconPath(category, skill)} width={40} height={40} alt={skill.name} />
    </Tooltip>
  );
}
