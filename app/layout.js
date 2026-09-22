import "./globals.css"
import { Barlow_Condensed, Manrope } from "next/font/google"
import AppHeader from "@/components/AppHeader"
import AppFooter from "@/components/AppFooter"
import ScrollToTop from "@/components/ScrollToTop"
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/metadata"

// latin-ext je obavezan za srpska slova (š, đ, č, ć, ž)
const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
})

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: {
    default: "TimeOut — Sportske vesti",
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "TimeOut — najnovije sportske vesti, analize i ekskluzivne priče iz sveta fudbala, košarke, tenisa i ostalih sportova.",
  applicationName: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "TimeOut — Sportske vesti",
    description: "Najnovije sportske vesti, analize i ekskluzivne priče.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "sr_RS",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeOut — Sportske vesti",
    description: "Najnovije sportske vesti, analize i ekskluzivne priče.",
    images: [OG_IMAGE.url],
  },
}

// od Next-a 14 themeColor i viewport idu u poseban viewport export
export const viewport = {
  themeColor: "#001e28",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      className={`${display.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
    >
      <head />
      <body className="min-h-screen flex flex-col bg-paper">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]
                     focus:bg-volt focus:text-ink focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold"
        >
          Preskoči na sadržaj
        </a>

        <AppHeader />
        <div id="sadrzaj" className="flex-1">
          {children}
        </div>
        <AppFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
