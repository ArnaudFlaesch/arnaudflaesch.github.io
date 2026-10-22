import type { ISkill } from "~/model/ISkill";

export function getIconPath(category: string, { name, path, extension = "svg" }: ISkill): string {
  return `/icons/${category.toLowerCase()}/${path ?? name.replace(/\s/g, "").toLowerCase()}.${extension}`;
}
