import Image from "next/image";
import Link from "next/link";
import s from "./Feed.module.css";

const FeedCard = ({ item, block }) => (
  <article
    className={`group relative w-full overflow-hidden rounded-card bg-secondary shadow-card
                transition-all duration-300 ease-out hover:shadow-cardHover hover:-translate-y-1`}
  >
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`grid h-full ${block ? s.innerBlock : s.innerRow}`}
    >
      <div className={`relative overflow-hidden bg-paperDim ${s.media}`}>
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes={block ? "(max-width: 960px) 100vw, 45vw" : "(max-width: 960px) 40vw, 220px"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-navy-800">
            <span className="kicker text-volt">TimeOut</span>
          </div>
        )}
      </div>

      <div
        className={`flex flex-col items-start justify-between gap-3 ${
          block ? "p-5" : "px-4 py-3.5"
        }`}
      >
        <div className="flex flex-col gap-2">
          {item.date ? <span className="kicker text-grayDark">{item.date}</span> : null}

          <h3
            className={`clamp-3 font-semibold text-primary transition-colors duration-200 group-hover:text-navy-600 ${
              block ? "text-[1.0625rem] leading-snug" : "text-sm leading-snug"
            }`}
          >
            {item.title}
          </h3>

          {block ? (
            <p className="clamp-2 text-sm leading-relaxed text-grayDark">{item.snippet}</p>
          ) : null}
        </div>

        <span
          className={`kicker inline-flex items-center gap-1.5 text-navy-700 transition-colors duration-200 group-hover:text-navy-500 ${
            block ? "" : "text-[0.62rem]"
          }`}
        >
          Pročitaj
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
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  </article>
);

export default FeedCard;
