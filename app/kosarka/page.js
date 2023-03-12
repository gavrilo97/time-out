import * as React from "react";
import Carousel from "@/components/Carousel";
import Parser from "rss-parser";
import PayCor from "@/public/images/paycor_banner.png";
import Nlb from "@/public/images/nlb_banner.png";
import Nis from "@/public/images/nis_banner.png";
import CocaCola from "@/public/images/CocaCola_banner.png";
import Heineken from "@/public/images/heineken_banner.png";
import Feed from "@/components/Feed";
import Image from "next/image";
import s from "./page.module.css";

const getFeed = async () => {
  let parser = new Parser();

  const data = await parser.parseURL("https://sportklub.rs/feed/");

  return data;
};

const Kosarka = async () => {
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
      imageSrc: Heineken,
      imageAlt: "Heineken banner",
      href: "https://www.heineken.com/rs/sr/home",
      name: "Heineken",
    },
  ];

  const feedKosarka = feed?.items?.filter(
    (item) =>
      item.categories.some((category) =>
        category.toLowerCase().includes("kosarka")
      ) || item.link.toLowerCase().includes("kosarka")
  );

  const featuredItem = [feedKosarka.shift()];

  return (
    <main className="w-full bg-grayBase bg-white grid place-items-center py-12 gap-8">
      <div className="w-11/12 sm:w-4/5">
        <Carousel slides={slides} />
      </div>

      <div className={`w-11/12 sm:w-4/5 grid gap-8 ${s.layout}`}>
        <Feed data={featuredItem} showMoreButton={false} layout="block" />
        <div className="bg-redBase w-full h-full grid place-items-center">
          <div className="relative w-4/5 h-4/5 block">
            <Image
              src={Heineken}
              alt="Promeni ovaj alt"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="w-11/12 flex justify-center sm:w-4/5">
        <Feed data={feedKosarka} />
      </div>
      <div />
    </main>
  );
};

export default Kosarka;
