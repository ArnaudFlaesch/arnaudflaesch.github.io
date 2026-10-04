import React, { ReactNode } from "react";
import "./DetailBlock.scss";

interface DetailBlockProps {
  titleComponent: ReactNode;
  detailComponent: ReactNode;
}

export default function DetailBlock({ titleComponent, detailComponent }: DetailBlockProps) {
  return (
    <div className="detail-block">
      <div className="block-title">{titleComponent}</div>
      <div className="detail-info">{detailComponent}</div>
    </div>
  );
}
