import { Inter } from "@next/font/google";
import Parser from "rss-parser";
import Feed from "@/components/Feed";
import FeedAside from "@/components/FeedAside";
import PartizanLogo from "@/public/images/partizan_logo.png";
import ZvezdaLogo from "@/public/images/zvezda_logo.png";
import PayCor from "@/public/images/paycor_banner.png";
import Nlb from "@/public/images/nlb_banner.png";
import Nis from "@/public/images/nis_banner.png";
import CocaCola from "@/public/images/CocaCola_banner.png";
import BurgerKing from "@/public/images/burgerking_banner.png";
import Carousel from "@/components/Carousel";
import s from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const getFeed = async () => {
  let parser = new Parser();

  const data = await parser.parseURL("https://sportklub.rs/feed/");

  return data;
};

export default async function Home() {
  const feed = await getFeed();

  const feedPartizanFiltered = feed?.items?.filter((item) =>
    item.categories.some((category) =>
      category.toLowerCase().includes("partizan")
    )
  );

  const feedZvezdaFiltered = feed?.items?.filter((item) =>
    item.categories.some((category) =>
      category.toLowerCase().includes("zvezda")
    )
  );

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

  return (
    <main className="w-full bg-grayBase bg-white grid place-items-center py-12 gap-8">
      <div className="w-11/12 md:w-4/5">
        <Carousel slides={slides} />
      </div>
      <div className={`w-full md:w-4/5 grid ${s.feedContainer} gap-8 md:gap-0`}>
        <Feed data={feed?.items || []} layout={"block"} limit={10} />

        <div className="w-11/12 md:w-full max-md:place-self-center flex flex-col gap-8">
          <FeedAside
            data={feedPartizanFiltered}
            bgColor={"#333"}
            imageSrc={PartizanLogo}
            imageAlt={"Partizan Grb"}
          />
          <FeedAside
            data={feedZvezdaFiltered}
            bgColor={"#e53935"}
            imageSrc={ZvezdaLogo}
            imageAlt={"Zvezda Grb"}
          />
        </div>
      </div>
    </main>
  );
}
