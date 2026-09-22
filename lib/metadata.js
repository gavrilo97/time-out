// apsolutne adrese, jer čitači društvenih mreža ne razrešavaju relativne og:image putanje
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/+$/,
  ""
);

export const SITE_NAME = "TimeOut";

export const OG_IMAGE = {
  url: `${SITE_URL}/og.png`,
  width: 1200,
  height: 630,
  alt: "TimeOut — sportske vesti",
};

// `absolute` za početnu: šablon naslova iz layout-a ne važi za isti segment
export const buildMetadata = ({ title, description, path = "/", absolute = false }) => ({
  title: absolute ? { absolute: title } : title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: absolute ? title : `${title} · ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${path}`,
    siteName: SITE_NAME,
    locale: "sr_RS",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: absolute ? title : `${title} · ${SITE_NAME}`,
    description,
    images: [OG_IMAGE.url],
  },
});
