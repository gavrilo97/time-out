import Parser from "rss-parser";

const FEED_URL = "https://sportklub.rs/feed/";
const IMG_SRC = /src="(.*?)"/;

// vest bez slike je rušila render dok se poklapanje nije proveravalo
const extractImage = (item) => {
  const match = (item["content:encoded"] || item.content || "").match(IMG_SRC);
  return match ? match[1] : null;
};

const formatDate = (value) => {
  if (typeof value !== "string") return "";
  const [date, time] = value.split("T");
  if (!date) return "";
  return `${date.replaceAll("-", ".")}${time ? ` · ${time.substring(0, 5)}` : ""}`;
};

// rss-parser ide preko Node http modula, koji Next keš ne vidi; zato XML povlačimo
// fetch-om da bi revalidate radio i da bi svih pet strana delilo isti zahtev
export const getFeed = async () => {
  const res = await fetch(FEED_URL, {
    headers: { Accept: "application/rss+xml" },
    next: { revalidate: 600 },
  });

  const feed = await new Parser().parseString(await res.text());

  return (feed.items || []).map((item, index) => ({
    id: item.guid || item.link || String(index),
    title: item.title || "",
    link: item.link || "#",
    date: formatDate(item.isoDate),
    snippet: item.contentSnippet || "",
    image: extractImage(item),
    categories: item.categories || [],
  }));
};

export const byCategory = (items, needle) =>
  items.filter((item) =>
    item.categories.some((category) => category.toLowerCase().includes(needle))
  );

export const byCategoryOrLink = (items, needle) =>
  items.filter(
    (item) =>
      item.categories.some((category) => category.toLowerCase().includes(needle)) ||
      item.link.toLowerCase().includes(needle)
  );

export const byLink = (items, ...needles) =>
  items.filter((item) =>
    needles.some((needle) => item.link.toLowerCase().includes(needle))
  );
