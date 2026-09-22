import Image from "next/image";
import Carousel from "@/components/Carousel";
import Feed, { FeedCard } from "@/components/Feed";
import SectionHeading from "@/components/SectionHeading";
import SportVision from "@/public/images/SportVisionReklama.png";
import { getFeed } from "@/lib/feed";
import { SPORTS } from "@/lib/sports";
import { slides } from "@/lib/ads";
import s from "./SportPage.module.css";

const SportPage = async ({ sport }) => {
  const { title, kicker, match } = SPORTS[sport];
  const [featured, ...rest] = match(await getFeed());

  return (
    <main className="w-full bg-paper pb-20">
      <section className="shell pt-8">
        <Carousel slides={slides} />
      </section>

      <section className="shell pt-14">
        <SectionHeading title={title} kicker={kicker} as="h1" />

        {featured ? (
          <div className={`mt-8 grid gap-6 ${s.layout}`}>
            <FeedCard item={featured} block />

            <aside className="relative min-h-[240px] w-full overflow-hidden rounded-card bg-redBase shadow-card">
              <Image
                src={SportVision}
                alt="Sport Vision"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </aside>
          </div>
        ) : null}
      </section>

      <section className="shell pt-14">
        <SectionHeading title="Sve vesti" kicker={title} />
        <div className="mt-8">
          <Feed data={rest} layout="block" />
        </div>
      </section>
    </main>
  );
};

export default SportPage;
