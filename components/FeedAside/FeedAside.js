"use client";

import * as React from "react";
import Feed from "../Feed/Feed";
import Image from "next/image";

const FeedAside = (props) => {
  const { data, imageSrc, imageAlt, bgColor } = props;

  return (
    <div style={{ backgroundColor: bgColor }} className="w-full self-end">
      <div className="py-4 px-4 flex flex-col items-center gap-4">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={96}
            height={96}
            style={{ objectFit: "contain" }}
          />
        )}
        <Feed data={data} showMoreButton={false} limit={4} />
      </div>
    </div>
  );
};

export default FeedAside;
