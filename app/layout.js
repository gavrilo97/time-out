"use client";

import "./globals.css";
import * as React from "react";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import ArrowUp from "../public/icons/arrow_up_icon.png";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () =>
        window.scrollY >= 500 ? setVisible(true) : setVisible(false)
      );
    }
  }, []);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <head />
      <body>
        {visible && (
          <button
            type="button"
            aria-label="scroll to top"
            onClick={() => handleToTop()}
            className="w-12 h-12 rounded-lg bg-blueBase border-2 border-secondary fixed right-8 bottom-8 grid place-items-center z-50"
          >
            <Image
              src={ArrowUp}
              alt="arrow up"
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
            />
          </button>
        )}
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
