"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const Feed = (props) => {
  const { data, showMoreButton = true, layout = "card", limit = 8 } = props;
  const [expanded, setExpanded] = React.useState(false);

  const formatDate = (value) => {
    const date = value.split("T")[0];
    const time = value.split("T")[1];

    const formatted = `${date.replaceAll("-", ".")} ${time.substring(0, 8)}`;

    return formatted;
  };

  return (
    <div
      className={` w-full flex flex-row flex-wrap max-md:place-content-center  items-start ${
        layout === "block" ? "gap-4" : "gap-8"
      }`}
    >
      {!expanded &&
        data.length > 0 &&
        data.map((item, idx) => (
          <>
            {idx < limit && (
              <div
                key={idx}
                className={`bg-secondary  ${
                  layout === "block" ? "w-1/2 md:w-2/5" : "w-full"
                } rounded-lg grid `}
                style={{
                  gridTemplateColumns: layout === "block" ? "none" : "2fr 4fr",
                  minHeight: layout === "block" ? 500 : 172,
                  gridTemplateRows: layout !== "block" ? "none" : "1fr 1fr",
                  width: layout === "block" ? "45%" : "100%",
                }}
              >
                <div className="relative block w-full h-full">
                  <Image
                    src={item["content:encoded"].match(/src="(.*?)"/)[1]}
                    alt={"image alt"}
                    fill
                    className={`object-cover ${
                      layout === "block" ? " rounded-t-lg " : "rounded-l-lg"
                    }`}
                  />
                </div>

                <div className="w-full h-full flex flex-col items-start justify-between p-2">
                  <div className="w-full h-full flex flex-col items-start gap-4 text-ellipsis overflow-hidden">
                    <div className="flex flex-col w-full gap-1">
                      <p className="text-lg font-medium uppercase text-primary">
                        {item.title}
                      </p>
                      <p className="text-sm font-medium uppercase text-grayDark">
                        {formatDate(item.isoDate)}
                      </p>
                    </div>

                    <p
                      className="text-base text-primary font-light whitespace-pre-wrap"
                      style={{
                        maxHeight: "70px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "3",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                  <Link
                    className={`w-48 h-8 text-secondary  bg-blueBase self-end text-center`}
                    href={item.link || "#"}
                    passHref={true}
                    target={"_blank"}
                  >
                    Prikazi vise
                  </Link>
                </div>
              </div>
            )}
          </>
        ))}

      {expanded &&
        data.length > 0 &&
        data.map((item, idx) => (
          <div
            key={idx}
            className={`bg-secondary  ${
              layout === "block" ? "w-1/2 md:w-2/5" : "w-full"
            } rounded-lg grid `}
            style={{
              gridTemplateColumns: layout === "block" ? "none" : "2fr 4fr",
              minHeight: layout === "block" ? 450 : 172,
              gridTemplateRows: layout !== "block" ? "none" : "1fr 1fr",
              width: layout === "block" ? "45%" : "100%",
            }}
          >
            <div className="relative block w-full h-full">
              <Image
                src={item["content:encoded"].match(/src="(.*?)"/)[1]}
                alt={"image alt"}
                fill
                className={`object-cover ${
                  layout === "block" ? " rounded-t-lg " : "rounded-l-lg"
                }`}
              />
            </div>

            <div className="w-full h-full flex flex-col items-start justify-between p-2">
              <div className="w-full h-full flex flex-col items-start gap-4 text-ellipsis overflow-hidden">
                <div className="flex flex-col w-full gap-1">
                  <p className="text-lg font-medium uppercase text-primary">
                    {item.title}
                  </p>
                  <p className="text-sm font-medium uppercase text-grayDark">
                    {formatDate(item.isoDate)}
                  </p>
                </div>

                <p
                  className="text-base text-primary font-light whitespace-pre-wrap"
                  style={{
                    maxHeight: "70px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-box-orient": "vertical",
                    "-webkit-line-clamp": "3",
                  }}
                >
                  {item.content}
                </p>
              </div>
              <Link
                className={`w-48 h-8 text-secondary  bg-blueBase self-end text-center`}
                href={item.link || "#"}
                passHref={true}
                target={"_blank"}
              >
                Prikazi vise
              </Link>
            </div>
          </div>
        ))}

      {showMoreButton && (
        <div className="w-full  flex flex-row justify-center">
          <button
            type="button"
            aria-label="expand/collapse"
            className=" w-56 h-12 bg-blueBase text-secondary uppercase font-medium text-base "
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Prikazi manje" : "Prikazi vise"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
