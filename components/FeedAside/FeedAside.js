import Image from "next/image";
import Feed from "@/components/Feed";

const FeedAside = ({ data, imageSrc, imageAlt, bgColor, title }) => (
  <section
    className="w-full overflow-hidden rounded-card shadow-card"
    style={{ backgroundColor: bgColor }}
  >
    <header className="flex items-center gap-3 border-b border-white/15 px-5 py-4">
      <Image src={imageSrc} alt={imageAlt} width={44} height={44} className="h-11 w-11 object-contain" />
      <div className="flex flex-col">
        <span className="display text-xl leading-none text-secondary">{title}</span>
        <span className="kicker mt-1 text-volt">Najnovije</span>
      </div>
    </header>

    <div className="p-4">
      <Feed data={data.slice(0, 4)} showMoreButton={false} />
    </div>
  </section>
);

export default FeedAside;
