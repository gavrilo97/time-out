import Feed from "@/components/Feed";
import FeedAside from "@/components/FeedAside";
import Carousel from "@/components/Carousel";
import SectionHeading from "@/components/SectionHeading";
import PartizanLogo from "@/public/images/partizan_logo.png";
import ZvezdaLogo from "@/public/images/zvezda_logo.png";
import { getFeed, byCategory } from "@/lib/feed";
import { slides } from "@/lib/ads";
import s from "./page.module.css";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Najnovije vesti",
  description:
    "Najnovije sportske vesti, analize i ekskluzivne priče iz sveta fudbala, košarke, tenisa i ostalih sportova.",
  path: "/",
});

export default async function Home() {
  const items = await getFeed();

  return (
    <main className="w-full bg-paper pb-20">
      <section className="shell pt-8">
        <Carousel slides={slides} />
      </section>

      <section className="shell pt-14">
        <SectionHeading title="Najnovije vesti" kicker="Uživo iz sveta sporta" as="h1" />

        <div className={`mt-8 grid gap-10 ${s.feedContainer}`}>
          <Feed data={items} layout="block" limit={10} />

          <aside className={`flex flex-col gap-6 ${s.aside}`}>
            <FeedAside
              data={byCategory(items, "partizan")}
              title="Partizan"
              bgColor="#1c1c1e"
              imageSrc={PartizanLogo}
              imageAlt="Grb Partizana"
            />
            <FeedAside
              data={byCategory(items, "zvezda")}
              title="Crvena zvezda"
              bgColor="#c62828"
              imageSrc={ZvezdaLogo}
              imageAlt="Grb Crvene zvezde"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}
