"use client";

import { useState, type ReactNode } from "react";

interface ExpandableListProps {
  items: ReactNode[];
  initialCount: number;
  showMoreLabel: string;
  showLessLabel: string;
}

/** Shows the first `initialCount` items; the others stay in the DOM but hidden until expanded. */
export default function ExpandableList({ items, initialCount, showMoreLabel, showLessLabel }: ExpandableListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {items.map((item, index) => (
        <div key={index} hidden={!isExpanded && index >= initialCount}>
          {item}
        </div>
      ))}
      <button type="button" className="cv-button" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? showLessLabel : showMoreLabel}
      </button>
    </>
  );
}
