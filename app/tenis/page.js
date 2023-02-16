import * as React from "react";
import Carousel from "@/components/Carousel";
import Parser from "rss-parser";
import PayCor from "@/public/images/paycor_banner.png";
import Nlb from "@/public/images/nlb_banner.png";
import Nis from "@/public/images/nis_banner.png";
import Mercator from "@/public/images/mercator_banner.png";
import Mozzart from "@/public/images/mozzart_banner.png";
import Feed from "@/components/Feed";

const getFeed = async () => {
  let parser = new Parser();

  const data = await parser.parseURL("https://sportklub.rs/feed/");

  return data;
};

const Tenis = async () => {
  const feed = await getFeed();

  const slides = [
    {
      imageSrc: PayCor,
      imageAlt: "PayCor banner",
      href: "https://www.paycor.com/",
      name: "Paycor",
    },
    {
      imageSrc: Nlb,
      imageAlt: "Nlb banner",
      href: "https://www.nlbkb.rs/",
      name: "Nlb",
    },
    {
      imageSrc: Nis,
      imageAlt: "Nis banner",
      href: "https://www.nis.rs/",
      name: "Nis",
    },
    {
      imageSrc: Mercator,
      imageAlt: "Mercator banner",
      href: "https://www.mercator.rs/",
      name: "Mercator",
    },
    {
      imageSrc: Mozzart,
      imageAlt: "Mozzart banner",
      href: "https://www.mozzartbet.com/",
      name: "Mozzart",
    },
  ];

  const feedtenis = feed?.items?.filter(
    (item) =>
      item.categories.some((category) =>
        category.toLowerCase().includes("tenis")
      ) || item.link.toLowerCase().includes("tenis")
  );

  const featuredItem = [feedtenis.shift()];
  return (
    <main className="w-full bg-grayBase bg-white grid place-items-center py-12 gap-8">
      <div className="w-4/5">
        <Carousel slides={slides} />
      </div>
      <div className="w-4/5">
        <Feed data={featuredItem} showMoreButton={false} layout="block" />
      </div>

      <div className="w-4/5">
        <Feed data={feedtenis} />
      </div>
      <div />
    </main>
  );
};

export default Tenis;
