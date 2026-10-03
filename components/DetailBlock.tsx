import React from "react";

interface DetailBlockProps {
  titleComponent: React.ReactNode;
  detailComponent: React.ReactNode;
}

export default function DetailBlock({ titleComponent, detailComponent }: DetailBlockProps) {
  return (
    <div className="detail-block">
      <div className="block-title">{titleComponent}</div>
      <div className="detail-info">{detailComponent}</div>
    </div>
  );
}
