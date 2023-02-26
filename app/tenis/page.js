import * as React from "react";
import Carousel from "@/components/Carousel";
import Parser from "rss-parser";
import PayCor from "@/public/images/paycor_banner.png";
import Nlb from "@/public/images/nlb_banner.png";
import Nis from "@/public/images/nis_banner.png";
import CocaCola from "@/public/images/CocaCola_banner.png";
import BurgerKing from "@/public/images/burgerking_banner.png";
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
      imageSrc: CocaCola,
      imageAlt: "Coca-Cola banner",
      href: "https://www.coca-cola.rs/",
      name: "Coca-cola",
    },
    {
      imageSrc: BurgerKing,
      imageAlt: "Burger King banner",
      href: "https://www.bk.com/",
      name: "Burger King",
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
