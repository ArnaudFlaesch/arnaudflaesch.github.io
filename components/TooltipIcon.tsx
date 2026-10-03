import React from "react";

interface TooltipIconProps {
  tooltip: string;
  iconPath: string;
  alt: string;
  iconHeight?: number;
  iconWidth?: number;
}

const ICON_DEFAULT_SIZE = 40;

export default function TooltipIcon({ tooltip, iconPath, alt, iconHeight, iconWidth }: TooltipIconProps) {
  const width = iconWidth ?? ICON_DEFAULT_SIZE;
  const height = iconHeight ?? ICON_DEFAULT_SIZE;

  return (
    <i
      className="v-icon"
      title={tooltip}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: `${height}px`,
        width: `${width}px`
      }}
    >
      <img src={iconPath} width={width} height={height} alt={alt} />
    </i>
  );
}
