import type { ReactNode } from "react";

export default function DetailBlock({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="detail-block">
      <div className="block-title">{title}</div>
      <div className="detail-info">{children}</div>
    </div>
  );
}
