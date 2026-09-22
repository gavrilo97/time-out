"use client";

import * as React from "react";
import FeedCard from "./FeedCard";
import s from "./Feed.module.css";

const Feed = ({ data, showMoreButton = true, layout = "card", limit = 8 }) => {
  const [expanded, setExpanded] = React.useState(false);

  const items = Array.isArray(data) ? data : [];
  const block = layout === "block";

  if (items.length === 0) {
    return (
      <div className="w-full rounded-card border border-dashed border-grayBase bg-secondary p-10 text-center">
        <p className="kicker text-grayDark">Trenutno nema vesti</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div className={`${s.stagger} w-full ${block ? s.gridBlock : s.gridRow}`}>
        {(expanded ? items : items.slice(0, limit)).map((item) => (
          <FeedCard key={item.id} item={item} block={block} />
        ))}
      </div>

      {showMoreButton && items.length > limit ? (
        <div className="flex w-full justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-navy-800 px-8
                       display text-sm tracking-wider2 text-secondary
                       transition-all duration-300 ease-out hover:bg-volt hover:text-ink"
          >
            {expanded ? "Prikaži manje" : "Prikaži još vesti"}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Feed;
